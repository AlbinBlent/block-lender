import React from 'react'

export default function ApplicationRow(props) {
  // const [age, duration, requestedAmountToLoan] = ...props.applicant;
  const applicationString = 
    "Age: " + props.applicant.age +
    "    |    Applied amount: " + props.applicant.requestedAmountToLoan +
    "    |    Duration: " + props.applicant.duration +
    "    |    Reason: " + props.applicant.reason;
  return (
    <div>
      {applicationString}
      <button>
        Approve
      </button>
      <button>
        Decline
      </button>
    </div>
  )
}
