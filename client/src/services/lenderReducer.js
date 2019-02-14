import lenderApi from './lenderApi'

/**
 * useReducer.js och lenderReducer.js byggde jag för att jag ville testa React hooks
 * som är nytt från version 18.6
 * /Albin
 */
export default function lenderReducer(state, action, setState) {
  switch (action.type) {
    case 'getLender':
      setInterval(() => {}, 1000)
      lenderApi
        .getLender()
        .then(lender => {
          setState({ ...state, lender })
        })
        .catch(() => {
          setState({ ...state, error: 'Unable to get lender' })
        })
      break
    default:
      console.log(state)
      return state
  }
}
