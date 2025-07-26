export const dataSet =
  `//  column data set \n` +
  `const columns = [\n` +
  `   { key: 'column1', name: '이름', align: 'center', col: 2 }\n` +
  `   { key: 'column2', name: '이름', align: 'center', col: 6 }\n` +
  `   { key: 'column3', name: '이름', align: 'center', col: 4 }\n` +
  `]\n` +
  `// values data set \n` +
  `const values = [\n` +
  `   { column1: 'value1-1', column2: 'value1-2', column3: 'value1-3', }\n` +
  `   { column1: 'value2-1', column2: 'value2-2', column3: 'value2-3', }\n` +
  `   { ... ... }\n` +
  `]\n` +
  `// columns[]의 key는 column 구분을 위한 key입니다.\n` +
  `// columns[]의 name은 table header에 표시되는 값입니다.\n` +
  `// columns[]의 align은 column의 정렬을 지정하는 값입니다.\n` +
  `// columns[]의 col은 table grid를 위한 값입니다.\n` +
  `// values[]는 table body에 표시 되는 table list 값입니다.`
export const base_html =
  `<!-- <table></table> -->\n` +
  `<table class="be-table">\n` +
  `   <thead>\n` +
  `       <!-- html thead code -->\n` +
  `   </thead>\n` +
  `   <tbody>\n` +
  `       <!-- html tbody code -->\n` +
  `   </tbody>\n` +
  `</table>`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const columns = Data Set's columns -->\n` +
  `<!-- const values = Data Set's values -->\n` +
  `<BeTable :columns :values></BeTable>`
export const border =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<BeTable :columns :values border></BeTable>`
export const striped =
  `<!-- @striped: {odd | even} -->\n` +
  `<!-- default: null -->\n` +
  `<BeTable :columns :values striped="{striped}"></BeTable>`
export const grid_divide =
  `<!-- @gridType: divide -->\n` +
  `<!-- @divideNum: Number -->\n` +
  `<!-- default: null -->\n` +
  `<BeTable :columns :values grid-type="divide" divide-num="{divideNum}"></BeTable>`
export const grid_width =
  `<!-- @gridType: widths -->\n` +
  `<!-- columns[]의 col / 12 로 지정 -->\n` +
  `<!-- default: null -->\n` +
  `<BeTable :columns :values grid-type="widths"></BeTable>`
export const selection =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<BeTable :columns :values selection @select="setSelectItem"></BeTable>`
