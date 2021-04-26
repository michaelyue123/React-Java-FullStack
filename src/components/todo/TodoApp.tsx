import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/Login";
import Welcome from "../Welcome";
import Error from "../error/Error";
import ListToDos from "./ListToDos";
import Header from "../Header";
import Footer from "../Footer";
import Logout from "../auth/Logout";
import AuthenticatedRoute from "./AuthenticatedRoute";

const TodoApp: React.FC<{}> = () => {
  return (
    <div className="TodoApp">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <AuthenticatedRoute path="/logout" component={Logout} />
        <AuthenticatedRoute path="/todos" component={ListToDos} />
        <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

export default TodoApp;
