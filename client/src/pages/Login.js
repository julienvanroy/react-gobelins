import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as LoginActions from '../actions/login';
import FormUser from "../components/FormUser";

const Login = ({value, actions}) => {
  const handleForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', value.user)
      .then(res => {
        if (res.data.isConnected) {
          actions.setUser(value.user);
          actions.setAdmin(res.data.isAdmin);
          actions.setAuthenticated(true);
          actions.setHasError(false, '');
        }else {
          actions.setHasError(true, 'Identifiant ou mot de passe incorrect');
        }
      })
  };

  const setUsername = (e) => {
    const user = value.user || {};
    user.username = e.target.value;
    actions.setUser(user)
  }

  const setPassword = (e) => {
    const user = value.user || {};
    user.password = e.target.value;
    actions.setUser(user)
  }

  if (value.user && value.authenticated) {
    return (
      <Redirect to="/"/>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-7 center-block">
          <div className="card connexion">
            <div className="card-header">
              <h1 className="title">Connexion</h1>
            </div>
            <FormUser value={value} handleForm={handleForm} setPassword={setPassword} setUsername={setUsername} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.login
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
