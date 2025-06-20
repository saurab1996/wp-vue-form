import type { ConfirmationOptions } from 'primevue/confirmationoptions';
export declare const copyToClipboard: (text: string) => Promise<void>;
export declare const useToastService: () => {
    showSuccessMessage: (msg: string) => void;
    showErrorMessage: (msg: string) => void;
    showInternalServerErrorMessage: () => void;
};
export declare const formatDate: (value: string | null) => string;
export declare const LocalizeText: (text: string) => string;
export declare function mergeObjects(obj1: {
    [key: string | number]: any;
}, obj2: {
    [key: string | number]: any;
}): object;
export declare const confirmBox: (useconfirm: any, endpoint: string, options: ConfirmationOptions, params?: object, successCallback?: ((response: any) => void) | undefined, errorCallback?: ((response: any) => void) | undefined) => void;
