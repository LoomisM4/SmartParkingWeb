import React, {Component} from "react";
import "../style/App.css"
import ApiHelper from "../helpers/ApiHelper";

export default class Address extends Component {
    state = {
        address: ""
    };

    constructor(props) {
        super(props);

        ApiHelper.getAddress(props.spot.lat, props.spot.lng)
            .then(response => response.json())
            .then(response => this.setAddress(response.results[0] !== undefined ?
                response.results[0].formatted_address : "Addresse nicht gefunden"))
    }

    setAddress = (address) => {
        this.setState({address: address})
    };

    render() {
        return (
            <div className={"addressListItem"}>
                <div className={"box"} style={{backgroundColor: this.props.spot.color}}/>
                {this.state.address}
            </div>
        );
    }
}