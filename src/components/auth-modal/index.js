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
        <Button className="dark-button subheading" onClick={this.toggle}>
          {/* {this.props.buttonLabel} */}
          Sign in
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>{this.state.switch ? <SignUp /> : <SignIn />}</ModalBody>
          <button onClick={this.toggleSwitch}>Already a user? sign-in</button>

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
