pragma solidity >=0.4.22 <0.6.0;

contract Lender {
  address public lender;
  address payable[] public customers;

  struct Application {
    uint requestedAmountToLoan;
    uint duration;
    uint age;
  }

  mapping(address => Application) public applications;

  constructor() public {
    lender = msg.sender;
  }

  function applyForLoan(uint requestedAmountToLoan, uint duration, uint age) public {
    require(requestedAmountToLoan > 0);
    applications[msg.sender].requestedAmountToLoan = requestedAmountToLoan;
    applications[msg.sender].duration = duration;
    applications[msg.sender].age = age;
    customers.push(msg.sender);
  }

  function getCustomer(uint index) public view returns(address) {
    return customers[index];
  }

  function getCustomerCount() public view returns(uint) {
    return customers.length;
  }
}