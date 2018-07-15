import React, { Component } from 'react';
import ActionBar, { Spacer } from './ActionBar';

class Agreement extends Component {
  render() {
    return (
      <div className='form-container'>
        <h1>Privacy and term</h1>
        <div className='text-container'>
          Lorem ipsum
        </div>
        <ActionBar>
          <span 
            onClick={this.onSubmit} 
            className="action-bar-item"
          >
            Cancel
          </span>
          <Spacer />
          <span 
            onClick={this.onSubmit} 
            className="action-bar-item"
          >
            Submit
          </span>
        </ActionBar>
      </div>
    );
  }
}

export default Agreement;