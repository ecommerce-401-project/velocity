import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from '../signup';
import SignIn from '../signin';
import './style.css';

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
        <div className="subheading nav-link pointer" onClick={this.toggle}>
          Sign in
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>{this.state.switch ? <SignIn toggle={this.toggle}/> : <SignUp toggle={this.toggle}/>}</ModalBody>

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
            <Button className="dark-button" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AuthModal;
