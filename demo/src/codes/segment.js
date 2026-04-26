export const base_html = `
<!-- <div></div> 태그 사용 -->
<div class="be-segment">
    <div class="contents">Contents ... </div>
</div>
`
export const base_component = `
<!-- script setup -->
<!-- const contents = ref(null) -->
<BeSegment>{{ contents }}</BeSegment>
`
export const collapse = `
<!--@collapse: Boolean -->
<!--default: false -->
<BeSegement collapse> contents ... ...</BeSegement>
`
export const surface = `
<!--@surface: Boolean -->
<!--default: false -->
<BeSegement surface> contents ... ...</BeSegement>
`
export const border = `
<!--@border: Boolean -->
<!--default: false -->
<BeSegement border> contents ... ...</BeSegement>
`
export const float = `
<!--@float: Boolean -->
<!--default: false -->
<BeSegement float> contents ... ...</BeSegement>
`
export const round = `
<!-- @round: String {s | m | l | xl} -->
<!-- default: m -->
<BeSegement round="{round}" > contents ... ...</BeSegement>
`
export const attached = `
<!--@attached: Array -->
<!--default: [] -->
<BeSegement attached="['header', 'footer']">
    <template #header>
      <!-- header contetns -->
    </template>
    contents ... ...
    <template #footer>
      <!-- footer contetns -->
    </template>
</BeSegment>
`
export const extra = `
<!--@extra: Boolean -->
<!--default: false -->
<BeSegement extra">
    contents ... ...
    <template #extra>
      <!-- extra contetns -->
    </template>
</BeSegment>
`
export const align = `
<!--@align: {left | center | right} -->
<!--default: left -->
<BeSegement align="{align}"> contents ... ...</BeSegement>
`
export const segment_group = `
<!--segment group -->
<!--border 적용 -->
<div class="be-segments border" >
    <BeSegement> contents ... ...</BeSegement>
    <BeSegement surface> contents ... ...</BeSegement>
    <BeSegement> contents ... ...</BeSegement>
</div>
`
