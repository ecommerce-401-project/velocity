import React from 'react';
import AuthModal from '../auth-modal';
import logo from './logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './style.css';

export default class Navigation extends React.Component {
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
    return (
      <div>
        <Navbar expand="sm" className="navbar shadow" dark>
          <NavbarBrand href="/" className="nav-link subheading">
          <img src={logo} className='img-fluid mb-5'/>

            {' '}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/" className="subheading">
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/library" className="subheading">
                  Library
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" className="subheading">
                  About
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className="blue">
                <AuthModal />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
