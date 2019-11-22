import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from "../actions/login";

import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav,
  Navbar,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import ReactImageFallback from "react-image-fallback";

const NavBar = ({value, actions}) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar
        className={`navbar navbar-absolute ${toggle === true ? "bg-white" : "navbar-transparent"}`}
        expand="lg"
      >
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div
              className="navbar-toggle d-inline"
            >
              <button
                className={`navbar-toggler ${open === true && "toggled"}`}
                type="button"
                onClick={() => setOpen(!open)}
              >
                <span className="navbar-toggler-bar bar1"/>
                <span className="navbar-toggler-bar bar2"/>
                <span className="navbar-toggler-bar bar3"/>
              </button>
            </div>
          </div>
          {value.authenticated === true ? <>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={() => setToggle(!toggle)}
            >
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
            </button>
            <Collapse navbar isOpen={toggle}>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="flex nav"
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className="photo">
                      <ReactImageFallback
                        src={value.user.avatar}
                        fallbackImage="assets/img/default-avatar.jpg"
                        width="10"
                        height="30"
                      />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block"/>
                    <p>{value.user.username}</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <DropdownItem divider tag="li"/>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item"
                                    onClick={() => actions()}>Log
                        out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none"/>
              </Nav>
            </Collapse></> : <div><Link to="/login">Login</Link></div>}
        </div>
      </Navbar>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.login
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(logout, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
