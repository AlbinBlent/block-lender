import React, { Component } from 'react'
import web3 from './services/web3'
import lenderApi from './services/lenderApi'

import Admin from './containers/admin/Admin'
import Application from './containers/application/Application'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lender: '',
      balance: '',
      applications: [],
      customers: [],
      numberOfLoans: 0,
    }
  }

  async componentDidMount() {
    lenderApi.getLender().then(lender => {
      this.setState({
        lender,
      })
    })
    lenderApi.getNumberOfLoans().then(numberOfLoans => {
      this.setState({
        numberOfLoans,
      })
      for (let index = 0; index < numberOfLoans; index++) {
        lenderApi.getApplication(index).then(application => {
          this.setState({
            applications: [
              ...this.state.applications,
              {
                id: application.id,
                address: application.applicantAddress,
                requestedAmountToLoan: application.requestedAmountToLoan,
                duration: application.duration,
                age: application.age,
                status: application.status,
                reason: application.reason,
              },
            ],
          })
        })
      }
    })
  }

  handleApplyForLoan = async event => {
    event.preventDefault()
    lenderApi
      .applyForLoan('10', 12, 12, 'Startkapital för att råna bank')
      .then(console.log('applied for loan'))
      .catch(error => console.log(error))
  }

  handleApproveLoan = event => {
    event.preventDefault()
    lenderApi
      .approveLoan(1)
      .then(console.log('approved'))
      .catch(error => console.log(error))
  }

  handleRejectLoan = event => {
    event.preventDefault()
    lenderApi
      .rejectLoan(0)
      .then(console.log('rejected'))
      .catch(error => console.log(error))
  }

  handlePayOutLoan = event => {
    event.preventDefault()
    lenderApi
      .payOutLoan(1)
      .then(console.log('payedOut'))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Admin />
        <Application />
        <p>numberOfLoans: {this.state.numberOfLoans}.</p>
        <p>
          Applications
          {this.state.applications.map((application, index) => (
            <span key={index}>
              <br />
              Id: {application.id + ' '}
              Address: {application.address + ' '}
              Status: {application.status + ' '}
              reason: {application.reason + ' '}
              Age: {application.age + ' '}
              Duration: {application.duration + ' '}
              Amount to loan: {application.requestedAmountToLoan}
            </span>
          ))}
        </p>
        <p>
          The balance in the contract is{' '}
          {web3.utils.fromWei(this.state.balance, 'ether')} ether.
        </p>
        <hr />
        <h4>Apply for loan</h4>
        <button onClick={this.handleApplyForLoan}>click here</button>
        <h4>Approve loan</h4>
        <button onClick={this.handleApproveLoan}>click here</button>
        <h4>Reject loan</h4>
        <button onClick={this.handleRejectLoan}>click here</button>
        <h4>Pay out loan</h4>
        <button onClick={this.handlePayOutLoan}>click here</button>
      </div>
    )
  }
}

export default App
