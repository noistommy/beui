export const base_html =
  `<div class="be-tabs">\n` +
  `   <div class="tab-menu">\n` +
  `       <div class="tab-item">tab1</div>\n` +
  `       <div class="tab-item">tab2</div>\n` +
  `       <div class="tab-item">...</div>\n` +
  `   </div>\n` +
  `   <div class="tab-contants">\n` +
  `       tab contents\n` +
  `   </div>\n` +
  `</div>`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const tabList = [] -->\n` +
  `<!-- const selectedTab = ref(null) -->\n` +
  `<BeTabs :tab-list v-model="selectedTab">{{ tabContants }}</BeTabs>`
export const vertical =
  `<!-- @vertical: Boolean -->\n` +
  `<!-- default: false -->\n` +
  `<BeTabs :tab-list v-model="selectedTab" vertical>{{ tabContants }}</BeTabs>`
export const tab_type_line =
  `<!-- @tabType: { line | button | browser } -->\n` +
  `<!-- tabType: line -->\n` +
  `<BeTabs :tab-list v-model="selectedTab" tab-type="line">{{ tabContants }}</BeTabs>`
export const tab_type_button =
  `<!-- @tabType: { line | button | browser } -->\n` +
  `<!-- tabType: button -->\n` +
  `<BeTabs :tab-list v-model="selectedTab" tab-type="button">{{ tabContants }}</BeTabs>`
export const tab_type_browser =
  `<!-- @tabType: { line | button | browser } -->\n` +
  `<!-- tabType: browser -->\n` +
  `<BeTabs :tab-list v-model="selectedTab" tab-type="browser" @remove="removeTab">{{ tabContants }}</BeTabs>`
