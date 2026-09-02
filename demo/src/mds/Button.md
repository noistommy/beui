# Button

사용자가 의사소통을 하도록 유도하는 가장 필수적인 상호작용 요소

### Installation

```jsx
// use in <script><script>
import { BeButton } from 'nois-beui'
```

### Usage

```jsx
<script setup>
	import { BeButton } from 'nois-beui';
</script>

<template>
	<BeButton> Button Contents </BeButton>
</template>
```

### Variants

#### Brands

semantic class - brands

Component

```html
<!-- @brandType: primary | secondary -->

<BeButton brand="primary">primary button</BeButton>

<BeButton brand="secondary">secondary button</BeButton>
```

HTML

```html
<!-- @brandType: primary | secondary -->

<button class="be-button primary">...</button>

<button class="be-button secondary">...</button>
```

#### Status

semantic class - status

Component

```html
<!-- @status: success | danger | info | attention | importance -->

<BeButton status="success">...</BeButton>
<BeButton status="danger">...</BeButton>
<BeButton status="info">...</BeButton>
<BeButton status="attention">...</BeButton>
<BeButton status="importance">...</BeButton>
```

HTML

```html
<!-- @status: success | danger | info | attention | importance -->

<button class="be-button success">...</button>
<button class="be-button danger">...</button>
<button class="be-button info">...</button>
<button class="be-button attention">...</button>
<button class="be-button importance">...</button>
```

#### Colors

semantic class - colors

Component

```html
<!-- @colors: red | orange | yellow | lightgreem | green | lightblue
 | blue | deepblue | deeppurple | purple | brown | gray -->

<BeButton color="red">...</BeButton>
<BeButton color="lightgreen">...</BeButton>
<BeButton color="deepblue">...</BeButton>
```

HTML

```html
<!-- @colors: red | orange | yellow | lightgreem | green | lightblue
 | blue | deepblue | deeppurple | purple | brown | gray -->

<button class="be-button red">...</button>
<button class="be-button lightgreen">..</button>
<button class="be-button deepblue">...</button>
```

#### Colors light

semantic class - colors light

Component

```html
<!-- @colors: red | orange | yellow | lightgreem | green | lightblue
 | blue | deepblue | deeppurple | purple | brown | gray -->
<!-- @colors-light: @color + '-light' -->

<BeButton color="red-light">...</BeButton>
<BeButton color="geen-light">...</BeButton>
<BeButton color="lightblue-light">...</BeButton>
```

HTML

```html
<!-- @colors: red | orange | yellow | lightgreem | green | lightblue
 | blue | deepblue | deeppurple | purple | brown | gray -->
<!-- @colors-light: @color + '-light' -->

<button class="be-button red-light">...</button>
<button class="be-button green-light">...</button>
<button class="be-button lightblue-light">...</button>
```

#### Text

버튼의 Text Contents 만 표시함 ( Icon 포함 ). 기본적으로 hover를 표시 하도록 하며 `.no-hover` 로 표시를 생략하도록 할 수 있다.

Component

```html
<!-- @text: Boolean -->
<!-- default: false -->

<BeButton text>...</BeButton>
```

HTML

```html
<button class="be-button text">...</button>

<button class="be-button text no-hover">...</button>
```

#### Border

semantic class - border

Component

```html
<!-- @border: Boolean -->
<!-- default: false -->

<BeButton border>...</BeButton>
```

HTML

```html
<button class="be-button border">...</button>
```

#### Disabled

버튼 비활성 표시는 `class="disabled"` 과 `disabled(attribute)` 방식으로 표시 할 수 있습니다.

Component

```html
<!-- @disabled: Boolean -->
<!-- default: false -->

<BeButton disabled">...</BeButton>
```

HTML

```html
<button class="be-button disabled">...</button>
<button class="be-button" disabled>...</button>
```

#### Fluid

semantic class - fluid

Component

```html
<!-- @fluid: Boolean -->
<!-- default: false -->

<BeButton fluid>...</BeButton>
```

HTML

```html
<button class="be-button fluid">...</button>
```

#### Compact

semantic class - compact

Component

```html
<!-- @compact: Boolean -->
<!-- default: false -->

<BeButton compact>...</BeButton>
```

HTML

```html
<button class="be-button compact">...</button>
```

#### Outline

Component

```html
<!-- @outline: Boolean -->
<!-- default: false -->

<BeButton outline>...</BeButton>
```

HTML

```html
<button class="be-button outline">...</button>
```

#### Icons(xeicon 2.3.3)

Component

