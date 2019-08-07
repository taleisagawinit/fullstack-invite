import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import InviteUser from './InviteUser'
import Going from './Going'
import NotGoing from './NotGoing'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { invite } from '../actions/invite.actions'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <Link to="/"><li>Invite User</li></Link>
            <Link to="/going"><li>Going</li></Link>
            <Link to="/notgoing"><li>NotGoing</li></Link>
          </ul>
        </nav>
        <div className="container">
          <Route exact path="/" component={InviteUser}></Route>
          <Route exact path="/going" component={Going}></Route>
          <Route exact path="/notgoing" component={NotGoing}></Route>
        </div>
      </Router>
      
    </Provider>
  )
}