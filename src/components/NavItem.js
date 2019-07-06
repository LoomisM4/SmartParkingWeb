import React, {Component} from "react";
import "../style/App.css"
import {Colors} from "../settings/Colors";

export default class NavItem extends Component {
    state = {color: this.props.color, textColor: this.props.textColor};

    changeColor = (color) => {
        this.setState({color: color});
        if (color === Colors.navItemInactive)
            this.setState({textColor: "black"});
        else
            this.setState({textColor: "white"})
    };

    getCurrentColor = () => {
        return this.state.color
    };

    onMouseEnter = () => {
        if (this.state.color === Colors.navItemInactive)
            this.setState({color: Colors.navItemHover})
    };

    onMouseLeave = () => {
        if (this.state.color !== Colors.navItemActive)
            this.setState({color: Colors.navItemInactive})
    };

    navStyle = () => {
        let style = {
            backgroundColor: this.state.color,
            color: this.state.textColor
        };

        if (this.props.right)
            style = {
                backgroundColor: this.state.color,
                float: "right"
        };

        return style;
    };

    render() {
        return (
            <span className={"nav-item"}
                  onClick={this.props.onClick}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  style={this.navStyle()}>
                {this.props.value}
            </span>
        )
    }
}