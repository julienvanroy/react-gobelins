import React from 'react';
import {useState, useEffect} from 'react'

import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav,
  Navbar,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(
    () => {
      if(open === true) {
        document.getElementsByTagName( 'html' )[0].classList.add("nav-open");
      } else {
        document.getElementsByTagName( 'html' )[0].classList.remove("nav-open");
      }
    },
    [open],
  );
  return (
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
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={toggle}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src={require("../assets/img/anime3.png")}/>
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"/>
                  <p className="d-lg-none">Nom Utilisateur</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li"/>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none"/>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
  );
};

export default NavBar;
