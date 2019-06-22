import React, {Component} from "react";
import "../style/App.css"

export default class Loading extends Component {
    render() {
        return (
            <div className={"loadingScreen"}>
                Laden... <br/>Bitte warten Sie einen Moment
            </div>
        )
    }
}