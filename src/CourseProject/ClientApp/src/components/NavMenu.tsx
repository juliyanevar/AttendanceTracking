import React, { useEffect, useContext, useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";


export default class NavMenu extends React.PureComponent<
  {},
  {
    isOpen: boolean;
    currentUser: boolean;
    showAdmin: boolean;
    showTeacher: boolean;
    showStudent: boolean;
  }
> {
  public state = {
    isOpen: false,
    currentUser: false,
    showAdmin: false,
    showTeacher: false,
    showStudent: false,
  };

  componentDidMount() {
    const username = localStorage.getItem("username");
    const rolename = localStorage.getItem("rolename");
    console.log(username);

    const user = username == null || username == undefined ? false : true;

    if (username && rolename) {
      this.setState({
        currentUser: user,
        showAdmin: rolename.includes("admin"),
        showTeacher: rolename.includes("teacher"),
        showStudent: rolename.includes("student"),
      });
    }
  }

  public render() {
    const { currentUser, showAdmin, showTeacher, showStudent } = this.state;

    return (
      <header>
         <Navbar
          id="navbar"
          className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              Attendance tracking
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={this.state.isOpen}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Home">
                    Home
                  </NavLink>
                </NavItem>
                {showAdmin && (
                  <Collapse
                    className="d-sm-inline-flex flex-sm-row-reverse"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to="/AdminPage"
                      >
                        Administartion Page
                      </NavLink>
                    </NavItem>
                  </Collapse>
                )}

                {showTeacher && (
                  <Collapse
                    className="d-sm-inline-flex flex-sm-row-reverse"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to="/Attendance"
                      >
                        Attendance
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to="/GenerateQR"
                      >
                        Generate QR-code
                      </NavLink>
                    </NavItem>
                  </Collapse>
                )}

                {showStudent && (
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="text-dark"
                      to="/ButtonAttendance"
                    >
                      Attendance
                    </NavLink>
                  </NavItem>
                )}

                {currentUser ? (
                  <Collapse
                    className="d-sm-inline-flex flex-sm-row-reverse"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                  {/* <NavItem>
                    <Button
                      onClick={signout}
                      variant="text"
                      className="text-dark"
                    >
                      Sing Out
                    </Button>
                  </NavItem> */}
                   <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/SignOut">
                        Sign Out
                      </NavLink>
                    </NavItem>
                  <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/EditCurrentUser">
                        Profile
                      </NavLink>
                    </NavItem>
                  </Collapse>
                ) : (
                  <Collapse
                    className="d-sm-inline-flex flex-sm-row-reverse"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                    <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/SignUp">
                        Sign Up
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/">
                        Sign In
                      </NavLink>
                    </NavItem>
                  </Collapse>
                )}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header >
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}
