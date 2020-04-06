import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import logon from './pages/Logon';
import Registe from './pages/Register';
import Profile from './pages/Profile';
import Newincident from './pages/Newincident'
export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={logon}/>
                <Route path="/Register" component={Registe}/>

                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={Newincident}/>
            </Switch>
        </BrowserRouter>
    );
}