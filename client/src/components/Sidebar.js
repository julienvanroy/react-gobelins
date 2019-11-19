import React from "react";
import {NavLink} from "react-router-dom";

import {Nav} from "reactstrap";

const Sidebar = () => {
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
              to="/admin/dashboard"
              className="nav-link"
              activeClassName="active"
            >
              <i
                className="tim-icons icon-chart-pie-36"/><p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              <i
                className="tim-icons icon-chart-pie-36"/><p>Home</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  )
};

export default Sidebar;
