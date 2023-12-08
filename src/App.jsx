
import './App.css'
import { AddTaskFrom } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'

function App() {


  return (
    <>
      <main className="flex flex-col items-center justify-start min-h-screen gap-16 bg-slate-500">
        <header className="flex flex-col items-center justify-center w-full h-20 bg-slate-800">
          <h1 className="text-3xl text-slate-200">Task Manager</h1>
        </header>
        <AddTaskFrom />
        <TaskList />
      </main>
    </>
  );
}

export default App
