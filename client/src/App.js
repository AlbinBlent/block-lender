import React, { Component } from 'react'
import web3 from './services/web3'
import lenderApi from './services/lenderApi'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lender: '',
      balance: '',
      applications: [],
      customers: [],
      customersCount: 0,
    }
  }

  async componentDidMount() {
    lenderApi.getLender().then(lender => {
      this.setState({
        lender,
      })
    })

    lenderApi.getCustomerCount().then(customersCount => {
      this.setState({ customersCount })
      for (let index = 0; index < customersCount; index++) {
        lenderApi
          .getCustomer(index)
          .then(customer => {
            this.setState({
              customers: [...this.state.customers, customer + '\n'],
            })
            return customer
          })
          .then(customer => {
            lenderApi
              .getApplication(customer)
              .then(application => {
                this.setState({
                  applications: [
                    ...this.state.applications,
                    {
                      age: application.age,
                      duration: application.duration,
                      requestedAmountToLoan: application.requestedAmountToLoan,
                    },
                  ],
                })
              })
              .catch(error => console.log(error))
          })
      }
    })
  }

  handleApplyForLoan = async event => {
    event.preventDefault()
    lenderApi
      .applyForLoan('100', 12, 29)
      .then(console.log('applied for loan'))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>Block Lender</h2>
        <p>This contract is managed by {this.state.lender}.</p>
        <p>Customer count {this.state.customersCount}.</p>
        <p>
          Customers
          {this.state.customers.map((customer, index) => (
            <span key={index}>
              <br />
              {customer}
            </span>
          ))}
        </p>
        <p>
          Applications
          {this.state.applications.map((application, index) => (
            <span key={index}>
              <br />
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
      </div>
    )
  }
}

export default App
