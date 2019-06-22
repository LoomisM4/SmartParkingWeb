import React, {Component} from "react";
import "../style/App.css"
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import NavItem from "./NavItem";

export default class Main extends Component {
    state = {
        component: Overview
    };
    navItemOverview = React.createRef();
    navItemDashboard = React.createRef();

    changeToOverview = () => {
        this.setState({component: Overview});
        this.navItemOverview.current.changeColor("palevioletred");
        this.navItemDashboard.current.changeColor("white")
    };

    changeToDashboard = () => {
        this.setState({component: Dashboard});
        this.navItemOverview.current.changeColor("white");
        this.navItemDashboard.current.changeColor("palevioletred")
    };

    logout = () => {
        sessionStorage.removeItem("token");
        this.props.setSite("Login");
    };

    render() {
        return (
            <div>
                <header className={"navbar"}>
                    <NavItem value={"Übersicht"}
                             color={"palevioletred"}
                             hoverColor={"#f1cbd7"}
                             onClick={this.changeToOverview}
                             ref={this.navItemOverview}/>
                    <NavItem value={"Dashboard"}
                             color={"white"}
                             hoverColor={"#f1cbd7"}
                             onClick={this.changeToDashboard}
                             ref={this.navItemDashboard}/>
                    <NavItem value={"Logout"}
                             color={"white"}
                             hoverColor={"#f1cbd7"}
                             onClick={this.logout}
                             right={true}/>
                </header>
                <main>
                    {this.state.component === Overview ? (<Overview/>) : (<Dashboard/>)}
                </main>
            </div>
        )
    }
}