export const base_html =
  `<!-- HTML -->\n` +
  `<div class="be-panel">\n` +
  `   <div class="panel-header">\n` +
  `       {header contents}\n` +
  `   </div>\n` +
  `   <div class="panel-contents">\n` +
  `       <div class="contents-wrapper">Contents ...</div>\n` +
  `   </div>\n` +
  `</div>`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const title = title contents -->\n` +
  `<!-- const contents = contents -->\n` +
  `<BePanel title="title" contents="contents ..."></BePanel>`
export const contents =
  `<!-- HTML -->\n` +
  `<div class="be-panel">\n` +
  `   <div class="panel-header">\n` +
  `       {header contents}\n` +
  `   </div>\n` +
  `   <div class="panel-content">\n` +
  `       <div class="content-wrapper">\n` +
  `           <div class="content-head">Header</div>\n` +
  `           <div class="content-body">Body ... </div>\n` +
  `           <div class="contewnt-foot">Footer</div>\n` +
  `       </div>\n` +
  `   </div>\n` +
  `</div>\n` +
  `<!-- Component -->\n` +
  `<BePanel title="title">\n` +
  `   <template #contents>\n` +
  `       contents header, body, footer\n` +
  `   </template>\n` +
  `</BePanel>`
export const border =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePanel title="title" contents="contents ..." border></BePanel>`
export const collapse =
  `<!-- @collapse: Boolean -->\n` +
  `<!-- @open: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePanel title="title" contents="contents ..."\n` +
  `   toggle-icon="xi-icon-toggle"\n` +
  `   collapse="collapse"\n` +
  `   open="open"\n` +
  `   max-height="120"\n` +
  `   @show="setOpen"\n` +
  `></BePanel>`
export const special_html =
  `<!-- HTML(details-summary) -->\n` +
  `<details class="be-panel">\n` +
  `   <summary class="panel-header">\n` +
  `       {header contents}\n` +
  `   </summary>\n` +
  `   <div class="panel-content">\n` +
  `       <div class="content-wrapper">Contents ...</div>\n` +
  `   </div>\n` +
  `</details>`
