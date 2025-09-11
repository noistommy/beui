export const base =
  `<!-- html -->\n` +
  `<div class="be-tag label">Tag</div>\n` +
  `<div class="be-tag line"></div>\n` +
  `<div class="be-tag dot"></div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label">Tag(Comp)</BeTag>`
export const type_label =
  `<!-- html -->\n` +
  `<div class="be-tag label">Tag</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label">Tag(Comp)</BeTag>`
export const type_kbd = `
  <!-- html -->
  <div class="be-tag kbd meta">shift</div>
  <div class="be-tag kbd">z</div>
  <!-- component -->
  <BeTag type="kbd" is-meta>shift</BeTag>
  <BeTag type="kbd">z</BeTag>
  `
export const type_line =
  `<!-- html -->\n` +
  `<div class="be-tag line"></div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="line"></BeTag>`
export const type_dot =
  `<!-- html -->\n` +
  `<div class="be-tag dot"></div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="dot"></BeTag>`
export const icon =
  `<!-- html -->\n` +
  `<div class="be-tag label icon">\n` +
  `   <i class="xi-icon-name"></i>\n` +
  `</div>\n` +
  `<div class="be-tag label">\n` +
  `   <i class="icon left xi-icon-name"></i>\n` +
  `   Left\n` +
  `</div>\n` +
  `<div class="be-tag label icon">\n` +
  `   Right\n` +
  `   <i class="icon right xi-icon-name"></i>\n` +
  `</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label" icon="xi-ixcon-name"></BeTag>\n` +
  `<BeTag type="label" icon="xi-ixcon-name" icon-pos="left">Left</BeTag>\n` +
  `<BeTag type="label" icon="xi-ixcon-name" icon-pos="right">Right</BeTag>`
export const round =
  `<!-- html -->\n` +
  `<div class="be-tag label round">Round</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label" round></BeTag>`
export const pointing =
  `<!-- @pointing: Boolean -->\n` +
  `<!-- @pointingPos: {up | down | left | right} -->\n\n` +
  `<!-- html -->\n` +
  `<div class="be-tag label pointing {pointingPos}">Point</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label" pointing pointing-pos="{pointingPos}">Point</BeTag>`
export const tags =
  `<!-- only html -->\n` +
  `<div class="be-tags">\n` +
  `   <div class="be-tag label">A</div>\n` +
  `   <BeTag type="label">B</BeTag>\n` +
  `   <div class="be-tag label">C</div>\n` +
  `</div>`
export const effect =
  `<!-- only html -->\n` +
  `<div class="be-tags one-of-a-kind">\n` +
  `   <div class="be-tag label">A</div>\n` +
  `   <BeTag type="label">B</BeTag>\n` +
  `   <div class="be-tag label">C</div>\n` +
  `</div>`
export const color =
  `<!-- @color: String -->\n\n` +
  `<!-- html -->\n` +
  `<div class="be-tag label {color}">colors</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label" color="{color}">Colors</BeTag>`
export const color_light =
  `<!-- @color: String -->\n` +
  `<!-- @light: Boolean -->\n\n` +
  `<!-- html -->\n` +
  `<div class="be-tag label {color} light">colors</div>\n` +
  `<!-- component -->\n` +
  `<BeTag type="label" color="{color}" light>Colors</BeTag>`
