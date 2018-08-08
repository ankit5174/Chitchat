import {endpoints} from '../../util/endpoints';
import axios from 'axios';

export const authentication = {
    loginWithPassword: (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post(endpoints.signinUrl, {
                email: email,
                password: password
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err.response);
            })
        })
    },
    createUser: (name, email, password) => {
        return new Promise((resolve, reject) => {
            axios.post(endpoints.signupUrl, {
                name: name,
                email: email,
                password: password
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err.response);
            })
        })
    }
};