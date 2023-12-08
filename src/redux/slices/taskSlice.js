import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasks")
  return storedTasks ? JSON.parse(storedTasks) : []
}

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadTasksFromLocalStorage,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveTasksToLocalStorage(state)
    },
    deleteTask: (state, action) => {
      state = state.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state)
      return state
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.findIndex((task) => task.id === id);
      if (index !== -1) {
        state[index] = updatedTask;
        saveTasksToLocalStorage(state)
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
