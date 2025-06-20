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
 * Class FormSubmissionsController
 *
 * This class handles the administration-related functionalities.
 */
class FormSubmissionsController extends Init {

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
	 * Retrieve data for the index action.
	 *
	 * @return array An array containing the data and status code.
	 */
	public function index(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}

	/**
	 * Save data.
	 *
	 * @return array An array containing the saved data and status code.
	 */
	public function save(): array {
		
		$request_data = wp_vue_form_recursive_sanitize_array( $this->wp_request_data->get_params() );
		return array(
			'data'        => $request_data,
			'status_code' => 200,
		);
	}

	/**
	 * Retrieve data for the edit action.
	 *
	 * @return array An array containing the data and status code.
	 */
	public function edit(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}

	/**
	 * Update data.
	 *
	 * @return array An array containing the updated data and status code.
	 */
	public function update(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}

	/**
	 * Delete data.
	 *
	 * @return array An array containing the deleted data and status code.
	 */
	public function delete(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}
}
