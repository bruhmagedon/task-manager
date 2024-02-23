import { createContext, useContext } from "react";
import { ITask } from "../interfaces/Interfaces";

// default
export const TASK_DATA: ITask[] = [
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
  {
    Id: 1,
    Status: 1,
    Message: "аа похуй",
  },
];

export const TaskContext = createContext<ITask[]>(TASK_DATA);

export const useTask = () => useContext(TaskContext);

export const TaskProvider = TaskContext.Provider;
