import React, { Component } from 'react';
//Components
import { LoginForm } from './components/LoginForm';
//Redux
import { connect } from 'react-redux';
import { logIn, authFail } from '../../redux/actions/admin_actions';
import { addToken } from '../../redux/actions/token_actions';
//Helpers
import { postLogIn } from '../../helpers/apiCalls';

class LoginContainer extends Component {
  constructor() {
    super();
    this.userLogIn = this.userLogIn.bind(this);
  }

  userLogIn(event) {
    event.preventDefault();
    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    postLogIn(credentials).then(res => {
      if (res.status === 'success') {
        this.setCookies(credentials, res.token);
        this.props.dispatch(addToken(res.token));
        this.props.dispatch(logIn(credentials));
      } else {
        this.props.dispatch(authFail());
      }
    });
  }

  setCookies(credentials, session) {
    this.props.cookies.set('admin', credentials.username, {
      path: '/',
      expires: this.setExpirationDate()
    });
    this.props.cookies.set('session', session, {
      path: '/',
      expires: this.setExpirationDate()
    });
  }

  setExpirationDate() {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // in milliseconds
    return date;
  }

  render() {
    return <LoginForm userLogIn={this.userLogIn} failed={this.props.failed} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.admin,
    failed: state.admin.authfail,
    cookies: ownProps.cookies
  };
};

LoginContainer = connect(mapStateToProps)(LoginContainer);
export default LoginContainer;
