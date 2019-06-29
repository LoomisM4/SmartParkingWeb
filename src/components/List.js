import React, {Component} from "react";
import "../style/App.css"
import Address from "./Address";
import Overview from "./Overview";

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usedAndPayedSpots: Overview.usedAndPayed,
            freeSpots: Overview.freeSpots,
            usedNotPayedSpots: Overview.usedNotPayedSpots
        };
    }

    render() {
        return (
            <div>
                <div className={"list"}>
                    <div>
                        {this.state.usedNotPayedSpots.map(s =>
                            <Address key={s.id} spot={s}/>)}
                    </div>
                </div>
                <div className={"list"}>
                    <div className={"addressListItem"}>
                        {this.state.freeSpots.map(s =>
                            <Address key={s.id} spot={s}/>)}
                    </div>
                </div>
                <div className={"list"}>
                    <div className={"addressListItem"}>
                        {this.state.usedAndPayedSpots.map(s =>
                            <Address key={s.id} spot={s}/>)}
                    </div>
                </div>
            </div>
        );
    }
}