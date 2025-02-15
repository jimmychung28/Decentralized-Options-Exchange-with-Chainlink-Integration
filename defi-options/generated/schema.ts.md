# ExampleEntity Class Documentation

[Linked Table of Contents](#table-of-contents)

## <a name="table-of-contents"></a>Table of Contents

* [1. Introduction](#introduction)
* [2. Class Overview: `ExampleEntity`](#class-overview-exampleentity)
    * [2.1 Constructor](#constructor)
    * [2.2 `save()` Method](#save-method)
    * [2.3 `load()` Method](#load-method)
    * [2.4 Getter and Setter Methods](#getter-and-setter-methods)
* [3. Data Properties](#data-properties)


## <a name="introduction"></a>1. Introduction

This document provides internal code documentation for the `ExampleEntity` class, generated automatically.  This class is designed to interact with a persistent data store, likely a graph database, using the `@graphprotocol/graph-ts` library.


## <a name="class-overview-exampleentity"></a>2. Class Overview: `ExampleEntity`

The `ExampleEntity` class represents an entity within a data store.  It leverages the `Entity` class from the `@graphprotocol/graph-ts` library to manage data persistence.  Key features include a constructor for creating new entities, methods for saving and loading entities, and getter/setter methods for accessing and modifying entity properties.


### <a name="constructor"></a>2.1 Constructor

```typescript
constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
}
```

The constructor initializes a new `ExampleEntity` instance.  It takes a string `id` as an argument, which serves as the unique identifier for the entity. The `super()` call invokes the parent class constructor, and `this.set("id", Value.fromString(id))` sets the "id" property of the entity to the provided `id` string, converting it to a `Value` object suitable for the underlying data store.


### <a name="save-method"></a>2.2 `save()` Method

```typescript
save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
}
```

The `save()` method persists the `ExampleEntity` instance to the data store. It first retrieves the entity's ID.  The code then includes assertions to ensure that an ID exists and that it's of the correct type (String).  If these assertions pass, the entity is saved using `store.set("ExampleEntity", id.toString(), this)`, where "ExampleEntity" is the entity type, `id.toString()` is the ID, and `this` represents the entity instance.


### <a name="load-method"></a>2.3 `load()` Method

```typescript
static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
}
```

The `load()` method is a static method that retrieves an `ExampleEntity` from the data store using its ID. It uses `store.get("ExampleEntity", id)` to fetch the entity. The `changetype` function is used to safely cast the retrieved data (which might be null) to an `ExampleEntity` or `null`.


### <a name="getter-and-setter-methods"></a>2.4 Getter and Setter Methods

The class includes getter and setter methods for the properties `id`, `count`, `token`, and `strike`.  These methods handle the conversion between the internal representation of the data and the `Value` objects used by the data store.  For example:

```typescript
get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
}

set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
}
```

This getter and setter for the `count` property demonstrate the pattern.  The getter retrieves the property from the internal store (`this.get("count")`), safely unwraps the optional value (`value!`), and converts it to a `BigInt`. The setter takes a `BigInt` value and converts it into a `Value` object before setting it in the internal store.  The other properties (`id`, `token`, `strike`) follow a similar pattern, using appropriate conversions (e.g., `toString()` for strings).


## <a name="data-properties"></a>3. Data Properties

The `ExampleEntity` class manages the following properties:

| Property Name | Type     | Description                                      |
|---------------|----------|--------------------------------------------------|
| `id`          | `string` | Unique identifier for the entity.                 |
| `count`       | `BigInt` | A numerical count.                               |
| `token`       | `string` | A token identifier (string).                      |
| `strike`      | `BigInt` | A numerical strike price (likely a large number).|

These properties are stored and retrieved using the underlying `store` functionality provided by `@graphprotocol/graph-ts`.  The getter and setter methods ensure type safety and proper data handling.
