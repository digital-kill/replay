[@puppeteer/replay](../README.md) / StepWithTarget

# Interface: StepWithTarget

## Hierarchy

- [`BaseStep`](Schema.BaseStep.md)

  ↳ **`StepWithTarget`**

## Table of contents

### Properties

- [assertedEvents](StepWithTarget.md#assertedevents)
- [target](StepWithTarget.md#target)
- [timeout](StepWithTarget.md#timeout)
- [type](StepWithTarget.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[BaseStep](Schema.BaseStep.md).[assertedEvents](Schema.BaseStep.md#assertedevents)

#### Defined in

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[BaseStep](Schema.BaseStep.md).[timeout](Schema.BaseStep.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`StepType`](../enums/Schema.StepType.md)

#### Inherited from

[BaseStep](Schema.BaseStep.md).[type](Schema.BaseStep.md#type)

#### Defined in

[Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)
