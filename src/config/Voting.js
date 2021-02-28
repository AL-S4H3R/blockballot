export default {
  "contractName": "Voting",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "candidate_1",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "candidate_2",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "candidate_3",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "total_votes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "authorized",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "voted",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "vote_id",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "authorizeVoter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_candidate_id",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"candidate_1\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"candidate_2\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"candidate_3\",\"type\":\"uint8\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_voter\",\"type\":\"address\"}],\"name\":\"authorizeVoter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"total_votes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_candidate_id\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_voter\",\"type\":\"address\"}],\"name\":\"vote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"voters\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"authorized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"voted\",\"type\":\"bool\"},{\"internalType\":\"uint8\",\"name\":\"vote_id\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/shlok/Desktop/programs/other-projects/hack-a-sol/contracts/Voting.sol\":\"Voting\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/shlok/Desktop/programs/other-projects/hack-a-sol/contracts/Voting.sol\":{\"keccak256\":\"0xda4c5159c930cdcc53347806725b8180ddc506212bae5982ce0fd2b5f136f460\",\"urls\":[\"bzz-raw://d5da9c73d0f927d9ad4e0237aa79c52358b41de101569193b92773639a48650e\",\"dweb:/ipfs/QmbDNTW5TGKmipkSZauMpZP1bL31qkPTkpVXprqarEXD2m\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516105d93803806105d98339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008560ff1660ff168152602001908152602001600020819055506000600160008460ff1660ff168152602001908152602001600020819055506000600160008360ff1660ff1681526020019081526020016000208190555060006002819055505050506104c9806101106000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80636d6277f4146100675780636ede603d146100ac5780638da5cb5b146100ca578063a3ec138d146100fe578063b81c64531461016b578063fd47b368146101bc575b600080fd5b6100966004803603602081101561007d57600080fd5b81019080803560ff169060200190929190505050610200565b6040518082815260200191505060405180910390f35b6100b4610218565b6040518082815260200191505060405180910390f35b6100d261021e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101406004803603602081101561011457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610244565b60405180841515815260200183151581526020018260ff168152602001935050505060405180910390f35b6101ba6004803603604081101561018157600080fd5b81019080803560ff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610295565b005b6101fe600480360360208110156101d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610436565b005b60016020528060005260406000206000915090505481565b60025481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16905083565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16156102ee57600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661034657600080fd5b60018060008460ff1660ff16815260200190815260200160002060008282540192505081905550600160026000828254019250508190555060016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff021916908315150217905550816000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160026101000a81548160ff021916908360ff1602179055505050565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505056fea2646970667358221220ed1e0d9ff005459b944c3dca8f22d76120d1ed92a5d2e331c722d5dbb1bae4b064736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80636d6277f4146100675780636ede603d146100ac5780638da5cb5b146100ca578063a3ec138d146100fe578063b81c64531461016b578063fd47b368146101bc575b600080fd5b6100966004803603602081101561007d57600080fd5b81019080803560ff169060200190929190505050610200565b6040518082815260200191505060405180910390f35b6100b4610218565b6040518082815260200191505060405180910390f35b6100d261021e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101406004803603602081101561011457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610244565b60405180841515815260200183151581526020018260ff168152602001935050505060405180910390f35b6101ba6004803603604081101561018157600080fd5b81019080803560ff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610295565b005b6101fe600480360360208110156101d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610436565b005b60016020528060005260406000206000915090505481565b60025481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16905083565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16156102ee57600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661034657600080fd5b60018060008460ff1660ff16815260200190815260200160002060008282540192505081905550600160026000828254019250508190555060016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff021916908315150217905550816000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160026101000a81548160ff021916908360ff1602179055505050565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505056fea2646970667358221220ed1e0d9ff005459b944c3dca8f22d76120d1ed92a5d2e331c722d5dbb1bae4b064736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "27:1346:0:-:0;;;481:348;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;637:10;629:5;;:18;;;;;;;;;;;;;;;;;;684:1;658:10;:23;669:11;658:23;;;;;;;;;;;;;;;:27;;;;722:1;696:10;:23;707:11;696:23;;;;;;;;;;;;;;;:27;;;;760:1;734:10;:23;745:11;734:23;;;;;;;;;;;;;;;:27;;;;786:1;772:11;:15;;;;481:348;;;27:1346;;;;;;",
  "deployedSourceMap": "27:1346:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;335:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;385:26;;;:::i;:::-;;;;;;;;;;;;;;;;;;;418:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;289:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1053:317;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;942:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;335:43;;;;;;;;;;;;;;;;;:::o;385:26::-;;;;:::o;418:20::-;;;;;;;;;;;;;:::o;289:39::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1053:317::-;1131:6;:14;1138:6;1131:14;;;;;;;;;;;;;;;:20;;;;;;;;;;;;1130:21;1122:30;;;;;;1171:6;:14;1178:6;1171:14;;;;;;;;;;;;;;;:25;;;;;;;;;;;;1163:34;;;;;;1247:1;1218:10;:25;1229:13;1218:25;;;;;;;;;;;;;;;;:30;;;;;;;;;;;1274:1;1259:11;;:16;;;;;;;;;;;1309:4;1286:6;:14;1293:6;1286:14;;;;;;;;;;;;;;;:20;;;:27;;;;;;;;;;;;;;;;;;1349:13;1324:6;:14;1331:6;1324:14;;;;;;;;;;;;;;;:22;;;:38;;;;;;;;;;;;;;;;;;1053:317;;:::o;942:99::-;1028:4;1000:6;:14;1007:6;1000:14;;;;;;;;;;;;;;;:25;;;:32;;;;;;;;;;;;;;;;;;942:99;:::o",
  "source": "pragma solidity ^0.6.0;\r\n\r\ncontract Voting {\r\n    \r\n    //Candidate:\r\n    /* \r\n    {\r\n        candidate_id: num_of_votes,\r\n        ....\r\n    } \r\n    */\r\n    \r\n    //Voter Details:\r\n    struct Voter {\r\n        bool authorized;\r\n        bool voted;\r\n        uint8 vote_id;\r\n    }\r\n    \r\n    mapping(address => Voter) public voters;\r\n    mapping(uint8 => uint256) public candidates;\r\n    uint256 public total_votes;\r\n    address public owner;\r\n    // uint public end_date;\r\n    \r\n    constructor(\r\n        uint8 candidate_1,\r\n        uint8 candidate_2,\r\n        uint8 candidate_3\r\n        // uint _end_date\r\n    ) public {\r\n        owner = msg.sender;\r\n        candidates[candidate_1] = 0;\r\n        candidates[candidate_2] = 0;\r\n        candidates[candidate_3] = 0;\r\n        total_votes = 0;\r\n        // end_date = _end_date;\r\n    }\r\n    \r\n    // modifier isLive(){\r\n    //     require(now < end_date);\r\n    //     _;\r\n    // }\r\n    \r\n    \r\n    function authorizeVoter(address _voter) public {\r\n        voters[_voter].authorized = true; \r\n    }\r\n    \r\n    function vote(uint8 _candidate_id, address _voter) public {\r\n        require(!voters[_voter].voted);\r\n        require(voters[_voter].authorized);\r\n        \r\n        candidates[_candidate_id] += 1;\r\n        total_votes += 1;\r\n        voters[_voter].voted = true;\r\n        voters[_voter].vote_id = _candidate_id;\r\n    }\r\n}",
  "sourcePath": "C:/Users/shlok/Desktop/programs/other-projects/hack-a-sol/contracts/Voting.sol",
  "ast": {
    "absolutePath": "/C/Users/shlok/Desktop/programs/other-projects/hack-a-sol/contracts/Voting.sol",
    "exportedSymbols": {
      "Voting": [
        118
      ]
    },
    "id": 119,
    "license": null,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 118,
        "linearizedBaseContracts": [
          118
        ],
        "name": "Voting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Voting.Voter",
            "id": 8,
            "members": [
              {
                "constant": false,
                "id": 3,
                "mutability": "mutable",
                "name": "authorized",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 8,
                "src": "209:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 2,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "209:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "mutability": "mutable",
                "name": "voted",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 8,
                "src": "235:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 4,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "235:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "mutability": "mutable",
                "name": "vote_id",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 8,
                "src": "256:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 6,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "256:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Voter",
            "nodeType": "StructDefinition",
            "scope": 118,
            "src": "185:92:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "a3ec138d",
            "id": 12,
            "mutability": "mutable",
            "name": "voters",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 118,
            "src": "289:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
              "typeString": "mapping(address => struct Voting.Voter)"
            },
            "typeName": {
              "id": 11,
              "keyType": {
                "id": 9,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "297:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "289:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                "typeString": "mapping(address => struct Voting.Voter)"
              },
              "valueType": {
                "contractScope": null,
                "id": 10,
                "name": "Voter",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 8,
                "src": "308:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Voter_$8_storage_ptr",
                  "typeString": "struct Voting.Voter"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "6d6277f4",
            "id": 16,
            "mutability": "mutable",
            "name": "candidates",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 118,
            "src": "335:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
              "typeString": "mapping(uint8 => uint256)"
            },
            "typeName": {
              "id": 15,
              "keyType": {
                "id": 13,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "343:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "nodeType": "Mapping",
              "src": "335:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
                "typeString": "mapping(uint8 => uint256)"
              },
              "valueType": {
                "id": 14,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "352:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "6ede603d",
            "id": 18,
            "mutability": "mutable",
            "name": "total_votes",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 118,
            "src": "385:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "385:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8da5cb5b",
            "id": 20,
            "mutability": "mutable",
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 118,
            "src": "418:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 19,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "418:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "618:211:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 29,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20,
                      "src": "629:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "637:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 31,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "637:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "629:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "629:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "658:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
                          "typeString": "mapping(uint8 => uint256)"
                        }
                      },
                      "id": 36,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "candidate_1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "669:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "658:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "684:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "658:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "658:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 44,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 40,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "696:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
                          "typeString": "mapping(uint8 => uint256)"
                        }
                      },
                      "id": 42,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 41,
                        "name": "candidate_2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "707:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "696:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 43,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "722:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "696:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 45,
                  "nodeType": "ExpressionStatement",
                  "src": "696:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "734:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
                          "typeString": "mapping(uint8 => uint256)"
                        }
                      },
                      "id": 48,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 47,
                        "name": "candidate_3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "745:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "734:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 49,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "760:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "734:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 51,
                  "nodeType": "ExpressionStatement",
                  "src": "734:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 52,
                      "name": "total_votes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "772:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "786:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "772:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "772:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "mutability": "mutable",
                  "name": "candidate_1",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 57,
                  "src": "503:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "candidate_2",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 57,
                  "src": "531:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26,
                  "mutability": "mutable",
                  "name": "candidate_3",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 57,
                  "src": "559:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "559:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:118:0"
            },
            "returnParameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:0:0"
            },
            "scope": 118,
            "src": "481:348:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 69,
              "nodeType": "Block",
              "src": "989:52:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 67,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "voters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12,
                          "src": "1000:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                            "typeString": "mapping(address => struct Voting.Voter storage ref)"
                          }
                        },
                        "id": 64,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "_voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "1007:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1000:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Voter_$8_storage",
                          "typeString": "struct Voting.Voter storage ref"
                        }
                      },
                      "id": 65,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "authorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3,
                      "src": "1000:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1028:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1000:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 68,
                  "nodeType": "ExpressionStatement",
                  "src": "1000:32:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "fd47b368",
            "id": 70,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "authorizeVoter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "mutability": "mutable",
                  "name": "_voter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 70,
                  "src": "966:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "966:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "965:16:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "989:0:0"
            },
            "scope": 118,
            "src": "942:99:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 116,
              "nodeType": "Block",
              "src": "1111:259:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1130:21:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 78,
                              "name": "voters",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "1131:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                                "typeString": "mapping(address => struct Voting.Voter storage ref)"
                              }
                            },
                            "id": 80,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 79,
                              "name": "_voter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1138:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1131:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Voter_$8_storage",
                              "typeString": "struct Voting.Voter storage ref"
                            }
                          },
                          "id": 81,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "voted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5,
                          "src": "1131:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 77,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1122:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:30:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "voters",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "1171:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                              "typeString": "mapping(address => struct Voting.Voter storage ref)"
                            }
                          },
                          "id": 88,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "_voter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1178:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1171:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Voter_$8_storage",
                            "typeString": "struct Voting.Voter storage ref"
                          }
                        },
                        "id": 89,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3,
                        "src": "1171:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 85,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1163:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1163:34:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1163:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 92,
                        "name": "candidates",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1218:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_uint256_$",
                          "typeString": "mapping(uint8 => uint256)"
                        }
                      },
                      "id": 94,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "_candidate_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "1229:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1218:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1247:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1218:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "1218:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 98,
                      "name": "total_votes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "1259:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1274:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1259:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1259:16:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 102,
                          "name": "voters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12,
                          "src": "1286:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                            "typeString": "mapping(address => struct Voting.Voter storage ref)"
                          }
                        },
                        "id": 104,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "_voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1293:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1286:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Voter_$8_storage",
                          "typeString": "struct Voting.Voter storage ref"
                        }
                      },
                      "id": 105,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "voted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5,
                      "src": "1286:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1309:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1286:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "1286:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 109,
                          "name": "voters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12,
                          "src": "1324:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Voter_$8_storage_$",
                            "typeString": "mapping(address => struct Voting.Voter storage ref)"
                          }
                        },
                        "id": 111,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 110,
                          "name": "_voter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1331:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1324:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Voter_$8_storage",
                          "typeString": "struct Voting.Voter storage ref"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "vote_id",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "1324:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 113,
                      "name": "_candidate_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 72,
                      "src": "1349:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "1324:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 115,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:38:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b81c6453",
            "id": 117,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "vote",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "mutability": "mutable",
                  "name": "_candidate_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 117,
                  "src": "1067:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "mutability": "mutable",
                  "name": "_voter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 117,
                  "src": "1088:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1088:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1066:37:0"
            },
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1111:0:0"
            },
            "scope": 118,
            "src": "1053:317:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 119,
        "src": "27:1346:0"
      }
    ],
    "src": "0:1373:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/shlok/Desktop/programs/other-projects/hack-a-sol/contracts/Voting.sol",
      "exportedSymbols": {
        "Voting": [
          118
        ]
      },
      "license": null
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "abstract": false,
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            118
          ],
          "name": "Voting",
          "scope": 119
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "Voting.Voter",
              "name": "Voter",
              "scope": 118,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "authorized",
                  "overrides": null,
                  "scope": 8,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "209:4:0"
                  }
                ],
                "id": 3,
                "name": "VariableDeclaration",
                "src": "209:15:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "voted",
                  "overrides": null,
                  "scope": 8,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 4,
                    "name": "ElementaryTypeName",
                    "src": "235:4:0"
                  }
                ],
                "id": 5,
                "name": "VariableDeclaration",
                "src": "235:10:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "vote_id",
                  "overrides": null,
                  "scope": 8,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint8",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint8",
                      "type": "uint8"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "256:5:0"
                  }
                ],
                "id": 7,
                "name": "VariableDeclaration",
                "src": "256:13:0"
              }
            ],
            "id": 8,
            "name": "StructDefinition",
            "src": "185:92:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "a3ec138d",
              "mutability": "mutable",
              "name": "voters",
              "overrides": null,
              "scope": 118,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => struct Voting.Voter)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => struct Voting.Voter)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9,
                    "name": "ElementaryTypeName",
                    "src": "297:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Voter",
                      "referencedDeclaration": 8,
                      "type": "struct Voting.Voter"
                    },
                    "id": 10,
                    "name": "UserDefinedTypeName",
                    "src": "308:5:0"
                  }
                ],
                "id": 11,
                "name": "Mapping",
                "src": "289:25:0"
              }
            ],
            "id": 12,
            "name": "VariableDeclaration",
            "src": "289:39:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "6d6277f4",
              "mutability": "mutable",
              "name": "candidates",
              "overrides": null,
              "scope": 118,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint8 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint8 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint8",
                      "type": "uint8"
                    },
                    "id": 13,
                    "name": "ElementaryTypeName",
                    "src": "343:5:0"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 14,
                    "name": "ElementaryTypeName",
                    "src": "352:7:0"
                  }
                ],
                "id": 15,
                "name": "Mapping",
                "src": "335:25:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "335:43:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "6ede603d",
              "mutability": "mutable",
              "name": "total_votes",
              "overrides": null,
              "scope": 118,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 17,
                "name": "ElementaryTypeName",
                "src": "385:7:0"
              }
            ],
            "id": 18,
            "name": "VariableDeclaration",
            "src": "385:26:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "8da5cb5b",
              "mutability": "mutable",
              "name": "owner",
              "overrides": null,
              "scope": 118,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 19,
                "name": "ElementaryTypeName",
                "src": "418:7:0"
              }
            ],
            "id": 20,
            "name": "VariableDeclaration",
            "src": "418:20:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "overrides": null,
              "scope": 118,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "candidate_1",
                      "overrides": null,
                      "scope": 57,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "503:5:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "503:17:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "candidate_2",
                      "overrides": null,
                      "scope": 57,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 23,
                        "name": "ElementaryTypeName",
                        "src": "531:5:0"
                      }
                    ],
                    "id": 24,
                    "name": "VariableDeclaration",
                    "src": "531:17:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "candidate_3",
                      "overrides": null,
                      "scope": 57,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 25,
                        "name": "ElementaryTypeName",
                        "src": "559:5:0"
                      }
                    ],
                    "id": 26,
                    "name": "VariableDeclaration",
                    "src": "559:17:0"
                  }
                ],
                "id": 27,
                "name": "ParameterList",
                "src": "492:118:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 28,
                "name": "ParameterList",
                "src": "618:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 29,
                            "name": "Identifier",
                            "src": "629:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 30,
                                "name": "Identifier",
                                "src": "637:3:0"
                              }
                            ],
                            "id": 31,
                            "name": "MemberAccess",
                            "src": "637:10:0"
                          }
                        ],
                        "id": 32,
                        "name": "Assignment",
                        "src": "629:18:0"
                      }
                    ],
                    "id": 33,
                    "name": "ExpressionStatement",
                    "src": "629:18:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 16,
                                  "type": "mapping(uint8 => uint256)",
                                  "value": "candidates"
                                },
                                "id": 34,
                                "name": "Identifier",
                                "src": "658:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 22,
                                  "type": "uint8",
                                  "value": "candidate_1"
                                },
                                "id": 35,
                                "name": "Identifier",
                                "src": "669:11:0"
                              }
                            ],
                            "id": 36,
                            "name": "IndexAccess",
                            "src": "658:23:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 37,
                            "name": "Literal",
                            "src": "684:1:0"
                          }
                        ],
                        "id": 38,
                        "name": "Assignment",
                        "src": "658:27:0"
                      }
                    ],
                    "id": 39,
                    "name": "ExpressionStatement",
                    "src": "658:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 16,
                                  "type": "mapping(uint8 => uint256)",
                                  "value": "candidates"
                                },
                                "id": 40,
                                "name": "Identifier",
                                "src": "696:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 24,
                                  "type": "uint8",
                                  "value": "candidate_2"
                                },
                                "id": 41,
                                "name": "Identifier",
                                "src": "707:11:0"
                              }
                            ],
                            "id": 42,
                            "name": "IndexAccess",
                            "src": "696:23:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 43,
                            "name": "Literal",
                            "src": "722:1:0"
                          }
                        ],
                        "id": 44,
                        "name": "Assignment",
                        "src": "696:27:0"
                      }
                    ],
                    "id": 45,
                    "name": "ExpressionStatement",
                    "src": "696:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 16,
                                  "type": "mapping(uint8 => uint256)",
                                  "value": "candidates"
                                },
                                "id": 46,
                                "name": "Identifier",
                                "src": "734:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 26,
                                  "type": "uint8",
                                  "value": "candidate_3"
                                },
                                "id": 47,
                                "name": "Identifier",
                                "src": "745:11:0"
                              }
                            ],
                            "id": 48,
                            "name": "IndexAccess",
                            "src": "734:23:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 49,
                            "name": "Literal",
                            "src": "760:1:0"
                          }
                        ],
                        "id": 50,
                        "name": "Assignment",
                        "src": "734:27:0"
                      }
                    ],
                    "id": 51,
                    "name": "ExpressionStatement",
                    "src": "734:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18,
                              "type": "uint256",
                              "value": "total_votes"
                            },
                            "id": 52,
                            "name": "Identifier",
                            "src": "772:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 53,
                            "name": "Literal",
                            "src": "786:1:0"
                          }
                        ],
                        "id": 54,
                        "name": "Assignment",
                        "src": "772:15:0"
                      }
                    ],
                    "id": 55,
                    "name": "ExpressionStatement",
                    "src": "772:15:0"
                  }
                ],
                "id": 56,
                "name": "Block",
                "src": "618:211:0"
              }
            ],
            "id": 57,
            "name": "FunctionDefinition",
            "src": "481:348:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "fd47b368",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "authorizeVoter",
              "overrides": null,
              "scope": 118,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_voter",
                      "overrides": null,
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 58,
                        "name": "ElementaryTypeName",
                        "src": "966:7:0"
                      }
                    ],
                    "id": 59,
                    "name": "VariableDeclaration",
                    "src": "966:14:0"
                  }
                ],
                "id": 60,
                "name": "ParameterList",
                "src": "965:16:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 61,
                "name": "ParameterList",
                "src": "989:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "authorized",
                              "referencedDeclaration": 3,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Voting.Voter storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 12,
                                      "type": "mapping(address => struct Voting.Voter storage ref)",
                                      "value": "voters"
                                    },
                                    "id": 62,
                                    "name": "Identifier",
                                    "src": "1000:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 59,
                                      "type": "address",
                                      "value": "_voter"
                                    },
                                    "id": 63,
                                    "name": "Identifier",
                                    "src": "1007:6:0"
                                  }
                                ],
                                "id": 64,
                                "name": "IndexAccess",
                                "src": "1000:14:0"
                              }
                            ],
                            "id": 65,
                            "name": "MemberAccess",
                            "src": "1000:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 66,
                            "name": "Literal",
                            "src": "1028:4:0"
                          }
                        ],
                        "id": 67,
                        "name": "Assignment",
                        "src": "1000:32:0"
                      }
                    ],
                    "id": 68,
                    "name": "ExpressionStatement",
                    "src": "1000:32:0"
                  }
                ],
                "id": 69,
                "name": "Block",
                "src": "989:52:0"
              }
            ],
            "id": 70,
            "name": "FunctionDefinition",
            "src": "942:99:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "b81c6453",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "vote",
              "overrides": null,
              "scope": 118,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_candidate_id",
                      "overrides": null,
                      "scope": 117,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 71,
                        "name": "ElementaryTypeName",
                        "src": "1067:5:0"
                      }
                    ],
                    "id": 72,
                    "name": "VariableDeclaration",
                    "src": "1067:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_voter",
                      "overrides": null,
                      "scope": 117,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 73,
                        "name": "ElementaryTypeName",
                        "src": "1088:7:0"
                      }
                    ],
                    "id": 74,
                    "name": "VariableDeclaration",
                    "src": "1088:14:0"
                  }
                ],
                "id": 75,
                "name": "ParameterList",
                "src": "1066:37:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 76,
                "name": "ParameterList",
                "src": "1111:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 77,
                            "name": "Identifier",
                            "src": "1122:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "voted",
                                  "referencedDeclaration": 5,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct Voting.Voter storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 12,
                                          "type": "mapping(address => struct Voting.Voter storage ref)",
                                          "value": "voters"
                                        },
                                        "id": 78,
                                        "name": "Identifier",
                                        "src": "1131:6:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 74,
                                          "type": "address",
                                          "value": "_voter"
                                        },
                                        "id": 79,
                                        "name": "Identifier",
                                        "src": "1138:6:0"
                                      }
                                    ],
                                    "id": 80,
                                    "name": "IndexAccess",
                                    "src": "1131:14:0"
                                  }
                                ],
                                "id": 81,
                                "name": "MemberAccess",
                                "src": "1131:20:0"
                              }
                            ],
                            "id": 82,
                            "name": "UnaryOperation",
                            "src": "1130:21:0"
                          }
                        ],
                        "id": 83,
                        "name": "FunctionCall",
                        "src": "1122:30:0"
                      }
                    ],
                    "id": 84,
                    "name": "ExpressionStatement",
                    "src": "1122:30:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 85,
                            "name": "Identifier",
                            "src": "1163:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorized",
                              "referencedDeclaration": 3,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Voting.Voter storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 12,
                                      "type": "mapping(address => struct Voting.Voter storage ref)",
                                      "value": "voters"
                                    },
                                    "id": 86,
                                    "name": "Identifier",
                                    "src": "1171:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 74,
                                      "type": "address",
                                      "value": "_voter"
                                    },
                                    "id": 87,
                                    "name": "Identifier",
                                    "src": "1178:6:0"
                                  }
                                ],
                                "id": 88,
                                "name": "IndexAccess",
                                "src": "1171:14:0"
                              }
                            ],
                            "id": 89,
                            "name": "MemberAccess",
                            "src": "1171:25:0"
                          }
                        ],
                        "id": 90,
                        "name": "FunctionCall",
                        "src": "1163:34:0"
                      }
                    ],
                    "id": 91,
                    "name": "ExpressionStatement",
                    "src": "1163:34:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 16,
                                  "type": "mapping(uint8 => uint256)",
                                  "value": "candidates"
                                },
                                "id": 92,
                                "name": "Identifier",
                                "src": "1218:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 72,
                                  "type": "uint8",
                                  "value": "_candidate_id"
                                },
                                "id": 93,
                                "name": "Identifier",
                                "src": "1229:13:0"
                              }
                            ],
                            "id": 94,
                            "name": "IndexAccess",
                            "src": "1218:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 95,
                            "name": "Literal",
                            "src": "1247:1:0"
                          }
                        ],
                        "id": 96,
                        "name": "Assignment",
                        "src": "1218:30:0"
                      }
                    ],
                    "id": 97,
                    "name": "ExpressionStatement",
                    "src": "1218:30:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 18,
                              "type": "uint256",
                              "value": "total_votes"
                            },
                            "id": 98,
                            "name": "Identifier",
                            "src": "1259:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 99,
                            "name": "Literal",
                            "src": "1274:1:0"
                          }
                        ],
                        "id": 100,
                        "name": "Assignment",
                        "src": "1259:16:0"
                      }
                    ],
                    "id": 101,
                    "name": "ExpressionStatement",
                    "src": "1259:16:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "voted",
                              "referencedDeclaration": 5,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Voting.Voter storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 12,
                                      "type": "mapping(address => struct Voting.Voter storage ref)",
                                      "value": "voters"
                                    },
                                    "id": 102,
                                    "name": "Identifier",
                                    "src": "1286:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 74,
                                      "type": "address",
                                      "value": "_voter"
                                    },
                                    "id": 103,
                                    "name": "Identifier",
                                    "src": "1293:6:0"
                                  }
                                ],
                                "id": 104,
                                "name": "IndexAccess",
                                "src": "1286:14:0"
                              }
                            ],
                            "id": 105,
                            "name": "MemberAccess",
                            "src": "1286:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 106,
                            "name": "Literal",
                            "src": "1309:4:0"
                          }
                        ],
                        "id": 107,
                        "name": "Assignment",
                        "src": "1286:27:0"
                      }
                    ],
                    "id": 108,
                    "name": "ExpressionStatement",
                    "src": "1286:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint8"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "vote_id",
                              "referencedDeclaration": 7,
                              "type": "uint8"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Voting.Voter storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 12,
                                      "type": "mapping(address => struct Voting.Voter storage ref)",
                                      "value": "voters"
                                    },
                                    "id": 109,
                                    "name": "Identifier",
                                    "src": "1324:6:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 74,
                                      "type": "address",
                                      "value": "_voter"
                                    },
                                    "id": 110,
                                    "name": "Identifier",
                                    "src": "1331:6:0"
                                  }
                                ],
                                "id": 111,
                                "name": "IndexAccess",
                                "src": "1324:14:0"
                              }
                            ],
                            "id": 112,
                            "name": "MemberAccess",
                            "src": "1324:22:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 72,
                              "type": "uint8",
                              "value": "_candidate_id"
                            },
                            "id": 113,
                            "name": "Identifier",
                            "src": "1349:13:0"
                          }
                        ],
                        "id": 114,
                        "name": "Assignment",
                        "src": "1324:38:0"
                      }
                    ],
                    "id": 115,
                    "name": "ExpressionStatement",
                    "src": "1324:38:0"
                  }
                ],
                "id": 116,
                "name": "Block",
                "src": "1111:259:0"
              }
            ],
            "id": 117,
            "name": "FunctionDefinition",
            "src": "1053:317:0"
          }
        ],
        "id": 118,
        "name": "ContractDefinition",
        "src": "27:1346:0"
      }
    ],
    "id": 119,
    "name": "SourceUnit",
    "src": "0:1373:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x3f762f977752789dEfC3c8160F43Db4ADc0e0957",
      "transactionHash": "0xf53270962c7a6bec50c4211f82634d102ca0da5c48b88737f0562741b190a4cb"
    },
    "80001": {
      "events": {},
      "links": {},
      "address": "0x3AED481c9A6B9BB2E3bB3971f88621CA4Dc32056",
      "transactionHash": "0x0c5819606db5803a84137f839c38983ec7c102ecd5aa05b489bc1303a8b00fa4"
    }
  },
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-02-26T13:15:06.946Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}