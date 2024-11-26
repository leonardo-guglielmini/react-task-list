import './App.css'
import {tasks} from './data/tasks'

const completedTasks = tasks.filter((task) =>  task.state === "completed");
const remainingTasks = tasks.filter((task) => task.state !== "completed");

function App() {

  return (
    <main>
      <header className='header'>
        <h2>Task Manager</h2>
      </header>
      <div className='container'>
        <section className='remainingTasks'>
          <h3 className='currentTasks'>Current Tasks ({remainingTasks.length})</h3>
            <ul>
              {remainingTasks.map((task) =>
              <li className="task" key={task.id}>
                <h4 className='taskTitle'>{task.title}</h4>
                <div className="taskState">{task.state}</div>
                <p>Priority: {task.priority}</p>
                <p>Est. Time: {task.estimatedTime}</p>
              </li>)}
            </ul>
        </section>
        <hr></hr>
        <section className='completedTasks'>
          <h3 className='currentTasks'>Current Tasks ({completedTasks.length})</h3>
            <ul>
              {completedTasks.map((task) =>
              <li className="task" key={task.id}>
              <h4 className='taskTitle'>{task.title}</h4>
              <div className="taskState">{task.state}</div>
              <p>Priority: {task.priority}</p>
              <p>Est. Time: {task.estimatedTime}</p>
            </li>)}
            </ul>
        </section>
      </div>
    </main>
  )
}

export default App
