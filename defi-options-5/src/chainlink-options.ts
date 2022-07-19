import { BigInt } from "@graphprotocol/graph-ts"
import {
  chainlinkOptions,
  OptionWritten
} from "../generated/chainlinkOptions/chainlinkOptions"
import { Options } from "../generated/schema"

export function handleOptionWritten(event: OptionWritten): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Options.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Options(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.strike = BigInt.fromI32(0)
    entity.premium = BigInt.fromI32(0)
    entity.expiry = BigInt.fromI32(0)
    entity.amount = BigInt.fromI32(0)
    entity.exercised = true 
    entity.canceled = false 
    entity.latestCost= BigInt.fromI32(0)
    entity.writer = "qpwioje"
    entity.buyer = "qpwioje"
  }

  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameterss
  // entity.token = event.params.token
  // entity.strike = event.params.strike
  entity.id="hihi"
  entity.strike = event.params.strike
  entity.premium =  event.params.premium
  entity.expiry = BigInt.fromI32(0)
  entity.amount = BigInt.fromI32(0)
  entity.exercised = true 
  entity.canceled = false 
  entity.latestCost= BigInt.fromI32(0)
  entity.writer = "qpwioje"
  entity.buyer = "qpwioje"

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ethOpts(...)
  // - contract.getEthPrice(...)
  // - contract.getLinkPrice(...)
  // - contract.linkOpts(...)
}
