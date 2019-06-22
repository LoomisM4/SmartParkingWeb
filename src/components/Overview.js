import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import "../style/App.css"
import MapMarker from "./MapMarker";
import {GoogleMapsApiKey} from "../settings/ApiKey";

export default class Overview extends Component {
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
                            {/* first the green markers*/}
                            <MapMarker lat={49.027005} lng={8.38606} color={"green"}/>
                            {/* then the yellow markers*/}
                            <MapMarker lat={49.027105} lng={8.38609} color={"yellow"}/>
                            {/* last the red markers*/}
                            <MapMarker lat={49.026905} lng={8.38603} color={"red"}/>
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