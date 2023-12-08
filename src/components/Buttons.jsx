export const DeleteButton = ({ handleDelete, task }) => {
  return (
    <button
      className="border-2 hover:bg-slate-700"
      onClick={() => handleDelete(task.id)}
    >
      Delete
    </button>
  );
};

export const UpdateButton = ({ handleUpdate, task }) => {
  return (
    <button
      className=" bg-slate-600 hover:bg-slate-700"
      onClick={() =>
        handleUpdate(task.id, { id: task.id, title: "Updated Task" })
      }
    >
      Update
    </button>
  );
};

export const AddButton = ({ handleAddTask }) => {
  return (
    <button
      className=" bg-slate-800 hover:bg-slate-900"
      onClick={handleAddTask}
    >
      Add Task
    </button>
  );
};
