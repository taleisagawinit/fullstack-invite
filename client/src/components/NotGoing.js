import React from 'react'
import {useSelector} from 'react-redux'
import { getNotGoing } from '../actions/invite.actions'

export default props => {
  const isNotGoing = useSelector(appState => appState.notgoing)
  
  let i = 0;
  return (
    <div>
      <h1>not going </h1>
    <div className="content">
    {isNotGoing.map(person => 
    <div className="card" key={i+=1}>
        <div className="pic">
          <img src={person.image} alt={person.fname}/>
        </div>
      <div className="info">
        <p><b>Name:</b> {person.fname} {person.lname}</p>
        <p><b>Phone:</b> {person.phone}</p>
        <p className="email"><b>Email:</b> {person.email}</p>
      </div>
    </div>    
    )}
    </div>
    </div>
  )
}