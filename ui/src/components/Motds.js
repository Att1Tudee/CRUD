import React from 'react'
import EditMotdModal from './EditMotdModal'

export const Motds = ({motds, deleteMotd, motdEdited}) => {

    if (motds.length === 0) return null

    const MotdRow = (motd,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>

{/*         No need for id in database field

                  <td>{motd._id}</td>

*/}
                  <td>{motd.motd}</td>
                  <td>{motd.author}</td>
                  <td>
                    <div className="row">

{/*                     THIS IS COMMENTED OUT DUE STATUS NOT NEEDED NOW 
                       
                         <div className="col-md-1">
                         {motd.status}
                         </div>
                         
*/}

                        <div className="col-md-4">
                            <EditMotdModal motd={motd} motdEdited={motdEdited}/>
                        </div>
                        <div className="col-md-5">
                          <button id="deletebutton" type="button" onClick={(e) => deleteMotd(motd._id)} className="btn btn-outline-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const motdTable = motds.map((motd,index) => MotdRow(motd,index))

    return(
        <div className="container">
            <h2 id="databasetitle">Database</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>MOTD</th>
                    <th>Author</th>
                    {/* THIS IS COMMENTED OUT DUE STATUS NOT NEEDED NOW <th>Status</th>*/}
                </tr>
                </thead>
                <tbody>
                    {motdTable}
                </tbody>
            </table>
        </div>
    )
}