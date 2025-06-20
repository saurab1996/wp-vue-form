<?php
/**
 * WP vue form helper file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 */

use WPVueForm\BaseClasses\Init;

/**
 * Recursively sanitize an array of data.
 *
 * @param array $data The data to sanitize.
 * @return array The sanitized data.
 */
function wp_vue_form_recursive_sanitize_array( array $data ): array {
	$sanitize_data = array();

	foreach ( $data as $key => $value ) {
		if ( empty( $value ) ) {
			// If the value is an empty string, set it to ''.
			$sanitize_data[ $key ] = '';
		} elseif ( is_array( $value ) ) {
			// If the value is an array, recursively sanitize each element.
			$sanitize_data[ $key ] = wp_vue_form_recursive_sanitize_array( $value );
		} elseif ( is_object( $value ) ) {
			// If the value is an object, leave it as is.
			$sanitize_data[ $key ] = wp_vue_form_recursive_sanitize_object( $value );
		} elseif ( preg_match( '/<[^<]+>/', $value, $m ) !== 0 ) {
			// If the value contains HTML tags, leave it as is.
			$sanitize_data[ $key ] = wp_kses_post( $value );
		} elseif ( strpos( strtolower( $key ), 'email' ) !== false ) {
			// If the key contains 'email', sanitize the value as an email.
			$sanitize_data[ $key ] = sanitize_email( $value );
		} elseif ( strpos( strtolower( $key ), '_wp_vue_form_nonce' ) !== false ) {
			// If the key contains '_wp_vue_form_nonce', sanitize the value as a key.
			$sanitize_data[ $key ] = sanitize_key( $value );
		} else {
			// Otherwise, sanitize the value as a text field.
			$sanitize_data[ $key ] = sanitize_text_field( $value );
		}
	}

	return $sanitize_data;
}


/**
 * Recursively sanitize an object.
 *
 * @param object $data The object to sanitize.
 * @return object The sanitized object.
 */
function wp_vue_form_recursive_sanitize_object( object $data ): object {
	// Initialize a new stdClass object to hold sanitized data.
	$sanitized_object = new stdClass();

	// Iterate through each property of the object.
	foreach ( $data as $key => $value ) {
		if ( empty( $value ) ) {
			$sanitized_object->{$key} = '';
		} elseif ( is_object( $value ) ) {// Check if the value is another object.
			// Recursively sanitize the nested object.
			$sanitized_object->{$key} = wp_vue_form_recursive_sanitize_object( $value );
		} elseif ( is_array( $value ) ) {
			// Sanitize string data.
			$sanitized_object->{$key} = wp_vue_form_recursive_sanitize_array( $value );
		} elseif ( preg_match( '/<[^<]+>/', $value, $m ) !== 0 ) {
			// If the value contains HTML tags, leave it as is.
			$sanitized_object->{$key} = wp_kses_post( $value );
		} else {
			// For other types of data, keep them as is.
			$sanitized_object->{$key} = sanitize_text_field( $value );
		}
	}

	return $sanitized_object;
}


/**
 * Adds permissions (capabilities) to the allowed roles defined in the WP Vue Form plugin.
 *
 * @return void
 */
function wp_vue_form_add_permission(): void {
	// Retrieve allowed roles with their respective capabilities.
	$allow_roles_capabilities = wp_vue_form_allow_roles_capabilities();

	// Loop through allowed roles and their capabilities.
	foreach ( $allow_roles_capabilities as $role => $capabilities ) {
		// Get role object by role name.
		$role_data = get_role( $role );

		// If role object doesn't exist, skip to the next role.
		if ( empty( $role_data ) ) {
			continue;
		}

		// Assign each capability to the role.
		foreach ( $capabilities as $cap ) {
			$role_data->add_cap( $cap, 1 );
		}
	}
}

/**
 * Retrieves allowed user roles for WP Vue Form plugin.
 *
 * @return array Array of allowed user roles.
 */
