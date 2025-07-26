export const base_html =
  `<!-- <button></button> 태그 사용 -->\n` +
  `<button class="be-button">Contents-text</button>\n` +
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-button">Contents-text</div>`
export const base_component =
  `<BeButton content-text="Contents-text"></BeButton>\n` +
  `<BeButton>Contents-text</BeButton>`
export const brand =
  `<!-- @brandType: {primary || secondary} -->\n` +
  `<!-- html -->\n` +
  `<button class="be-button {brandType}">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton :brand="brandType">...</BeButton>`
export const status =
  `<!-- @status:{ success || danger || info || attention || importance} -->\n` +
  `<!-- html -->\n` +
  `<button class="be-button {status}">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton :status="status">...</BeButton>`
export const colors =
  `<!-- @colors:{ red || orange || ... || gray} -->\n` +
  `<!-- html -->\n` +
  `<button class="be-button {colors}">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton :color="colors">...</BeButton>`
export const colors_light =
  `<!-- @colorsLight:{ red-light || orange-light || ... || gray-light} -->\n` +
  `<!-- html -->\n` +
  `<button class="be-button {colorsLight}">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton :color="colorsLight">...</BeButton>`
export const text =
  `<!-- @text: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button text">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton text>...</BeButton>`
export const border =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button border">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton border>...</BeButton>`
export const disabled =
  `<!-- @disabled: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button disabled">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton disabled>...</BeButton>`
export const fluid =
  `<!-- @fluid: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button fluid">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton fluid>...</BeButton>`
export const compact =
  `<!-- @compact: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button compact">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton compact>...</BeButton>`
export const outline =
  `<!-- @outline: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button outline">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton outline>...</BeButton>`
export const round =
  `<!-- @round: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button round">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton round>...</BeButton>`
export const icon =
  `<!-- @icon: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button icon">\n` +
  `   <i class="xi-icon-name" />\n` +
  `</button>\n` +
  `<!-- component -->\n` +
  `<BeButton icon="xi-icon-name">...</BeButton>\n` +
  `<!-- fallthrough attribute & slot -->\n` +
  `<BeButton class="icon">\n` +
  `   <i class="xi-icon-name" />\n` +
  `</BeButton>`
export const withIcon =
  `<!-- @withIcon: String -->\n` +
  `<!-- @iconPos: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<!-- html -->\n` +
  `<!-- icon left -->\n` +
  `<button class="be-button">\n` +
  `   <i class="icon left xi-icon-name" />\n` +
  `   Content-text\n` +
  `</button>\n` +
  `<!-- icon right -->\n` +
  `<button class="be-button">\n` +
  `   Content-text\n` +
  `   <i class="icon right xi-icon-name" />\n` +
  `</button>\n` +
  `<!-- icon both -->\n` +
  `<button class="be-button">\n` +
  `   <i class="icon left xi-icon-name" />\n` +
  `   Content-text\n` +
  `   <i class="icon right xi-icon-name" />\n` +
  `</button>\n` +
  `<!-- component -->\n` +
  `<BeButton with-icon="xi-icon-name" icon-pos="{left || right || both}">...</BeButton>`

export const size =
  `<!-- @size: {tiny || small || medium || large || huge || massive} -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button {size}">...</button>\n` +
  `<!-- component -->\n` +
  `<BeButton :size="size">...</BeButton>`

export const badge =
  `<!-- @badge: String -->\n` +
  `<!-- @badgeOption: Object -->\n` +
  `<!-- default: null -->\n\n` +
  `<!-- html -->\n` +
  `<button class="be-button badge">\n` +
  `   <!-- reference: Badge 컴포넌트의 속성을 동일하게 적용 -->\n` +
  `   <span class="in-badge {badge-option}">{badge}</span>\n` +
  `</button>\n` +
  `<!-- component -->\n` +
  `<BeButton badge="{badge}" badge-option="{badgeOption}">...</BeButton>`

export const eventEmit =
  `<!-- emit: onClick -->\n` + `<BeButton @onClick="handleClick">...</BeButton>`
export const buttons =
  `<!-- html -->\n` +
  `<div class="buttons">\n` +
  `   <div class="be-button"></button>\n` +
  `   <div class="be-button"></button>\n` +
  `   ...\n` +
  `   <div class="be-button"></button>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<!-- const buttons = [] -->\n` +
  `<!-- const selected = ref() -->\n` +
  `<BeButtons :buttons v-model="selected"></BeButtons>`
export const buttons_round =
  `<div class="buttons round">\n` +
  `   <div class="be-button"></button>\n` +
  `   <div class="be-button"></button>\n` +
  `   ...\n` +
  `   <div class="be-button"></button>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<!-- const buttons = [] -->\n` +
  `<BeButtons :buttons round></BeButtons>`
export const buttons_border =
  `<div class="buttons border">\n` +
  `   <div class="be-button"></button>\n` +
  `   <div class="be-button"></button>\n` +
  `   ...\n` +
  `   <div class="be-button"></button>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<!-- const buttons = [] -->\n` +
  `<BeButtons :buttons border></BeButtons>`
