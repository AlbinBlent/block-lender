type Application = {
  age: number
  duration: number
  requestedAmountToLoan: string
  reason: string
}

interface ILenderApiMock {
  getNumberOfLoans: () => Promise<number>
  getApplication: (id: number) => Promise<Application>
}

const applications: Application[] = [];

applications[0] = {
  age: 25,
  duration: 24,
  reason: "I am broke",
  requestedAmountToLoan: "57 000 000 kr"
}

applications[1] = {
  age: 25,
  duration: 24,
  reason: "Buying a boat",
  requestedAmountToLoan: "17 000 000 kr"
}

applications[2] = {
  age: 12,
  duration: 1,
  reason: "I like ice cream",
  requestedAmountToLoan: "17 kr"
}

export default class lenderApiMock implements ILenderApiMock {
  getNumberOfLoans = () => {
    return Promise.resolve(3);
  }
  getApplication = (id: number) => {
    return Promise.resolve(applications[id]);
  }
}