export const DeleteButton = ({handleDelete, task}) => {
    
  return <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => handleDelete(task.id)}>Delete</button>;
};

export const UpdateButton = ({handleUpdate, task}) => {
  return (
    <button
    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={() =>
        handleUpdate(task.id, { id: task.id, title: "Updated Task" })
      }
    >
      Update
    </button>
  );
};
