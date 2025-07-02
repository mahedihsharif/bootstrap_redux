export interface ITask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
  assignTo: string | null;
}

export interface IUser {
  id: string;
  username: string;
}
