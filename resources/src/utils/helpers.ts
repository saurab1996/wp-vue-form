import { TranslateText } from '@/utils/const';
import { del } from '@/axios/index';
import ToastEventBus from 'primevue/toasteventbus';
import type { ConfirmationOptions } from 'primevue/confirmationoptions';
export const copyToClipboard = async (text: string): Promise<void> => {
  const { showSuccessMessage, showErrorMessage } = useToastService();
  
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      showSuccessMessage('Text copied to clipboard.');
    } else {
      // Fallback method if Clipboard API is not available
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showSuccessMessage('Text copied to clipboard.');
    }
  } catch (error) {
    console.error(error);
    showErrorMessage('Failed to copy text to clipboard, try again.');
  }
}

export const useToastService = () => {

  const showSuccessMessage = (msg: string) => {
    ToastEventBus.emit('add',{ severity: 'success', summary: LocalizeText('success'), detail: msg, life: 3000 });
  }

  const showErrorMessage = (msg: string) => {
    ToastEventBus.emit('add',{ severity: 'error', summary: LocalizeText('error'), detail: msg, life: 3000 });
  }

  const showInternalServerErrorMessage = () => {
    ToastEventBus.emit('add',{ severity: 'error', summary: LocalizeText('failed'), detail: LocalizeText('internal_server_error'), life: 3000 });
  }

  return { showSuccessMessage, showErrorMessage, showInternalServerErrorMessage };
}

export const formatDate = (value: string | null) :string => {

  if (!value) {
    return '-';
  }

  const date_value = new Date(value);
  return date_value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

};


export const LocalizeText = (text: string):string => {
  if (!text) {
    return text;
  }
  return TranslateText?.text ? TranslateText.text : text.replace(/_/g, ' ').replace(/^./, text[0].toUpperCase());
}

export function mergeObjects(obj1: { [key: string|number]: any }, obj2: { [key: string|number]: any }): object {
  // Use the spread operator to merge obj2 into obj1, but only for keys that don't already exist in obj1 and keys in obj1 are not empty
  const mergedObject = {
    ...obj1,
    ...Object.fromEntries(
      Object.entries(obj2).filter(([key]) => !obj1?.[key] )
    )
  };
  return mergedObject;
}



export const confirmBox = (
  useconfirm: any,
  endpoint:string,
  options:ConfirmationOptions,
  params?:object,
  successCallback?: (response: any) => void, // Define the type for successCallback
  errorCallback?: (response: any) => void // Define the type for errorCallback
):void => {
  const { showSuccessMessage, showErrorMessage, showInternalServerErrorMessage } = useToastService();
  const defaultOptions = {
    message: LocalizeText('do_you_want_to_delete_this_records'),
    header:LocalizeText('are_you_sure'),
    icon: 'pi pi-question',
    rejectLabel: LocalizeText('cancel'),
    acceptLabel: LocalizeText('delete')
  }
  const updateParams = JSON.parse(JSON.stringify(params));
  useconfirm.require(<ConfirmationOptions>{
    ...mergeObjects(options, defaultOptions),
    accept: () => {
      del(endpoint,updateParams).then((response) => {
        if (response?.data?.status) {
          if (successCallback) {
            successCallback(response);
          }
          showSuccessMessage(response.data.message);
        } else {
          if (errorCallback) {
            errorCallback(response);
          }
          showErrorMessage(response.data.message);
        }
      }).catch((error) => {
        console.error(error)
        showInternalServerErrorMessage();
      })
    },
    reject: () => {
      showErrorMessage(LocalizeText('request_cancelled'));
    }
  });
}