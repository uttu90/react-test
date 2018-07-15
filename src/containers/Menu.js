import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { duckActions, duckConstants } from '../duck';

class Menu extends Component {
  render() {
    const { authStatus, user, signUp, signOut } = this.props;
    const { account_type, first_name, last_name } = user.credentials;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">react-test</NavbarBrand>
          {
            authStatus !== duckConstants.authState.AUTHORIZED ? (
            <Nav className="ml-auto" navbar>
              <NavItem onClick={signUp}>
                <NavLink> Sign up</NavLink>
              </NavItem>
            </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    {`Welcome ${account_type.toLowerCase()} ${first_name} ${last_name}`}
                  </NavLink>
                </NavItem>
                <NavItem onClick={signOut}>
                  <NavLink>Sign out</NavLink>
                </NavItem>
              </Nav>
            )
          }
      </Navbar>
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