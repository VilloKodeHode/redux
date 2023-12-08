import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import { AddButton } from "./Buttons";

export const AddTaskFrom = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Math.random(), title: newTaskTitle }));
    setNewTaskTitle("");
  };
  return (
    <div className="flex items-center justify-center w-full gap-4">
      <input
        className="p-2 border rounded"
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <AddButton handleAddTask={handleAddTask} />
    </div>
  );
};
