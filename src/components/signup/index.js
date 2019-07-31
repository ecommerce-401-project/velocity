import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/user-actions';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.userSignUp(this.state);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <h1 class="large">Register</h1>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />

            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />

            <Input
              type="submit"
              className="dark-button"
              onClick={this.props.toggle}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  userSignUp: userInfo => dispatch(actions.userSignUp(userInfo)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
