import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_BASE_URL;

const requestHandler = (request: any) => {
    request.headers['Authorization'] = authHeader();
    return request;
}

const responseSuccessHandler = (response: any) => {
    return response.data;
};

const forceLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.href = '/auth/login'
}

const responseErrorHandler = (error: any) => {
    var errors = ["Something went wrong, please try again"];

    if (error.response) {
        if (error.response.data.errors)
            errors = error.response.data.errors;
        if (error.response.data.error)
            errors = [error.response.data.error];

        if (error.response.status === 401)
            forceLogout();
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }

    return Promise.reject({
        status: error.response.status,
        errors: errors
    });
}

export const prepareAxios = () => {
    axios.defaults.baseURL = API_URL;
    axios.interceptors.request.use(request => requestHandler(request));
    axios.interceptors.response.use(
        response => responseSuccessHandler(response),
        error => responseErrorHandler(error)
    );
}
