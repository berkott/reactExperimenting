import React from 'react';

export class overall extends React.Component{
  onSubmit = () => {
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="container">
        <ul class="list-unstyled">
          <li>This is my overall routine:
            <ul>
              <li>50 push ups</li>
              <li>50 sit ups</li>
              <li>10 pull ups</li>
              <li>1 min sprint</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export class arms extends React.Component{
  onSubmit = () => {
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="container">
        <ul class="list-unstyled">
          <li>This is my arm routine:
            <ul>
              <li>50 push ups</li>
              <li>25 bicept curls</li>
              <li>10 pull ups</li>
              <li>10 bench press</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export class legs extends React.Component{
  onSubmit = () => {
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="container">
        <ul class="list-unstyled">
          <li>This is my leg routine:
            <ul>
              <li>30 sec wall sit</li>
              <li>50 sit ups</li>
              <li>20 box jumps</li>
              <li>1 min sprint</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
