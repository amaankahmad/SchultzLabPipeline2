import React, {Component} from "react";
import { Router } from "react-router-dom";

export default class SelectFeaturePage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (<Router>

            <Switch>
                <Route path="/SelectFeature"><p>This is the select feature page. Choose Stitching, metrics, validation or reg.</p></Route>
                <Route path="/Metrics" Component={MetricsPage}></Route>
                <Route path="/Registration" Component={RegistrationPage}></Route>
                <Route path="/Stitching" Component={StitchingPage}></Route>
                <Route path="/Validation" Component={ValidationPage}></Route>
            </Switch>

        </Router>)
        
    }
}