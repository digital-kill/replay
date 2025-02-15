[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / StepWithFrame

# Interface: StepWithFrame

[Schema](../modules/Schema.md).StepWithFrame

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`StepWithFrame`**

  ↳↳ [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳↳ [`ScrollPageStep`](Schema.ScrollPageStep.md)

  ↳↳ [`WaitForExpressionStep`](Schema.WaitForExpressionStep.md)

  ↳↳ [`StepWithSelectors`](StepWithSelectors.md)

  ↳↳ [`ScrollPageStep`](ScrollPageStep.md)

  ↳↳ [`WaitForExpressionStep`](WaitForExpressionStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.StepWithFrame.md#assertedevents)
- [frame](Schema.StepWithFrame.md#frame)
- [target](Schema.StepWithFrame.md#target)
- [timeout](Schema.StepWithFrame.md#timeout)
- [type](Schema.StepWithFrame.md#type)

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
