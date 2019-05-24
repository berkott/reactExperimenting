import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

export default class App extends React.Component{
  render(){
    return (
      <div>
        <WorkoutCard value="overall"/>
        <WorkoutCard value="arms"/>
        <WorkoutCard value="legs"/>
      </div>
    );
  }
}

export class WorkoutCard extends React.Component {
  render(){
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.value.charAt(0).toUpperCase() + this.props.value.slice(1)}</h5>
          <p className="card-text">The routine is here</p>
          
          <Link to={ process.env.PUBLIC_URL + '/' + this.props.value}>
            <button className="btn btn-primary">
              View
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
