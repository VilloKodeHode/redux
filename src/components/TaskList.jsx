import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/slices/taskSlice";
import {DeleteButton, UpdateButton} from "../components/Buttons"

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdate = (taskId, updatedTask) => {
    dispatch(updateTask({ id: taskId, updatedTask }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ul className="flex flex-wrap justify-center gap-8">
        {tasks.map((task) => (
          <li className="grid gap-4 p-8 text-center border-2" key={task.id}>
            {task.title}{" "}
            <div>
            <DeleteButton handleDelete={handleDelete} task={task}/>
            <UpdateButton handleUpdate={handleUpdate} task={task}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
