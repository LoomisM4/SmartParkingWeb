export default class Spot {
    lat = null;
    lng = null;
    free = null;
    user = null;
    color = null;

    constructor(lat, lng, free, user) {
        this.lat = lat;
        this.lng = lng;
        this.free = free;
        this.user = user;

        if (free)
            this.color = "yellow";
        else if (!free && user !== null)
            this.color = "green";
        else if (!free && user === null)
            this.color = "red";
    }
}