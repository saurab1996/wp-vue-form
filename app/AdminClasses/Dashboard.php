<?php
/**
 * Admin dashboard class file.
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\AdminClasses;
use WPVueForm\BaseClasses\Init;

defined( 'ABSPATH' ) || die( 'Something went wrong' );


/**
 * Class representing the Dashboard functionality.
 */
class Dashboard extends Init {
	/**
	 * Constructor method for initializing the Dashboard.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_filter( 'admin_url', array( self::class, 'update_menu_page_url' ), 9999, 4 );
		add_action( 'admin_head', array( self::class,'update_dashboard_menu_link') );
		$request_data = wp_vue_form_recursive_sanitize_array( $_GET );
		if ( ! empty( $request_data['page'] ) && in_array( $request_data['page'], array('vue-form-builder')) ) {
			add_filter( 'show_admin_bar' , '__return_false',PHP_INT_MAX );
			add_action( 'admin_init', array( $this, 'remove_notice' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'remove_scripts' ), PHP_INT_MAX );
			add_action( 'admin_head', array( $this, 'hide_sidebar' ) );
		}
	}


	public static function update_dashboard_menu_link(){
		?>
		<script type="text/javascript">
            jQuery(document).ready( function($) {
                jQuery(document).find('a[href="admin.php?page=vue-form-builder"]').attr('href','vue-form-builder/');
            });
        </script>
		<?php
	}

	public static function update_menu_page_url( $url, $path, $blog_id, $scheme ) {
		
		if( empty($url)){
			return $url;
		}

		return str_replace( array('admin.php?page=vue-form-builder'), 'vue-form-builder/', $url );

	}

	/**
	 * Function to remove admin sidebar.
	 *
	 * @return void
	 */
	public function hide_sidebar(){
		?>
		<style type="text/css">
			#wpcontent, #footer { margin-left: 0px !important;padding-left: 0px !important; }
			html.wp-toolbar { padding-top: 0px !important; }
			#adminmenuback, #adminmenuwrap, #wpfooter,#adminmenumain, #screen-meta { display: none !important; }
			#wpcontent .notice {
             display:none;
            }
			#wpbody-content{
				margin-top: 2rem ;
				padding-bottom:0 !important;
			} 
			.p-4{
				padding: 1rem;
			}
		</style>
		<?php
	}

	/**
	 * Function to remove notices from the dashboard.
	 *
	 * @return void
	 */
	public function remove_notice(): void {
		$this->check_dashboard_permission();
		self::disable_emojis();
		// Remove WordPress notice and error message from the dashboard.
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'all_admin_notices' );
		remove_menu_page( 'index.php' );
	}

	/**
	 * Function to check dashboard permission.
	 *
	 * @return void
	 */
	public function check_dashboard_permission(): void {
		$allow_roles           = wp_vue_form_allow_roles();
		if ( ! array_intersect( $allow_roles, self::$current_user_data->roles ) ) {
			wp_safe_redirect( admin_url( 'admin.php?page=admin_page_access_denied' ) );
			die;
		}
	}

	/**
	 * Function to add the dashboard menu.
	 *
	 * @return void
	 */
	public function admin_menu(): void {
		add_menu_page(
			'WP Vue form',
			'WP Vue form',
			'publish_pages',
			'vue-form-builder',
			array( $this, 'dashboard_view' ),
			'dashicons-forms'
		);

	}

	/**
	 * Function to render the dashboard view.
	 *
	 * @return void
	 */
	public function dashboard_view(): void {
		?>
		<div id="wpVueFormDashboard"></div>
		<?php
	}

	/**
	 * Function to remove scripts from the dashboard.
	 *
	 * @return void
	 */
	public function remove_scripts(): void {
		global $wp_scripts, $wp_styles;
		// Loop through the registered scripts.
		foreach ( $wp_scripts->registered as $handle => $script ) {
			// Check if the script was registered by another plugin or the theme.
			if ( ( isset( $script->src ) && strpos( $script->src, '/plugins/' ) !== false ) ||
				( isset( $script->src ) && strpos( $script->src, '/themes/' ) !== false ) ) {
				wp_deregister_script( $handle );
				wp_dequeue_script( $handle );
			}
		}

		// Loop through the registered styles.
		foreach ( $wp_styles->registered as $handle => $style ) {
			// Check if the style was registered by another plugin or the theme.
			if ( ( isset( $style->src ) && strpos( $style->src, '/plugins/' ) !== false ) ||
				( isset( $style->src ) && strpos( $style->src, '/themes/' ) !== false ) ) {
				wp_deregister_style( $handle );
				wp_dequeue_style( $handle );
			}
		}
		wp_deregister_style('wp-admin');
		wp_deregister_script( 'wp-i18n' );
		$this->enqueue_scripts();
	}

	/**
	 * Function to enqueue scripts.
	 *
	 * @return void
	 */
	public function enqueue_scripts(): void {
		wp_enqueue_script( 'wp-vue-form-admin', wp_vue_form_script_url('admin/js/index.js'), array(), WP_VUE_FORM_VERSION, true );
		wp_enqueue_style( 'wp-vue-form-admin', wp_vue_form_script_url('admin/css/index.css') );
		wp_vue_form_add_localize_script('wp-vue-form-admin');
	}

	public static function disable_emojis() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );	
	}
}

