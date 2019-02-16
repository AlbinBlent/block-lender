import React from 'react'
import './admin.scss'
import ApplicationRow from './ApplicationRow'
import applicationReducer from '../../services/applicationReducer'
import useReducer from '../../services/useReducer'

export default function AdminView(props) {
  const dummy = {
    applications: [{
    age: 25,
    duration: 12,
    requestedAmountToLoan: "100000",
    reason: "Need som money",
    error: null,
  }]}

  const [applications, dispatch] = useReducer(applicationReducer, dummy)

  const handleGetApplicationsClick = () => {
    dispatch({ type: 'getApplications' })
  }

  const handleDebugButton = () => {
    console.log(applications)
  }

  const renderApplication = (app) => {
    return (
      <ApplicationRow
        applicant={app}
      />
    );
  };

  const createRows = (n) => {
    let rows = [];
    for (let i = 0; i < n; i++) {
      rows.push(renderApplication(applications.applications[i]));
    }
    return rows;
  };

  return (
    <div>    
      <div className="admin-view">
          <h2>AdminView</h2>
      </div>
      <p>There are {applications.length} applications</p>
      <button onClick={handleGetApplicationsClick}>Get applications</button>
      <button onClick={handleDebugButton}>Debug</button>
      {createRows(applications.applications.length)}
    </div>
  )

  // return (
  //   <div className="admin-view">
  //     <h2>Lender: {props.lenderState && props.lenderState.lender}</h2>
  //     <p>{props.lenderState && props.lenderState.error}</p>
  //     <button onClick={props.handleGetLenderClick}>getLender</button>
  //   </div>
  // )
}
