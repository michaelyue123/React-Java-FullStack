import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface IWelcomeProps {
  name: string;
}

interface IWelcomeDetailProps extends RouteComponentProps<IWelcomeProps> {}

const Welcome: React.FC<IWelcomeDetailProps> = ({ match }) => {
  return (
    <div
      style={{ textAlign: "center", margin: "10vw, auto", fontSize: "1.2em" }}
    >
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {match.params.name}. You can manage your todos{" "}
        <Link to="/todos">here</Link>.
      </div>
    </div>
  );
};

export default Welcome;
