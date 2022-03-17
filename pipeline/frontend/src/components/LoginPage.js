import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import SelectFeaturePage from "./SelectFeaturePage";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (<Router>
            
            <Switch>
                <Route path="/"><p> This is the Login page</p></Route>
            </Switch>

        </Router>);
    }
}