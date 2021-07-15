import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/map.css';
import { Game } from './Game';
import Login from './Login';

ReactDOM.render(
    <Router>

    <div>

        <NavLink to='/notes'>Books</NavLink>
        <NavLink to='/login'>Login</NavLink>

    </div>

    <Switch>

        <Route path='/notes' component={Game} />
        <Route path='/login' component={Login} />

    </Switch>

</Router>
     ,
     document.getElementById('root')
);
