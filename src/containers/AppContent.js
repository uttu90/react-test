import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { duckActions, duckConstants } from '../duck';
import { SignUpForm, DetailForm, Agreement } from '../components';
import { Modal } from 'reactstrap';
import './AppContent.css';

class AppContent extends Component {

  toggle() {
    const { authStatus, user: { registerStatus }, unregister } = this.props;
    if (authStatus === duckConstants.authState.SIGNING_UP && 
      registerStatus === duckConstants.registerState.ANONYMOUS) {
      unregister();
    }
  }

  get content() {
    const { 
      user, 
      errors, 
      submitUserData, 
      updateUserData, 
      lastStep, 
      confirm, 
      unregister
    } = this.props;
    
    const { registerStatus, credentials, infor } = user;

    switch (registerStatus) {
      case duckConstants.registerState.ANONYMOUS:
        return (
          <SignUpForm 
            onSubmit={submitUserData} 
            data={credentials}
            errors={errors}
            onChange={updateUserData}
          />
        );
      
      case duckConstants.registerState.REGISTERED:
        return (
          <DetailForm 
            onSubmit={submitUserData} 
            data={infor} 
            errors={errors}
            onChange={updateUserData}
            back={lastStep}
            credentials={credentials}
          />);
      
      case duckConstants.registerState.UPDATED:
        return (
          <Agreement 
            submit={confirm}
            cancel={unregister}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { authStatus } = this.props;
    return (
      <div>
        <Modal
          className="custom-modal-diaglog"
          contentClassName="custom-modal-content"
          isOpen={authStatus === duckConstants.authState.SIGNING_UP}
          toggle={this.toggle.bind(this)}
        >
          {this.content}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authStatus: state.authStatus,
    user: state.user,
    errors: state.errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitUserData: compose(dispatch, duckActions.submitUserData),
    updateUserData: compose(dispatch, duckActions.updateUserData),
    confirm: compose(dispatch, duckActions.confirm),
    lastStep: compose(dispatch, duckActions.lastStep),
    unregister: compose(dispatch, duckActions.unregister)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);