import React, {Component} from "react";
import { Route, Router } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (<Router>
            <Switch>
                <Route path="/Home"><p> This is the Home page</p></Route>
                <Route path="/SelectFeature" Component={SelectFeaturePage}></Route>
            </Switch>
        </Router>)
    }
}
