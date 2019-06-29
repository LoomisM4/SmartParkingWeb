import React, {Component} from "react";
import "../style/App.css"
import {Colors} from "../settings/Colors";

export default class Loading extends Component {
    render() {
        return (
            <div className={"loadingScreen"} style={{backgroundColor: Colors.loadingScreenBackground}}>
                Laden...
                <br/>
                Bitte warten Sie einen Moment
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Falls Sie diese Seite dauerhaft sehen:
                <br/>
                Deaktivieren Sie die ursprungsübergreifende Beschränkung Ihres Browsers.
                <br/>
                Anschließend muss die Seite aktualisiert werden.
            </div>
        )
    }
}