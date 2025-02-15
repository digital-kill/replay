[@puppeteer/replay](../README.md) / StepWithFrame

# Interface: StepWithFrame

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`StepWithFrame`**

## Table of contents

### Properties

- [assertedEvents](StepWithFrame.md#assertedevents)
- [frame](StepWithFrame.md#frame)
- [target](StepWithFrame.md#target)
- [timeout](StepWithFrame.md#timeout)
- [type](StepWithFrame.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`StepType`](../enums/Schema.StepType.md)

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)
