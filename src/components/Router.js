import React, {Component} from 'react';
import Main from "./Main";
import Login from "./Login";
import Loading from "./Loading";
import ApiHelper from "../helpers/ApiHelper";

export default class Router extends Component {
    constructor(props) {
        super(props);

        this.state = {site: "Loading"};

        let token = sessionStorage.getItem("token");
        if (token != null && token.length > 0) {
            // the token has to be validated
            ApiHelper.validate(token)
                .then(result => result.json())
                .then(result => this.doPostValidation(result.validated))
                .catch(console.log);
        } else {
            this.state = {site: "Login"};
        }
    }

    doPostValidation = (validated) => {
        if (validated)
            this.setState({site: "Main"})
    };

    setSite = (site) => {
        this.setState({site: site})
    };

    render() {
        return (
            <div>
                <ChoosePage site={this.state.site} setSite={this.setSite}/>
            </div>
        )
    }
}

function ChoosePage(props) {
    switch (props.site) {
        case "Login":
            return <Login setSite={props.setSite}/>;
        case "Main":
            return <Main setSite={props.setSite}/>;
        default:
            return <Loading/>
    }
}