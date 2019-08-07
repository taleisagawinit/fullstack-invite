import { createStore } from 'redux'

import inviteReducer from './reducers/invite.reducer'

const store = createStore(inviteReducer)

export default store