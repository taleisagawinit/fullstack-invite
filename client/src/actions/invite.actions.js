import store from '../store'
import axios from 'axios'

export function invite() {
  axios.get('https://randomuser.me/api').then(resp => {
    const data = resp.data.results[0]
    
    const user = {
      fname: data.name.first,
      lname: data.name.last,
      email: data.email,
      phone: data.phone,
      image: data.picture.large,
      id: data.login.uuid
    }
    store.dispatch({
      type: 'INVITE',
      payload: user
    })
  })
}

export function going(id) {
  axios.post('/api/going',store.getState().invite).then(resp => {
    console.log(resp.data)
    store.dispatch({
       type: 'GOING',
    payload: resp.data.user
    })
  })
  invite()
}

export function notgoing(id) {
  axios.post('/api/notgoing',store.getState().invite).then(resp => {
  store.dispatch({
      type: 'NOT_GOING',
      payload: resp.data.user
    })
  })
  invite()
}
