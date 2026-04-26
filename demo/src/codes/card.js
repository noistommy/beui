export const base_html = `<!-- <div></div> 태그 사용 -->
<div class="be-card">
    <div class="contents">Contents ... </div>
</div>`
export const base_component = `<!-- script setup -->
<!-- const contents = ref(null) -->
<BeCard>{{ contents }}</BeCard>`
export const title = `<!-- @title: String -->
<!-- default: null -->
<BeCard title="{title}" >{{ contents }}</BeCard>`
export const image = `<!-- @image: Boolean, Object -->
<!-- default: null -->
<!-- image: { src, alt } -->
<BeCard image="{image}" >{{ contents }}</BeCard>
<!--  slot image -->
<BeCard image="{image}" >
    <template #image>
        <img src="{src}" alt="{alt}" />
    </template>
    ... ...
</BeCard>`
export const extra = `<!-- @extra: Boolean -->
<!-- default: false -->
<!--  slot extra -->
<BeCard extra="{extra}" >
    ... ...
    <template #extra>
        {extra_contents}
    </template>
</BeCard>`
export const attached = `<!-- @attached: Boolean -->
<!-- default: false -->
<!--  slot header & footer -->
<BeCard extra="{extra}" >
    <template #header>
        {header_contents}
    </template>
    {{ contents }}
    <template #footer>
        {footer_contents}
    </template>
</BeCard>`
export const border = `<!-- @border: Boolean -->
<!-- default: true -->
<BeCard border="{border}" >{{ contents }}</BeCard>`
export const float = `<!-- @float: Boolean -->
<!-- default: false -->
<BeCard float="{float}" >{{ contents }}</BeCard>`
export const round = `<!-- @round: String {s | m | l | xl} -->
<!-- default: m -->
<BeCard round="{round}" >{{ contents }}</BeCard>`
export const cards = `<!-- only html -->
<div class="be-card">
    <BeCard >{{ contents }}</BeCard>
    <BeCard >{{ contents }}</BeCard>
    <BeCard >{{ contents }}</BeCard>
</div>
`
