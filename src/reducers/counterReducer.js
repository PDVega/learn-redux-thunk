const defaultState = {
  counter: 0
}

const counterReducer = (state=defaultState, action) => {
  switch(action.type){
    case "INC":
      const newCounter = state.counter + +action.payload.step
      const newState = {...state, counter: newCounter}
      //const newState = Object.assign({}, state, {counter: ++state.counter})
      return newState
    default:
       return state

  }
}


export default counterReducer
