export const base_a = `<!-- html -->
<div class="be-switch slide">
    <input type="checkbox" />
    <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" v-model="switchValue"></BeSwitch>`
export const base_b = `<!-- html -->
<div class="be-switch slide inside">
    <input type="checkbox" />
    <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" :inside="true" v-model="switchValue"></BeSwitch>`
export const button = `<!-- html -->
<div class="be-switch button">
    <input type="checkbox" />
    <span class="on active"></span>
    <span class="off"></span>
</div>
<!-- component -->
<BeSwitch type="button" on-text="A" off-text="B"></BeSwitch>`
export const round = `<!-- html -->
<div class="be-switch slide round">
    <input type="checkbox" />
    <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" round></BeSwitch>`
export const colors = `<!-- html -->
<div class="be-switch slide {color}">
    <input type="checkbox" />
    <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" color="{color}"></BeSwitch>`
