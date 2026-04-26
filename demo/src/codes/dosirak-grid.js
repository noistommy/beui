export const base = `<!-- HTML -->
<!-- Default Grid Column: 12 -->
<div class="be-grid2 dosirak">
    <!-- col-1 / row-1 은 생략 가능 -->
    <div class="column col-{n} row-{n}"> column 1 </div>
    <div class="column col-{n} row-{n}"> column 2 </div>
    <div class="column col-{n} row-{n}"> column 3 </div>
    ...
    <div class="column col-{n} row-{n}"> column n </div>
</div>`
export const base_component = `<!-- Component -->
<!-- Default Grid Column: 12 -->
<BeDosirakGrid
    :column-number="4" :row-number="4"
>
    <!-- col-1 / row-1 은 생략 가능 -->
    <BeColumn :col="n" :row="n"> column 1 </BeColumn>
    <BeColumn :col="n" :row="n"> column 2 </BeColumn>
    <BeColumn :col="n" :row="n"> column 3 </BeColumn>
    ...
    <BeColumn :col="1" :row="n"> column n </BeColumn>
</BeDosirakGrid>`
export const base_reponsive = `<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid2 dosirak">
    <!-- col-{md|sm|xs}-{number} -->
    <!-- {md|sm|xs} 각 영역에서만 적용 됩니다. -->
    <div class="column col-2 col-md-2 col-sm-4 col-xs-2"> column </div>
    ...
</div> -->
<!-- Component -->
<!-- Grid Column: 12 -->
<BeGrid>
    <BeColumn :col="a" :md="{number}" :sm="{number}" :xs="{number}"> column a</BeColumn>
    ...
</BeGrid>`
export const base_divide = `<!-- Default Grid Column: 12 -->
<BeDosirakGrid :divide="4">
    <!-- col-1 / row-1 은 생략 가능 -->
    <BeColumn> column 1 </BeColumn>
    <BeColumn> column 2 </BeColumn>
    <BeColumn> column 3 </BeColumn>
    ...
    <BeColumn> column n </BeColumn>
</BeDosirakGrid>`
export const base_gap = `<!-- Default Grid Gap: 10 -->
<BeDosirakGrid :grid-gap="{number}">
    <BeColumn :col="n" :row="n"> column n </BeColumn>
    ...
</BeDosirakGrid>`
export const base_grid_column = `<!-- Default Grid Column: 12 -->
<BeDosirakGrid :column-number="{number}">
    <BeColumn :col="n" :row="n"> column n </BeColumn>
    ...
</BeDosirakGrid>`
export const base_grid_row = `<!-- Default Grid Row: auto -->
<BeDosirakGrid :row-number="{number}" row-height="50px">
    <BeColumn :col="n" :row="n"> column n </BeColumn>
    ...
</BeDosirakGrid>`
export const base_dense = `<!-- Default Dense: false -->
<BeDosirakGrid :dense="{true|false}">
    <BeColumn :col="n" :row="n"> column n </BeColumn>
    ...
</BeDosirakGrid>`
export const base_flow = `<!-- Default Flow: row -->
<BeDosirakGrid :flow="{row|column}">
    <BeColumn :col="n" :row="n"> column n </BeColumn>
    ...
</BeDosirakGrid>`
export const base_widths = `<!-- HTML -->
<!-- 각 number 만큼씩 영역을 분할합니다. -->
<div class="be-grid2 dosirak">
    <div class="column col-{a} row-{x}"> column a x x</div>
    <div class="column col-{b} row-{y}"> column b x y</div>
    <div class="column col-{c} row-{z}"> column c x z</div>
    ...
</div> -->
<!-- Component -->
<BeDosirakGrid
    :column-number="4" :row-number="4"
>
    <!-- col-1 / row-1 은 생략 가능 -->
    <BeColumn :col="a" :row="x"> column a x x </BeColumn>
    <BeColumn :col="b" :row="y"> column b x y </BeColumn>
    <BeColumn :col="c" :row="z"> column c x z </BeColumn>
</BeDosirakGrid>`
