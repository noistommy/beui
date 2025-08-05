export const base =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_title =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="header">\n` +
  `       <div class="title"> Title </div>\n` +
  `   </div>\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_inline =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field inline">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_use_label =
  `<!-- HTML -->\n` +
  `<!-- with label -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `<!-- without label -->\n` +
  `   <div class="field">\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_disabled =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field disabled">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_group =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="fields">\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       ...\n` +
  `   </div>\n` +
  `</div>`
export const base_grid_divide =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="fields divide-{number}">\n` +
  `       <div class="field">\n` +
  `           <div class="column">\n` +
  `               <label> Label </label>\n` +
  `               <input type="text" />\n` +
  `           </div>\n` +
  `           <div class="column">\n` +
  `               <label label> Label </label>\n` +
  `               <input type="text" />\n` +
  `           </div>\n` +
  `           ...\n` +
  `       </div>\n` +
  `   </div>\n` +
  `</div>`
export const base_grid_widths =
  `<!-- HTML -->\n` +
  `<!-- Grid System과 동일한 스타일이 적용 됩니다. -->\n` +
  `<div class="be-form">\n` +
  `   <div class="fields">\n` +
  `       <div class="field">\n` +
  `           <div class="column span-{a}">\n` +
  `               <label> Label </label>\n` +
  `               <input type="text" />\n` +
  `           </div>\n` +
  `           <div class="column span-{b}">\n` +
  `               <label> Label </label>\n` +
  `               <input type="text" />\n` +
  `           </div>\n` +
  `           ...\n` +
  `       </div>\n` +
  `   </div>\n` +
  `</div>`
export const base_textarea =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Textarea </label>\n` +
  `       <textarea></textarea>\n` +
  `   </div>\n` +
  `   <div class="field short">\n` +
  `       <label> Textarea Short </label>\n` +
  `       <textarea></textarea>\n` +
  `   </div>\n` +
  `</div>`
export const base_comp =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <BeInput />\n` +
  `   </div>\n` +
  `   <div class="field short">\n` +
  `       <label> Label </label>\n` +
  `       <BeSeletBox :options />\n` +
  `   </div>\n` +
  `   <div class="field short">\n` +
  `       <label> Label </label>\n` +
  `       <BeCheckBox />\n` +
  `   </div>\n` +
  `</div>`
