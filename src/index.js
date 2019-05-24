import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { overall, arms, legs } from './Workout';


const routing = (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a style={{color: '#fff'}} className="navbar-brand">Workouts</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            
            <Route exact path="/" component={App} />
            <Route path="/overall" component={overall} />
            <Route path="/arms" component={arms} />
            <Route path="/legs" component={legs} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
