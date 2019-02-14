import React from 'react'
import './admin.scss'

export default function AdminView(props) {
  return (
    <div className="admin-view">
      <h2>Lender: {props.lenderState && props.lenderState.lender}</h2>
      <p>{props.lenderState && props.lenderState.error}</p>
      <button onClick={props.handleGetLenderClick}>getLender</button>
    </div>
  )
}
