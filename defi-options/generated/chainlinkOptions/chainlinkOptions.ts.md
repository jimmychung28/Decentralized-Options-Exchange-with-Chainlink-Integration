# Internal Code Documentation: Chainlink Options Contract

## Table of Contents

* [1. Introduction](#1-introduction)
* [2. Data Structures](#2-data-structures)
    * [2.1. `OptionWritten` Class](#21-optionwritten-class)
    * [2.2. `OptionWritten__Params` Class](#22-optionwritten__params-class)
    * [2.3. `chainlinkOptions__ethOptsResult` Class](#23-chainlinkoptions__ethoptsresult-class)
    * [2.4. `chainlinkOptions__linkOptsResult` Class](#24-chainlinkoptions__linkoptsresult-class)
* [3. Smart Contract: `chainlinkOptions`](#3-smart-contract-chainlinkoptions)
    * [3.1. `ethOpts` Function](#31-ethopts-function)
    * [3.2. `try_ethOpts` Function](#32-try_ethopts-function)
    * [3.3. `getEthPrice` Function](#33-getethprice-function)
    * [3.4. `try_getEthPrice` Function](#34-try_getethprice-function)
    * [3.5. `getLinkPrice` Function](#35-getlinkprice-function)
    * [3.6. `try_getLinkPrice` Function](#36-try_getlinkprice-function)
    * [3.7. `linkOpts` Function](#37-linkopts-function)
    * [3.8. `try_linkOpts` Function](#38-try_linkopts-function)
* [4. Call Structures](#4-call-structures)
    * [4.1. `ConstructorCall` Class](#41-constructorcall-class)
    * [4.2. `BuyOptionCall` Class](#42-buyoptioncall-class)
    * [4.3. `CancelOptionCall` Class](#43-canceloptioncall-class)
    * [4.4. `ExerciseCall` Class](#44-exercisecall-class)
    * [4.5. `RetrieveExpiredFundsCall` Class](#45-retrieveexpiredfundscall-class)
    * [4.6. `UpdateExerciseCostCall` Class](#46-updateexercisecostcall-class)
    * [4.7. `WriteOptionCall` Class](#47-writeoptioncall-class)


<a name="1-introduction"></a>
## 1. Introduction

This document details the internal workings of the auto-generated code for interacting with a Chainlink Options smart contract.  The code utilizes the `@graphprotocol/graph-ts` library for interacting with Ethereum events and contracts.


<a name="2-data-structures"></a>
## 2. Data Structures

<a name="21-optionwritten-class"></a>
### 2.1. `OptionWritten` Class

This class represents the `OptionWritten` event emitted by the smart contract. It extends the `ethereum.Event` class, providing access to event parameters.


<a name="22-optionwritten__params-class"></a>
### 2.2. `OptionWritten__Params` Class

This class provides a structured way to access parameters of the `OptionWritten` event.  It retrieves parameter values from the underlying event object.

| Parameter Name | Type     | Description                               |
|-----------------|----------|-------------------------------------------|
| `token`        | `string` | The token associated with the option.     |
| `strike`       | `BigInt` | The strike price of the option.          |
| `premium`      | `BigInt` | The premium paid for the option.         |
| `expiry`       | `BigInt` | The expiry timestamp of the option.       |
| `tknAmt`       | `BigInt` | The amount of the underlying token.       |


<a name="23-chainlinkoptions__ethoptsresult-class"></a>
### 2.3. `chainlinkOptions__ethOptsResult` Class

This class represents the result of the `ethOpts` function call on the `chainlinkOptions` contract.  It encapsulates various option details for ETH options.

| Parameter Name   | Type      | Description                                 |
|--------------------|-----------|---------------------------------------------|
| `value0` (Strike) | `BigInt`  | The strike price of the option.             |
| `value1` (Premium)| `BigInt`  | The premium paid for the option.            |
| `value2` (Expiry) | `BigInt`  | The expiry timestamp of the option.          |
| `value3` (Amount) | `BigInt`  | The amount of the underlying token.         |
| `value4` (Exercised)| `boolean` | Indicates if the option has been exercised. |
| `value5` (Canceled) | `boolean` | Indicates if the option has been canceled.  |
| `value6` (ID)     | `BigInt`  | Unique identifier for the option.          |
| `value7` (LatestCost)| `BigInt`  | Latest cost associated with the option.     |
| `value8` (Writer) | `Address` | Address of the option writer.              |
| `value9` (Buyer)  | `Address` | Address of the option buyer.               |


<a name="24-chainlinkoptions__linkoptsresult-class"></a>
### 2.4. `chainlinkOptions__linkOptsResult` Class

This class is identical in structure to `chainlinkOptions__ethOptsResult` but represents option details for LINK options instead of ETH options.


<a name="3-smart-contract-chainlinkoptions"></a>
## 3. Smart Contract: `chainlinkOptions`

This section describes the functions of the `chainlinkOptions` smart contract.

<a name="31-ethopts-function"></a>
### 3.1. `ethOpts` Function

This function retrieves details of an ETH option given its ID (`param0`). It makes a call to the smart contract and parses the returned data into a `chainlinkOptions__ethOptsResult` object.  The algorithm involves:

1. Calling the smart contract's `ethOpts` function with the provided ID.
2. Parsing the returned array of `ethereum.Value` objects into the corresponding data types (BigInt, boolean, Address).
3. Constructing and returning a `chainlinkOptions__ethOptsResult` object.


<a name="32-try_ethopts-function"></a>
### 3.2. `try_ethOpts` Function

This function is similar to `ethOpts` but uses `super.tryCall` instead of `super.call`. This allows for handling cases where the contract call reverts. If the call reverts, an empty `ethereum.CallResult` is returned; otherwise, a `CallResult` containing a `chainlinkOptions__ethOptsResult` is returned.


<a name="33-getethprice-function"></a>
### 3.3. `getEthPrice` Function

This function retrieves the current ETH price from the smart contract.  It makes a call to the `getEthPrice` function of the contract and returns the price as a `BigInt`.


<a name="34-try_getethprice-function"></a>
### 3.4. `try_getEthPrice` Function

This function is a safer version of `getEthPrice`, handling potential reverts from the contract call using `super.tryCall`.


<a name="35-getlinkprice-function"></a>
### 3.5. `getLinkPrice` Function

This function retrieves the current LINK price from the smart contract. Similar to `getEthPrice`, it makes a contract call and returns the price as a `BigInt`.


<a name="36-try_getlinkprice-function"></a>
### 3.6. `try_getLinkPrice` Function

This function is the revert-safe version of `getLinkPrice`, using `super.tryCall`.


<a name="37-linkopts-function"></a>
### 3.7. `linkOpts` Function

This function is analogous to `ethOpts`, retrieving details of a LINK option based on its ID. The algorithm is identical, only operating on LINK options instead of ETH options.


<a name="38-try_linkopts-function"></a>
### 3.8. `try_linkOpts` Function

This function mirrors `try_ethOpts` but for LINK options, providing revert handling for the `linkOpts` contract call.


<a name="4-call-structures"></a>
## 4. Call Structures

This section documents the structures representing calls to the smart contract.

<a name="41-constructorcall-class"></a>
### 4.1. `ConstructorCall` Class

This class represents a call to the contract's constructor.  It includes input and output parameters.


<a name="42-buyoptioncall-class"></a>
### 4.2. `BuyOptionCall` Class

This class represents a call to the `BuyOption` function.

| Parameter Name | Type     | Description                       |
|-----------------|----------|-----------------------------------|
| `token`        | `string` | The token of the option being bought. |
| `ID`           | `BigInt`  | The ID of the option being bought.  |


<a name="43-canceloptioncall-class"></a>
### 4.3. `CancelOptionCall` Class

This class represents a call to the `CancelOption` function.  The structure is the same as `BuyOptionCall`.


<a name="44-exercisecall-class"></a>
### 4.4. `ExerciseCall` Class

This class represents a call to the `Exercise` function.  The structure is the same as `BuyOptionCall`.


<a name="45-retrieveexpiredfundscall-class"></a>
### 4.5. `RetrieveExpiredFundsCall` Class

This class represents a call to the `RetrieveExpiredFunds` function.  The structure is the same as `BuyOptionCall`.


<a name="46-updateexercisecostcall-class"></a>
### 4.6. `UpdateExerciseCostCall` Class

This class represents a call to the `UpdateExerciseCost` function. The structure is the same as `BuyOptionCall`.


<a name="47-writeoptioncall-class"></a>
### 4.7. `WriteOptionCall` Class

This class represents a call to the `WriteOption` function.

| Parameter Name | Type     | Description                               |
|-----------------|----------|-------------------------------------------|
| `token`        | `string` | The token associated with the option.     |
| `strike`       | `BigInt` | The strike price of the option.          |
| `premium`      | `BigInt` | The premium paid for the option.         |
| `expiry`       | `BigInt` | The expiry timestamp of the option.       |
| `tknAmt`       | `BigInt` | The amount of the underlying token.       |

