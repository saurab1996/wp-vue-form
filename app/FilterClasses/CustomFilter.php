<?php
/**
 * Filters class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\FilterClasses;

use WPVueForm\BaseClasses\Init;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

/**
 * Class CustomFilter
 *
 * Filters for encounter body chart data.
 */
class CustomFilter extends Init {

    /**
     * Constructor function to initialize the class.
     */
    public function __construct(){

        // Add action to call 'wp_vue_form_add_permission' function when a plugin is activated
        add_action( 'activated_plugin', 'wp_vue_form_add_permission' );

        // Add action to modify the main query for 'wp_vue_form' and 'wp_vue_form_entry' post types
        add_action('pre_get_posts', array( $this, 'pre_query_wp_vue_form' ), PHP_INT_MAX);
    }

    /**
     * Pre-query modification function for 'wp_vue_form' and 'wp_vue_form_entry' post types.
     *
     * @param WP_Query $query The WordPress Query object.
     * 
     * @return void
     */
    public function pre_query_wp_vue_form($query) :void {

        // Check if the current user is an administrator
        if( in_array( 'administrator', self::$current_user_data->roles, true)){
            return;
        }

        // Modify the query for 'wp_vue_form' post type
        if( $query->get('post_type') === 'wp_vue_form' ){
            // If it's the main query, return early
            if( $query->is_main_query() ){
                return;
            }
            // Get only posts list where post have child post and child post author is current login
            $include_post = wp_vue_form_get_user_form( self::$current_user_data );
            $include_post = !empty( $include_post ) ? $include_post : array( -1 );
            $query->set( 'post__in', $include_post );
        }

        // Modify the query for 'wp_vue_form_entry' post type
        if( $query->get('post_type') === 'wp_vue_form_entry' ){
            // Get only posts where the author is the current user
            $query->set( 'author', self::$current_user_data->ID );
        }
    }
}
