import Web3 from 'web3'

let web3

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider)
  console.log('Using web3 detected from external source')
} else {
  web3 = new Web3('http://localhost:9545')
  console.log('Using default web3')
}

export default web3
