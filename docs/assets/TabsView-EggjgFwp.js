import{_ as d}from"./CodeBlock-DpeeNE6v.js";import{_ as c}from"./PageContainer-6gRpGfhJ.js";import{r as p,c as r,a as e,b as a,w as n,e as m,d as u,t as o,F as T,f as y,n as _,o as v}from"./index-DJRzCbrU.js";const w=`<div class="be-tabs">
   <div class="tab-menu">
       <div class="tab-item">tab1</div>
       <div class="tab-item">tab2</div>
       <div class="tab-item">...</div>
   </div>
   <div class="tab-contants">
       tab contents
   </div>
</div>`,V=`<!-- script setup -->
<!-- const tabList = [] -->
<!-- const selectedTab = ref(null) -->
<BeTabs :tab-list v-model="selectedTab">{{ tabContants }}</BeTabs>`,B=`<!-- @vertical: Boolean -->
<!-- default: false -->
<BeTabs :tab-list v-model="selectedTab" vertical>{{ tabContants }}</BeTabs>`,f=`<!-- @tabType: { line | button | browser } -->
<!-- tabType: line -->
<BeTabs :tab-list v-model="selectedTab" tab-type="line">{{ tabContants }}</BeTabs>`,g=`<!-- @tabType: { line | button | browser } -->
<!-- tabType: button -->
<BeTabs :tab-list v-model="selectedTab" tab-type="button">{{ tabContants }}</BeTabs>`,x=`<!-- @tabType: { line | button | browser } -->
<!-- tabType: browser -->
<BeTabs :tab-list v-model="selectedTab" tab-type="browser" @remove="removeTab">{{ tabContants }}</BeTabs>`,C={class:"page-wrapper be container"},k={class:"contents-wrapper"},U={class:"be-tabs"},L={class:"tab-menu"},N=["onClick"],$={class:"tab-contents"},F={class:"contents-wrapper"},z={class:"contents-wrapper"},A={class:"contents-wrapper"},D={class:"contents-wrapper"},E={class:"contents-wrapper"},H={class:"be-tabs browser"},J={__name:"TabsView",setup(M){const i=[{id:1,option:"run",icon:"xi-run"},{id:2,option:"bicycle",icon:"xi-bicycle"},{id:3,option:"airplane",icon:"xi-airplane"},{id:4,option:"car",icon:"xi-car"},{id:5,option:"bus",icon:"xi-bus"},{id:6,option:"taxi",icon:"xi-taxi"}],s=p("run");return(S,t)=>{const b=m("BeTabs");return v(),r("div",C,[t[15]||(t[15]=e("div",{class:"summary"},null,-1)),a(c,null,{base:n(()=>[e("section",null,[t[5]||(t[5]=e("div",{class:"desc"},[e("div",{class:"be-tag label lightblue"},"HTML")],-1)),e("div",k,[e("div",U,[e("div",L,[(v(),r(T,null,y(i,l=>e("div",{class:_(["tab-item tab",{active:l.option===s.value}]),key:l,onClick:j=>s.value=l.option},o(l.option),11,N)),64))]),e("div",$,o(s.value),1)])]),a(d,{code:w,lang:"html"},null,8,["code"])]),e("section",null,[t[6]||(t[6]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",F,[a(b,{"tab-list":i,modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l)},{default:n(()=>[u(o(s.value),1)]),_:1},8,["modelValue"])]),a(d,{code:V,lang:"vue-html"},null,8,["code"])])]),variants:n(()=>[e("section",null,[t[7]||(t[7]=e("h4",{class:"title"},"Vertical",-1)),t[8]||(t[8]=e("div",{class:"desc"},null,-1)),e("div",z,[a(b,{"tab-list":i,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),vertical:!0},{default:n(()=>[u(o(s.value),1)]),_:1},8,["modelValue"])]),a(d,{code:B,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[9]||(t[9]=e("h4",{class:"title"},"Active with line",-1)),t[10]||(t[10]=e("div",{class:"desc"},null,-1)),e("div",A,[a(b,{"tab-list":i,modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l),"tab-type":"line"},{default:n(()=>[u(o(s.value),1)]),_:1},8,["modelValue"])]),a(d,{code:f,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[11]||(t[11]=e("h4",{class:"title"},"Type - Button",-1)),t[12]||(t[12]=e("div",{class:"desc"},null,-1)),e("div",D,[a(b,{"tab-list":i,modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value=l),"tab-type":"button"},{default:n(()=>[u(o(s.value),1)]),_:1},8,["modelValue"])]),a(d,{code:g,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[13]||(t[13]=e("h4",{class:"title"},"Type - Browser",-1)),t[14]||(t[14]=e("div",{class:"desc"},null,-1)),e("div",E,[e("div",H,[a(b,{"tab-list":i,modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value=l),"tab-type":"browser"},{default:n(()=>[u(o(s.value),1)]),_:1},8,["modelValue"])])]),a(d,{code:x,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{J as default};
