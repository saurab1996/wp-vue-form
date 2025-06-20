<?php
/**
 * Controller class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\ControllerClasses;

use WPVueForm\BaseClasses\Init;
use WP_REST_Request;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

/**
 * Class AdminController
 *
 * This class handles the administration-related functionalities.
 */
class AdminController extends Init {

	/**
	 * Route data for the current request.
	 *
	 * @var array
	 */
	public $route_data;

	/**
	 * Request data for the current request.
	 *
	 * @var WP_REST_Request
	 */
	public $wp_request_data;

	/**
	 * Constructor. Initializes the AdminController class.
	 *
	 * @param array           $route_data          Route data for the current request.
	 * @param WP_REST_Request $wp_request_data     Request data for the current request.
	 * @param object          $current_user_data   Data for the current user.
	 */
	public function __construct( array $route_data, WP_REST_Request $wp_request_data ) {
		// Set route data, request data, and current user data.
		$this->route_data        = $route_data;
		$this->wp_request_data   = $wp_request_data;
	}

	/**
	 * Retrieve the setting data.
	 *
	 * @return array An array containing the setting data and status code.
	 */
	public function get_setting(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}

	/**
	 * Retrieve the setting data.
	 *
	 * @return array An array containing the setting data and status code.
	 */
	public function update_setting(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}
}
