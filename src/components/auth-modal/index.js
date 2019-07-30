import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SignUp from '../signup';
import SignIn from '../signin';

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
    }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {/* {this.props.buttonLabel} */}
          SignUp
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>{this.state.switch ? <SignUp /> : <SignIn />}</ModalBody>
          <Button color="success" onClick={this.toggleSwitch}>
            Already a user? sign-in
          </Button>

          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AuthModal;
