import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import InviteUser from './InviteUser'
import Button from './Button'
import Count from './Count'

export default props => {
  return (
    <Provider store={store}>
      <div className="container">
        <Count/>
        <InviteUser />
        <Button />
      </div>
    </Provider>
  )
}