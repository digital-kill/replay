[@puppeteer/replay](../README.md) / WaitForExpressionStep

# Interface: WaitForExpressionStep

`waitForExpression` allows for a JavaScript expression to resolve to truthy
value.

For example, the following step pauses for two seconds and then resolves to
true allowing the replay to continue.

```
{
  "type": "waitForExpression",
  "expression": "new Promise(resolve => setTimeout(() => resolve(true),
2000))",
}
```

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`WaitForExpressionStep`**

## Table of contents

### Properties

- [assertedEvents](WaitForExpressionStep.md#assertedevents)
- [expression](WaitForExpressionStep.md#expression)
- [frame](WaitForExpressionStep.md#frame)
- [target](WaitForExpressionStep.md#target)
- [timeout](WaitForExpressionStep.md#timeout)
- [type](WaitForExpressionStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### expression

• **expression**: `string`

#### Defined in

[Schema.ts:265](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L265)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`WaitForExpression`](../enums/Schema.StepType.md#waitforexpression)

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:264](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L264)
