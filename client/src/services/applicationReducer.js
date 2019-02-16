import lenderApiMock from "./lenderApiMock";

const applications = [];

applications[0] = {
  age: 25,
  duration: 24,
  reason: "I am broke",
  requestedAmountToLoan: "57 000 000 kr"
};

applications[1] = {
  age: 25,
  duration: 24,
  reason: "Buying a boat",
  requestedAmountToLoan: "17 000 000 kr"
};

applications[2] = {
  age: 12,
  duration: 1,
  reason: "I like ice cream",
  requestedAmountToLoan: "17 kr"
};

export default function applicationReducer(state, action, setState) {
  switch (action.type) {
    case "getApplication":
      setInterval(() => {}, 1000);
      lenderApiMock
        .getApplication()
        .then(application => {
          setState({ ...state, application });
        })
        .catch(() => {
          setState({ ...state, error: "Unable to get application" });
        });
      break;
    case "getApplications":
      Promise.resolve(applications).then(applications => {
        console.log(applications);
        setState( { applications } )
        // return {applications: applications}
        // setState({ ...state, applications });
      });
      break;
      setInterval(() => {}, 1000);
      lenderApiMock
        .getNumberOfLoans()
        .then(n => {
          const apps = [];
          for (let i = 0; i < n; i++) {
            lenderApiMock.getApplication(i).then(a => {
              apps.push(a);
            });
          }
          return new Promise(apps);
        })
        .then(apps => {
          setState({ ...state, apps });
        })
        .catch(() => {
          setState({ ...state, error: "Unable to get applications" });
        });
      break;
    default:
      console.log(state);
      return state;
  }
}
