import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { AuthenticationService } from "./AuthenticationService";

const AuthenticatedRoute: React.FC<RouteProps> = ({ ...routeProps }) => {
  if (AuthenticationService.isUserLoggedIn()) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AuthenticatedRoute;
