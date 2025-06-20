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
use WP_Query;

defined( 'ABSPATH' ) || die( 'Something went wrong' );

/**
 * Class FormController
 *
 * This class handles the administration-related functionalities.
 */
class FormController extends Init {

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
	 */
	public function __construct( array $route_data, WP_REST_Request $wp_request_data ) {
		// Set route data, request data, and current user data.
		$this->route_data      = $route_data;
		$this->wp_request_data = $wp_request_data;
	}

	/**
	 * Retrieve data for the index action.
	 *
	 * @return array An array containing the data and status code.
	 */
	public function index(): array {

		$request_data  = wp_vue_form_recursive_sanitize_array( $this->wp_request_data->get_params() );
		$args          = array(
			'post_type'   => WP_VUE_FORM_POST_TYPE,
			'post_status' => 'any',
		);
		$query_results = new WP_Query( $args );
		if ( ! $query_results->have_posts() ) {
			return array(
				'data'        => array(
					'data'    => $query_results,
					'message' => __( 'No form found, please add new form', 'wp-vue-form' ),
					'status'  => false,
					'nonce'   => wp_create_nonce( 'wp_rest' ),
				),
				'status_code' => 200,
			);
		}
		$response_results = array();
		$post_status_data = wp_vue_form_all_status();
		while ( $query_results->have_posts() ) {
			$query_results->the_post();
			$id                 = get_the_ID();
			$post_status        = get_post_status();
			$response_results[] = array(
				'id'                => $id,
				'name'              => get_the_title(),
				'date'              => wp_vue_form_format_date( get_the_date() ),
				'shortcode'         => "[wpvueformbuilder id='{$id}']",
				'status'            => ! empty( $post_status_data[ $post_status ]['label'] ) ? $post_status_data[ $post_status ]['label'] : wp_vue_form_status_text( $post_status ),
				'severity'          => ! empty( $post_status_data[ $post_status ]['severity'] ) ? $post_status_data[ $post_status ]['severity'] : wp_vue_form_status_severity( $post_status ),
				'total_submissions' => wp_rand( 1, 500000 ),
				'description'       => get_the_content(),
				'author_id'         => get_the_author_meta( 'display_name' ),
			);
		}

		wp_reset_postdata();

		return array(
			'data'        => array(
				'data'    => $response_results,
				'total'   => $query_results->found_posts,
				'message' => __( 'Forms list.', 'wp-vue-form' ),
				'status'  => true,
			),
			'status_code' => 200,
		);
	}

	/**
	 * Save data.
	 *
	 * @return array An array containing the saved data and status code.
	 */
	public function save(): array {
		return array(
			'data'        => $this->route_data,
			'status_code' => 200,
		);
	}

	/**
	 * Retrieve data for the edit action.
	 *
	 * @return array An array containing the data and status code.
	 */
	public function edit(): array {
		$request_data = wp_vue_form_recursive_sanitize_array( $this->wp_request_data->get_params() );
		$form_data    = get_post( $request_data['id'] );
		return array(
			'data'        => array_merge(
				array( 'form_data' => $form_data ),
				wp_vue_form_elements_and_style( $request_data['id'] )
			),
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

	/**
	 * Get table columns.
	 *
	 * @return array An array containing the deleted data and status code.
	 */
	public function column(): array {

		$data = array(
			'multiple'          => array(
				'header'   => '',
				'sortable' => false,
				'filter'   => false,
				'style'    => 'width:5% !important;max-width:75px !important;',
			),
			'id'                => array(
				'header'   => 'ID',
				'sortable' => true,
				'dataType' => 'numeric',
				'filter'   => array(
					'type'        => 'input',
					'placeholder' => 'Filter ID.',
					'mode'        => 'equals',
					'global'      => true,
					'class'       => 'w-24',
				),
				'style'    => 'width:10% !important;max-width:150px !important;',
			),
			'name'              => array(
				'header'   => 'Name',
				'sortable' => true,
				'dataType' => 'text',
				'filter'   => array(
					'type'        => 'input',
					'placeholder' => 'Filter country.',
					'mode'        => 'contains',
					'global'      => true,
					'class'       => '',
				),
				'style'    => 'width:15%!important;max-width:225px !important;',
			),
			'total_submissions' => array(
				'header'   => 'Total submissions',
				'sortable' => true,
				'dataType' => 'numeric',
				'filter'   => array(
					'type'        => 'input',
					'placeholder' => 'Filter total submissions.',
					'mode'        => 'gte',
					'global'      => true,
					'class'       => '',
				),
				'style'    => 'width:15%!important;max-width:225px !important;',
			),
			'date'              => array(
				'header'   => 'Date',
				'sortable' => true,
				'dataType' => 'date',
				'filter'   => array(
					'type'        => 'date',
					'placeholder' => 'mm/dd/yyyy',
					'mode'        => 'dateIs',
					'class'       => '',
				),
				'style'    => 'width:15%!important;max-width:225px !important;',
			),
			'status'            => array(
				'header'   => 'Status',
				'sortable' => false,
				'dataType' => 'boolean',
				'filter'   => array(
					'type'        => 'select',
					'placeholder' => 'Filter by status.',
					'options'     => array_values( wp_vue_form_all_status() ),
					'mode'        => 'eqauls',
					'class'       => '',
				),
				'style'    => 'width:10%!important;max-width:150px !important;',
			),
			'shortcode'         => array(
				'header'   => 'Shortcode',
				'sortable' => false,
				'filter'   => false,
				'style'    => 'width:20%!important;max-width:300px !important;',
			),
			'action'            => array(
				'header'   => 'Action',
				'sortable' => false,
				'filter'   => false,
				'style'    => 'width:10%!important;max-width:150px !important;',
			),
		);

		return array(
			'data'        => array(
				'data'   => apply_filters( WP_VUE_FORM_PREFIX . 'form_list_column', $data, self::$current_user_data ),
				'status' => true,
			),
			'status_code' => 200,
		);
	}
}
