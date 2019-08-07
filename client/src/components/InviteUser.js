import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { invite, going, notgoing } from '../actions/invite.actions'
import MaterialIcon from 'material-icons-react'

export default props => {
  const user = useSelector(appState => appState.invite)
  const isgoing = useSelector(appState => appState.going)
  const isnotgoing = useSelector(appState => appState.notgoing)

  useEffect(() => {
    invite()
    
  }, [])

  function setGoing() {
    going(user.id)
  }

  function setNotGoing() {
    notgoing(user.id)

  }

  
  return (
    <div>
      <div className="count">
        <p>Going: {isgoing.length}</p>
        <p>Not Going: {isnotgoing.length}</p>
      </div>
    <div className="card">
      <div className="pic">
        <img src={user.image} alt={user.fname}/>
      </div>
      <div className="info">
        <p><b>Name:</b> {user.fname} {user.lname}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Email:</b> {user.email}</p>
      <div className="buttons">
        <button className="notgoing" onClick={setNotGoing}>
          <MaterialIcon id="clear" icon="clear" color="white"/>
        </button>
        <button className="going" onClick={setGoing}>
          <MaterialIcon id="done" icon="done" color="white"/>
        </button>
      </div>
      </div>
      
      </div>
    </div>
  )
}