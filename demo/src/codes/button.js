export const base_html = `<!-- <button></button> 태그 사용 -->
<button class="be-button">Contents-text</button>
<!-- <div></div> 태그 사용 -->
<div class="be-button">Contents-text</div>`
export const base_component = `<BeButton content-text="Contents-text"></BeButton>
<BeButton>Contents-text</BeButton>`
export const brand = `<!-- @brandType: {primary || secondary} -->
<!-- html -->
<button class="be-button {brandType}">...</button>
<!-- component -->
<BeButton :brand="brandType">...</BeButton>`
export const status = `<!-- @status:{ success || danger || info || attention || importance} -->
<!-- html -->
<button class="be-button {status}">...</button>
<!-- component -->
<BeButton :status="status">...</BeButton>`
export const colors = `<!-- @colors:{ red || orange || ... || gray} -->
<!-- html -->
<button class="be-button {colors}">...</button>
<!-- component -->
<BeButton :color="colors">...</BeButton>`
export const colors_light = `<!-- @colorsLight:{ red-light || orange-light || ... || gray-light} -->
<!-- html -->
<button class="be-button {colorsLight}">...</button>
<!-- component -->
<BeButton :color="colorsLight">...</BeButton>`
export const text = `<!-- @text: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button text">...</button>
<!-- component -->
<BeButton text>...</BeButton>`
export const border = `<!-- @border: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button border">...</button>
<!-- component -->
<BeButton border>...</BeButton>`
export const disabled = `<!-- @disabled: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button disabled">...</button>
<!-- component -->
<BeButton disabled>...</BeButton>`
export const fluid = `<!-- @fluid: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button fluid">...</button>
<!-- component -->
<BeButton fluid>...</BeButton>`
export const compact = `<!-- @compact: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button compact">...</button>
<!-- component -->
<BeButton compact>...</BeButton>`
export const outline = `<!-- @outline: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button outline">...</button>
<!-- component -->
<BeButton outline>...</BeButton>`
export const round = `<!-- @round: Boolean -->
<!-- default: false -->
<!-- html -->
<button class="be-button round">...</button>
<!-- component -->
<BeButton round>...</BeButton>`
export const icon = `<!-- @icon: String -->
<!-- default: null -->
<!-- html -->
<button class="be-button icon">
    <i class="xi-icon-name" />
</button>
<!-- component -->
<BeButton icon="xi-icon-name">...</BeButton>
<!-- fallthrough attribute & slot -->
<BeButton class="icon">
    <i class="xi-icon-name" />
</BeButton>`
export const withIcon = `<!-- @withIcon: String -->
<!-- @iconPos: String -->
<!-- default: null -->
<!-- html -->
<!-- icon left -->
<button class="be-button">
    <i class="icon left xi-icon-name" />
    Content-text
</button>
<!-- icon right -->
<button class="be-button">
    Content-text
    <i class="icon right xi-icon-name" />
</button>
<!-- icon both -->
<button class="be-button">
    <i class="icon left xi-icon-name" />
    Content-text
    <i class="icon right xi-icon-name" />
</button>
<!-- component -->
<BeButton with-icon="xi-icon-name" icon-pos="{left || right || both}">...</BeButton>
`
export const size = `<!-- @size: {tiny || small || medium || large || huge || massive} -->
<!-- html -->
<button class="be-button {size}">...</button>
<!-- component -->
<BeButton :size="size">...</BeButton>
`
export const badge = `<!-- @badge: String -->
<!-- @badgeOption: Object -->
<!-- default: null -->
<!-- html -->
<button class="be-button badge">
    <!-- reference: Badge 컴포넌트의 속성을 동일하게 적용 -->
    <span class="in-badge {badge-option}">{badge}</span>
</button>
<!-- component -->
<BeButton badge="{badge}" badge-option="{badgeOption}">...</BeButton>
`
export const link = `<!-- @link: href link url -->
<!-- @linkTarget: {_self, _blank} -->
<BeButton :link="link" :link-target="linkTarget">...</BeButton>

export const eventEmit =
<!-- emit: onClick --> <BeButton @click="handleClick">...</BeButton>
`
