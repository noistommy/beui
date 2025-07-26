import{_ as n}from"./CodeBlock-DS18R5tz.js";import{_ as w}from"./PageContainer-DFfZSwzV.js";import{r as d,c,b as t,w as i,a as e,e as v,F as z,f as y,n as x,t as m,d as C,o as B}from"./index-DvivQW6X.js";const V=`<!-- Component only -->
<!-- script setup -->
<!-- const result = ref() -->
<BeRate :result-value="result"></BeRate>`,_=`<!--@rateLength: Number -->
<!--default: 5 -->

<BeRate :rate-length="rateLength"></BeRate>`,S=`<!--@useHalf: Boolean -->
<!--default: false -->

<BeRate :use-half="useHalf" :result-value="3.5"></BeRate>`,h=`<!--@icon: String -->
<!--default: null -->

<BeRate icon="xi-icon-name"></BeRate>`,k=`<!--@size: {tiny | small | large | huge | massive} -->
<!--default: null -->

<BeRate size="{size}"></BeRate>`,L=`<!--@color: String -->
<!--default: null -->

<BeRate color="{color}"></BeRate>`,N=`<!--@disabled: Boolean -->
<!--default: false -->

<BeRate disabled></BeRate>`,F=`<!--@border: Boolean -->
<!--default: false -->

<BeRate border></BeRate>`,I='<BeRate :result-value="3.7"></BeRate>',$='<BeRate @select="setRate"></BeRate>',D={class:"be container page-wrapper"},E={class:"contents-wrapper"},H={class:"contents-wrapper"},A={class:"contents-wrapper"},T={style:{fontSize:"14px"}},U={style:{fontSize:"22px"}},j={class:"contents-wrapper"},q={class:"contents-wrapper"},G={class:"contents-wrapper"},J={class:"contents-wrapper"},K={class:"color-picker",style:{width:"100%"}},M=["onClick"],O={class:"title"},P={class:"contents-wrapper"},Q={class:"contents-wrapper"},W={class:"contents-wrapper"},X={class:"contents-wrapper"},se={__name:"RateView",setup(Y){const f=["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown"],u=d("red"),a=d(4),r=d(3.7),g=p=>{a.value=p};return(p,l)=>{const s=v("BeRate"),R=v("BeInput"),b=v("BeButton");return B(),c("div",D,[t(w,null,{base:i(()=>[e("section",null,[l[1]||(l[1]=e("h4",null,"Base",-1)),l[2]||(l[2]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",E,[t(s,{"result-value":4})]),t(n,{code:V,lang:"vue-html"},null,8,["code"])])]),variants:i(()=>[e("section",null,[l[3]||(l[3]=e("h4",null,"Rate Length: 10",-1)),l[4]||(l[4]=e("div",{class:"desc"},"기본: 5",-1)),e("div",H,[t(s,{"rate-length":10,"result-value":7})]),t(n,{code:_,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[7]||(l[7]=e("h4",null,"Base Size",-1)),l[8]||(l[8]=e("div",{class:"desc"},null,-1)),e("div",A,[e("div",T,[l[5]||(l[5]=e("div",{class:"title"},"폰트 14px",-1)),t(s,{"result-value":4})]),e("div",U,[l[6]||(l[6]=e("div",{class:"title"},"폰트 22px",-1)),t(s,{"result-value":4})])])]),e("section",null,[l[9]||(l[9]=e("h4",null,"Allow half",-1)),l[10]||(l[10]=e("div",{class:"desc"},null,-1)),e("div",j,[t(s,{"use-half":!0,"result-value":3.5})]),t(n,{code:S,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[11]||(l[11]=e("h4",null,"Icons",-1)),l[12]||(l[12]=e("div",{class:"desc"},null,-1)),e("div",q,[t(s,{icon:"xi-emoticon-smiley","result-value":4})]),t(n,{code:h,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[13]||(l[13]=e("h4",null,"Size",-1)),l[14]||(l[14]=e("div",{class:"desc"},null,-1)),e("div",G,[t(s,{size:"tiny","result-value":1}),t(s,{size:"small","result-value":2}),t(s,{"result-value":3}),t(s,{size:"large","result-value":4}),t(s,{size:"huge","result-value":5})]),t(n,{code:k,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[15]||(l[15]=e("h4",null,"Color",-1)),l[16]||(l[16]=e("div",{class:"desc"},null,-1)),e("div",J,[e("div",K,[(B(),c(z,null,y(f,o=>e("div",{class:x(["be-tag dot",[o,{select:u.value===o}]]),key:o,onClick:Z=>u.value=o},null,10,M)),64))]),e("div",null,[e("div",O,m(u.value),1),t(s,{color:u.value,"result-value":4.5},null,8,["color"])])]),t(n,{code:L,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[17]||(l[17]=e("h4",null,"Disabled",-1)),l[18]||(l[18]=e("div",{class:"desc"},null,-1)),e("div",P,[t(s,{disabled:!0,"result-value":4})]),t(n,{code:N,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[19]||(l[19]=e("h4",null,"Border",-1)),l[20]||(l[20]=e("div",{class:"desc"},null,-1)),e("div",Q,[t(s,{border:!0,"result-value":3.7}),t(s,{border:!1,"result-value":3.7})]),t(n,{code:F,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[21]||(l[21]=e("h4",null,"Float Value",-1)),l[22]||(l[22]=e("div",{class:"desc"},null,-1)),e("div",W,[t(s,{"result-value":r.value,readonly:""},null,8,["result-value"]),t(R,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o)},null,8,["modelValue"])]),t(n,{code:I,lang:"vue-html"},null,8,["code"])]),e("section",null,[l[23]||(l[23]=e("h4",null,"Emit",-1)),l[24]||(l[24]=e("div",{class:"desc"},null,-1)),e("div",X,[t(s,{onSelect:g,"use-half":!0,"result-value":a.value},null,8,["result-value"]),t(b,null,{default:i(()=>[C(" Result: "+m(a.value),1)]),_:1})]),t(n,{code:$,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{se as default};
