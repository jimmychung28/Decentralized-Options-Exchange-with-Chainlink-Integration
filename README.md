# DeFi Options Platform

A decentralized options trading platform built on Ethereum using Chainlink price feeds. This platform allows users to write, buy, and exercise options contracts for ETH and LINK tokens.

## Overview

This platform enables the creation and trading of covered call options for ETH and LINK tokens. It uses Chainlink's decentralized price feeds to determine accurate strike prices and exercise costs. The system is built with safety in mind, utilizing OpenZeppelin's SafeMath library to prevent overflow errors.

## Features

- Write covered call options for ETH and LINK tokens
- Buy options by paying the premium
- Exercise options before expiry
- Cancel unexercised options and retrieve funds
- Real-time price feeds from Chainlink oracles
- Automatic cost calculations for exercising options
- Event tracking through The Graph protocol

## Smart Contract Architecture

The main contract `chainlinkOptions.sol` contains the core functionality:

### Key Components:
- Options struct storing all relevant option data
- Chainlink price feed integrations for ETH/USD and LINK/USD
- SafeMath implementation for secure calculations
- Event emission for option creation

## Technical Stack

- Solidity ^0.6.7
- Hardhat Development Environment
- Chainlink Price Feeds
- OpenZeppelin Contracts
- The Graph for indexing
- TypeScript for subgraph mappings

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

1. Start a local Hardhat node:
```bash
npx hardhat node
```

2. Deploy the contract:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Generate The Graph types:
```bash
npm run codegen
```

## Compiler Configuration

The project requires specific Solidity compiler versions due to dependencies. Add the following to your `hardhat.config.js`:

```javascript
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.7",
      },
    ],
    overrides: {
      "@openzeppelin/contracts/math/SafeMath.sol": {
        version: "0.6.0",
      },
      "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol": {
        version: "0.6.0",
      },
      "@chainlink/contracts/src/v0.6/interfaces/LinkTokenInterface.sol": {
        version: "0.6.0",
      }
    }
  }
};
```

Required compiler versions:
- Main contract: `^0.6.7`
- OpenZeppelin SafeMath: `>=0.6.0 <0.8.0`
- Chainlink Interfaces: `^0.6.0`

## Schema

The Graph schema for indexing options:

```graphql
type Options @entity {
  id: ID!
  strike: BigInt!
  premium: BigInt!
  expiry: BigInt!
  amount: BigInt!
  exercised: Boolean!
  canceled: Boolean!
  optionId: BigInt!
  latestCost: BigInt!
  writer: String!
  buyer: String!
}
```

## Testing

Run the test suite:
```bash
npx hardhat test
```

For gas reporting:
```bash
GAS_REPORT=true npx hardhat test
```

## Security Considerations

- All mathematical operations use SafeMath to prevent overflows
- Price feeds are verified for staleness before use
- Options can only be exercised by their rightful owners
- Expired options can be retrieved only by original writers
- Contract includes checks for proper token amounts and permissions

## Dependencies

Key dependencies include:
```json
{
  "dependencies": {
    "@chainlink/contracts": "^0.4.1",
    "@openzeppelin/contracts": "^3.4.1"
  }
}
```

## License

UNLICENSED

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Future Improvements

1. Add put options support
2. Implement partial exercise functionality
3. Add more token pairs
4. Implement a DAO governance structure
5. Add automated option exercise notifications

For more information about the Chainlink integration and price feeds, visit the [Chainlink documentation](https://docs.chain.link/).
