import {Colors} from "../settings/Colors";

export default class Spot {
    id = null;
    lat = null;
    lng = null;
    free = null;
    user = null;
    color = null;

    constructor(id, lat, lng, free, user) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.free = free;
        this.user = user;

        if (free)
            this.color = Colors.spotFree;
        else if (!free && user === true)
            this.color = Colors.spotInUseAndPayed;
        else if (!free && user === false)
            this.color = Colors.spotInUseNotPayed;
    }
}