function wp_vue_form_allow_roles(): array {
	global $wp_roles;
	$allow_roles = array();
	if ( ! empty( $wp_roles->roles ) ) {
		$editable_roles = apply_filters( 'editable_roles', $wp_roles->roles );
		if ( is_array( $editable_roles ) ) {
			$allow_roles = array_keys( $editable_roles );
		}
	}
	// Retrieve allowed roles from options or use default values.
	$allow_roles = get_option( WP_VUE_FORM_PREFIX . 'allow_roles', $allow_roles );
	// Apply filters to modify allowed roles, if needed.
	$allow_roles = apply_filters( WP_VUE_FORM_PREFIX . 'allow_roles', $allow_roles );
	return $allow_roles;
}


/**
 * Retrieves allowed capabilities for specified user roles.
 *
 * @return array Associative array where keys are user roles and values are arrays of capabilities.
 */
function wp_vue_form_allow_roles_capabilities(): array {
	$allow_roles              = wp_vue_form_allow_roles();
	$allow_roles_capabilities = array();
	// Define default capabilities for other roles.
	$default_capabilities = array(
		'wp_vue_form_list',
		'wp_vue_form_save',
		'wp_vue_form_entry_list',
		'wp_vue_form_entry_save',
		'wp_vue_form_entry_edit',
		'wp_vue_form_entry_update',
		'wp_vue_form_entry_delete',
	);

	// Define capabilities for administrator role.
	$admin_capabilities = array_merge(
		array(
			'wp_vue_form_edit',
			'wp_vue_form_update',
			'wp_vue_form_delete',
		),
		$default_capabilities
	);

	// Populate allowed roles with their respective capabilities.
	foreach ( $allow_roles as $role ) {
		$allow_roles_capabilities[ $role ] = 'administrator' === $role ? $admin_capabilities : $default_capabilities;
	}

	// Retrieve saved capabilities from options or use defaults.
	$default_all_role_capabilities = $allow_roles_capabilities;
	$allow_roles_capabilities      = get_option( WP_VUE_FORM_PREFIX . 'allow_roles_capabilities', $default_all_role_capabilities );
	$allow_roles_capabilities      = apply_filters( WP_VUE_FORM_PREFIX . 'allow_roles_capabilities', $allow_roles_capabilities );

	// Merge default and saved capabilities, ensuring all roles have at least default capabilities.
	foreach ( $default_all_role_capabilities as $role => $capabilities ) {
		if ( ! isset( $allow_roles_capabilities[ $role ] ) || ! is_array( $allow_roles_capabilities[ $role ] ) ) {
			$allow_roles_capabilities[ $role ] = $capabilities;
		}
	}

	return $allow_roles_capabilities;
}


/**
 * Retrieves the current user's ID.
 *
 * @return int The current user's ID.
 */
function wp_vue_form_get_current_user_id(): int {
	$current_user_id = get_current_user_id();
	return ! empty( $current_user_id ) ? (int) $current_user_id : -1;
}
/**
 * Retrieves data for the current user.
 *
 * @return WP_User|object User data for the current user.
 */
function wp_vue_form_get_current_user_data() {
	// Get the current user's ID.
	$user_id = wp_vue_form_get_current_user_id();
	// Define default user data.
	$default_user_data        = new stdClass();
	$default_user_data->data  = array();
	$default_user_data->roles = array();
	$default_user_data->roles = array();
	$default_user_data->ID    = $user_id;
	// Return default user data if user ID is empty or invalid.
	if ( empty( $user_id ) || $user_id < 1 ) {
		return $default_user_data;
	}

	// Get user data for the current user.
	$user_data = new WP_User( $user_id );

	// Return default user data if user data is empty.
	if ( empty( $user_data->data ) ) {
		return $default_user_data;
	}

	// Set user ID and remove sensitive user data.
	$user_data->ID = $user_id; // Use $user_data->ID instead of $user_data->id.
	unset( $user_data->data->user_pass );

	return $user_data;
}


/**
 * [Description for wp_vue_form_get_user_form].
 *
 * @param object|WP_User $current_user_data Current user data.
 *
 * @return array
 */
