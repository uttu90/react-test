import React from 'react';
import ActionBar, { Spacer } from './ActionBar';

export default function Agreement(props) {
  return (
    <div className='form-container'>
      <h1>Privacy and Terms</h1>
      <div className='text-container'>
        Lorem ipsum
      </div>
      <ActionBar>
        <span 
          onClick={props.cancel} 
          className="action-bar-item"
        >
          Cancel
        </span>
        <Spacer />
        <span 
          onClick={props.submit} 
          className="action-bar-item"
        >
          Submit
        </span>
      </ActionBar>
    </div>
  );
}