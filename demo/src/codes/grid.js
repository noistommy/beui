export const base = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
    <!-- span-1은 생략 가능 -->
    <div class="column"> column 1 </div>
    <div class="column"> column 2 </div>
    <div class="column"> column 3 </div>
    ...
    <div class="column"> column 12 </div>
</div>`
export const base_component = `<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <!-- span-1은 생략 가능 -->
    <BeColumn> column 1 </BeColumn>
    <BeColumn> column 2 </BeColumn>
    <BeColumn> column 3 </BeColumn>
    ...
    <BeColumn> column 12 </BeColumn>
</BeGrid>`
export const base_reponsive = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
    <!-- span-{md|sm|xs}-{number} -->
    <!-- {md|sm|xs} 각 영역에서만 적용 됩니다. -->
    <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div>
    ...
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeColumn :span="a" :md="{number}" :sm="{number}" :xs="{number}"> column a</BeColumn>
    ...
</BeGrid>`
export const base_divide = `<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- number / 12 분할 합니다. -->
<div class="be-grid divide-{number}">
    <div class="column"> column </div>
    ...
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid :divide="{number}">
    <BeColumn> column </BeColumn>
    ...
</BeGrid>`
export const base_fill = `<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- number / 12 분할 합니다. -->
<div class="be-grid left-side" >
    <div class="column"> column </div> // fill left side
    ...
    <div class="column"> column </div>
</div> -->
<div class="be-grid right-side" >
    <div class="column"> column </div>
    ...
    <div class="column"> column </div> // fill right side
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid left-side>
    <BeColumn> column </BeColumn>
    ...
</BeGrid>
<BeGrid right-side>
    <BeColumn> column </BeColumn>
    ...
</BeGrid>`
export const base_widths = `<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- 각 number 만큼씩 영역을 분할합니다. -->
<!-- 각 넘버의 합은 12입니다. a + b + c = 12 -->
<div class="be-grid">
    <div class="column span-{a}"> column a</div>
    <div class="column span-{b}"> column b</div>
    <div class="column span-{c}"> column c</div>
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeColumn :span="a"> column a</BeColumn>
    <BeColumn :span="b"> column b</BeColumn>
    <BeColumn :span="c"> column c</BeColumn>
</BeGrid>`
export const base_nested = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
    <div class="column span-8">
        <div class="ga-grid">
            <div class="column span-{a}"> column a</div>
            <div class="column span-{b}"> column b</div>
        </div>
    </div>
    ...
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeColumn :size="a">
        <BeGrid>
            <BeColumn :span="a"> column a</BeColumn>
            <BeColumn :span="b"> column b</BeColumn>
        </BeGrid>
    </BeColumn>
    ...
</BeGrid>`
export const base_align = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid justify-left" >...</div>
<div class="be-grid justify-center" >...</div>
<div class="be-grid justify-right" >...</div>
<div class="be-grid justify-between" >...</div>
<div class="be-grid justify-around" >...</div>
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid ... :justify="left"></BeGrid>
<BeGrid ... :justify="center"></BeGrid>
<BeGrid ... :justify="right"></BeGrid>
<BeGrid ... :justify="between"></BeGrid>
<BeGrid ... :justify="around"></BeGrid>`
export const base_offset = `<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- offset number 만큼 영역을 offset 합니다. -->
<!-- 각 span과 offset의 합은 12입니다. a + A + b + B = 12 -->
<div class="be-grid">
    <div class="column span-{a} offset-{A}"> column a</div>
    <div class="column span-{b} offset-{B}"> column b</div>
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeColumn :span="a" :offset="A"> column a</BeColumn>
    <BeColumn :span="b" :offset="B"> column b</BeColumn>
</BeGrid>`
export const base_rows = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
    <div class="rows">
      <div class="column span-{a}"> column a</div>
      <div class="column span-{b}"> column b</div>
      ...
    </div>
    <div class="rows">
      ...
    </div>
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeRows>
      <BeColumn :span="a"> column a</BeColumn>
      <BeColumn :span="b"> column b</BeColumn>
      ... ...
    </BeRows>
    </BeRows>
      ... ...
    </BeRows>
</BeGrid>`
