// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OptionWritten extends ethereum.Event {
  get params(): OptionWritten__Params {
    return new OptionWritten__Params(this);
  }
}

export class OptionWritten__Params {
  _event: OptionWritten;

  constructor(event: OptionWritten) {
    this._event = event;
  }

  get token(): string {
    return this._event.parameters[0].value.toString();
  }

  get strike(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get premium(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tknAmt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class chainlinkOptions__ethOptsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    return map;
  }

  getStrike(): BigInt {
    return this.value0;
  }

  getPremium(): BigInt {
    return this.value1;
  }

  getExpiry(): BigInt {
    return this.value2;
  }

  getAmount(): BigInt {
    return this.value3;
  }

  getExercised(): boolean {
    return this.value4;
  }

  getCanceled(): boolean {
    return this.value5;
  }

  getId(): BigInt {
    return this.value6;
  }

  getLatestCost(): BigInt {
    return this.value7;
  }

  getWriter(): Address {
    return this.value8;
  }

  getBuyer(): Address {
    return this.value9;
  }
}

export class chainlinkOptions__linkOptsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    return map;
  }

  getStrike(): BigInt {
    return this.value0;
  }

  getPremium(): BigInt {
    return this.value1;
  }

  getExpiry(): BigInt {
    return this.value2;
  }

  getAmount(): BigInt {
    return this.value3;
  }

  getExercised(): boolean {
    return this.value4;
  }

  getCanceled(): boolean {
    return this.value5;
  }

  getId(): BigInt {
    return this.value6;
  }

  getLatestCost(): BigInt {
    return this.value7;
  }

  getWriter(): Address {
    return this.value8;
  }

  getBuyer(): Address {
    return this.value9;
  }
}

export class chainlinkOptions extends ethereum.SmartContract {
  static bind(address: Address): chainlinkOptions {
    return new chainlinkOptions("chainlinkOptions", address);
  }

  ethOpts(param0: BigInt): chainlinkOptions__ethOptsResult {
    let result = super.call(
      "ethOpts",
      "ethOpts(uint256):(uint256,uint256,uint256,uint256,bool,bool,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new chainlinkOptions__ethOptsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toAddress()
    );
  }

