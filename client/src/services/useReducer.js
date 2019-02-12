import { useState } from 'react'

export default function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  /*
  const dispatch = action => {
    const nextState = reducer(state, action)
    setState(nextState)
  }
  */

  const dispatch = action => {
    reducer(state, action, setState)
  }

  return [state, dispatch]
}
