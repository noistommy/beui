export const base_html =
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-card">\n` +
  `   <div class="contents">Contents ... </div>\n` +
  `</div>`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const contents = ref(null) -->\n` +
  `<BeCard>{{ contents }}</BeCard>`
export const title =
  `<!-- @title: String -->\n` +
  `<!-- default: null -->\n` +
  `<BeCard title="{title}" >{{ contents }}</BeCard>`
export const image =
  `<!-- @image: Boolean, Object -->\n` +
  `<!-- default: null -->\n` +
  `<!-- image: { src, alt } -->\n` +
  `<BeCard image="{image}" >{{ contents }}</BeCard>\n` +
  `<!--  slot image -->\n` +
  `<BeCard image="{image}" >\n` +
  `   <template #image>\n` +
  `       <img src="{src}" alt="{alt}" />\n` +
  `   </template>\n` +
  `   ... ...\n` +
  `</BeCard>`
export const extra =
  `<!-- @extra: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<!--  slot extra -->\n` +
  `<BeCard extra="{extra}" >\n` +
  `   ... ...\n` +
  `   <template #extra>\n` +
  `       {extra_contents}\n` +
  `   </template>\n` +
  `</BeCard>`
export const attached =
  `<!-- @attached: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<!--  slot header & footer -->\n` +
  `<BeCard extra="{extra}" >\n` +
  `   <template #header>\n` +
  `       {header_contents}\n` +
  `   </template>\n` +
  `   {{ contents }}\n` +
  `   <template #footer>\n` +
  `       {footer_contents}\n` +
  `   </template>\n` +
  `</BeCard>`
export const border =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: true -->\n` +
  `<BeCard border="{border}" >{{ contents }}</BeCard>`
export const float =
  `<!-- @float: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<BeCard float="{float}" >{{ contents }}</BeCard>`
export const round =
  `<!-- @round: String {s | m | l | xl} -->\n` +
  `<!-- default: m -->\n` +
  `<BeCard round="{round}" >{{ contents }}</BeCard>`
export const cards =
  `<!-- only html -->\n` +
  `<div class="be-card">\n` +
  `   <BeCard >{{ contents }}</BeCard>\n` +
  `   <BeCard >{{ contents }}</BeCard>\n` +
  `   <BeCard >{{ contents }}</BeCard>\n` +
  `</div>`
