import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/TaskService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2 class="font-effect-fire">Create Motd</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Author</label>
                            <input {...register("task")} placeholder="Insert Author here" className="form-control" name="task" id="task" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">MOTD</label>
                            <input {...register("assignee")} placeholder="Message of the day" className="form-control" name="assignee" id="assignee" />
                        </div>
                    </div>
                    {/* 
                    
THIS IS THE OPTIONAL STATUS

                    <div className="row mrgnbtm">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">When to post:</label>
                            <select className="form-control" {...register("status")}>
                                <option>To Be Done</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                     </div>



                         */}

                    <input id="savebutton" type="submit" value= "Save" className="btn btn-outline-success mrgnbtm" />
                </form>
                </div>
            </div>
        </div>
    )
}