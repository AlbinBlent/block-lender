export const abi = [
  {
    constant: true,
    inputs: [],
    name: 'lender',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xbcead63e',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'customers',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc0abda2a',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'applications',
    outputs: [
      {
        name: 'id',
        type: 'uint256',
      },
      {
        name: 'applicantAddress',
        type: 'address',
      },
      {
        name: 'requestedAmountToLoan',
        type: 'uint256',
      },
      {
        name: 'duration',
        type: 'uint256',
      },
      {
        name: 'age',
        type: 'uint256',
      },
      {
        name: 'status',
        type: 'uint8',
      },
      {
        name: 'reason',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xdfefadff',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'requestedAmountToLoan',
        type: 'uint256',
      },
      {
        name: 'duration',
        type: 'uint256',
      },
      {
        name: 'age',
        type: 'uint256',
      },
      {
        name: 'reason',
        type: 'string',
      },
    ],
    name: 'applyForLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x71909e29',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'approveLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xaadc1ac1',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'rejectLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x5d29cb98',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'payOutLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x40cd76df',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getCustomer',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xeb876f27',
  },
  {
    constant: true,
    inputs: [],
    name: 'getCustomerCount',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2027d746',
  },
]
