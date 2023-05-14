import { useEffect, useState } from 'react'
import Settings from './settings/settings'
import { useTheme } from './themeContext'
import './App.css'
import AddTask from './AddTask/AddTask'
import TaskList from './tasks/taskList'

function Todo() {
  const theme = useTheme()
  const bg_change = theme === 'dark' ? '#282c34' : '#abaeb6'

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
  const [taskEdit, setTaskEdit] = useState('')

  const handleTaskInput = (task) => {
    if (!task) {
      setTaskEdit('')
      return
    }
    if (taskEdit) {
      const existingTasks = [...tasks]
      const index = existingTasks.indexOf(taskEdit)
      existingTasks.splice(index, 1, task)
      setTasks(existingTasks)
      setTaskEdit('')
      return
    }
    setTasks((existingTasks) => [...existingTasks, task])
  }

  const handleDelete = (task) => {
    const existTasks = [...tasks]
    const index = existTasks.indexOf(task)
    if (task.id === taskEdit.id) setTaskEdit('')
    existTasks.splice(index, 1)
    setTasks(existTasks)
  }

  const handleEdit = (task) => {
    const existTasks = [...tasks]
    const index = existTasks.indexOf(task)
    setTaskEdit(existTasks.splice(index, 1)[0])
  }

  const handleTaskComplete = (task) => {
    const existingTasks = [...tasks]
    const index = existingTasks.indexOf(task)
    task.status = 'complete'
    existingTasks.splice(index, 1, task)
    setTasks(existingTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  return (
    <div className="App" style={{ background: bg_change }}>
      <div className="content">
        <Settings tasks={tasks} />
        <AddTask onAddClicked={handleTaskInput} taskEdit={taskEdit} />
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onTaskCompleted={handleTaskComplete}
        />
      </div>
    </div>
  )
}

export default Todo
