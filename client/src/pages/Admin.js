import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as LoginActions from '../actions/login';
import {Table, Button} from "reactstrap";

const Admin = ({value, actions}) => {
  console.log(value)
  if (value.user === null || value.authenticated !== true || value.admin !== true) {
    return (
      <Redirect to="/"/>
    );
  } else {
    return (
      <div className="card">
        <div className="card-header">
          <Button color="success"><Link to="/creer">Créer un user</Link></Button>
        </div>
        <div className="card-body">
          <Table responsive>
            <thead>
            <tr>
              <th className="text-center">Avatar</th>
              <th className="text-center">Username</th>
              <th className="text-center">Nom</th>
              <th className="text-center">Prénom</th>
              <th className="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <Button color="success">
              Edit
            </Button>
            <Button color="danger">
              Delete
            </Button>
            </tbody>
          </Table>
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
)(Admin);
