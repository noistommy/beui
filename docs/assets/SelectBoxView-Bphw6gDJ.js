import{_ as n}from"./CodeBlock-Bi4m5WSL.js";import{_ as T}from"./PageContainer-RAF9BO4c.js";import{r as u,c as p,a as e,b as l,w as b,F as g,f as y,t as c,u as S,e as C,d as L,o as d}from"./index-YGnsNkeF.js";const R=`//  options data set 
const optionList = [
   { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' }
   { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' }
   { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' }
   ...
]
// id는 는 필수값은 아닙니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`,K=`<!-- script setup -->
<!-- const optionList = [] -->
<BeSelectBox :options="optionList"></BeSelectBox>`,O=`<!-- @multiple: Boolean -->
<!-- default: false -->

<BeSelectBox :options multiple></BeSelectBox>`,V=`<!-- @isAll: Boolean -->
<!-- multiple일때 -->
<!-- default: false -->

<BeSelectBox :options multiple :is-all="true"></BeSelectBox>`,F=`<!-- @boxType: dropdown -->
<!-- default: false -->

<BeSelectBox :options :box-type="boxType"></BeSelectBox>`,H=`<!-- @boxType: float -->
<!-- default: false -->

<BeSelectBox :options :box-type="boxType"></BeSelectBox>`,P=`<!-- @selectedType: String -->
<!-- reference: List Component -->
<!-- default: false -->

<BeSelectBox :options :selected-type="selectedType"></BeSelectBox>`,A=`<!-- @useIcon: Boolean -->
<!-- default: false -->

<BeSelectBox :options :use-icon="useIcon"></BeSelectBox>`,D=`<!-- @placeholder: String -->
<!-- default: false -->

<BeSelectBox :options placeholder></BeSelectBox>`,I=`<!-- @compact: String -->
<!-- default: false -->

<BeSelectBox :options compact></BeSelectBox>`,N=`<!-- @maxOptHeight: String -->
<!-- default: null -->

<BeSelectBox :options :max-opt-height="maxOptHeight"></BeSelectBox>`,U=`<!-- @optionKey: String -->
<!-- default: 'option' -->

<BeSelectBox :options :option-key="optionKey"></BeSelectBox>`,E=`<!-- @resultKey: String -->
<!-- default: 'null' -->

<BeSelectBox :options :result-key="resultKey"></BeSelectBox>`,$=`<!-- emit: select -->
<BeSelectBox :options @select="sedtSelect"></BeSelectBox>`,j={class:"page-wrapper"},q={class:"contents-wrapper"},z={class:"contents-wrapper"},G={class:"selected-list"},J={class:"contents-wrapper"},M={class:"selected-list"},Q={class:"contents-wrapper"},W={class:"contents-wrapper"},X={class:"contents-wrapper"},Y={class:"contents-wrapper"},Z={class:"wrapper"},_={class:"wrapper"},ee={class:"wrapper"},te={class:"wrapper"},le={class:"wrapper"},se={class:"wrapper"},oe={class:"contents-wrapper"},ne={class:"contents-wrapper"},ie={class:"contents-wrapper"},ae={class:"contents-wrapper"},pe={class:"contents-wrapper"},ce={class:"result"},de={class:"contents-wrapper"},ue={class:"contents-wrapper"},Be={__name:"SelectBoxView",setup(re){const o=[{id:1,option:"Run",icon:"xi-run",val:"run"},{id:2,option:"Bicycle",icon:"xi-bicycle",val:"bicycle"},{id:3,option:"Airplane",icon:"xi-airplane",val:"airplane"},{id:4,option:"Public:car",icon:"xi-car",val:"car"},{id:5,option:"Public:bus",icon:"xi-bus",val:"bus"},{id:6,option:"Public:taxi",icon:"xi-taxi",val:"taxi"}],f=[{id:11,label:"run",icon:"xi-run",val:"run"},{id:12,label:"bicycle",icon:"xi-bicycle",val:"bicycle"},{id:13,label:"airplane",icon:"xi-airplane",val:"airplane"},{id:14,label:"public:car",icon:"xi-car",val:"car"},{id:15,label:"public:bus",icon:"xi-bus",val:"bus"},{id:16,label:"public:taxi",icon:"xi-taxi",val:"taxi"}],v=u(null);let r=u(null);const x=u(null),m=u(null),w=(i,t)=>{v.value=t},B=i=>{r.value=i},k=i=>{x.value=i},h=i=>{m.value=i};return(i,t)=>{const s=C("BeSelectBox");return d(),p("div",j,[t[36]||(t[36]=e("div",{class:"summary"},null,-1)),l(T,null,{base:b(()=>[e("section",null,[t[0]||(t[0]=e("h4",{class:"title"},"Base(single)",-1)),t[1]||(t[1]=e("div",{class:"desc"},[e("span",{class:"be-tag label deepblue"},"Component")],-1)),e("div",q,[l(s,{options:o})]),l(n,{code:K,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[2]||(t[2]=e("h4",{class:"title"},"Base(multiple)",-1)),t[3]||(t[3]=e("div",{class:"desc"},[e("span",{class:"be-tag label deepblue"},"Component")],-1)),e("div",z,[e("div",G,[(d(!0),p(g,null,y(S(r),a=>(d(),p("span",{class:"be-tag label",key:a},c(a),1))),128))]),l(s,{"is-search":!0,options:o,multiple:"","max-opt-height":"","result-key":"option",onSelect:B})]),l(n,{code:O,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[4]||(t[4]=e("h4",{class:"title"},"Data Set",-1)),t[5]||(t[5]=e("div",{class:"desc"},null,-1)),l(n,{code:R,lang:"javascript",border:!1,"use-toggle":!1},null,8,["code"])])]),variants:b(()=>[e("section",null,[t[6]||(t[6]=e("h4",{class:"title"},"Use All(only multiple)",-1)),t[7]||(t[7]=e("div",{class:"desc"},null,-1)),e("div",J,[e("div",M,[(d(!0),p(g,null,y(S(r),a=>(d(),p("span",{class:"be-tag label",key:a},c(a),1))),128))]),l(s,{"is-all":!0,"is-search":!0,options:o,multiple:!0,"max-opt-height":"","result-key":"option",onSelect:B})]),l(n,{code:V,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[8]||(t[8]=e("h4",{class:"title"},"Search & Filtering",-1)),t[9]||(t[9]=e("div",{class:"desc"},null,-1)),e("div",Q,[l(s,{options:o,"is-search":!0})]),l(n,{code:void 0,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[10]||(t[10]=e("h4",{class:"title"},"Dropdown Type",-1)),t[11]||(t[11]=e("div",{class:"desc"},null,-1)),e("div",W,[l(s,{options:o})]),l(n,{code:F,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[12]||(t[12]=e("h4",{class:"title"},"Float Type",-1)),t[13]||(t[13]=e("div",{class:"desc"},null,-1)),e("div",X,[l(s,{options:o,"box-type":"float"})]),l(n,{code:H,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[20]||(t[20]=e("h4",{class:"title"},"Selected Type",-1)),t[21]||(t[21]=e("div",{class:"desc"},"mark, test, bg 스타일을 조합하여 사용한다",-1)),e("div",Y,[e("div",Z,[t[14]||(t[14]=e("h5",null,"mark 타입",-1)),l(s,{options:o,"selected-type":"mark"})]),e("div",_,[t[15]||(t[15]=e("h5",null,"text 타입",-1)),l(s,{options:o,"selected-type":"text"})]),e("div",ee,[t[16]||(t[16]=e("h5",null,"bg 타입",-1)),l(s,{options:o,"selected-type":"bg"})]),e("div",te,[t[17]||(t[17]=e("h5",null,"bg + mark 타입",-1)),l(s,{options:o,"selected-type":"bg mark"})]),e("div",le,[t[18]||(t[18]=e("h5",null,"text + mark 타입",-1)),l(s,{options:o,"selected-type":"text mark"})]),e("div",se,[t[19]||(t[19]=e("h5",null,"text + bg 타입",-1)),l(s,{options:o,"selected-type":"text bg"})])]),l(n,{code:P,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[22]||(t[22]=e("h4",{class:"title"},"Use Icon",-1)),t[23]||(t[23]=e("div",{class:"desc"},null,-1)),e("div",oe,[l(s,{options:o,"use-icon":!0})]),l(n,{code:A,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[24]||(t[24]=e("h4",{class:"title"},"Placeholder",-1)),t[25]||(t[25]=e("div",{class:"desc"},null,-1)),e("div",ne,[l(s,{options:o,placeholder:"아무거나 선택하세요."})]),l(n,{code:D,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[26]||(t[26]=e("h4",{class:"title"},"Compact",-1)),t[27]||(t[27]=e("div",{class:"desc"},null,-1)),e("div",ie,[l(s,{options:o,class:"compact"})]),l(n,{code:I,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[28]||(t[28]=e("h4",{class:"title"},"Option Limit Height",-1)),t[29]||(t[29]=e("div",{class:"desc"},null,-1)),e("div",ae,[l(s,{options:o,"max-opt-height":"120"})])]),l(n,{code:N,lang:"vue-html"},null,8,["code"]),e("section",null,[t[30]||(t[30]=e("h4",{class:"title"},"User Custom Option Key",-1)),t[31]||(t[31]=e("div",{class:"desc"},null,-1)),e("div",pe,[l(s,{options:f,"option-key":"label"})]),l(n,{code:U,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[32]||(t[32]=e("h4",{class:"title"},"Result Key",-1)),t[33]||(t[33]=e("div",{class:"desc"},null,-1)),e("div",ce," val: "+c(x.value)+" | option: "+c(m.value),1),e("div",de,[l(s,{options:o,placeholder:"Result: val","result-key":"val",onSelect:k}),l(s,{options:o,placeholder:"Result: option","result-key":"option",onSelect:h})]),l(n,{code:E,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[34]||(t[34]=e("h4",{class:"title"},"Emit",-1)),t[35]||(t[35]=e("div",{class:"desc"},"emit:select",-1)),e("div",ue,[l(s,{options:o,onSelect:w})]),L(" "+c(v.value)+" ",1),l(n,{code:$,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{Be as default};
