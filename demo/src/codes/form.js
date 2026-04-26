export const base = `<!-- HTML -->
<div class="be-form">
    <div class="field">
        <label> Label </label>
        <input type="text" />
    </div>
</div>`
export const base_title = `<!-- HTML -->
<div class="be-form">
    <div class="header">
        <div class="title"> Title </div>
    </div>
    <div class="field">
        <label> Label </label>
        <input type="text" />
    </div>
</div>`
export const base_inline = `<!-- HTML -->
<div class="be-form">
    <div class="field inline">
        <label> Label </label>
        <input type="text" />
    </div>
</div>`
export const base_use_label = `<!-- HTML -->
<!-- with label -->
<div class="be-form">
    <div class="field">
        <label> Label </label>
        <input type="text" />
    </div>
<!-- without label -->
    <div class="field">
        <input type="text" />
    </div>
</div>`
export const base_disabled = `<!-- HTML -->
<div class="be-form">
    <div class="field disabled">
        <label> Label </label>
        <input type="text" />
    </div>
</div>`
export const base_group = `<!-- HTML -->
<div class="be-form">
    <div class="fields">
        <div class="field">
            <label> Label </label>
            <input type="text" />
        </div>
        <div class="field">
            <label> Label </label>
            <input type="text" />
        </div>
        ...
    </div>
</div>`
export const base_grid_divide = `<!-- HTML -->
<div class="be-form">
    <div class="fields divide-{number}">
        <div class="field">
            <div class="column">
                <label> Label </label>
                <input type="text" />
            </div>
            <div class="column">
                <label label> Label </label>
                <input type="text" />
            </div>
            ...
        </div>
    </div>
</div>`
export const base_grid_widths = `<!-- HTML -->
<!-- Grid System과 동일한 스타일이 적용 됩니다. -->
<div class="be-form">
    <div class="fields">
        <div class="field">
            <div class="column span-{a}">
                <label> Label </label>
                <input type="text" />
            </div>
            <div class="column span-{b}">
                <label> Label </label>
                <input type="text" />
            </div>
            ...
        </div>
    </div>
</div>`
export const base_textarea = `<!-- HTML -->
<div class="be-form">
    <div class="field">
        <label> Textarea </label>
        <textarea></textarea>
    </div>
    <div class="field short">
        <label> Textarea Short </label>
        <textarea></textarea>
    </div>
</div>`
export const base_comp = `<!-- HTML -->
<div class="be-form">
    <div class="field">
        <label> Label </label>
        <BeInput />
    </div>
    <div class="field short">
        <label> Label </label>
        <BeSeletBox :options />
    </div>
    <div class="field short">
        <label> Label </label>
        <BeCheckBox />
    </div>
</div>
`
