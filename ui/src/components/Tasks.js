import React from 'react'
import EditTaskModal from './EditTaskModal'

export const Tasks = ({tasks, deleteTask, taskEdited}) => {

    console.log('tasks length:::', tasks)
    if (tasks.length === 0) return null

    const TaskRow = (task,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{task._id}</td>
                  <td>{task.task}</td>
                  <td>{task.assignee}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                        {task.status}
                        </div>
                        <div className="col-md-3">
                            <EditTaskModal task={task} taskEdited={taskEdited}/>
                        </div>
                        <div className="col-md-3">
                          <button type="button" onClick={(e) => deleteTask(task._id)} className="btn btn-success right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const taskTable = tasks.map((task,index) => TaskRow(task,index))

    return(
        <div className="container">
            <h2>Database</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>MOTD Id</th>
                    <th>Author</th>
                    <th>MOTD</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {taskTable}
                </tbody>
            </table>
        </div>
    )
}