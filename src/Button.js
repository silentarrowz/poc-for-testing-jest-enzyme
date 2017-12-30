import React, { Component } from 'react';


export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
  }

  handleClick = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
    console.log('it worked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="first">
          First Button
        </button>
        <button disabled={this.state.disabled}>
          Second Button
        </button><br/>
        {this.state.disabled.toString()}
      </div>
    );
  }
}
