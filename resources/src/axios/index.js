import axios from 'axios';
// Initialize default values
if (!window.wp_vue_from_localize) {
    window.wp_vue_from_localize = {
        api_base_url: 'http://192.168.1.106:8003/wp-json/wpvueform/v1',
        nonce: '20ab17db88'
    };
}
// Following is the version of requested api
const apiBaseUrl = window.wp_vue_from_localize.api_base_url;
// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add a request interceptor to include nonce in requests
axiosInstance.interceptors.request.use(function (config) {
    // Get the nonce value from window.wp_vue_from_localize
    const nonce = window.wp_vue_from_localize.nonce;
    // Add nonce to the request headers
    // config.headers['X-WP-Nonce'] = nonce;
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Define custom functions for post, get, put, and delete requests
export const post = (endpoint, data = {}) => {
    return axiosInstance.post(endpoint, data);
};
export const get = (endpoint, data = {}) => {
    return axiosInstance.get(endpoint, { params: data });
};
export const put = (endpoint, data = {}) => {
    return axiosInstance.put(endpoint, data);
};
export const del = (endpoint, data = {}) => {
    return axiosInstance.delete(endpoint, { data });
};
