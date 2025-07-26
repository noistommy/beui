import{_ as a}from"./CodeBlock-DS18R5tz.js";import{_ as w}from"./PageContainer-DFfZSwzV.js";import{r as k,c as i,b as n,w as B,a as e,e as h,d as u,t as m,F as b,f as v,n as f,o as c}from"./index-DvivQW6X.js";const _=`//  column data set 
const columns = [
   { key: 'column1', name: '이름', align: 'center', col: 2 }
   { key: 'column2', name: '이름', align: 'center', col: 6 }
   { key: 'column3', name: '이름', align: 'center', col: 4 }
]
// values data set 
const values = [
   { column1: 'value1-1', column2: 'value1-2', column3: 'value1-3', }
   { column1: 'value2-1', column2: 'value2-2', column3: 'value2-3', }
   { ... ... }
]
// columns[]의 key는 column 구분을 위한 key입니다.
// columns[]의 name은 table header에 표시되는 값입니다.
// columns[]의 align은 column의 정렬을 지정하는 값입니다.
// columns[]의 col은 table grid를 위한 값입니다.
// values[]는 table body에 표시 되는 table list 값입니다.`,C=`<!-- <table></table> -->
<table class="be-table">
   <thead>
       <!-- html thead code -->
   </thead>
   <tbody>
       <!-- html tbody code -->
   </tbody>
</table>`,S=`<!-- script setup -->
<!-- const columns = Data Set's columns -->
<!-- const values = Data Set's values -->
<BeTable :columns :values></BeTable>`,$=`<!-- @border: Boolean -->
<!-- default: false -->
<BeTable :columns :values border></BeTable>`,N=`<!-- @striped: {odd | even} -->
<!-- default: null -->
<BeTable :columns :values striped="{striped}"></BeTable>`,j=`<!-- @gridType: divide -->
<!-- @divideNum: Number -->
<!-- default: null -->
<BeTable :columns :values grid-type="divide" divide-num="{divideNum}"></BeTable>`,x=`<!-- @gridType: widths -->
<!-- columns[]의 col / 12 로 지정 -->
<!-- default: null -->
<BeTable :columns :values grid-type="widths"></BeTable>`,D=`<!-- @border: Boolean -->
<!-- default: false -->
<BeTable :columns :values selection @select="setSelectItem"></BeTable>`,V={class:"be container page-wrapper"},F={class:"contents-wrapper"},I={class:"be-table"},G={class:"align-center"},L={class:"contents-wrapper"},z={class:"contents-wrapper"},A={class:"contents-wrapper"},E={class:"contents-wrapper"},H={class:"contents-wrapper"},M={class:"contents-wrapper"},U={class:"contents-wrapper"},P={__name:"TableView",setup(q){const s=[{key:"name",name:"이름",align:"",col:2},{key:"age",name:"나이",align:"right",col:6},{key:"job",name:"직업",align:"",col:4}],t=[{name:"김아무개",age:11,job:"학생"},{name:"이아무개",age:17,job:"대학생"},{name:"박아무개",age:31,job:"회사원"}],p=k({}),T=g=>{p.value=g};return(g,l)=>{const o=h("BeTable");return c(),i("div",V,[n(w,null,{base:B(()=>[e("section",null,[l[0]||(l[0]=e("div",{class:"desc"},[e("div",{class:"be-tag label lightblue"},"HTML")],-1)),e("div",F,[e("table",I,[e("thead",null,[e("tr",G,[(c(),i(b,null,v(s,d=>e("th",{key:d.key,class:f(`align-${d.align||"center"}`)},m(d.name),3)),64))])]),e("tbody",null,[(c(),i(b,null,v(t,(d,y)=>e("tr",{key:`row-${y}`,class:"select"},[(c(),i(b,null,v(s,r=>e("td",{key:`cell-${y}-${r.key}`,class:f(`align-${r.align||"center"}`)},m(d[r.key]),3)),64))])),64))])])]),n(a,{code:C,lang:"html"},null,8,["code"])]),e("section",null,[l[1]||(l[1]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",L,[n(o,{columns:s,values:t})]),n(a,{code:S,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[2]||(l[2]=e("h4",null,"Data Set",-1)),l[3]||(l[3]=e("div",{class:"desc"},[u(" 테이블을 구성 하기 위해 "),e("code",null,"column"),u("과 "),e("code",null,"data"),u("를 Array로 구성해야합니다. ")],-1)),n(a,{code:_,lang:"javascript",border:!1,"use-toggle":!1},null,8,["code"])])]),variants:B(()=>[e("section",null,[l[4]||(l[4]=e("h4",null,"Border",-1)),l[5]||(l[5]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",z,[n(o,{columns:s,values:t,border:!0})]),n(a,{code:$,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[6]||(l[6]=e("h4",null,"Striped",-1)),l[7]||(l[7]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt"),u(" striped: odd or even ")],-1)),e("div",A,[n(o,{columns:s,values:t,border:!0,striped:"odd"}),n(o,{columns:s,values:t,border:!0,striped:"even"})]),n(a,{code:N,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[8]||(l[8]=e("h4",null,"Use Footer",-1)),l[9]||(l[9]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",E,[n(o,{columns:s,values:t,"use-foot":!0})])]),e("section",null,[l[10]||(l[10]=e("h4",null,"Grid column (divide)",-1)),l[11]||(l[11]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",H,[n(o,{columns:s,values:t,border:!0,"grid-type":"divide","divide-num":3})]),n(a,{code:j,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[12]||(l[12]=e("h4",null,"Grid column (widths)",-1)),l[13]||(l[13]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",M,[n(o,{columns:s,values:t,border:!0,"grid-type":"widths"})]),n(a,{code:x,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[14]||(l[14]=e("h4",null,"Selection",-1)),l[15]||(l[15]=e("div",{class:"desc"},[e("div",{class:"be-tag label blue"},"Compoennt")],-1)),e("div",U,[u(m(p.value)+" ",1),n(o,{columns:s,values:t,border:!0,selection:!0,onSelect:T})]),n(a,{code:D,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{P as default};
