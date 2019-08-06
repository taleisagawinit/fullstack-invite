import React from 'react'
import { useSelector } from 'react-redux'
import MaterialIcon from 'material-icons-react'


export default props => {
  const [user, setUser] = React.useState('')
  const allInvites = useSelector(appState => appState.invites)
  const invite = allInvites[allInvites.length-1]

  return (
    <div>
    <div>
      {allInvites.length >= 1 ? (
        <div>
          <div>
            <img src={invite.picture.large} alt={invite.name}></img>
          </div>
          <div className="info">
            <p><strong>name:</strong> {invite.name.first} {invite.name.last}</p>
            <p><strong>phone:</strong> {invite.phone}</p>
            <p className="email"><strong>Email:</strong> {invite.email}</p>
          </div>
        </div>
      ) : ''}
      </div>
      <div>
      <button className="decline" >
         <MaterialIcon id="decline" color="white" icon="clear"/>
       </button>
      <button className="accept">
        <MaterialIcon id="accept" icon="done" color="white"/>
      </button>
      </div>
    </div>
  )
}