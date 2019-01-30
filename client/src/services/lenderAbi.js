export const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'applications',
    outputs: [
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
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x7c3bf42d',
  },
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
    ],
    name: 'applyForLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xfc245783',
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
