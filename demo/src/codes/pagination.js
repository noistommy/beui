export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const pageValue = ref(null) -->\n` +
  `<!-- @pageLength: Number  -->\n` +
  `<BePagination  v-model="pageValue" :page-length="pageLength"></BePagination>`
export const active_type =
  `<!-- @activeType: Number -->\n` +
  `<!-- default: button -->\n\n` +
  `<BePagination :active-type="activeType"></BePagination>`
export const limits =
  `<!-- @limits: Number -->\n` +
  `<!-- default: 5 -->\n\n` +
  `<BePagination :limits="limits"></BePagination>`
export const compact =
  `<!-- @compact: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination compact></BePagination>`
export const round =
  `<!-- @round: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination round></BePagination>`
export const first_last_text =
  `<!-- @firstText: String -->\n` +
  `<!-- @lastText: String -->\n` +
  `<!-- default: F, L -->\n\n` +
  `<BePagination :first-text="{firstText}" :last-text="{lastText}"></BePagination>`
export const align =
  `<!-- @align: { left | center | right } -->\n` +
  `<!-- default: left -->\n\n` +
  `<BePagination :align="align"></BePagination>`
export const page_type =
  `<!-- @type: { page | number } -->\n` +
  `<!-- default: number -->\n\n` +
  `<BePagination :type="type"></BePagination>`
export const ellipsis =
  `<!-- @ellipsis: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BePagination ellipsis></BePagination>`
export const emit =
  `<!-- emit: change -->\n\n` +
  `<BePagination @change="setCurrent"></BePagination>`
export const color =
  `<!-- @color: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<BePagination color="{color}"></BePagination>`
