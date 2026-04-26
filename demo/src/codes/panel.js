export const base_html = `<!-- HTML -->
<div class="be-panel">
    <div class="panel-header">
        {header contents}
    </div>
    <div class="panel-contents">
        <div class="contents-wrapper">Contents ...</div>
    </div>
</div>`
export const base_component = `<!-- script setup -->
<!-- const title = title contents -->
<!-- const contents = contents -->
<BePanel title="title" contents="contents ..."></BePanel>`
export const contents = `<!-- HTML -->
<div class="be-panel">
    <div class="panel-header">
        {header contents}
    </div>
    <div class="panel-content">
        <div class="content-wrapper">
            <div class="content-head">Header</div>
            <div class="content-body">Body ... </div>
            <div class="contewnt-foot">Footer</div>
        </div>
    </div>
</div>
<!-- Component -->
<BePanel title="title">
    <template #contents>
        contents header, body, footer
    </template>
</BePanel>`
export const border = `<!-- @border: Boolean -->
<!-- default: false -->
<BePanel title="title" contents="contents ..." border></BePanel>`
export const collapse = `<!-- @collapse: Boolean -->
<!-- @open: Boolean -->
<!-- default: false -->
<BePanel title="title" contents="contents ..."
    toggle-icon="xi-icon-toggle"
    collapse="collapse"
    open="open"
    max-height="120"
    @show="setOpen"
></BePanel>`
export const special_html = `<!-- HTML(details-summary) -->
<details class="be-panel">
    <summary class="panel-header">
        {header contents}
    </summary>
    <div class="panel-content">
        <div class="content-wrapper">Contents ...</div>
    </div>
</details>
`
