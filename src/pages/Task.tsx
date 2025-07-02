import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";

const Task = () => {
  // const tasks = useAppSelector(selectTasks);
  // const dispatch = useAppDispatch();
  const { data, isLoading } = useGetTasksQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between mb-3">
        <h1 className="mb-3">Tasks</h1>
        <Tabs defaultValue="all" className="ml-auto mr-5">
          <TabsList>
            <TabsTrigger
              value="all"
              // onClick={() => dispatch(updateFilter("all"))}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="low"
              // onClick={() => dispatch(updateFilter("low"))}
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              value="medium"
              // onClick={() => dispatch(updateFilter("medium"))}
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              value="high"
              // onClick={() => dispatch(updateFilter("high"))}
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {/* {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))} */}

      {!isLoading &&
        data.tasks.map((task: ITask) => (
          <TaskCard task={task} key={task._id} />
        ))}
    </div>
  );
};

export default Task;
