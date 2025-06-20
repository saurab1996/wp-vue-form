<?php
/**
 * Route class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

use WPVueForm\BaseClasses\Init;
use WP_REST_Server;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

/**
 * Class Route
 *
 * Init plugin
 */
class Route extends Init {


	/**
	 * Retrieve the routes data.
	 *
	 * @return array An array containing all routes data.
	 */
	public function route_lists(): array {

		$guest_form_submission_allow = true;

		$routes = array(
			'setting/'    => array(
				'get'    => array(
					'endpoint'   => '',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'AdminController@get_setting',
					'permission' => isset( self::$current_user_data->capabilities->administrator )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_setting,
				),
				'update' => array(
					'endpoint'   => 'update/',
					'method'     => WP_REST_Server::CREATABLE,
					'action'     => 'AdminController@update_setting',
					'permission' => isset( self::$current_user_data->capabilities->administrator )
						&& true === (bool) self::$current_user_data->capabilities->administrator,
				),
			),
			'forms/'       => array(
				'list'   => array(
					'endpoint'   => '',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'FormController@index',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_list )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_list,
				),
				'save'   => array(
					'endpoint'   => '',
					'method'     => WP_REST_Server::CREATABLE,
					'action'     => 'FormController@save',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_save )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_save,
				),
				'edit'   => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'FormController@edit',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_edit )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_edit,
				),
				'update' => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::EDITABLE,
					'action'     => 'FormController@update',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_update )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_update,
				),
				'delete' => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::DELETABLE,
					'action'     => 'FormController@delete',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_delete )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_delete,
				),
				'column'   => array(
					'endpoint'   => 'column/',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'FormController@column',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_list )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_list,
				),
			),
			'forms/submissions/' => array(
				'list'   => array(
					'endpoint'   => '(?P<form_id>\d+)',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'FormSubmissionsController@index',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_entry_list )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_entry_list,
				),
				'save'   => array(
					'endpoint'   => '(?P<form_id>\d+)',
					'method'     => WP_REST_Server::CREATABLE,
					'action'     => 'FormSubmissionsController@save',
					'permission' => $guest_form_submission_allow ? true :
						( isset( self::$current_user_data->ID ) && self::$current_user_data->ID > 0 ),
				),
				'edit'   => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::READABLE,
					'action'     => 'FormSubmissionsController@edit',
					'permission' => isset( self::$current_user_data->ID )
					&& self::$current_user_data->ID > 0,
				),
				'update' => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::EDITABLE,
					'action'     => 'FormSubmissionsController@update',
					'permission' => isset( self::$current_user_data->ID )
						&& self::$current_user_data->ID > 0,
				),
				'delete' => array(
					'endpoint'   => '(?P<id>\d+)',
					'method'     => WP_REST_Server::DELETABLE,
					'action'     => 'FormSubmissionsController@delete',
					'permission' => isset( self::$current_user_data->capabilities->wp_vue_form_entry_delete )
						&& true === (bool) self::$current_user_data->capabilities->wp_vue_form_entry_delete,
				),
			),
		);

		return apply_filters( WP_VUE_FORM_PREFIX . 'route_lists', $routes, self::$current_user_data );
	}
}
