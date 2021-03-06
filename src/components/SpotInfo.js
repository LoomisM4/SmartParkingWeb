import React, {Component} from "react";
import "../style/App.css"
import {Colors} from "../settings/Colors";
import ApiHelper from "../helpers/ApiHelper";

export default class SpotInfo extends Component {
    state = {
        address: "Laden...",
        price: "Laden...",
        since: "Laden..."
    };

    constructor(props) {
        super(props);

        ApiHelper.getAddress(props.spot.lat, props.spot.lng)
            .then(response => response.json())
            .then(response => this.setAddress(response.results[0].formatted_address))
            .catch(console.log);

        ApiHelper.getSpot(props.spot.id)
            .then(response => response.json())
            .then(response => this.setDetails(response))
            .catch(console.log);
    }

    setDetails = (details) => {
        this.setState({
            price: details.price,
            since: this.getFormattedString(details.parkingStart)
        })
    };

    getFormattedString(string) {
        if (string !== null && string.length > 0) {
            let splitted = string.split('T');
            // date is at #0; time is at #1
            return splitted[0] + " " + splitted[1].substring(0, 5);
        }

        return "";
    }

    setAddress = (address) => {
        this.setState({address: address})
    };

    getMessage = () => {
        if (this.props.spot.color === Colors.spotFree)
            return "Frei";
        else
            return "Belegt seit: " + this.state.since;
    };

    render() {
        return (
            <div className={"spotInfo"} style={{backgroundColor: Colors.spotInfoBackground}}>
                {this.getMessage()}
                <br/>
                Preis: {this.state.price} €/h
                <br/>
                <br/>
                {this.state.address}
            </div>
        )
    }
}