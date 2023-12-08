import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";

export const AddTaskFrom = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Math.random(), title: newTaskTitle }));
    setNewTaskTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
