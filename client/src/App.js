import React, { Component } from 'react'
import lenderApi from './services/lenderApi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './containers/admin/Admin'
import Application from './containers/application/Application'
import Info from './containers/info/Info'
import LandingPage from './containers/landingpage/LandingPage'
import Navigation from './containers/navigation/Navigation'
import Path from './containers/path/Path'


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
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" />
              <Route path="/admin" component={Admin} />
              <Route path="/application" component={Application} />
              <Route path="/info" component={Info} />
              <Route path="/landingpage" component={LandingPage} />
              <Route component={Path} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
