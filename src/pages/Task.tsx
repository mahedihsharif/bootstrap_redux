import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Task = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between mb-3">
        <h1 className="mb-3">Tasks</h1>
        <AddTaskModal />
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Task;
