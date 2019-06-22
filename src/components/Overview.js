import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import "../style/App.css"
import MapMarker from "./MapMarker";
import {GoogleMapsApiKey} from "../settings/AppSettings";
import Spot from "../objects/Spot";

export default class Overview extends Component {
    spots = [
        new Spot(49.027105, 8.38609, true, null),
        new Spot(49.027005, 8.38606, false, 1234),
        new Spot(49.026905, 8.38603, false, null)
    ];

    getSpots = (color) => {
        let spots = [];
        let i = 0;
        this.spots.forEach(s => {
            if (s.color === color) {
                spots[i] = s;
                i++;
            }
        });
        console.log(spots.length);
        return spots;
    };

    render() {
        return (
            <div>
                <main>
                    <div style={{height: "calc(100vh - 100px)", width: '100vw'}}>
                        <GoogleMapReact bootstrapURLKeys={{key: GoogleMapsApiKey}}
                                        defaultCenter={{
                                            lat: 49.027005,
                                            lng: 8.386034
                                        }}
                                        defaultZoom={20}>
                            {this.getSpots("green").map(s =>
                                <MapMarker lat={s.lat} lng={s.lng} color={s.color}/>)}
                            {this.getSpots("yellow").map(s =>
                                <MapMarker lat={s.lat} lng={s.lng} color={s.color}/>)}
                            {this.getSpots("red").map(s =>
                                <MapMarker lat={s.lat} lng={s.lng} color={s.color}/>)}
                        </GoogleMapReact>
                    </div>
                </main>
                <footer>
                    <div>
                        <div className={"box"} style={{backgroundColor:  "red"}}/>
                        Belegt, evtl. nicht bezahlt
                    </div>
                    <div>
                        <div className={"box"} style={{backgroundColor:  "yellow"}}/>
                        Frei
                    </div>
                    <div>
                        <div className={"box"} style={{backgroundColor:  "green"}}/>
                        Belegt und bezahlt
                    </div>
                </footer>
            </div>
        )
    }
}