import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as LoginActions from '../actions/login';
import FormUser from "../components/FormUser";
import Error from "./Error";

const AddUser = ({value, actions}) => {
  const [user, setUser] = useState({});
  const [create, setCreate] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/admin/users/add', user, {headers: value.user})
      .then(res => {
        if (res.data.isCreated === true) {
          actions.setHasError(false, '');
          setCreate(true)
        } else {
          if (res.data.isExist === true) {
            actions.setHasError(true, 'Ce User exist déja');
          } else actions.setHasError(true, 'Remplissez tout les champs, svp');
        }
      });
  };

  const setUsername = (e) => {
    user.username = e.target.value;
    setUser(user)
  };

  const setPassword = (e) => {
    user.password = e.target.value;
    setUser(user)
  };

  if (value.authenticated === false || value.admin === false) {
    return (
      <Error title="401"
             message="Oh Oh Oh, calma... tu n'as pas accès à cette page"/>
    );
  } else if (create === true) {
    return (
      <Redirect to="/admin"/>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-7 center-block">
          <div className="card">
            <div className="card-header">
              <h1 className="title">Créer un User</h1>
            </div>
            <FormUser value={value} handleForm={handleForm}
                      setPassword={setPassword} setUsername={setUsername}/>
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
)(AddUser);
