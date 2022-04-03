import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import MetricsPage from "./MetricsPage";
import RegistrationPage from "./RegistrationPage";
import SelectFeaturePage from "./SelectFeaturePage";
import StitchingPage from "./StitchingPage";
import ValidationPage from "./ValidationPage";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() { 
        return (<Router>
            
            <Switch>
                <Route exact path="/"><p> This is the Login page</p></Route>
                <Route path="/Home" Component={HomePage}></Route>
            </Switch>

        </Router>);
    }
}