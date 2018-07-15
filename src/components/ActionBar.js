import React from 'react';
import './ActionBar.css';

const SPACER_STYLE = {
  order: 0,
  flexGrow: 1
}

export function Spacer() {
  return (<div style={SPACER_STYLE} />)
}

export default function ActionBar(props) {
  return (
    <div className="actionbar-container">
      { props.children }
    </div>
  )
}