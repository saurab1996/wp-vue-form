<?php
/**
 * RouteHandler class file
 *
 * PHP version 8.0
 *
 * @package WP_Vue_Form
 **/

namespace WPVueForm\BaseClasses;

use WPVueForm\BaseClasses\Route;
use Throwable;
use WP_REST_Response;
use WP_REST_Request;
use Exception;

defined( 'ABSPATH' ) || die( 'Something went wrong' );
/**
 * Class RouteHandler
 *
 * Init plugin
 */
class RouteHandler extends Route {

	/**
	 * The path where controller classes are located.
	 *
	 * @var string
	 */
	private $controller_path;

	/**
	 * The namespace for the REST API routes.
	 *
	 * @var string
	 */
	private $route_namespace;

	/**
	 * Constructor for the RouteHandler class.
	 */
	public function __construct() {

		// Set the path for controller classes.
		$this->controller_path = '\\WPVueForm\\ControllerClasses\\';

		// Set the route namespace.
		$this->route_namespace = 'wpvueform/v1';
	}


	/**
	 * Registers REST API routes.
	 *
	 * @return void
	 */
	public function register_route(): void {
		// Get the list of routes.
		$route_group_lists = $this->route_lists();

		// Iterate over each route and register it.
		foreach ( $route_group_lists as $route_list_key => $route_list ) {
			foreach ( $route_list as  $route_data ) {
				$route_endpoint = $route_list_key . $route_data['endpoint'];
				register_rest_route(
					$this->route_namespace,
					"/{$route_endpoint}",
					array(
						'methods'             => $route_data['method'], // Set allowed HTTP methods for the route.
						'callback'            => function ( WP_REST_Request $wp_request_data ) use ( $route_data ): WP_REST_Response {
							// Callback function to handle the route.
							return $this->handle_route_callback( $route_data, $wp_request_data );
						},
						'permission_callback' => function () use ( $route_data ): bool {
							// Permission callback to check user's permission to access the route.
							return true;
						},
					)
				);
			}
		}
		unset( $route_lists );
	}

	/**
	 * Handles the callback function for a REST API route.
	 *
	 * @param array           $route_data        Route data containing information about the route.
	 * @param WP_REST_Request $wp_request_data   Request data for the current request.
	 *
	 * @return WP_REST_Response              Response for the REST API request.
	 *
	 * @throws Exception If class or method not found.
	 */
	public function handle_route_callback( array $route_data, WP_REST_Request $wp_request_data ): WP_REST_Response {
		try {
			// Extract class and method from the route data.
			$cluster   = explode( '@', $route_data['action'] );
			$namespace = ! empty( $route_data['namespace'] ) ? $route_data['namespace'] : $this->controller_path;
			$class     = $namespace . $cluster[0];
			$function  = isset( $cluster[1] ) ? $cluster[1] : '';

			// Check if class and method exist.
			if ( class_exists( $class ) && method_exists( $class, $function ) ) {
				// Call the method on the class and retrieve response.
				$response = ( new $class(
					$route_data,
					$wp_request_data
				) )->$function();

				$data        = isset( $response['data'] ) ? $response['data'] : array();
				$status_code = isset( $response['status_code'] ) ? $response['status_code'] : 404;

				// Return REST API response with data and status code.
				return new WP_REST_Response( $data, $status_code );
			} else {
				// Throw exception if class or method not found.
				throw new Exception( __( 'Class or method not found.', 'wp-vue-form' ) );
			}
		} catch ( Throwable $th ) {
			// Handle exceptions and return error response.
			return new WP_REST_Response(
				array( 'message' => $th->getMessage() , 'error_line' => ' (Line ' . $th->getLine() . ' in ' . $th->getFile() . ')' ), // Provide error message.
				400 // Set status code to indicate error.
			);
		}
	}
}