function wp_vue_form_get_user_form( $current_user_data ): array {
	$query = Init::$db->prepare(
		"SELECT p.ID
		FROM %i p
		INNER JOIN %i c ON c.post_parent = p.ID
			AND c.post_type = 'wp_vue_form_entry'
			AND c.post_author = %d
			AND c.post_status = 'publish'
		WHERE p.post_type = 'wp_vue_form'
			AND p.post_status = 'publish'",
		Init::$db->posts,
		Init::$db->posts,
		$current_user_data->ID
	);

	return Init::$db->get_col( $query );
}


/**
 * [Description for wp_vue_form_script_url].
 *
 * @param string $file File name.
 *
 * @return string
 */
function wp_vue_form_script_url( $file ): string {
	return WP_VUE_FORM_DIR_URI . "/assets/{$file}";
}

/**
 * [Description for wp_vue_form_add_type_attribute].
 *
 * @param array|null $attributes Script attributes.
 *
 * @return array|null
 */
function wp_vue_form_add_type_attribute( $attributes ): array|null {

	// Only do this for a specific script.
	if ( isset( $attributes['id'] ) && in_array( $attributes['id'], array( 'wp-vue-form-admin-js', 'wp-vue-form-frontend-js' ), true ) ) {
		$attributes['type'] = 'module';
	}

	return $attributes;
}


/**
 * Pass data script.
 *
 * @param int $script_id Enqueue script id.
 *
 * @return void
 */
function wp_vue_form_add_localize_script( $script_id ): void {

	wp_localize_script(
		$script_id,
		'wp_vue_from_localize',
		array(
			'api_base_url' => esc_url_raw( rest_url() . 'wpvueform/v1' ),
			'nonce'        => wp_create_nonce( 'wp_rest' ),
		)
	);
}

/**
 * Get form shortcode loader.
 *
 * @param int $form_id The namespace of the classes to be loaded.
 *
 * @return string
 */
function wp_vue_form_loader_element( $form_id ): string {
	$loader_html = "<div  class='vl-overlay' >
						<div class='vl-icon'>
							<svg viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'>
								<g fill='none' fill-rule='evenodd'>
									<g transform='translate(1 1)' stroke-width='2'>
										<circle stroke-opacity='.25' cx='18' cy='18' r='18'></circle>
										<path d='M36 18c0-9.94-8.06-18-18-18'>
											<animateTransform attributeName='transform' 
												type='rotate' from='0 18 18' to='360 18 18' dur='0.8s' repeatCount='indefinite'>
											</animateTransform>
										</path>
									</g>
								</g>
							</svg>
						</div>
					</div>";

	return apply_filters( 'wp_vue_form_builder_loader', $loader_html, $form_id );
}

/**
 * [Description for wp_vue_form_loader_allowed_tags].
 *
 * @return array
 */
function wp_vue_form_loader_allowed_tags(): array {

	$allowed_loader_tags = array(
		'div'              => array(
			'class' => true,
		),
		'svg'              => array(
			'viewbox' => true,
			'xmlns'   => true,
		),
		'g'                => array(
			'fill'         => true,
			'fill-rule'    => true,
			'transform'    => true,
			'stroke-width' => true,
		),
		'circle'           => array(
			'stroke-opacity' => true,
			'cx'             => true,
			'cy'             => true,
			'r'              => true,
		),
		'path'             => array(
			'd'      => true,
			'stroke' => true,
		),
		'animatetransform' => array(
			'attributename' => true,
			'type'          => true,
			'from'          => true,
			'to'            => true,
			'dur'           => true,
			'repeatcount'   => true,
		),
	);

	return apply_filters( 'wp_vue_form_builder_loader_allowed_tags', $allowed_loader_tags );
}


/**
 * [Description for wp_vue_form_elements_and_style]
 *
 * @param int $id Form id.
 *
 * @return array
 */
function wp_vue_form_elements_and_style( $id ): array {
	require_once WP_VUE_FORM_DIR . "assets/form-sample-data/{$id}.php";
	return array(
		'form_elements' => $elements,
		'style'         => $style,
	);
}

/**
 * Get the corresponding status text based on the input status.
 *
 * @param string $status The input status to retrieve the corresponding text for.
 * @return string The corresponding status text, or the input status itself if not found in the mapping.
 */
