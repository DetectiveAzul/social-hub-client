import React, { Component } from 'react';
//Components
import LoginContainer from './containers/login/LoginContainer';
import App from './App';
//Redux
import { connect } from 'react-redux';
import { logIn } from './redux/actions/admin_actions';
import { addToken } from './redux/actions/token_actions';

//Cookies
import { withCookies } from 'react-cookie';

class Root extends Component {
  componentDidMount() {
    this.checkIfSessionIsActive();
  }

  checkIfSessionIsActive() {
    const admin = this.props.cookies.get('admin');
    const session = this.props.cookies.get('session');
    if (admin && session) {
      this.props.dispatch(addToken(session));
      this.props.dispatch(
        logIn({
          email: admin
        })
      );
      
    }
  }

  render() {
    switch (this.props.admin.connected) {
      case true:
        return <App cookies={this.props.cookies} />;
      default:
        return <LoginContainer cookies={this.props.cookies} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

Root = connect(mapStateToProps)(Root);
export default withCookies(Root);
