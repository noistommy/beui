export const base =
  `<!-- HTML -->\n` +
  `<!-- Default Grid Column: 12 -->\n` +
  `<div class="be-grid2 dosirak">\n` +
  `   <!-- col-1 / row-1 은 생략 가능 -->\n` +
  `   <div class="column col-{n} row-{n}"> column 1 </div>\n` +
  `   <div class="column col-{n} row-{n}"> column 2 </div>\n` +
  `   <div class="column col-{n} row-{n}"> column 3 </div>\n` +
  `    ... \n` +
  `   <div class="column col-{n} row-{n}"> column n </div>\n` +
  `</div>`
export const base_component =
  `<!-- Component -->\n` +
  `<!-- Default Grid Column: 12 -->\n` +
  `<BeDosirakGrid \n` +
  `   :column-number="4" :row-number="4"\n` +
  `>\n` +
  `   <!-- col-1 / row-1 은 생략 가능 -->\n` +
  `   <BeColumn :col="n" :row="n"> column 1 </BeColumn>\n` +
  `   <BeColumn :col="n" :row="n"> column 2 </BeColumn>\n` +
  `   <BeColumn :col="n" :row="n"> column 3 </BeColumn>\n` +
  `    ... \n` +
  `   <BeColumn :col="1" :row="n"> column n </BeColumn>\n` +
  `</BeDosirakGrid>`
export const base_reponsive =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid2 dosirak">\n` +
  `   <!-- col-{md|sm|xs}-{number} -->\n` +
  `   <!-- {md|sm|xs} 각 영역에서만 적용 됩니다. -->\n` +
  `   <div class="column col-2 col-md-2 col-sm-4 col-xs-2"> column </div>\n` +
  `    ... \n` +
  `</div> --> \n` +
  `<!-- Component -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<BeGrid>\n` +
  `   <BeColumn :col="a" :md="{number}" :sm="{number}" :xs="{number}"> column a</BeColumn>\n` +
  `    ... \n` +
  `</BeGrid>`
export const base_divide =
  `<!-- Default Grid Column: 12 -->\n` +
  `<BeDosirakGrid :divide="4">\n` +
  `   <!-- col-1 / row-1 은 생략 가능 -->\n` +
  `   <BeColumn> column 1 </BeColumn>\n` +
  `   <BeColumn> column 2 </BeColumn>\n` +
  `   <BeColumn> column 3 </BeColumn>\n` +
  `    ... \n` +
  `   <BeColumn> column n </BeColumn>\n` +
  `</BeDosirakGrid>`
export const base_gap =
  `<!-- Default Grid Gap: 10 -->\n` +
  `<BeDosirakGrid :grid-gap="{number}">\n` +
  `   <BeColumn :col="n" :row="n"> column n </BeColumn>\n` +
  `    ... \n` +
  `</BeDosirakGrid>`
export const base_grid_column =
  `<!-- Default Grid Column: 12 -->\n` +
  `<BeDosirakGrid :column-number="{number}">\n` +
  `   <BeColumn :col="n" :row="n"> column n </BeColumn>\n` +
  `    ... \n` +
  `</BeDosirakGrid>`
export const base_grid_row =
  `<!-- Default Grid Row: auto -->\n` +
  `<BeDosirakGrid :row-number="{number}" row-height="50px">\n` +
  `   <BeColumn :col="n" :row="n"> column n </BeColumn>\n` +
  `    ... \n` +
  `</BeDosirakGrid>`
export const base_dense =
  `<!-- Default Dense: false -->\n` +
  `<BeDosirakGrid :dense="{true|false}">\n` +
  `   <BeColumn :col="n" :row="n"> column n </BeColumn>\n` +
  `    ... \n` +
  `</BeDosirakGrid>`
export const base_flow =
  `<!-- Default Flow: row -->\n` +
  `<BeDosirakGrid :flow="{row|column}">\n` +
  `   <BeColumn :col="n" :row="n"> column n </BeColumn>\n` +
  `    ... \n` +
  `</BeDosirakGrid>`
export const base_widths =
  `<!-- HTML -->\n` +
  `<!-- 각 number 만큼씩 영역을 분할합니다. -->\n` +
  `<div class="be-grid2 dosirak">\n` +
  `   <div class="column col-{a} row-{x}"> column a x x</div>\n` +
  `   <div class="column col-{b} row-{y}"> column b x y</div>\n` +
  `   <div class="column col-{c} row-{z}"> column c x z</div>\n` +
  `    ... \n` +
  `</div> --> \n` +
  `<!-- Component -->\n` +
  `<BeDosirakGrid \n` +
  `   :column-number="4" :row-number="4"\n` +
  `>\n` +
  `   <!-- col-1 / row-1 은 생략 가능 -->\n` +
  `   <BeColumn :col="a" :row="x"> column a x x </BeColumn>\n` +
  `   <BeColumn :col="b" :row="y"> column b x y </BeColumn>\n` +
  `   <BeColumn :col="c" :row="z"> column c x z </BeColumn>\n` +
  `</BeDosirakGrid>`
