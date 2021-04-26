import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import TodoApp from "./components/todo/TodoApp";
import "./App.css";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Router>
        <TodoApp />
      </Router>
    </div>
  );
};

export default App;
