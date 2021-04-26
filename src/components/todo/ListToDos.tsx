import React, { useState } from "react";

interface ListToDosProps {}

const ListToDos: React.FC<ListToDosProps> = ({}) => {
  const [todo] = useState([
    {
      id: 1,
      description: "Learn React",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: "dsdasdasd",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: "ffdasdasdas",
      done: false,
      targetDate: new Date(),
    },
  ]);

  return (
    <div>
      <h1>List Todos</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.done.toString()}</td>
                <td>{item.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToDos;
