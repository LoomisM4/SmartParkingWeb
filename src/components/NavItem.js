import React, {Component} from "react";
import "../style/App.css"

export default class NavItem extends Component {
    state = {color: this.props.color};

    changeColor = (color) => {
        this.setState({color: color})
    };

    onMouseEnter = () => {
        if (this.state.color === "white")
            this.setState({color: this.props.hoverColor})
    };

    onMouseLeave = () => {
        if (this.state.color !== "palevioletred")
            this.setState({color: "white"})
    };

    navStyle = () => {
        let style = {
            backgroundColor: this.state.color
        };

        if (this.props.right)
            style = {
                backgroundColor: this.state.color,
                position: "absolute",
                right: 0
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