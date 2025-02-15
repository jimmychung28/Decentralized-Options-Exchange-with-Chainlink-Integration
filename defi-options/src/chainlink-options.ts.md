# Internal Code Documentation: `handleOptionWritten` Function

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Function: `handleOptionWritten`](#2-function-handleoptionwritten)
    * [2.1. Function Parameters](#21-function-parameters)
    * [2.2. Algorithm Description](#22-algorithm-description)
    * [2.3. Data Storage and Retrieval](#23-data-storage-and-retrieval)
    * [2.4. Smart Contract Interaction (Example)](#24-smart-contract-interaction-example)


## 1. Overview

This document details the implementation of the `handleOptionWritten` function within the Graph Protocol project.  This function processes `OptionWritten` events emitted by the `chainlinkOptions` smart contract and updates the corresponding entities in the Graph's data store.


## 2. Function: `handleOptionWritten`

This function is a handler for the `OptionWritten` event emitted by the `chainlinkOptions` smart contract. It's responsible for updating the data store with information about newly written options.


### 2.1 Function Parameters

| Parameter Name | Type             | Description                                                                |
|-----------------|-------------------|----------------------------------------------------------------------------|
| `event`         | `OptionWritten`  | The `OptionWritten` event emitted by the smart contract. Contains details about the option written. |


### 2.2 Algorithm Description

The `handleOptionWritten` function follows these steps:

1. **Load Entity:** It attempts to load an existing `ExampleEntity` from the store using the transaction sender's address (`event.transaction.from.toHex()`) as the unique ID.

2. **Create Entity if Necessary:** If no entity is found (i.e., it's the first `OptionWritten` event for this address), a new `ExampleEntity` is created with the same ID. The `count` property is initialized to 0.

3. **Increment Count:** The `count` property of the entity is incremented by 1 using `BigInt` arithmetic. This likely tracks the number of options written by this address.

4. **Update Entity Fields:** The `token` and `strike` properties of the entity are set based on the corresponding parameters from the `OptionWritten` event.

5. **Save Entity:** The updated `ExampleEntity` is saved back to the store using `.save()`.

The algorithm prioritizes efficiency.  If an entity doesn't need to be loaded completely, it creates a fresh entity and only updates necessary fields, thereby avoiding unnecessary read operations.


### 2.3 Data Storage and Retrieval

The function interacts with the Graph's data store using the `ExampleEntity` class.  Entities are uniquely identified by the transaction sender's address (converted to hexadecimal). The function loads entities using `ExampleEntity.load()`, creates new entities using `new ExampleEntity()`, and saves updates using `.save()`.  The `count`, `token`, and `strike` fields are stored within the entity.


### 2.4 Smart Contract Interaction (Example)

The code includes commented-out examples demonstrating how to interact with the `chainlinkOptions` smart contract directly.  The commented code shows how to bind to the contract using the event's address (`event.address`) and then call functions like `ethOpts`, `getEthPrice`, `getLinkPrice`, and `linkOpts` to access contract data.  This functionality is not currently implemented in this specific function but is provided as an example for potential future development.  This allows access to further contract states and data beyond what is provided by the event itself.
