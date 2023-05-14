import React, { useEffect, useState } from 'react'
import './AddTask.css'
import { useTheme } from '../themeContext'

function AddTask({ onAddClicked, taskEdit }) {
  const theme = useTheme()
  const [input, setInput] = useState({ task: '', status: 'incomplete' })

  const generateId = () => {
    return `${new Date().getMinutes()}${new Date().getMilliseconds()}`
  }

  const handleInputChange = (e) => {
    setInput({ task: e.target.value, status: 'incomplete', id: generateId() })
  }

  const handleTaskAdd = () => {
    onAddClicked(input)
    setInput({ task: '', status: 'incomplete' })
  }

  // const handleKeypress = (e) => {
  //   if (e.keyCode === 13) handleTaskAdd()
  // }

  const handleCancel = () => {
    onAddClicked('')
    setInput({ task: '', status: 'incomplete' })
  }

  useEffect(() => {
    if (taskEdit) setInput(taskEdit)
  }, [taskEdit])

  const buttonStyle = () => {
    return {
      background: !input.task ? 'rgba(62, 93, 2, 0.74)' : 'rgb(134, 173, 58)',
      color: theme === 'light' ? 'black' : 'white',
    }
  }

  return (
    <div className="addTask">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="t-input"
          onChange={handleInputChange}
          // onKeyPress={handleKeypress}
          placeholder="Add new task"
          value={input.task}
          style={{
            color: theme === 'light' ? 'black' : 'white',
          }}
        />
        <button
          className="t-add"
          onClick={handleTaskAdd}
          style={buttonStyle()}
          disabled={!input.task && true}
        >
          {taskEdit !== '' ? 'EDIT' : 'ADD'}
        </button>
        {taskEdit && (
          <button
            className="t-cancel"
            style={{
              color: buttonStyle().color,
              backgroundColor: 'rgb(134, 173, 58)',
            }}
            onClick={handleCancel}
          >
            X
          </button>
        )}
      </form>
    </div>
  )
}

export default AddTask
