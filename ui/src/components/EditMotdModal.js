import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { editMotd } from '../services/MotdService'

export default function EditMotdModal({motd, motdEdited}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      editMotd(data).then(response => {
        motdEdited(response);
        setShow(false);
    });
    };
    console.log(handleSubmit)
  
    return (
      <>
        <Button id="editbutton" variant="btn btn-outline-warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Motd Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>

           
            <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="motdId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={motd.id} name="id" id="id" disabled placeholder="Can't modify" />
                </div>
                </div>


            <div className="row">
                <div className="form-group col-md-8">
                    <label htmlFor="motd">MOTD</label>
                    <input {...register("motd")} type="text" className="form-control" defaultValue={motd.motd} name="motd" id="motd" placeholder="Message of the day" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-8">
                    <label htmlFor="author">Author</label>
                    <input {...register("author")} type="text" className="form-control" defaultValue={motd.author} name="author" id="author" placeholder="Insert author here" />
                </div>
            </div>
{/*

THIS IS OPTIONAL STATUS


            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="status">Status:</label>
                    <select {...register("status")} name="status" defaultValue={motd.status} className="form-control" id="status">
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