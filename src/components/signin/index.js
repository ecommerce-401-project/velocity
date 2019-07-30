import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/user-actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.userSignIn(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign In </h1>

          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSignIn: userInfo =>
    dispatch(actions.userSignIn(userInfo.username, userInfo.password)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
