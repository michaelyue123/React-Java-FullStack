import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { HelloWorldService } from "./api/todo/HelloWorldService";

interface IWelcomeProps {
  name: string;
}

interface IWelcomeDetailProps extends RouteComponentProps<IWelcomeProps> {}

const Welcome: React.FC<IWelcomeDetailProps> = () => {
  const [welcomeMessage, setWelcomeMessage] = React.useState<string>("");

  const retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService("Michael")
      .then((response) => setWelcomeMessage(response.message))
      .catch((error) => {
        if (error != null) {
          const { status, data } = error.response;
          console.log(error.response);
          let message = "status: " + status + " " + data.message;
          setWelcomeMessage(message);
        }
      });
  };

  return (
    <div
      style={{ textAlign: "center", margin: "10vw, auto", fontSize: "1.2em" }}
    >
      <h1>Welcome!</h1>
      <div className="container">
        Click here to get a customized welcome message. &nbsp;
        <button
          onClick={retrieveWelcomeMessage}
          className="btn btn-primary"
          type="button"
        >
          Get Welcome Message
        </button>
        <div className="container">{welcomeMessage ? welcomeMessage : ""}</div>
      </div>
    </div>
  );
};

export default Welcome;
