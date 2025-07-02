import { Button } from "@/components/ui/button";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import { cn } from "./../../../lib/utils";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  // const dispatch = useAppDispatch();
  // // const users = useAppSelector(selectUser);
  // const user = users.find((user) => user.id === task.assignTo);
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>

        <div className="flex gap-3 items-center">
          <Button
            variant="link"
            className="p-0 text-red-500"
            // onClick={() => dispatch(deleteTask(task.id))}
          >
            <Trash2 />
          </Button>
          {/* <Checkbox onClick={() => dispatch(toggleTask(task.id))} /> */}
        </div>
      </div>
      {/* <p>Assign To- {user ? user.username : "no user assign"}</p>
      <p className="mt-5">{task.description}</p> */}
    </div>
  );
};

export default TaskCard;
