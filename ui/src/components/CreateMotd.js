import React from 'react'
import { useForm } from "react-hook-form";
import { createMotd } from '../services/MotdService'

export default function CreateMotd(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createMotd(data).then(response => {
            props.motdCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Create Motd</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">MOTD</label>
                            <input {...register("motd")} placeholder="Message of the day" className="form-control" name="motd" id="motd" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Author</label>
                            <input {...register("author")} placeholder="Insert Author here" className="form-control" name="author" id="author" />
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