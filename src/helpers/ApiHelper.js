import {getRoute, GoogleMapsApiKey} from "../settings/Api";

export default class ApiHelper {
    static login(username, password) {
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

    static validate(token) {
        return fetch(getRoute("validate"), {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    static update() {
        console.log("Not yet implemented");

        return new Promise(resolve => null);
    }

    static getAddress(lat, lng) {
        let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + GoogleMapsApiKey;
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    static getAllSpots() {
        return fetch("http://localhost:8080/getAllParkings", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    static getSpot(id) {
        return fetch("http://localhost:8080/getDistinctParking/" + id, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
}