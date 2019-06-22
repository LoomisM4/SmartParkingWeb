import {getRoute} from "../settings/AppSettings";

export default class ApiHelper {
    static login = (username, password) => {
        return fetch(getRoute("login"), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
    };

    static validate = (token) => {
        return fetch(getRoute("validate"), {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}