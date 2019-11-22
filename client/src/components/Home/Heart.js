import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";

import * as LoginActions from "../../actions/login";
import {connect} from "react-redux";
import axios from "axios";

const Heart = ({id, login, action}) => {
  const [load,setLoad] = useState(false);

  useEffect(() => {
    if (login.authenticated === true && load === false) {
      axios.get(`http://localhost:8081/auth/users/${login.user.username}`, {headers: login.user})
        .then(res => {
          action.setUser(res.data)
        }).finally(() => setLoad(true))
    }
  }, [load]);
  const isFav = () => {
    if(load === true){
      console.log(login.user)
      if(login.user.favorites.indexOf(id) !== -1){
        return true
      }else return false
    }else return false
  }
  return (
    <td className="text-right">
      {
        (isFav()) && <button className="btn btn-icon"><i className="fas fa-heart"/>
        </button>
      }

    </td>
  )
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Heart);

