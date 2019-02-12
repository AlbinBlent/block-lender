// @ts-ignore
import web3 from './web3'
import { abi } from './lenderAbi'

type Application = {
  age: number
  duration: number
  requestedAmountToLoan: string
}

interface ILenderApi {
  getLender: () => Promise<string>
  getCustomerCount: () => Promise<number>
  getCustomer: (index: number) => Promise<string>
  getApplication: (customerAddress: string) => Promise<Application>
}

class LenderApi implements ILenderApi {
  lenderContract: any
  constructor(abi: any, address: string) {
    // @ts-ignore
    this.lenderContract = new web3.eth.Contract(abi, address)
  }

  getLender = () => {
    return this.lenderContract.methods.lender().call()
  }

  getCustomerCount = () => {
    return this.lenderContract.methods.getCustomerCount().call()
  }

  getCustomer = (index: number) => {
    return this.lenderContract.methods.getCustomer(index).call()
  }

  getApplication = (customerAddress: string) => {
    return this.lenderContract.methods.applications(customerAddress).call()
  }

  getContract = () => {
    return this.lenderContract
  }

  applyForLoan = (
    requestedAmountToLoan: string,
    duration: number,
    age: number,
  ) => {
    /* Tror att denna promise blir fel även om den funkar (flödet blir inte sekventiellt). 
       Värt att kolla på
    */
    return new Promise((resolve, reject) => {
      //@ts-ignore
      web3.eth
        .getAccounts()
        .then((accounts: string) => {
          this.lenderContract.methods
            .applyForLoan(requestedAmountToLoan, duration, age)
            .send({
              from: accounts[0],
            })
            .then(() => resolve())
        })
        .catch((error: any) => reject(error))
    })
  }
}

export default new LenderApi(abi, '0x80887394834EDdBAd5a82a9463CB87A652Cb126c')
