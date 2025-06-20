<?php
/**
 * Init class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

use WPVueForm\AdminClasses\Dashboard;
use WPVueForm\BaseClasses\RouteHandler;
use WPVueForm\FilterClasses\CustomFilter;

defined( 'ABSPATH' ) || die( 'Something went wrong' );
/**
 * Class Init
 *
 * Init plugin
 */
class Init {

	/**
	 * Database connection.
	 *
	 * @var object|null The database connection object.
	 */
	public static $db;

	/**
	 * Current user daat.
	 *
	 * @var object|WP_User The Current user daat.
	 */
	public static $current_user_data;

	/**
	 * Establishes a database connection, prioritizing an external database if available.
	 *
	 * @return void
	 */
	protected static function make_db_connection(): void {
		$external_db_enable = self::make_external_db_connection();
		if ( $external_db_enable ) {
			self::$db = $external_db_enable;
		} else {
			global $wpdb;
			self::$db = $wpdb;
		}
	}

	/**
	 * Attempts to establish a connection with an external database.
	 *
	 * @return mixed Returns the external database connection if successful, otherwise returns false.
	 */
	protected function make_external_db_connection() {
		return false;
	}


	/**
	 * Initializes the Init class.
	 *
	 * This method is called when the class is initialized.
	 * Add any initialization code here.
	 */
	public static function load_plugin() {
		global $wpdb;
		Init::$db = $wpdb;
		add_filter( 'wp_script_attributes', 'wp_vue_form_add_type_attribute', 10, 1 ); 
		add_action( 'plugins_loaded', array( self::class, 'plugin_loaded' ) );
	}

	/**
	 * Call when plugin activate.
	 */
	public static function activate() {
		// include all databases file.
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		self::load_classes( 'App/TableClasses/', 'WPVueForm\\TableClasses\\' );
		wp_vue_form_add_permission();
		self::custom_rewrite_rules();
	}


	public static function custom_rewrite_rules(){
		add_rewrite_rule('^wp-admin/vue-form-builder/?$', 'wp-admin/admin.php?page=vue-form-builder', 'top');
		flush_rewrite_rules();
	}


	/**
	 * Load plugin pot language file.
	 */
	public static function plugin_loaded() {
		Init::$current_user_data = wp_vue_form_get_current_user_data();
		// Hook the register_route method to wp_rest_init action.
		add_action( 'rest_api_init', array( ( new RouteHandler() ), 'register_route' ) );
		// translate language.
		load_plugin_textdomain( 'wp-vue-form', false, dirname( WP_VUE_FORM_BASE_NAME ) . '/languages' );
		// Load all required files.
		( new CustomFilter() );
		//register posttype.
		( new Form() );
		( new CustomFilter() );
		( new Shortcode() );
		if ( is_admin() ) {
			( new Dashboard() );
		}
	}


	/**
	 * Load classes from the specified file path with the given namespace.
	 *
	 * @param string $file_path      The path to the file containing the classes.
	 * @param string $class_namespace The namespace of the classes to be loaded.
	 *
	 * @return void
	 */
	public static function load_classes( $file_path, $class_namespace ) {
		// Filter class directory path.
		$folder_path = WP_VUE_FORM_DIR . $file_path;
		// Get all files from the filter class folder.
		$files = scandir( $folder_path );
		// Check if there are files.
		if ( false !== $files ) {
			// Iterate through the files.
			foreach ( $files as $file ) {
				if ( in_array( $file, array( '.', '..' ), true ) ) {
					continue;
				}
				// Extract class name from file name.
				$class_name = pathinfo( $file, PATHINFO_FILENAME );
				// Build the full class name.
				$full_class_name = $class_namespace . $class_name;
				// Check if the class exists before trying to instantiate it.
				if ( class_exists( $full_class_name ) ) {
					// Instantiate the class.
					( new $full_class_name() );
				}
			}
		}
	}
}
