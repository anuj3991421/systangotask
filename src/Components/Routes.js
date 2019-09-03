import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../View/Login';
import Dashboard from '../View/Dashboard';
import EditAccount from '../View/Editaccount';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/:username/edit" component={EditAccount} />
            <Route path="/:username" component={Dashboard} />
            <Redirect from="/" to="/login" />
        </Switch>
    </BrowserRouter>
)

export default Routes;