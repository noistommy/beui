export const base_html = `<!-- <div></div> 태그 사용 -->
<div class="be-input">
    <input type="text" placeholder="입력하세요" ... />
</div>`
export const base_component = `<!-- script setup -->
<!-- const inputValue = ref(null) -->
<BeInput v-model="inputValue" placeholder="입력하세요"></BeInput>`
export const useLabel = `<!-- @label: String -->
<!-- default: null -->
<!-- html -->
<div class="be-input">
    <label>{label}</label>
    <input type="text" placeholder="" />
</div>
<!-- component -->
<BeInput v-model="inputValue" :label="{label}"></BeInput>`
export const disabled = `<!-- @disabled: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input disabled">
    <input type="text" placeholder="입력하세요" disabled />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" disabled></BeInput>`
export const readonly = `<!-- @readonly: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input readonly">
    <input type="text" placeholder="입력하세요" readonly />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" readonly></BeInput>`
export const underline = `<!-- @underline: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input underline">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" underline></BeInput>`
export const round = `<!-- @round: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input round">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" round></BeInput>`
export const transparent = `<!-- @transparent: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input transparent">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" transparent></BeInput>`
export const compact = `<!-- @compact: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input compact">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" compact></BeInput>`
export const edit = `<!-- @edit: Boolean -->
<!-- @editMode: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input edit {editable}">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" edit edit-mode={true || false}></BeInput>`
export const status = `<!-- @status: success || danger || info || attention || importance -->
<!-- html -->
<div class="be-input {status}">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" status="{status}"></BeInput>`
export const fluid = `<!-- @fluid: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-input fluid">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" fluid></BeInput>`
export const unit = `<!-- @unit: String -->
<!-- default: false -->
<!-- html -->
<div class="be-input unit" data-unit="{unit}">
    <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" unit="{unit}"></BeInput>`
export const icon = `<!-- @icon-left: String -->
<!-- @icon-right: String -->
<!-- default: false -->
<!-- html -->
<div class="be-input icon left">
    <i class="icon xi-icon-left" />
    <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input icon right">
    <input type="text" placeholder="입력하세요" />
    <i class="icon xi-icon-right" />
</div>
<div class="be-input icon both">
    <i class="icon xi-icon-left" />
    <input type="text" placeholder="입력하세요" />
    <i class="icon xi-icon-right" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요"  +
  icon-left="{iconLeft}"  +
  icon-right="{iconRight}"  +
></BeInput>`
export const clearIcon = `<!-- @clear: Boolean -->
<!-- default: false -->
<!--only component -->
<BeInput v-model="inputValue" placeholder="입력하세요" clear></BeInput>
export const badge =
<!-- @badge: String -->
<!-- @badgeOption: Object -->
<!-- default: null -->
<!-- html -->
<div class="be-input badge">
    <input type="text" placeholder="입력하세요" />
    <span class="be-badge {badgeOption}">{badge}</span>
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요"  +
  badge="{badge}"  +
  badge-option="{badgeOption}"  +
></BeInput>`
export const label = `<!-- @label: String -->
<!-- default: null -->
<!-- html -->
<div class="be-input labeled left">
    <label>{label}</label>
    <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input labeled right">
    <input type="text" placeholder="입력하세요" />
    <label>{label}</label>
</div>
<!-- component & slot -->
<BeInput placeholder="입력하세요" :labeled="true" attached-{start | end}>  +
    <input v-model="inputValue" type="text" placeholder="입력하세요" />
    <!-- slot start or end -->
    <template {#start | #end}>
        <label>{label}</label>
    </template>
</BeInput>`
export const button = `<!-- @button: String -->
<!-- @buttonOption: Object -->
<!-- default: null -->
<!-- html -->
<div class="be-input withButton left">
    <button class="be-button {buttonOption}">{button}</button>
    <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input withButton right">
    <input type="text" placeholder="입력하세요" />
    <button class="be-button {buttonOption}">{button}</button>
</div>
<!-- component & slot -->
<BeInput placeholder="입력하세요" :with-button="{true | false}" attach-{start | end}>  +
    <input type="text" placeholder="입력하세요" />
    <template {#start | #end}>
        <button class="be-button {buttonOption}">{button}</button>
    </template>
</BeInput>`
export const textarea = `<!-- @type: input || textarea -->
<!-- default: input -->
<!-- html -->
<div class="be-input">
    <textarea type="text" placeholder="입력하세요" />
</div>
<div class="be-input short">
    <textarea type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" type="textarea"></BeInput>
<BeInput placeholder="입력하세요">  +
    <textarea type="text" placeholder="입력하세요" />
</BeInput>
`
