import './App.css'
import {tasks} from './data/tasks'

const completedTasks = tasks.filter((task) =>  task.state === "completed");
const remainingTasks = tasks.filter((task) => task.state !== "completed");

function App() {

  return (
    <main>
      <section>
        <h3>Current Tasks ({remainingTasks.length})</h3>
          <ul>
            {remainingTasks.map((task) =>
            <li key={task.id}>
              <h4>{task.title}</h4>
              <div>{task.state}</div>
              <p>Priority: {task.priority}</p>
              <p>Est. Time: {task.estimatedTime}</p>
            </li>)}
          </ul>
      </section>

      <section>
        <h3>Current Tasks ({completedTasks.length})</h3>
          <ul>
            {completedTasks.map((task) =>
            <li key={task.id}>
              <h4>{task.title}</h4>
              <div>{task.state}</div>
              <p>Priority: {task.priority}</p>
              <p>Est. Time: {task.estimatedTime}</p>
            </li>)}
          </ul>
      </section>
    </main>
  )
}

export default App
