import React from 'react'
//import React, { useState } from 'react'
import lenderReducer from '../services/lenderReducer'
import useReducer from '../services/useReducer'

export default function Admin() {
  const [lenderState, dispatch] = useReducer(lenderReducer, {
    lender: 'Kalle',
    error: null,
  })

  const handleGetLenderClick = () => {
    dispatch({ type: 'getLender' })
  }

  return (
    <div>
      <h2>Lender: {lenderState && lenderState.lender}</h2>
      <p>{lenderState && lenderState.error}</p>
      <button onClick={handleGetLenderClick}>getLender</button>
    </div>
  )
}
