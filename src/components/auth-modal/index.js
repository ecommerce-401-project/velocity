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
          <ModalBody>{this.state.switch ? <SignUp /> : <SignIn />}</ModalBody>

          <div className="small text-center" onClick={this.toggleSwitch}>
            {' '}
            {this.state.switch ? (
              <p>Already a user? Sign in.</p>
            ) : (
              <p>Not Registered? Sign up!</p>
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
