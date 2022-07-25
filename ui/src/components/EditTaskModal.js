import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { editTask } from '../services/TaskService'

export default function EditTaskModal({task, taskEdited}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      editTask(data).then(response => {
        taskEdited(response);
        setShow(false);
    });
    };
  
    return (
      <>
        <Button id="editbutton" variant="btn btn-outline-warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Task Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="taskId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={task.id} name="id" id="id" disabled placeholder="Can't modify" />
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-8">
                    <label htmlFor="task">Author</label>
                    <input {...register("task")} type="text" className="form-control" defaultValue={task.task} name="task" id="task" placeholder="Insert author here" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-8">
                    <label htmlFor="assignee">MOTD</label>
                    <input {...register("assignee")} type="text" className="form-control" defaultValue={task.assignee} name="assignee" id="assignee" placeholder="Message of the day" />
                </div>
            </div>
{/*

THIS IS OPTIONAL STATUS


            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="status">Status:</label>
                    <select {...register("status")} name="status" defaultValue={task.status} className="form-control" id="status">
                        <option>To Be Done</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>


*/}
            <div className="btncenter">
              <br></br>
              <input id="sendbutton" type="submit" value ="Send" className="btn btn-outline-success" />
            </div>
            </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
}