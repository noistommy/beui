import{_ as s}from"./CodeBlock-DS18R5tz.js";import{_ as r}from"./PageContainer-DFfZSwzV.js";import{r as d,c as v,a as e,b as n,w as p,e as V,o as c}from"./index-DvivQW6X.js";const b=`<!-- only component -->
<!-- script setup -->
<!-- const inputValue = ref(0) -->
<BeInputNumber v-model="inputValue"></BeInputNumber>`,B=`<!-- @disabled: Boolean -->
<!-- default: false -->

<BeInputNumber v-model="inputValue" disabled></BeInputNumber>`,I=`<!-- @controller: {between | end} -->
<!-- default: between -->

<BeInputNumber v-model="inputValue" controller="{controller}"></BeInputNumber>`,N=`<!-- @min: Number -->
<!-- @max: Number -->
<!-- default: null -->

<BeInputNumber v-model="inputValue" :min="{min}" :max="{max}"></BeInputNumber>`,f=`<!-- @step: Number -->
<!-- default: null -->

<BeInputNumber v-model="inputValue" :step="{step}"></BeInputNumber>`,w=`<!-- @decIcon: String -->
<!-- @incIcon: String -->
<!-- default: null -->

<BeInputNumber v-model="inputValue"
 :dec-icon="{decIcon}" :inc-icon="{inc-icon}"
></BeInputNumber>`,x=`<!-- @fluid: Boolean -->
<!-- default: false -->

<BeInputNumber v-model="inputValue" fluid></BeInputNumber>`,g=`<!-- @compact: Boolean -->
<!-- default: false -->

<BeInputNumber v-model="inputValue" compact></BeInputNumber>`,U=`<!-- user custom style: width: 150px -->
<BeInputNumber v-model="inputValue" :style="{ width: '150px' }"></BeInputNumber>`,y={class:"page-wrapper be-container"},C={class:"contents-wrapper"},S={class:"contents-wrapper"},k={class:"contents-wrapper"},F={class:"contents-wrapper"},M={class:"contents-wrapper"},$={class:"contents-wrapper"},A={class:"contents-wrapper"},D={class:"contents-wrapper"},E={class:"contents-wrapper"},G={__name:"InputNumberView",setup(L){const u=d(new Array(10).fill(0)),a=d(10),m=d(0),i=d(0);return(W,l)=>{const o=V("BeInputNumber");return c(),v("div",y,[l[27]||(l[27]=e("div",{class:"summary"},null,-1)),n(r,null,{base:p(()=>[e("section",null,[l[10]||(l[10]=e("div",{class:"desc"},[e("span",{class:"be-tag label deepblue"},"component")],-1)),e("div",C,[n(o,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=t=>i.value=t)},null,8,["modelValue"])]),n(s,{code:b,lang:"vue-html"},null,8,["code"])])]),variants:p(()=>[e("section",null,[l[11]||(l[11]=e("h4",{class:"title"},"Disabled",-1)),l[12]||(l[12]=e("div",{class:"desc"},null,-1)),e("div",S,[n(o,{modelValue:u.value[0],"onUpdate:modelValue":l[1]||(l[1]=t=>u.value[0]=t),disabled:""},null,8,["modelValue"])]),n(s,{code:B,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[13]||(l[13]=e("h4",{class:"title"},"Controller position",-1)),l[14]||(l[14]=e("div",{class:"desc"},null,-1)),e("div",k,[n(o,{modelValue:u.value[1],"onUpdate:modelValue":l[2]||(l[2]=t=>u.value[1]=t)},null,8,["modelValue"]),n(o,{modelValue:u.value[2],"onUpdate:modelValue":l[3]||(l[3]=t=>u.value[2]=t),controller:"end"},null,8,["modelValue"])]),n(s,{code:I,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[15]||(l[15]=e("h4",{class:"title"},"Min / Max",-1)),l[16]||(l[16]=e("div",{class:"desc"},"ex) min = 1 / max = 10",-1)),e("div",F,[n(o,{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=t=>a.value=t),min:0,max:10},null,8,["modelValue"])]),n(s,{code:N,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[17]||(l[17]=e("h4",{class:"title"},"Step",-1)),l[18]||(l[18]=e("div",{class:"desc"},"ex) step = 5",-1)),e("div",M,[n(o,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=t=>m.value=t),step:5},null,8,["modelValue"])]),n(s,{code:f,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[19]||(l[19]=e("h4",{class:"title"},"User Custom Icon",-1)),l[20]||(l[20]=e("div",{class:"desc"},null,-1)),e("div",$,[n(o,{modelValue:u.value[3],"onUpdate:modelValue":l[6]||(l[6]=t=>u.value[3]=t),"dec-icon":"xi-angle-down","inc-icon":"xi-angle-up"},null,8,["modelValue"])]),n(s,{code:w,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[21]||(l[21]=e("h4",{class:"title"},"Fluid",-1)),l[22]||(l[22]=e("div",{class:"desc"},null,-1)),e("div",A,[n(o,{modelValue:u.value[4],"onUpdate:modelValue":l[7]||(l[7]=t=>u.value[4]=t),fluid:!0},null,8,["modelValue"])]),n(s,{code:x,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[23]||(l[23]=e("h4",{class:"title"},"Compact",-1)),l[24]||(l[24]=e("div",{class:"desc"},[e("span",{class:"be-tag label"},"component")],-1)),e("div",D,[n(o,{modelValue:u.value[5],"onUpdate:modelValue":l[8]||(l[8]=t=>u.value[5]=t),compact:!0},null,8,["modelValue"])]),n(s,{code:g,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[25]||(l[25]=e("h4",{class:"title"},"Set width",-1)),l[26]||(l[26]=e("div",{class:"desc"},null,-1)),e("div",E,[n(o,{modelValue:u.value[6],"onUpdate:modelValue":l[9]||(l[9]=t=>u.value[6]=t),style:{width:"150px"}},null,8,["modelValue"])]),n(s,{code:U,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{G as default};
