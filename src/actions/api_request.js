import axios from 'axios'

export const listUsers = (_users) => {
  return {
    type: 'LIST_USERS',
    payload: {
      users: _users
    }
  }
}


export const fetchApi = () => {
  return (dispatch, getState) => {
    const usersApiUrl = "https://jsonplaceholder.typicode.com/users"
    axios.get(usersApiUrl).then( resp => {
      // success handler
      dispatch(listUsers(resp.data))
    })
  }
}
