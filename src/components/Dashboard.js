import React, {Component} from "react";
import "../style/App.css"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <iframe style={{height: "calc(100vh - 40px)", width: '100vw'}}
                        src="https://app.powerbi.com/view?r=eyJrIjoiZThlZjY2N2YtYzVlNi00MWM0LTlmNDItOGI3Yzg0ZmFjOGZmIiwidCI6IjRhZmQ3NWJhLTNkMGYtNDA3ZC05NTJhLWIzOWNkZmY1NjNhNSIsImMiOjh9"
                        frameBorder="0" allowFullScreen="true">
                </iframe>
            </div>
        )
    }
}