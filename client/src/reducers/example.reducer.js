const initialState = {
  invites: [],
  accept: [],
  decline: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ALL_INVITES':
      return  {
        ...state, 
        invites: [...state.invites, action.payload],
    }; case 'GOING':
      return  {
        ...state, 
        accept: [...state.accept, action.payload],
    }; case 'NOT_GOING':
    return  {
      ...state, 
      decline: [...state.decline, action.payload],
  } 
    default:
      return state
  }
}