  try_ethOpts(
    param0: BigInt
  ): ethereum.CallResult<chainlinkOptions__ethOptsResult> {
    let result = super.tryCall(
      "ethOpts",
      "ethOpts(uint256):(uint256,uint256,uint256,uint256,bool,bool,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new chainlinkOptions__ethOptsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toAddress()
      )
    );
  }

  getEthPrice(): BigInt {
    let result = super.call("getEthPrice", "getEthPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getEthPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getEthPrice", "getEthPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLinkPrice(): BigInt {
    let result = super.call("getLinkPrice", "getLinkPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getLinkPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getLinkPrice", "getLinkPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  linkOpts(param0: BigInt): chainlinkOptions__linkOptsResult {
    let result = super.call(
      "linkOpts",
      "linkOpts(uint256):(uint256,uint256,uint256,uint256,bool,bool,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new chainlinkOptions__linkOptsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toAddress()
    );
  }

  try_linkOpts(
    param0: BigInt
  ): ethereum.CallResult<chainlinkOptions__linkOptsResult> {
    let result = super.tryCall(
      "linkOpts",
      "linkOpts(uint256):(uint256,uint256,uint256,uint256,bool,bool,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new chainlinkOptions__linkOptsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toAddress()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyOptionCall extends ethereum.Call {
  get inputs(): BuyOptionCall__Inputs {
    return new BuyOptionCall__Inputs(this);
  }

  get outputs(): BuyOptionCall__Outputs {
    return new BuyOptionCall__Outputs(this);
  }
}

export class BuyOptionCall__Inputs {
  _call: BuyOptionCall;

  constructor(call: BuyOptionCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyOptionCall__Outputs {
  _call: BuyOptionCall;

  constructor(call: BuyOptionCall) {
    this._call = call;
  }
}

export class CancelOptionCall extends ethereum.Call {
  get inputs(): CancelOptionCall__Inputs {
    return new CancelOptionCall__Inputs(this);
  }

  get outputs(): CancelOptionCall__Outputs {
    return new CancelOptionCall__Outputs(this);
  }
}

export class CancelOptionCall__Inputs {
  _call: CancelOptionCall;

  constructor(call: CancelOptionCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelOptionCall__Outputs {
  _call: CancelOptionCall;

  constructor(call: CancelOptionCall) {
    this._call = call;
  }
}

export class ExerciseCall extends ethereum.Call {
  get inputs(): ExerciseCall__Inputs {
    return new ExerciseCall__Inputs(this);
  }

  get outputs(): ExerciseCall__Outputs {
    return new ExerciseCall__Outputs(this);
  }
}

export class ExerciseCall__Inputs {
  _call: ExerciseCall;

  constructor(call: ExerciseCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ExerciseCall__Outputs {
  _call: ExerciseCall;

  constructor(call: ExerciseCall) {
    this._call = call;
  }
}

export class RetrieveExpiredFundsCall extends ethereum.Call {
  get inputs(): RetrieveExpiredFundsCall__Inputs {
    return new RetrieveExpiredFundsCall__Inputs(this);
  }

  get outputs(): RetrieveExpiredFundsCall__Outputs {
    return new RetrieveExpiredFundsCall__Outputs(this);
  }
}

export class RetrieveExpiredFundsCall__Inputs {
  _call: RetrieveExpiredFundsCall;

  constructor(call: RetrieveExpiredFundsCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RetrieveExpiredFundsCall__Outputs {
  _call: RetrieveExpiredFundsCall;

  constructor(call: RetrieveExpiredFundsCall) {
    this._call = call;
  }
}

export class UpdateExerciseCostCall extends ethereum.Call {
  get inputs(): UpdateExerciseCostCall__Inputs {
    return new UpdateExerciseCostCall__Inputs(this);
  }

  get outputs(): UpdateExerciseCostCall__Outputs {
    return new UpdateExerciseCostCall__Outputs(this);
  }
}

export class UpdateExerciseCostCall__Inputs {
  _call: UpdateExerciseCostCall;

  constructor(call: UpdateExerciseCostCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateExerciseCostCall__Outputs {
  _call: UpdateExerciseCostCall;

  constructor(call: UpdateExerciseCostCall) {
    this._call = call;
  }
}

export class WriteOptionCall extends ethereum.Call {
  get inputs(): WriteOptionCall__Inputs {
    return new WriteOptionCall__Inputs(this);
  }

  get outputs(): WriteOptionCall__Outputs {
    return new WriteOptionCall__Outputs(this);
  }
}

export class WriteOptionCall__Inputs {
  _call: WriteOptionCall;

  constructor(call: WriteOptionCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get strike(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get premium(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tknAmt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class WriteOptionCall__Outputs {
  _call: WriteOptionCall;

  constructor(call: WriteOptionCall) {
    this._call = call;
  }
}

export class WriteOptionTestCall extends ethereum.Call {
  get inputs(): WriteOptionTestCall__Inputs {
    return new WriteOptionTestCall__Inputs(this);
  }

  get outputs(): WriteOptionTestCall__Outputs {
    return new WriteOptionTestCall__Outputs(this);
  }
}

export class WriteOptionTestCall__Inputs {
  _call: WriteOptionTestCall;

  constructor(call: WriteOptionTestCall) {
    this._call = call;
  }

  get token(): string {
    return this._call.inputValues[0].value.toString();
  }

  get strike(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get premium(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tknAmt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class WriteOptionTestCall__Outputs {
  _call: WriteOptionTestCall;

  constructor(call: WriteOptionTestCall) {
    this._call = call;
  }
}