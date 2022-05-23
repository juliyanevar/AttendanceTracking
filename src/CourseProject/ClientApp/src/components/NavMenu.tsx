import React from "react";
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
// import "./NavMenu.css";


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
          dark
          >
          <Container>
            <NavbarBrand tag={Link} to="/home">
              Attendance tracking
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={this.state.isOpen}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                {showAdmin && (
                  <Collapse
                    className="d-sm-inline-flex flex-sm-row-reverse"
                    isOpen={this.state.isOpen}
                    navbar
                  >
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-light"
                        to="/AdminPage"
                      >
                        Administration Page
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
                        className="text-light"
                        to="/Attendance"
                      >
                        Attendance
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-light"
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
                      className="text-light"
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
                   <NavItem>
                      <NavLink tag={Link} className="text-light" to="/SignOut">
                        Sign Out
                      </NavLink>
                    </NavItem>
                  <NavItem>
                      <NavLink tag={Link} className="text-light" to="/EditCurrentUser">
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                  <NavLink tag={Link} className="text-light" to="/Home">
                    Home
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
                      <NavLink tag={Link} className="text-light" to="/SignUp">
                        Sign Up
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} className="text-light" to="/">
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
