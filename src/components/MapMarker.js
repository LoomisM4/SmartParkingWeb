import React, {Component} from "react";
import "../style/App.css"
import SpotInfo from "./SpotInfo";

export default class MapMarker extends Component {
    state = {
        spotInfoVisible: false
    };

    showOrHideSpotInfo = () => {
        this.setState({spotInfoVisible: !this.state.spotInfoVisible});
    };

    render() {
        return (
            <div>
                <div className={"mapMarker"}
                     onClick={this.showOrHideSpotInfo}
                     style={{backgroundColor: this.props.spot.color}}/>
                {this.state.spotInfoVisible ? <SpotInfo spot={this.props.spot}/> : null}
            </div>
        )
    }
}