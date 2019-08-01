import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from '../signup';
import SignIn from '../signin';
// import {Button} from reactstrap;
import { connect } from 'react-redux';

import './style.css';

const buttontext = {
  fontSize: '13px',
  fontWeight: '700',
  textTransform: 'uppercase',
};

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      switch: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }
  toggleSwitch = () => {
    this.setState(prevState => ({
      switch: !prevState.switch,
    }));
  };
  render() {
    return (
      <div>
        <div
          className="subheading nav-link pointer"
          onClick={this.toggle}
          style={buttontext}
        >
          Sign in
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            {this.state.switch ? (
              <SignIn toggle={this.toggle} />
            ) : (
              <SignUp toggle={this.toggle} />
            )}
          </ModalBody>

          <div
            className="small text-center pointer"
            onClick={this.toggleSwitch}
          >
            {' '}
            {this.state.switch ? (
              <p>Not Registered? Sign up!</p>
            ) : (
              <p>Already a user? Sign in.</p>
            )}
          </div>
          <ModalFooter>
            <Button
              className="light-button"
              style={buttontext}
              onClick={this.toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  games: state.games,
  currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  null
)(AuthModal);
