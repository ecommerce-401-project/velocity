import React from 'react';
import AuthModal from '../auth-modal';
import logo from './logo.png'
import * as actions from '../../redux/actions/user-actions';

import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import './style.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const loggedIn = this.props.currentUser.token;

    return (
      <div>
        <Navbar expand="sm" className="navbar shadow" dark>
          <NavbarBrand href="/" className="nav-link subheading">
            <img src={logo} className='img-fluid mb-5' />

            {' '}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/" className="subheading">
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/library" className="subheading">
                  Library
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem >
                {loggedIn ? <div className="subheading nav-link pointer" onClick={()=> this.props.signOut()}>Sign Out</div> : <AuthModal />}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(actions.userSignOut()),
});
const mapStateToProps = state => ({
  games: state.games,
  currentUser: state.currentUser,

});



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);