import React from "react";
import {NavLink} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to URL Shortener!</h1>
                <div>
                    <NavLink exact to={"/url"}>Go to our app!</NavLink>
                </div>
            </div>
        );
    }

}