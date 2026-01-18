import axios from "axios";
import { nanoid } from "nanoid";

export const customFetch = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

export const getAll = async () => {
  try {
    const response = await customFetch.get("");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getOne = async () => {
  try {
    const response = await customFetch.get("/1");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
export const create = async () => {
  try {
    const response = await customFetch.post("", {
      id: nanoid(),
      title: "non non no",
      isDone: false,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default customFetch;
