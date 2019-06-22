import React, {Component} from "react";
import "../style/App.css"

export default class SpotInfo extends Component {
    getMessage = () => {
        if (this.props.color === "yellow")
            return "Frei";
        else
            return "Belegt seit: TODO"
    };

    render() {
        return (
            <div className={"spotInfo"}>
                <h2>
                    {this.getMessage()}
                </h2>
            </div>
        )
    }
}