const initialState = {
  invite: {},
  going: [],
  notgoing: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INVITE':
      return  {
        ...state, invite:action.payload,
    }; case 'GOING':
      return  {
        ...state, 
        going: [...state.going, action.payload],
    }; case 'NOT_GOING':
    return  {
      ...state, 
      notgoing: [...state.notgoing, action.payload],
  } 
    default:
      return state
  }
}

