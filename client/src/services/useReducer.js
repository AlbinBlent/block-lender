import { useState } from 'react'

/**
 * useReducer.js och lenderReducer.js byggde jag för att jag ville testa React hooks
 * som är nytt från version 18.6
 * /Albin
 */
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
