const defaultState = {
  users: [],
  status: "",
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'ERROR':
      return state
    case 'LIST_USERS':
      console.log('---------------------LIST_USER', action.payload)
      return {...state, users: action.payload.users}
    default:
      return state
  }
}
