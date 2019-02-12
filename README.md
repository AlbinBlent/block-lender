# Block Lender!

Två tutorials jag kollat på:

- https://medium.com/coinmonks/build-a-simple-and-unstoppable-decentralized-web-application-dapp-aa8d08e35f9c
- https://medium.com/ethereum-developers/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e

web3 docs: https://web3js.readthedocs.io/en/1.0/web3.html

Solidity: https://solidity.readthedocs.io/en/latest/index.html

Truffle: https://truffleframework.com/

## Att göra innan hackathon

### Installera truffle, starta en lokal blockchain och deploya ett kontrakt

finns mer info här: https://truffleframework.com/truffle

- Från terminalen:
- Ladda ner Truffle: npm install truffle -g
- Ställ dig i /dapp i detta repo
- kör: truffle develop
- Du borde se:
  > 'Truffle Develop started at http://127.0.0.1:9545/  
  > ...och sen ett gäng adresser'
- Öppna en ny terminal och ställ dig i /dapp
- kör: truffle compile
- Du borde se:
  >Compiling ./contracts/Lender.sol...  
  >Compiling ./contracts/Migrations.sol...  
  >Writing artifacts to ./build/contracts  
- Kör: truffle migrate
- Du borde längst ner se: 
  >Summary  
  >Total deployments: 2  
  >Final cost: 0.01413116 ETH  

### Installera MetaMask
https://metamask.io/
