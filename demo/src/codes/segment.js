export const base_html =
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-segment">\n` +
  `   <div class="contents">Contents ... </div>\n` +
  `</div>`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const contents = ref(null) -->\n` +
  `<BeSegment>{{ contents }}</BeSegment>`
export const collapse =
  `<!--@collapse: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeSegement collapse> contents ... ...</BeSegement>`
export const surface =
  `<!--@surface: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeSegement surface> contents ... ...</BeSegement>`
export const border =
  `<!--@border: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeSegement border> contents ... ...</BeSegement>`
export const float =
  `<!--@float: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeSegement float> contents ... ...</BeSegement>`
export const attached =
  `<!--@attached: Array -->\n` +
  `<!--default: [] -->\n\n` +
  `<BeSegement attached="['header', 'footer']">\n` +
  `   <template #header>\n` +
  `     <div class="header">Header</div>\n` +
  `   </template>\n` +
  `   contents ... ... \n` +
  `   <template #footer>\n` +
  `     <div class="footer">Footer</div>\n` +
  `   </template>\n` +
  `</BeSegment>`

export const align =
  `<!--@align: {left | center | right} -->\n` +
  `<!--default: left -->\n\n` +
  `<BeSegement align="{align}"> contents ... ...</BeSegement>`
export const segment_group =
  `<!--segment group -->\n` +
  `<!--border 적용 -->\n\n` +
  `<div class="be-segments border" >\n` +
  `   <BeSegement> contents ... ...</BeSegement>\n` +
  `   <BeSegement surface> contents ... ...</BeSegement>\n` +
  `   <BeSegement> contents ... ...</BeSegement>\n` +
  `</div>`
