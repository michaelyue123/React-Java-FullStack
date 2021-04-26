import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AuthenticationService } from "./todo/AuthenticationService";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log(isUserLoggedIn);
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://www.in28minutes.com" className="navbar-brand">
              in28minutes
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/in28minutes">
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Header);
