import axios from "axios";

const executeHelloWorldService = async (name: string) => {
  try {
    const apiUrl = `http://localhost:8080/hello-world/path-variable/${name}`;

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


export const HelloWorldService = {
  executeHelloWorldService,
};
