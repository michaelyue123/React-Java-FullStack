import React, { useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import { AuthenticationService } from "../todo/AuthenticationService";

const useStyles = makeStyles({
  textField: { marginBottom: "10px" },
});

const Login: React.FC<{}> = () => {
  const [credential, setCredential] = useState({
    username: "in28minutes",
    password: "",
    hasLoginFailed: false,
    showSuccessMessage: false,
  });
  const history = useHistory();
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const loginClicked = () => {
    if (
      // hard-code username and password
      credential.username === "in28minutes" &&
      credential.password === "dummy"
    ) {
      const { username, password } = credential;

      AuthenticationService.registerSuccessfulLogin(username, password);
      history.push(`/welcome/${credential.username}`);
      // setCredential((prev) => ({
      //   ...prev,
      //   showSuccessMessage: true,
      //   hasLoginFailed: false,
      // }));
    } else {
      setCredential((prev) => ({
        ...prev,
        hasLoginFailed: true,
        showSuccessMessage: false,
      }));
    }
  };

  const { username, password, hasLoginFailed, showSuccessMessage } = credential;

  return (
    <>
      <h1>Login</h1>
      {hasLoginFailed && (
        <div className="alert alert-warning" role="alert">
          Invalid Credentials
        </div>
      )}
      {showSuccessMessage && <div>Login Successful</div>}
      <br />
      Username:{" "}
      <TextField
        className={classes.textField}
        variant="outlined"
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      Password:{" "}
      <TextField
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />{" "}
      <Button
        variant="contained"
        style={{ marginTop: "10px" }}
        onClick={loginClicked}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
