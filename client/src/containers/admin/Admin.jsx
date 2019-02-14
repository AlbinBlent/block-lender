import React from 'react'
//import React, { useState } from 'react'
import lenderReducer from '../../services/lenderReducer'
import useReducer from '../../services/useReducer'
import AdminView from './AdminView'

/**
 * Admin är ingen React class för att jag ville testa de nya React Hooks
 * /Albin
 */
export default function Admin() {
  const [lenderState, dispatch] = useReducer(lenderReducer, {
    lender: 'Kalle',
    error: null,
  })

  const handleGetLenderClick = () => {
    dispatch({ type: 'getLender' })
  }

  return <AdminView {...{ lenderState, handleGetLenderClick }} />
}
