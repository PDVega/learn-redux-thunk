export const increment = (_step) => {
  return {
    type: "INC",
    payload: {
      step: _step
    }
  }
}

export const decrement = {
  type: "DEC"
}

