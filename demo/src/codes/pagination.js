export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const pageValue = ref(null) -->\n` +
  `<!-- @pageLength: Number  -->\n` +
  `<BePagination v-model="pageValue" :page-length="pageLength"></BePagination>`
export const limits =
  `<!-- @limits: Number -->\n` +
  `<!-- default: 5 -->\n\n` +
  `<BePagination v-model="pageValue" :limits="limits"></BePagination>`
export const compact =
  `<!-- @compact: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination v-model="pageValue" compact></BePagination>`
export const round =
  `<!-- @round: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination v-model="pageValue" round></BePagination>`
export const align =
  `<!-- @align: { left | center | right } -->\n` +
  `<!-- default: left -->\n\n` +
  `<BePagination v-model="pageValue" :align="align"></BePagination>`
export const page_type =
  `<!-- @type: { page | number } -->\n` +
  `<!-- default: number -->\n\n` +
  `<BePagination v-model="pageValue" :type="type"></BePagination>`
export const ellipsis =
  `<!-- @ellipsis: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination v-model="pageValue" ellipsis></BePagination>`
export const emit =
  `<!-- emit: change -->\n\n` +
  `<BePagination v-model="pageValue" @change="setCurrent"></BePagination>`
export const color =
  `<!-- @color: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<BePagination v-model="pageValue" color="{color}"></BePagination>`
