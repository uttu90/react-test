import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { duckActions } from '../duck';

class Menu extends Component {
  render() {
    return (
      <div>
        <a onClick={this.props.signUp}>Sign up</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authStatus: state.authStatus,
    user: { ...state.user }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: compose(dispatch, duckActions.register),
    signOut: compose(dispatch, duckActions.signOut)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);