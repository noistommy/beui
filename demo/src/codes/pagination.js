export const base_component = `<!-- script setup -->
<!-- const pageValue = ref(null) -->
<!-- @pageLength: Number  -->
<BePagination  v-model="pageValue" :page-length="pageLength"></BePagination>`
export const active_type = `<!-- @activeType: Number -->
<!-- default: button -->
<BePagination :active-type="activeType"></BePagination>`
export const limits = `<!-- @limits: Number -->
<!-- default: 5 -->
<BePagination :limits="limits"></BePagination>`
export const compact = `<!-- @compact: Boolean -->
<!-- default: false -->
<BePagination compact></BePagination>`
export const round = `<!-- @round: Boolean -->
<!-- default: false -->
<BePagination round></BePagination>`
export const first_last_text = `<!-- @firstText: String -->
<!-- @lastText: String -->
<!-- default: F, L -->
<BePagination :first-text="{firstText}" :last-text="{lastText}"></BePagination>`
export const align = `<!-- @align: { left | center | right } -->
<!-- default: left -->
<BePagination :align="align"></BePagination>`
export const page_type = `<!-- @type: { page | number } -->
<!-- default: number -->
<BePagination :type="type"></BePagination>`
export const ellipsis = `<!-- @ellipsis: Boolean -->
<!-- default: false -->
<BePagination ellipsis></BePagination>`
export const emit = `<!-- emit: change -->
<BePagination @change="setCurrent"></BePagination>`
export const color = `<!-- @color: String -->
<!-- default: null -->
<BePagination color="{color}"></BePagination>`
