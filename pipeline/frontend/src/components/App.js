import React, { Component } from "react";
import {render} from "react-dom";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginPage />
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)