import React, {Component} from "react";
import "../style/App.css"
import {getRoute} from "../settings/AppSettings";

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    usernameChanged = (event) => {
        this.setState({username: event.target.value})
    };

    passwordChanged = (event) => {
        this.setState({password: event.target.value})
    };

    login = () => {
        fetch(getRoute("login"), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then(response => this.doPostLoginStuff(response.token))
            .catch(console.log)
    };

    doPostLoginStuff = (token) => {
        if (token !== null && token.length > 0) {
            // we have a token that has to be stored
            sessionStorage.setItem("token", token);
            // now navigate to the main page
            this.props.setSite("Main");
        } else {
            // we don't have a token
            console.log("Login failed")
        }
    };

    render() {
        return (
            <div className={"Login"}>
                <div>
                    <input type={"text"}
                           value={this.state.username}
                           placeholder={"Benutzername"}
                           onChange={this.usernameChanged}/>
                </div>
                <div>
                    <input type={"password"}
                           value={this.state.password}
                           placeholder={"Passwort"}
                           onChange={this.passwordChanged}/>
                </div>
                <div>
                    <input type={"button"}
                           className={"Button"}
                           value={"Login"}
                           onClick={this.login}/>
                </div>
            </div>
        )
    }
}