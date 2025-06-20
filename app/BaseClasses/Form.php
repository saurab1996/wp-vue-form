<?php
/**
 * Form class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

defined( 'ABSPATH' ) || die( 'Something went wrong' );
/**
 * Class Form
 *
 * Form plugin
 */
class Form {


	public function __construct() {

		add_action( 'init', array( $this, 'register_post_type' ) );
	}

	public function register_post_type() {
		register_post_type(
			WP_VUE_FORM_POST_TYPE,
			array(
				'taxonomies'          => array(), // post related taxonomies
				'label'               => __( 'WP Vue Form', 'wp-vue-form' ),
				'labels'              => array(
					'name'              => __( 'WP Vue Forms', 'wp-vue-form' ),
					'singular_name'     => __( 'WP Vue Form', 'wp-vue-form' ),
					'add_new'           => __( 'Add WP Vue Form', 'wp-vue-form' ),
					'add_new_item'      => __( 'Adding WP Vue Form', 'wp-vue-form' ),
					'edit_item'         => __( 'Edit WP Vue Form', 'wp-vue-form' ),
					'new_item'          => __( 'New WP Vue Form', 'wp-vue-form' ),
					'view_item'         => __( 'See WP Vue Form', 'wp-vue-form' ),
					'search_items'      => __( 'Search WP Vue Form', 'wp-vue-form' ),
					'not_found'         => __( 'Not Found', 'wp-vue-form' ),
					'parent_item_colon' => '',
					'menu_name'         => __( 'WP Vue Form', 'wp-vue-form' ),
				),
				'description'         => 'WP Vue form builder forms',
				'public'              => true,
				'publicly_queryable'  => true,
				'exclude_from_search' => false, // Include in search results
				'show_ui'             => true,
				'show_in_nav_menus'   => true,
				'show_in_menu'        => true,
				'show_in_admin_bar'   => true,
				'show_in_rest'        => false,
				'rest_base'           => false,
				'menu_position'       => null,
				'menu_icon'           => null,
				'capability_type'     => 'post',
				'hierarchical'        => false,
				'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields' ), // Add support for necessary features
				'rewrite'             => array(
					'slug'       => 'wp-vue-form',
					'with_front' => false,
				),
				'has_archive'         => false,
				'query_var'           => true,
			)
		);
		$custom_post_status = array(
			'future' => array(
				'label'       => __( 'Future', 'wp-vue-form' ),
				'label_count' => _n_noop( 'Future <span class="count">(%s)</span>', 'Future <span class="count">(%s)</span>' ),
			),
			'expiry' => array(
				'label'       => __( 'Expiry', 'wp-vue-form' ),
				'label_count' => _n_noop( 'Expiry <span class="count">(%s)</span>', 'Expiry <span class="count">(%s)</span>' ),
			),
		);
		foreach ( $custom_post_status as $key => $value ) {
			$this->register_custom_post_status( $key, $value );
		}
	}

	public function register_custom_post_status( $name, $options ) {
		$defaults = array(
			'public'                    => false,
			'exclude_from_search'       => false,
			'show_in_admin_all_list'    => true,
			'show_in_admin_status_list' => true,
			'internal'                  => true,
			'post_type'                 => WP_VUE_FORM_POST_TYPE,
		);

		// Merge user-provided options with defaults
		$options = wp_parse_args( $options, $defaults );

		// Register the custom post status
		register_post_status( $name, $options );
	}
}
