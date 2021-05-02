import React, { useState, useEffect } from "react";
import { IListToDo, TodoDataService } from "../api/todo/TodoDataService";
import { AuthenticationService } from "./AuthenticationService";
import moment from "moment";

const ListToDos: React.FC<IListToDo> = () => {
  const [todo, setTodo] = useState<IListToDo[] | []>([]);

  // initial data fetching when page first renders
  useEffect(() => {
    async function fetchData() {
      let username = AuthenticationService.getLoggedInUserName();
      const response = await TodoDataService.executeTodoDataService(username);

      if (response) {
        setTodo(response);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>List Todos</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item: IListToDo) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{moment(item.targetDate).format("DD-MM_YYYY")}</td>
                <td>{item.completed.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToDos;
