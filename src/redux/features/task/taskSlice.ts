import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "mahedi2304049sharif",
      title: "Frontend Development",
      description: "web course",
      dueDate: "30-06-2025",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "mahedsdfsf",
      title: "Backend Development",
      description: "Backend Course",
      dueDate: "30-06-2025",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
