export const base =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <!-- span-1은 생략 가능 -->\n` +
  `   <div class="column"> column 1 </div>\n` +
  `   <div class="column"> column 2 </div>\n` +
  `   <div class="column"> column 3 </div>\n` +
  `    ... \n` +
  `   <div class="column"> column 12 </div>\n` +
  `</div>`
export const base_reponsive =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <!-- span-{md|sm|xs}-{number} -->\n` +
  `   <!-- {md|sm|xs} 각 영역에서만 적용 됩니다. -->\n` +
  `   <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div>\n` +
  `    ... \n` +
  `</div>`
export const base_divide =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<!-- number / 12 분할 합니다. -->\n` +
  `<div class="be-grid divide-{number}">\n` +
  `   <div class="column"> column </div>\n` +
  `    ... \n` +
  `</div>`
export const base_widths =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<!-- 각 number 만큼씩 영역을 분할합니다. -->\n` +
  `<!-- 각 넘버의 합은 12입니다. a + b + c = 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-{a}"> column a</div>\n` +
  `   <div class="column span-{b}"> column b</div>\n` +
  `   <div class="column span-{c}"> column c</div>\n` +
  `</div>`
export const base_nested =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-8">\n` +
  `       <div class="ga-grid">\n` +
  `           <div class="column span-{a}"> column a</div>\n` +
  `           <div class="column span-{b}"> column b</div>\n` +
  `       </div>\n` +
  `   </div>\n` +
  `   ...\n` +
  `</div>`
export const base_align =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid justify-left" >...</div>\n` +
  `<div class="be-grid justify-center" >...</div>\n` +
  `<div class="be-grid justify-right" >...</div>\n` +
  `<div class="be-grid justify-between" >...</div>\n` +
  `<div class="be-grid justify-around" >...</div>`
export const base_offset =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<!-- offset number 만큼 영역을 offset 합니다. -->\n` +
  `<!-- 각 span과 offset의 합은 12입니다. a + A + b + B = 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-{a} offset-{A}"> column a</div>\n` +
  `   <div class="column span-{b} offset-{B}"> column b</div>\n` +
  `</div>`
