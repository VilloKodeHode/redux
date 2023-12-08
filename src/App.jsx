
import './App.css'
import { AddTaskFrom } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'

function App() {


  return (
    <>
<main className='flex flex-col items-center justify-start'>
  <h1>Task Manager</h1>
  <AddTaskFrom/>
  <TaskList/>
</main>
    </>
  )
}

export default App
