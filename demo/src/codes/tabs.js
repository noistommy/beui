export const base_html = `<div class="be-tabs">
    <div class="tab-menu">
        <div class="tab-item">tab1</div>
        <div class="tab-item">tab2</div>
        <div class="tab-item">...</div>
    </div>
    <div class="tab-contants">
        tab contents
    </div>
</div>`
export const base_component = `<!-- script setup -->
<!-- const tabList = [] -->
<!-- const selectedTab = ref(null) -->
<BeTabs :tab-list v-model="selectedTab">{{ tabContants }}</BeTabs>`
export const vertical = `<!-- @vertical: Boolean -->
<!-- default: false -->
<BeTabs :tab-list v-model="selectedTab" vertical>{{ tabContants }}</BeTabs>`
export const tab_type_line = `<!-- @tabType: { line | button | browser } -->
<!-- tabType: line -->
<BeTabs :tab-list v-model="selectedTab" tab-type="line">{{ tabContants }}</BeTabs>`
export const tab_type_button = `<!-- @tabType: { line | button | browser } -->
<!-- tabType: button -->
<BeTabs :tab-list v-model="selectedTab" tab-type="button">{{ tabContants }}</BeTabs>`
export const tab_type_browser = `<!-- @tabType: { line | button | browser } -->
<!-- tabType: browser -->
<BeTabs :tab-list v-model="selectedTab" tab-type="browser" @remove="removeTab">{{ tabContants }}</BeTabs>`
