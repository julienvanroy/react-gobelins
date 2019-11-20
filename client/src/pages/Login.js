import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as LoginActions from '../actions/login';

const Login = ({value, actions}) => {
  const handleForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', value.user)
      .then(res => {
        if (res.data.isConnected) {
          console.log(res.data.isAdmin)
          actions.setUser(value.user);
          actions.setAdmin(res.data.isAdmin);
          actions.setAuthenticated(true);
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
  console.log(value)
  if (value.user && value.authenticated) {
    return (
      <Redirect to="/"/>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-7 center-block">
          <div className="card">
            <div className="card-header">
              <h1 className="title">Connexion</h1>
            </div>

            <form className="connexion" onSubmit={e => handleForm(e)}>
              <div className="card-body">
                <div className="form-group">
                  <label>Identifiant :</label>
                  <input type="text" id="username" className="form-control"
                         onChange={e => setUsername(e)}/>
                </div>
                <div className="form-group">
                  <label>Mot de passe:</label>
                  <input type="password" id="password" name="password"
                         className="form-control"
                         onChange={e => setPassword(e)}/>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit"
                        className="btn btn-fill btn-primary animation-on-hover center-block"
                        name="login">Connexion
                </button>
              </div>
            </form>
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
