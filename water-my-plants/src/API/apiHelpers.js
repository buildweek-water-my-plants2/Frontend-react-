import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

// Remember to Add BASE URL once we get it from the Backend
const BASE_URL = "ENTER_BASE_URL_"

export const LOGIN = "login/";
export const PLANTS = "plants/";


export function call_AUTH(payload) {
    return axios.post(`${BASE_URL}${LOGIN}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_post(endpoint, payload) {
    return axiosWithAuth()
        .post(`${BASE_URL}${endpoint}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_get(endpoint) {
    return axiosWithAuth()
        .get(`${BASE_URL}${endpoint}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}