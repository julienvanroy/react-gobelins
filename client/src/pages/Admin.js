import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as AdminActions from '../actions/admin';
import {Table} from "reactstrap";

import Error from "./Error";
import TableBodyUser from "../components/Admin/TableBodyUser";
import TableHeadUser from "../components/Admin/TableHeadUser";

const Admin = ({login, admin, actions}) => {
  const [load, setLoad] = useState(false)
   useEffect( () => {
    if(load === false) {
      setLoad(true);
      axios.get('http://localhost:8081/admin/users',{headers: login.user})
        .then(res => {
          actions.setUsers(res.data)
        })
    }
  }, [load]);

  const removeUser = (username) => {
    axios.delete(`http://localhost:8081/admin/users/delete/${username}`, {headers: login.user})
      .then(res => {
        setLoad(false)
      })
  };

  if (login.authenticated === false || login.admin === false) {
    return (
      <Error title="401" message="Oh Oh Oh, calma... tu n'as pas accès à cette page"/>
    );
  } else {
    return (
      <div className="card">
        <div className="card-header">
          <Link to="/admin/user/add" className="btn btn-success">Créer un user</Link>
        </div>
        <div className="card-body">
          <Table responsive>
            <thead>
            <TableHeadUser />
            </thead>
            <tbody>
            { admin.users.length > 0 && admin.users.map((user,index) => <TableBodyUser key={index} {...user} removeUser={() => removeUser(user.username)} connected={login.user.username} />)}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AdminActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
