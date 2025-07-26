import{_ as s}from"./CodeBlock-DpeeNE6v.js";import{_ as v}from"./PageContainer-6gRpGfhJ.js";import{r as d,c as p,a as o,b as n,w as r,F as g,f as L,n as x,t as B,e as f,o as u}from"./index-DJRzCbrU.js";const k=`//  options data set 
const optionList = [
   { id: 1, option: 'option1', icon: 'xi-icon' }
   { id: 2, option: 'option2', icon: 'xi-icon' }
   { id: 3, option: 'option3', icon: 'xi-icon' }
   ...
]
//option (+sub) data set 
const optionSubList = [
   { id: 1, option: 'option1', icon: 'xi-icon', sub: 'sub-option1' }
   { id: 2, option: 'option2', icon: 'xi-icon', sub: 'sub-option2' }
   { ... ... }
]
// id는 는 필수값은 아닙니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`,w=`<!-- script setup -->
<!-- const optionList = [] -->
<BeList :options="optionList"></BeList>`,y=`<!-- @selection: Boolean -->
<!-- @selectedType: {mark | bg | mark bg | bg text | bg text mark} -->
<!-- default: false -->

<BeList :selection="selection" :selected-type="selectedType"></BeList>`,_=`<!-- script setup -->
<!-- const optionSubList = [] -->
<!-- { id: 1, option: 'option1', icon: 'xi-icon', sub: 'sub-option1' } -->
<BeList :options="optionSubList"></BeList>`,S=`<!-- @icon: Boolean -->
<!-- default: false -->

<BeList :options="optionList" icon></BeList>`,V=`<!-- @border: Boolean -->
<!-- default: false -->

<BeList :options="optionList" border></BeList>`,C=`<!-- @image: Boolean -->
<!-- { id: 1, option: 'option1', image: 'img_url' } -->
<!-- default: false -->

<BeList :options="optionList" image></BeList>`,T={id:"ListPage",class:"page-wrapper be container"},I={class:"contents-wrapper"},$={class:"contents-wrapper"},D={class:"coltroller",style:{width:"100%"}},F={class:"be-buttons outline"},N=["onClick"],j={class:"contents-wrapper"},z={class:"contents-wrapper"},E={class:"contents-wrapper"},P={class:"contents-wrapper"},K={__name:"ListView",setup(U){const i=[{id:1,option:"run",icon:"xi-run"},{id:2,option:"bicycle",icon:"xi-bicycle"},{id:3,option:"airplane",icon:"xi-airplane"},{id:4,option:"car",icon:"xi-car"},{id:5,option:"bus",icon:"xi-bus"},{id:6,option:"taxi",icon:"xi-taxi"}],b=[{id:1,option:"car",icon:"xi-car",sub:"public"},{id:2,option:"bus",icon:"xi-bus",sub:"public"},{id:3,option:"taxi",icon:"xi-taxi",sub:"public"}],m=["mark","bg","text","mark bg","mark text","bg text","bg text mark"],a=d("bg"),c=d(i[0]);return(q,t)=>{const e=f("BeList");return u(),p("div",T,[t[14]||(t[14]=o("div",{class:"summary"},null,-1)),n(v,null,{base:r(()=>[o("section",null,[t[1]||(t[1]=o("div",{class:"desc"},[o("div",{class:"be-tag label deepblue"},"component")],-1)),o("div",I,[n(e,{options:i})]),n(s,{code:w,lang:"vue-html"},null,8,["code"])]),o("section",null,[t[2]||(t[2]=o("h4",{class:"title"},"Data Set",-1)),t[3]||(t[3]=o("div",{class:"desc"},null,-1)),n(s,{code:k,lang:"javascript",border:!1,"use-toggle":!1},null,8,["code"])])]),variants:r(()=>[o("section",null,[t[4]||(t[4]=o("h4",{class:"title"},"Selection",-1)),t[5]||(t[5]=o("div",{class:"desc"},[o("div",{class:"be-tag label"},"component")],-1)),o("div",$,[o("div",D,[o("div",F,[(u(),p(g,null,L(m,l=>o("div",{class:x(["be-button",{selected:l===a.value}]),key:l,onClick:A=>a.value=l},B(l),11,N)),64))])]),n(e,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),options:i,selection:!0,"selected-type":a.value},null,8,["modelValue","selected-type"])]),n(s,{code:y,lang:"vue-html"},null,8,["code"])]),o("section",null,[t[6]||(t[6]=o("h4",{class:"title"},"Sub Title",-1)),t[7]||(t[7]=o("div",{class:"desc"},[o("div",{class:"be-tag label"},"component")],-1)),o("div",j,[n(e,{options:b,selection:!0})]),n(s,{code:_,lang:"vue-html"},null,8,["code"])]),o("section",null,[t[8]||(t[8]=o("h4",{class:"title"},"with Icon",-1)),t[9]||(t[9]=o("div",{class:"desc"},[o("div",{class:"be-tag label"},"component")],-1)),o("div",z,[n(e,{options:i,icon:!0})]),n(s,{code:S,lang:"vue-html"},null,8,["code"])]),o("section",null,[t[10]||(t[10]=o("h4",{class:"title"},"Border",-1)),t[11]||(t[11]=o("div",{class:"desc"},[o("div",{class:"be-tag label border"},"component")],-1)),o("div",E,[n(e,{options:i,border:!0})]),n(s,{code:V,lang:"vue-html"},null,8,["code"])]),o("section",null,[t[12]||(t[12]=o("h4",{class:"title"},"with Image",-1)),t[13]||(t[13]=o("div",{class:"desc"},[o("div",{class:"be-tag label"},"component")],-1)),o("div",P,[n(e,{options:i,image:!0})]),n(s,{code:C,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{K as default};
