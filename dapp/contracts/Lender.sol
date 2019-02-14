pragma solidity >=0.4.22 <0.6.0;

contract Lender {
  address public lender;

  enum Status {REQUESTED,APPROVED,REJECTED,PAYED}

  struct Application {
    uint id;
    address payable applicantAddress;
    uint requestedAmountToLoan;
    uint duration;
    uint age;
    Status status;
    string reason;
  }
  
  uint public numberOfLoans = 0;

  mapping(uint => Application) public applications;

  constructor() public {
    lender = msg.sender;
  }

  function applyForLoan(uint requestedAmountToLoan,
      uint duration,
      uint age,
      string memory reason) public {

    require(requestedAmountToLoan > 0);
    applications[numberOfLoans] =
      Application(numberOfLoans,
        msg.sender,
        requestedAmountToLoan,
        duration,
        age,
        Status.REQUESTED,
        reason);
    numberOfLoans++;
  }

  function approveLoan(uint id) public {
    require(msg.sender == lender);
    applications[id].status=Status.APPROVED;
  }

  function rejectLoan(uint id) public {
    require(msg.sender == lender);
    applications[id].status=Status.REJECTED;
  }

  function payOutLoan(uint id) public {
    require(applications[id].status == Status.APPROVED);
    require(msg.sender == lender);
    //applications[id].applicantAddress.transfer(applications[id].requestedAmountToLoan);
    applications[id].status = Status.PAYED;
  }
}
