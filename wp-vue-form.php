<?php
/**
 * Plugin Name: WP-Vue form
 * Plugin URI: https://iqonic.design
 * Description: WordPress vue form plugin.
 * Version: 1.0.0
 * Author: saurab
 * Text Domain: wp-vue-form
 * Domain Path: /languages
 * Author URI: #
 *
 * @package WP_Vue_Form
 **/

use WPVueForm\BaseClasses\Init;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

// Require once the Composer Autoload.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
} else {
	die( 'Something went wrong' );
}

if ( ! defined( 'WP_VUE_FORM_DIR' ) ) {
	define( 'WP_VUE_FORM_DIR', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'WP_VUE_FORM_BASE_NAME' ) ) {
	define( 'WP_VUE_FORM_BASE_NAME', plugin_basename( __FILE__ ) );
}

if ( ! defined( 'WP_VUE_FORM_DIR_URI' ) ) {
	define( 'WP_VUE_FORM_DIR_URI', plugin_dir_url( __FILE__ ) );
}


if ( ! defined( 'WP_VUE_FORM_PREFIX' ) ) {
	define( 'WP_VUE_FORM_PREFIX', 'wp_vue_form_' );
}

if ( ! defined( 'WP_VUE_FORM_VERSION' ) ) {
	define( 'WP_VUE_FORM_VERSION', '1.0.0' );
}

if ( ! defined( 'WP_VUE_FORM_POST_TYPE' ) ) {
	define( 'WP_VUE_FORM_POST_TYPE', 'wp-vue-form' );
}


// activate plugin.
register_activation_hook( __FILE__, array( Init::class, 'activate' ) );
// call Init class.
Init::load_plugin();
