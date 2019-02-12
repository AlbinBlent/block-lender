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

- från terminalen:
- ladda ner Truffle: npm install truffle -g
- ställ dig i block-lender/dapp
- kör: truffle develop
- du borde se:
  > Truffle Develop started at http://127.0.0.1:9545/  
  > ...och sen ett gäng adresser
- öppna en ny terminal och ställ dig i block-lender/dapp
- kör: truffle compile
- du borde se:
  >Compiling ./contracts/Lender.sol...  
  >Compiling ./contracts/Migrations.sol...  
  >Writing artifacts to ./build/contracts  
- kör: truffle migrate
- du borde längst ner se: 
  >Summary  
  >Total deployments: 2  
  >Final cost: 0.01413116 ETH  

### Installera MetaMask, anslut till din privata block-chain och skapa ett konto
 - gå till https://metamask.io/ lägg till metamask till din browser och klicka igenom setup:en
 - klicka på det lilla rävhuvudet som nu borde finnas uppe till höger i din browser
 - klicka på dropdownen där det står Main Etherium Network och sen på Custom RPC
 - i new network skriv in http://localhost:9545 och klicka save
 - om du inte får upp en spinner som bara står och laddar så har det gått bra
 - gå tillbaka till terminalen där du startade din lokala blockchain med truffle develop
 - kopiera en av de privata nycklarna
 - klicka på den lilla räven i din browser igen
 - klicka på den färgglada bollen i övre högra hörnet och sen på Create Account
 - skriv in ett namn och klicka sen på import tabben
 - klistra in din privata nyckel och klicka på export
 - du borde nu ha bytt till ett konto med ca 100 ETH på
