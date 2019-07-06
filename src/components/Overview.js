import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import "../style/App.css"
import MapMarker from "./MapMarker";
import {GoogleMapsApiKey} from "../settings/Api";
import {Colors} from "../settings/Colors";
import ApiHelper from "../helpers/ApiHelper";
import Spot from "../objects/Spot";

export default class Overview extends Component {
    static usedAndPayed = [];
    static freeSpots = [];
    static usedNotPayedSpots = [];

    constructor(props) {
        super(props);

        this.state = {
            usedAndPayedSpots: [],
            freeSpots: [],
            usedNotPayedSpots: []
        };

        ApiHelper.getAllSpots()
            .then(response => response.json())
            .then(response => this.sortSpots(response))
            .catch(console.log);
    }

    sortSpots = (spots) => {
        let allSpots = [];
        for (let i = 0; i < spots.length; i++) {
            let s = spots[i];
            allSpots[i] = new Spot(s.parkingId, s.latitude, s.longitude, s.isFree, s.isIdentified);
        }

        let usedAndPayed = [];
        let free = [];
        let usedNotPayed = [];

        allSpots.forEach(s => {
            if (s.color === Colors.spotFree)
                free[free.length] = s;
            else if (s.color === Colors.spotInUseAndPayed)
                usedAndPayed[usedAndPayed.length] = s;
            else if (s.color === Colors.spotInUseNotPayed)
                usedNotPayed[usedNotPayed.length] = s;
        });

        Overview.freeSpots = free;
        Overview.usedAndPayed = usedAndPayed;
        Overview.usedNotPayedSpots = usedNotPayed;

        this.setState({
            usedAndPayedSpots: usedAndPayed,
            freeSpots: free,
            usedNotPayedSpots: usedNotPayed
        });
    };

    render() {
        return (
            <div>
                <main>
                    <div style={{height: "calc(100vh - 100px)", width: '100vw'}}>
                        <GoogleMapReact bootstrapURLKeys={{key: GoogleMapsApiKey}}
                                        defaultCenter={{
                                            lat: 49.002147,
                                            lng: 8.388113
                                        }}
                                        defaultZoom={20}>
                            {this.state.usedAndPayedSpots.map(s =>
                                <MapMarker key={s.id} lat={s.lat} lng={s.lng} spot={s}/>)}
                            {this.state.freeSpots.map(s =>
                                <MapMarker key={s.id} lat={s.lat} lng={s.lng} spot={s}/>)}
                            {this.state.usedNotPayedSpots.map(s =>
                                <MapMarker key={s.id} lat={s.lat} lng={s.lng} spot={s}/>)}
                        </GoogleMapReact>
                    </div>
                </main>
                <footer style={{backgroundColor: Colors.footerBackground}}>
                    <div>
                        <div className={"box"} style={{backgroundColor:  Colors.spotInUseNotPayed}}/>
                        Belegt, evtl. nicht bezahlt
                    </div>
                    <div>
                        <div className={"box"} style={{backgroundColor:  Colors.spotFree}}/>
                        Frei
                    </div>
                    <div>
                        <div className={"box"} style={{backgroundColor:  Colors.spotInUseAndPayed}}/>
                        Belegt und bezahlt
                    </div>
                </footer>
            </div>
        )
    }
}