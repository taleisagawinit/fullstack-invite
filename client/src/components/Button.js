import React from 'react'
import { invite } from '../actions/example.actions'
import MaterialIcon from 'material-icons-react'


export default props => {
  function sendInvite() {
    invite()
  }

  return (
      <div>
      <button onClick={sendInvite}>new user</button>
    </div>
     
  )
}