function wp_vue_form_status_text( $status ): string {
	// Default mapping of input statuses to corresponding output statuses.
	$status_mapping = array(
		'publish' => __( 'Publish', 'wp-vue-form' ),
		'draft'   => __( 'Draft', 'wp-vue-form' ),
		'trash'   => __( 'Trash', 'wp-vue-form' ),
		'future'  => __( 'Future', 'wp-vue-form' ),
		'expiry'  => __( 'Expiry', 'wp-vue-form' ),
	);

	// Allow developers to modify the status mapping using a filter hook.
	$status_mapping = apply_filters( WP_VUE_FORM_PREFIX . '_status_mapping', $status_mapping );

	// Check if the input status exists in the mapping array
	// If found, return the corresponding output status, otherwise return the input status itself.
	return isset( $status_mapping[ $status ] ) ? $status_mapping[ $status ] : $status;
}

/**
 * Get the severity of a status.
 *
 * @param string $status The status.
 * @return string The severity of the status, one of  'success', 'info', 'warning', 'danger', or 'contrast'.
 */
function wp_vue_form_status_severity( $status ): string {

	$severity_mapping = array(
		'publish' => 'primary',
		'pending' => 'info',
		'future'  => 'info',
		'draft'   => 'warning',
		'trash'   => 'danger',
		'expiry'  => 'contrast',
	);

	// Allow developers to modify the status mapping using a filter hook.
	$severity_mapping = apply_filters( WP_VUE_FORM_PREFIX . '_status_severity_mapping', $severity_mapping );

	// Check if the input status exists in the mapping array
	// If found, return the corresponding output status severity, otherwise return the default severity.
	return isset( $severity_mapping[ $status ] ) ? $severity_mapping[ $status ] : 'primary';
}


/**
 * Convert a date to the site's configured date format.
 *
 * @param string $post_date The post date to be converted.
 * @return string The formatted date according to the site's configured date format,
 *               or the original post date if conversion fails.
 */
function wp_vue_form_format_date( $post_date ): string {
	// Convert the post date string to a UNIX timestamp.
	$timestamp = strtotime( $post_date );

	// If the conversion fails, return the original post date.
	if ( $timestamp ) {
		return $post_date;
	}
	// If the conversion succeeds, format the timestamp using the site's configured date format.
	// Get the site's configured date format.
	$date_format = get_option( 'date_format' );

	// Convert the timestamp to the configured date format.
	$formatted_date = date_i18n( $date_format, $timestamp );

	return $formatted_date;
}


/**
 * Retrieve all post statuses for the WP Vue Form custom post type.
 *
 * @return array An associative array of post statuses where the key is the status slug and the value is an array containing the label and value of the status.
 */
function wp_vue_form_all_status(): array {
	// Check if the data is already cached.
	$cached_statuses = wp_cache_get( 'post_statuses', WP_VUE_FORM_PREFIX );
	if ( false !== $cached_statuses ) {
		// Return cached data if available.
		return $cached_statuses;
	}

	// Initialize an empty array to store post statuses.
	$status = array();

	// Get all default post statuses.
	$default_statuses = get_post_statuses();

	// Loop through default post statuses.
	foreach ( $default_statuses as $name => $label ) {
		// Add default post status to the status array.
		$status[ $name ] = array(
			'label'    => $label,
			'value'    => $name,
			'severity' => wp_vue_form_status_severity( $name ),
		);
	}

	// Get custom post statuses for the specified post type.
	$post_statuses = get_post_stati( array( 'post_type' => WP_VUE_FORM_POST_TYPE ), 'objects' );

	// Loop through custom post statuses.
	foreach ( $post_statuses as $name => $value ) {
		// Add custom post status to the status array.
		$status[ $name ] = array(
			'label'    => $value->label,
			'value'    => $name,
			'severity' => wp_vue_form_status_severity( $name ),
		);
	}

	// Cache the data for future use.
	wp_cache_set( 'post_statuses', $status, WP_VUE_FORM_PREFIX );

	// Return the array of post statuses.
	return $status;
}
