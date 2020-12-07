import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import App from './app';
import Redirector from './redirector';
import Editor from './editor';

render(
    <Router>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/home"} component={Home}/>
            <Route exact path={"/url"} component={App}/>
            <Route exact path={"/url/:id"} component={Redirector}/>
            <Route exact path={"/url/:id/edit"} component={Editor}/>
            <Route render={() => <h1>Not found!</h1>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);