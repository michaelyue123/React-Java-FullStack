import axios from "axios";

export interface IListToDo {
  id: number;
  description: string;
  targetDate: string;
  completed: boolean;
  username: string;
}

const executeTodoDataService = async (name: string): Promise<IListToDo[]> => {
  try {
    const apiUrl = `http://localhost:8080/users/${name}/todos`;

    const response = await axios({
      url: apiUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const TodoDataService = {
  executeTodoDataService,
};
