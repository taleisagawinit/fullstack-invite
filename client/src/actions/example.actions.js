import store from '../store'
import axios from 'axios'

export function invite() {
  axios.get('https://randomuser.me/api').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'ALL_INVITES',
      payload: resp.data.results[0]
    })
  })
}

// export function accept() {
//   console.log('im going')
//   store.dispatch({
//     type: 'GOING',
//     payload: userGoing
//   })
// }

// export function decline() {
//   console.log('im not going')
//   store.dispatch({
//     type: 'NOT_GOING',
//     payload: userNotGoing
//   })
// }
