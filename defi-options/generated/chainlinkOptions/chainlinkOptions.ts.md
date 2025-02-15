# Internal Code Documentation: Chainlink Options Contract

## Table of Contents

* [1. Overview](#1-overview)
* [2. Data Structures](#2-data-structures)
    * [2.1. `OptionWritten` and `OptionWritten__Params`](#21-optionwritten-and-optionwritten__params)
    * [2.2. `chainlinkOptions__ethOptsResult` and `chainlinkOptions__linkOptsResult`](#22-chainlinkoptions__ethoptsresult-and-chainlinkoptions__linkoptsresult)
* [3. Smart Contract: `chainlinkOptions`](#3-smart-contract-chainlinkoptions)
    * [3.1. `ethOpts` and `try_ethOpts`](#31-ethopts-and-try_ethopts)
    * [3.2. `getEthPrice` and `try_getEthPrice`](#32-getEthPrice-and-try_getEthPrice)
    * [3.3. `getLinkPrice` and `try_getLinkPrice`](#33-getLinkPrice-and-try_getLinkPrice)
    * [3.4. `linkOpts` and `try_linkOpts`](#34-linkopts-and-try_linkopts)
* [4. Call Structures](#4-call-structures)
    * [4.1. `ConstructorCall`](#41-constructorcall)
    * [4.2. `BuyOptionCall`](#42-buyoptioncall)
    * [4.3. `CancelOptionCall`](#43-canceloptioncall)
    * [4.4. `ExerciseCall`](#44-exercisecall)
    * [4.5. `RetrieveExpiredFundsCall`](#45-retrieveexpiredfundscall)
    * [4.6. `UpdateExerciseCostCall`](#46-updateexercisecostcall)
    * [4.7. `WriteOptionCall`](#47-writeoptioncall)


<a name="1-overview"></a>
## 1. Overview

This document details the structure and functionality of the `chainlinkOptions` smart contract and related data structures.  The contract manages options for both ETH and LINK, providing functions to write, buy, exercise, and cancel options, as well as retrieve expired funds and update exercise costs.  The contract utilizes the `@graphprotocol/graph-ts` library for interacting with Ethereum events and data.


<a name="2-data-structures"></a>
## 2. Data Structures

<a name="21-optionwritten-and-optionwritten__params"></a>
### 2.1. `OptionWritten` and `OptionWritten__Params`

The `OptionWritten` class represents an event emitted when a new option is written.  `OptionWritten__Params` provides convenient access to the event parameters:

| Parameter | Type       | Description                                  |
|------------|-------------|----------------------------------------------|
| `token`    | `string`    | The token symbol (e.g., "ETH", "LINK").      |
| `strike`   | `BigInt`    | The strike price of the option.             |
| `premium`  | `BigInt`    | The premium paid for the option.            |
| `expiry`   | `BigInt`    | The expiry timestamp of the option.          |
| `tknAmt`   | `BigInt`    | The amount of the underlying token.         |


<a name="22-chainlinkoptions__ethoptsresult-and-chainlinkoptions__linkoptsresult"></a>
### 2.2. `chainlinkOptions__ethOptsResult` and `chainlinkOptions__linkOptsResult`

These classes represent the results returned by the `ethOpts` and `linkOpts` functions respectively. They encapsulate data about a specific option:

| Parameter      | Type       | Description                                      |
|-----------------|-------------|--------------------------------------------------|
| `value0` / `getStrike()` | `BigInt`    | Strike price                                     |
| `value1` / `getPremium()` | `BigInt`    | Premium                                         |
| `value2` / `getExpiry()`  | `BigInt`    | Expiry timestamp                                 |
| `value3` / `getAmount()`  | `BigInt`    | Amount of underlying token                     |
| `value4` / `getExercised()`| `boolean`   | True if the option has been exercised, false otherwise |
| `value5` / `getCanceled()` | `boolean`   | True if the option has been canceled, false otherwise |
| `value6` / `getId()`      | `BigInt`    | Unique identifier for the option                |
| `value7` / `getLatestCost()`| `BigInt`    | Latest cost associated with the option           |
| `value8` / `getWriter()`  | `Address`   | Address of the option writer                   |
| `value9` / `getBuyer()`   | `Address`   | Address of the option buyer                    |


<a name="3-smart-contract-chainlinkoptions"></a>
## 3. Smart Contract: `chainlinkOptions`

<a name="31-ethopts-and-try_ethopts"></a>
### 3.1. `ethOpts` and `try_ethOpts`

The `ethOpts` function retrieves option data for a given ID.  `try_ethOpts` is a safer version that handles potential reverts from the smart contract call.  Both functions use the same underlying algorithm: they call the `ethOpts` function of the deployed smart contract, passing the option ID as a parameter and receiving a `chainlinkOptions__ethOptsResult`. The algorithm's complexity is O(1), as it directly accesses data based on a given ID in the blockchain's storage.

<a name="32-getEthPrice-and-try_getEthPrice"></a>
### 3.2. `getEthPrice` and `try_getEthPrice`

These functions retrieve the current price of ETH. `try_getEthPrice` handles potential reverts. Both have an O(1) complexity, assuming the price is stored directly within the smart contract, allowing for fast retrieval.


<a name="33-getLinkPrice-and-try_getLinkPrice"></a>
### 3.3. `getLinkPrice` and `try_getLinkPrice`

These functions retrieve the current price of LINK, mirroring the functionality of `getEthPrice` and `try_getEthPrice`.  Complexity is O(1).


<a name="34-linkopts-and-try_linkopts"></a>
### 3.4. `linkOpts` and `try_linkOpts`

The `linkOpts` function retrieves option data for LINK, analogous to `ethOpts`. `try_linkOpts` handles reverts.  Complexity is O(1).


<a name="4-call-structures"></a>
## 4. Call Structures

The following sections detail the input and output parameters for different calls to the `chainlinkOptions` contract.

<a name="41-constructorcall"></a>
### 4.1. `ConstructorCall`

This represents a call to the contract's constructor.  It has no input or output parameters defined in this code.

<a name="42-buyoptioncall"></a>
### 4.2. `BuyOptionCall`

This represents a call to buy an option.

| Parameter | Type       | Description                    |
|------------|-------------|--------------------------------|
| `token`    | `string`    | Token symbol ("ETH" or "LINK") |
| `ID`       | `BigInt`    | Option ID                      |

<a name="43-canceloptioncall"></a>
### 4.3. `CancelOptionCall`

This represents a call to cancel an option.

| Parameter | Type       | Description                    |
|------------|-------------|--------------------------------|
| `token`    | `string`    | Token symbol ("ETH" or "LINK") |
| `ID`       | `BigInt`    | Option ID                      |


<a name="44-exercisecall"></a>
### 4.4. `ExerciseCall`

This represents a call to exercise an option.

| Parameter | Type       | Description                    |
|------------|-------------|--------------------------------|
| `token`    | `string`    | Token symbol ("ETH" or "LINK") |
| `ID`       | `BigInt`    | Option ID                      |


<a name="45-retrieveexpiredfundscall"></a>
### 4.5. `RetrieveExpiredFundsCall`

This represents a call to retrieve funds from expired options.

| Parameter | Type       | Description                    |
|------------|-------------|--------------------------------|
| `token`    | `string`    | Token symbol ("ETH" or "LINK") |
| `ID`       | `BigInt`    | Option ID                      |


<a name="46-updateexercisecostcall"></a>
### 4.6. `UpdateExerciseCostCall`

This represents a call to update the exercise cost of an option.

| Parameter | Type       | Description                    |
|------------|-------------|--------------------------------|
| `token`    | `string`    | Token symbol ("ETH" or "LINK") |
| `ID`       | `BigInt`    | Option ID                      |


<a name="47-writeoptioncall"></a>
### 4.7. `WriteOptionCall`

This represents a call to write a new option.

| Parameter | Type       | Description                                  |
|------------|-------------|----------------------------------------------|
| `token`    | `string`    | The token symbol (e.g., "ETH", "LINK").      |
| `strike`   | `BigInt`    | The strike price of the option.             |
| `premium`  | `BigInt`    | The premium paid for the option.            |
| `expiry`   | `BigInt`    | The expiry timestamp of the option.          |
| `tknAmt`   | `BigInt`    | The amount of the underlying token.         |

All call structures, aside from the constructor, have no defined output parameters in this code.
