import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { Motds } from './Motds'
import CreateMotd from './CreateMotd'
import { getAllMotds, deleteMotd, fetchSettings } from '../services/MotdService'

function Home() {

  const [motds, setMotds] = useState([])
  const [numberOfMotds, setNumberOfMotds] = useState([])
  const [isMotdEdited, setMotdEdited] = useState(false)

  useEffect(() => {
    getAllMotds().then(motds => {
        console.log(motds)
        setMotds(motds)
      });
  }, [numberOfMotds, isMotdEdited])


  function delMotd(motdId) {
      deleteMotd(motdId).then(response => {
        console.log(response)
        setNumberOfMotds(numberOfMotds - 1)

      });
  }

  function motdCreated() {
    setNumberOfMotds(numberOfMotds + 1)
  }

  function motdEdited(res) {
     setMotdEdited(res)
  }
    
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateMotd motdCreated={motdCreated}></CreateMotd>
          </div>
        </div>
      </div>
      <div className="container mrgnbtm">
        <Motds motds={motds} deleteMotd={delMotd} motdEdited={motdEdited}></Motds>
     </div> 
  </div>
  );
}

export default Home;
