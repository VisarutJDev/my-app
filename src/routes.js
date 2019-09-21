import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './container/Home'
import App from 'App'
import Navigation from './navigation/Navigation'
import { ProtectedRoute } from 'protected-route'
export default (
    <Router>
        <Navigation>
            <Switch>
                <Route exact path="/" component={Home}/>
                <ProtectedRoute exact path="/app" component={App}/>
            </Switch>
        </Navigation>

    </Router>
);