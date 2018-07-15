import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { duckActions, duckConstants } from '../duck';
import { SignUpForm, DetailForm, Agreement } from '../components';
import { Modal } from 'reactstrap';
import './AppContent.css';

class AppContent extends Component {

  get content() {
    const { user, errors, submitUserData, updateUserData, lastStep, confirm } = this.props;
    const { registerStatus, credentials, infor } = user;

    switch (registerStatus) {
      case duckConstants.signingState.GET_STARTED:
        return (
          <SignUpForm 
            onSubmit={submitUserData} 
            data={credentials}
            errors={errors}
            type='credentials' 
            onChange={updateUserData}
          />
        );
      
      case duckConstants.signingState.REGISTERED:
        return (
          <DetailForm 
            onSubmit={submitUserData} 
            data={infor} 
            errors={errors}
            type='infor' 
            onChange={updateUserData}
            back={lastStep}
            account_type={credentials.account_type}
            name={`${credentials.first_name} ${credentials.last_name}`}
          />);
      
      case duckConstants.signingState.UPDATED:
        return (
          <Agreement 
            accept={() => confirm(duckConstants.signingState.ACCEPTED)}
            cancel={() => confirm(duckConstants.signingState.UNACCEPTED)}
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
    lastStep: compose(dispatch, duckActions.lastStep)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);