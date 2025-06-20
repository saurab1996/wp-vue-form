export interface TranslateText {
  [key: string]: string;
}
export const TranslateText: TranslateText = {
  internal_server_error: "Internal server error.",
  success: 'Success',
  error: 'Error',
  failed: 'Failed',
  request_cancelled: 'Requested cancelled.',
  are_you_sure :'Are you sure?',
  cancel:'Cancel',
  delete:'Delete',
  do_you_want_to_delete_this_records:'Do you want to delete this record?'
};
export const FormApiEndPoint: string = '/forms/';
export const FormColumnApiEndPoint: string = FormApiEndPoint + 'column/';