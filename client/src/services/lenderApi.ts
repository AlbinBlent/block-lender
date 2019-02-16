// @ts-ignore
import web3 from './web3'
import { abi } from './lenderAbi'

type Application = {
  age: number
  duration: number
  requestedAmountToLoan: string
  reason: string
}

interface ILenderApi {
  getLender: () => Promise<string>
  getNumberOfLoans: () => Promise<number>
  applyForLoan: (
    requestedAmountToLoan: string,
    duration: number,
    age: number,
    reason: string,
  ) => Promise<void>
  approveLoan: (id: number) => Promise<void>
  rejectLoan: (id: number) => Promise<void>
  payOutLoan: (id: number) => Promise<void>
  getApplication: (id: number) => Promise<Application>
}

class LenderApi implements ILenderApi {
  lenderContract: any
  constructor(abi: any, address: string) {
    // @ts-ignore
    this.lenderContract = new web3.eth.Contract(abi, address)
  }

  approveLoan = (id: number) => {
    return new Promise<void>((resolve, reject) => {
      //@ts-ignore
      web3.eth
        .getAccounts()
        .then((accounts: string) => {
          this.lenderContract.methods
            .approveLoan(id)
            .send({ from: accounts[0] })
            .then(() => {
              console.log('Successfully approved loan')
              resolve()
            })
        })
        .catch((error: any) => reject(error))
    })
  }
  rejectLoan = (id: number) => {
    return new Promise<void>((resolve, reject) => {
      //@ts-ignore
      web3.eth
        .getAccounts()
        .then((accounts: string) => {
          this.lenderContract.methods
            .rejectLoan(id)
            .send({ from: accounts[0] })
            .then(() => {
              console.log('Successfully rejected loan')
              resolve()
            })
        })
        .catch((error: any) => reject(error))
    })
  }
  payOutLoan = (id: number) => {
    return new Promise<void>((resolve, reject) => {
      //@ts-ignore
      web3.eth
        .getAccounts()
        .then((accounts: string) => {
          this.lenderContract.methods
            .payOutLoan(id)
            .send({ from: accounts[0] })
            .then(() => {
              console.log('Successfully payed out loan')
              resolve()
            })
        })
        .catch((error: any) => reject(error))
    })
  }

  getLender = () => {
    return this.lenderContract.methods.lender().call()
  }

  getNumberOfLoans = () => {
    return this.lenderContract.methods.numberOfLoans().call()
  }

  getApplication = (id: number) => {
    return this.lenderContract.methods.applications(id).call()
  }

  getContract = () => {
    return this.lenderContract
  }

  applyForLoan = (
    requestedAmountToLoan: string,
    duration: number,
    age: number,
    reason: string,
  ) => {
    /* Tror att denna promise blir fel även om den funkar (flödet blir inte sekventiellt). 
       Värt att kolla på
    */
    return new Promise<void>((resolve, reject) => {
      //@ts-ignore
      web3.eth
        .getAccounts()
        .then((accounts: string) => {
          this.lenderContract.methods
            .applyForLoan(requestedAmountToLoan, duration, age, reason)
            .send({ from: accounts[0] })
            .then(() => {
              console.log('applied success')
              resolve()
            })
        })
        .catch((error: any) => reject(error))
    })
  }
}

export default new LenderApi(abi, '0x1aC7B597dB7D62BA9F2cc78Ae6E8f0bCf3a61516')
