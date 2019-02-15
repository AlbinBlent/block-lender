import React, { Component } from 'react'
import './landingpage.scss'
import LandingPageView from './LandingPageView';

class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <LandingPageView />
  }
}

export default LandingPage