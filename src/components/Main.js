import React, {Component} from "react";
import "../style/App.css"
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import NavItem from "./NavItem";
import ApiHelper from "../helpers/ApiHelper";
import {Colors} from "../settings/Colors";
import List from "./List";

export default class Main extends Component {
    state = {
        component: Overview
    };
    navItemOverview = React.createRef();
    navItemDashboard = React.createRef();
    navItemList = React.createRef();

    changeToOverview = () => {
        this.setState({component: Overview});
        this.navItemOverview.current.changeColor(Colors.navItemActive);
        this.navItemDashboard.current.changeColor(Colors.navItemInactive);
        this.navItemList.current.changeColor(Colors.navItemInactive);
    };

    changeToDashboard = () => {
        this.setState({component: Dashboard});
        this.navItemOverview.current.changeColor(Colors.navItemInactive);
        this.navItemDashboard.current.changeColor(Colors.navItemActive);
        this.navItemList.current.changeColor(Colors.navItemInactive);
    };

    changeToList = () => {
        this.setState({component: List});
        this.navItemOverview.current.changeColor(Colors.navItemInactive);
        this.navItemDashboard.current.changeColor(Colors.navItemInactive);
        this.navItemList.current.changeColor(Colors.navItemActive);
    };

    logout = () => {
        sessionStorage.removeItem("token");
        this.props.setSite("Login");
    };

    update = () => {
        ApiHelper.update()
            .then(response =>response.json())
            .then(response => {
                //TODO
            });
        this.changeToOverview();
    };

    render() {
        return (
            <div>
                <header className={"navbar"} style={{borderBottomColor: Colors.navBarSeparationLine}}>
                    <NavItem value={"Übersicht"}
                             color={Colors.navItemActive}
                             onClick={this.changeToOverview}
                             ref={this.navItemOverview}/>
                    <NavItem value={"Dashboard"}
                             color={Colors.navItemInactive}
                             onClick={this.changeToDashboard}
                             ref={this.navItemDashboard}/>
                    <NavItem value={"Liste"}
                             color={Colors.navItemInactive}
                             onClick={this.changeToList}
                             ref={this.navItemList}/>
                    <NavItem value={"Logout"}
                             color={Colors.navItemInactive}
                             onClick={this.logout}
                             right={true}/>
                    <NavItem value={"Aktualisieren"}
                             color={Colors.navItemInactive}
                             onClick={this.update}
                             right={true}/>
                </header>
                <main>
                    {getBody(this.state.component)}
                </main>
            </div>
        )
    }
}

function getBody(component) {
    if (component === Overview)
        return <Overview/>
    else if (component === Dashboard)
        return <Dashboard/>
    else if ((component === List))
        return <List/>
}