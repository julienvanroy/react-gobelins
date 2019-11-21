import React from "react";
import {NavLink} from "react-router-dom";

import {Nav} from "reactstrap";

import {connect} from 'react-redux';

const Sidebar = ({value}) => {
  return (
    <div className="sidebar" data="blue">
      <div className="sidebar-wrapper">
        <div className="logo">
          <NavLink
            to="/"
            className="simple-text logo-mini"
          >
            CTC
          </NavLink>
          <NavLink
            to="/"
            className="simple-text logo-normal"
          >
            CrypteaCoin
          </NavLink>
        </div>
        <Nav>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
            ><p>Home</p>
            </NavLink>
          </li>
          {value.authenticated === true && <li>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
            ><p>Favoris</p>
            </NavLink>
          </li>
          }
          {(value.authenticated === true && value.admin === true) && <li>
            <NavLink
              to="/admin"
              className="nav-link"
              activeClassName="active"
            ><p>Administration</p>
            </NavLink>
          </li>
          }
        </Nav>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  value: state.login
});

export default connect(
  mapStateToProps,
)(Sidebar);