```html
<!-- @icon: String -->
<!-- default: null -->

<BeButton icon="xi-icon-name" />

<BeButton class="icon">
  <i class="xi-icon-name" />
</BeButton>
```

HTML

```html
<button class="be-button icon">
  <i class="xi-icon-sname" />
</button>
```

#### Round

Component

```html
<!-- @round: Boolean -->
<!-- default: false -->

<BeButton round>...</BeButton>
```

HTML

```html
<button class="be-button round">...</button>
```

#### Size

Component

```html
<!-- @size: tiny | small | medium | large | huge | massive -->

<BeButton size="tiny">...</BeButton>
<BeButton size="small">...</BeButton>
<BeButton size="medium">...</BeButton>
<BeButton size="large">...</BeButton>
<BeButton size="huge">...</BeButton>
<BeButton size="massive">...</BeButton>
```

HTML

```html
<!-- @size: tiny | small | medium | large | huge | massive -->

<button class="be-button tiny">...</button>
<button class="be-button small">...</button>
<button class="be-button medium">...</button>
<button class="be-button large">...</button>
<button class="be-button huge">...</button>
<button class="be-button massive">...</button>
```

with Icons

Component

```html
<!-- @withIcon: String | Array -->
<!-- @iconPos: left | right | both -->

<!-- @iconPos가 both 일때, withIcon을 Array 타입으로 전달합니다. -->
<BeButton with-icon="xi-icon-name" icon-pos="left">...</BeButton>

<BeButton with-icon="[xi-icon-left, xi-icon-right]" icon-pos="both">
  ...
</BeButton>
```

HTML

```html
<!-- icon left -->
<button class="be-button">
  <i class="icon left xi-icon-name" />
  contents-text
</button>
<!-- icon right -->
<button class="be-button">
  contents-text
  <i class="icon right xi-icon-name" />
</button>
<!-- icon both -->
<button class="be-button">
  <i class="icon left xi-icon-name" />
  contents-text
  <i class="icon right xi-icon-name" />
</button>
```

Bedge

Component

```html
<!-- @badge: String -->
<!-- @badgeOption: Object -->
<!-- 
	color: badge`s background-color,
	align: left | center | right
-->

<BeButton badge="Best" badge-option="{...}">...</BeButton>
```

HTML

```html
<button class="be-button badge">
  Contetns-text
  <span class="in-badge green center">Best</span>
</button>
```

Link

Component

```html
<!-- @link: String(url) -->
<!-- @linkTarger: _self | _blank -->

<BeButton link="https://example.com" linkTarget="_self">...</BeButton>
```

HTML

```html
<button class="be-button">
  Contetns-text
  <a class="link" href="http://example.com" target="_blink"></a>
</button>
```

Event:Click

Component

```html
<!-- emit: onClick -->
<BeButton @onClick="handleClick">...</BeButton>

<!-- use Fallthrough Attributes -->
<BeButton @click="handleClick">...</BeButton>
```

### Props

| Name         | Description                                   | Type        | Default   |
| ------------ | --------------------------------------------- | ----------- | --------- | ---- | --- |
| contentsText | 버튼의 내용                                   | string      | -         |
| brand        | 브랜드 색상 적용                              | primary     | secondary | -    |
| status       | 상태별 색상 적용                              | status 참고 | -         |
| color        | ㅈl정된 색상 적용                             | colors 참고 | -         |
| border       | 테두리 적용 여부 설정                         | boolean     | false     |
| disabled     | 비활성 여부 설정                              | boolean     | false     |
| fluid        | 상위 영역의 width에 맞춤 여부 설정            | boolean     | false     |
| round        | 둥근 모서리 적용 여부 설정                    | boolean     | false     |
| compact      | 작은 여백 컴포넌트 사용 설정                  | boolean     | false     |
| size         | 기본 폰트 크기 기준 지정된 크기 설정          | size 참고   | -         |
| text         | 텍스트 버튼 지정 여부 설정                    | boolean     | false     |
| outline      | 테두리 버튼 사용 설정                         | boolean     | false     |
| icon         | 아이콘 버튼 사용 설정                         | boolean     | false     |
| withIcon     | 컨텐츠의 좌우 아이콘 사용 설정 및 아이콘 지정 | string      | null      |
| iconPos      | 아이콘 적용 위치 지정                         | left        | right     | both | -   |
| badge        | 내부 뱃지 적용 및 뱃지 내용 지정              | string      | -         |
| basgeOption  | 뱃지에 적용 할 옵션 설정( 예) “red shadow”)   | string      | object    | -    |
