import React from 'react'
import './TaskList.css'
import '../tooltip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'

const TaskList = ({ tasks, onDelete, onEdit, onTaskCompleted }) => {
  const sortedTasks = _.orderBy(tasks, 'status', 'desc')

  return (
    <div className="taskList">
      {sortedTasks.map((t) => (
        <div
          className="task"
          key={t.id}
          style={{
            backgroundColor:
              t.status === 'incomplete' ? 'rgba(255, 6, 35, 0.518)' : 'green',
          }}
        >
          {t.status === 'incomplete' && (
            <div
              className="completeTask"
              onClick={() => onTaskCompleted(t)}
              data-tooltip="task complate"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
          <div className="taskText">{t.task}</div>
          <div
            className="editTask"
            onClick={() => onEdit(t)}
            data-tooltip="edit"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          <div
            className="deleteTask"
            data-tooltip="delete"
            onClick={() => onDelete(t)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
