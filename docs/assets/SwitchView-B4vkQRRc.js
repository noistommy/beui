import{_ as d}from"./CodeBlock-Cbxo2neG.js";import{_ as m}from"./PageContainer-Du3trmM7.js";import{r as a,x as w,c,a as s,b as n,w as p,e as k,d as h,t as f,F as y,f as x,n as u,o as v}from"./index-CVN9JbJB.js";const g=`<!-- html -->
<div class="be-switch slide">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" v-model="switchValue"></BeSwitch>`,V=`<!-- html -->
<div class="be-switch slide inside">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" :inside="true" v-model="switchValue"></BeSwitch>`,B=`<!-- html -->
<div class="be-switch button">
   <input type="checkbox" />
   <span class="on active"></span>
   <span class="off"></span>
</div>
<!-- component -->
<BeSwitch type="button" on-text="A" off-text="B"></BeSwitch>`,S=`<!-- html -->
<div class="be-switch slide round">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" round></BeSwitch>`,C=`<!-- html -->
<div class="be-switch slide {color}">
   <input type="checkbox" />
   <span class="switch"></span>
</div>
<!-- component -->
<BeSwitch type="slide" color="{color}"></BeSwitch>`,$={class:"page-wrapper be container"},O={class:"contents-wrapper"},U=["checked"],A={class:"contents-wrapper"},L=["checked"],N={class:"contents-wrapper"},T=["checked"],E=["checked"],F={class:"contents-wrapper"},H=["checked"],M=["checked"],R=["checked"],z={class:"contents-wrapper"},D={class:"contents-wrapper"},j={class:"color-picker",style:{width:"100%"}},q=["onClick"],G=["checked"],I=["checked"],J=["checked"],Z={__name:"SwitchView",setup(K){const r=["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"],l=a(new Array(12).fill(!0)),o=a(null),b=w(()=>l);return(P,e)=>{const i=k("BeSwitch");return v(),c("div",$,[e[38]||(e[38]=s("div",{class:"summary"},null,-1)),n(m,null,{base:p(()=>[s("section",null,[e[13]||(e[13]=s("h4",{class:"title"},"Base A",-1)),e[14]||(e[14]=s("div",{class:"desc"},[s("div",{class:"be-tag label lightblue"},"HTML"),s("div",{class:"be-tag label deepblue"},"component")],-1)),s("div",O,[s("div",{class:"be-switch slide",onClick:e[0]||(e[0]=t=>l.value[0]=!l.value[0])},[s("input",{type:"checkbox",checked:l.value[0]},null,8,U),e[12]||(e[12]=s("span",{class:"switch"},null,-1))]),n(i,{type:"slide",modelValue:l.value[1],"onUpdate:modelValue":e[1]||(e[1]=t=>l.value[1]=t)},null,8,["modelValue"])]),n(d,{code:g,lang:"vue-html"},null,8,["code"])]),s("section",null,[e[16]||(e[16]=s("h4",{class:"title"},"Base B",-1)),e[17]||(e[17]=s("div",{class:"desc"},[s("div",{class:"be-tag label lightblue"},"HTML"),s("div",{class:"be-tag label deepblue"},"component")],-1)),s("div",A,[s("div",{class:"be-switch slide inside",onClick:e[2]||(e[2]=t=>l.value[2]=!l.value[2])},[s("input",{type:"checkbox",checked:l.value[2]},null,8,L),e[15]||(e[15]=s("span",{class:"switch"},null,-1))]),n(i,{type:"slide",inside:!0,modelValue:l.value[3],"onUpdate:modelValue":e[3]||(e[3]=t=>l.value[3]=t)},null,8,["modelValue"])]),n(d,{code:V,lang:"vue-html"},null,8,["code"])])]),variants:p(()=>[s("section",null,[e[22]||(e[22]=s("h4",{class:"title"},"Button",-1)),e[23]||(e[23]=s("div",{class:"desc"},[s("div",{class:"be-tag label deepblue"},"component")],-1)),s("div",N,[s("div",{class:"be-switch button",onClick:e[4]||(e[4]=t=>l.value[4]=!l.value[4])},[s("input",{type:"checkbox",checked:l.value[4]},null,8,T),e[18]||(e[18]=s("span",{class:"on active"},"On",-1)),e[19]||(e[19]=s("span",{class:"off"},"Off",-1))]),s("div",{class:"be-switch button round button-slide",onClick:e[5]||(e[5]=t=>l.value[5]=!l.value[5])},[s("input",{type:"checkbox",checked:l.value[5]},null,8,E),e[20]||(e[20]=s("span",{class:"on active"},"On",-1)),e[21]||(e[21]=s("span",{class:"off"},"Off",-1))]),n(i,{type:"button","on-text":"A","off-text":"B",modelValue:l.value[6],"onUpdate:modelValue":e[6]||(e[6]=t=>l.value[6]=t)},null,8,["modelValue"])]),n(d,{code:B,lang:"vue-html"},null,8,["code"])]),s("section",null,[e[28]||(e[28]=s("h4",{class:"title"},"Round",-1)),e[29]||(e[29]=s("div",{class:"desc"},null,-1)),s("div",F,[s("div",{class:"be-switch slide round",onClick:e[7]||(e[7]=t=>l.value[7]=!l.value[7])},[s("input",{type:"checkbox",checked:l.value[7]},null,8,H),e[24]||(e[24]=s("span",{class:"switch"},null,-1))]),s("div",{class:"be-switch slide inside round",onClick:e[8]||(e[8]=t=>l.value[8]=!l.value[8])},[s("input",{type:"checkbox",checked:l.value[8]},null,8,M),e[25]||(e[25]=s("span",{class:"switch"},null,-1))]),s("div",{class:"be-switch button round",onClick:e[9]||(e[9]=t=>l.value[9]=!l.value[9])},[s("input",{type:"checkbox",checked:l.value[9]},null,8,R),e[26]||(e[26]=s("span",{class:"on active"},"On",-1)),e[27]||(e[27]=s("span",{class:"off"},"Off",-1))]),n(i,{type:"slide",inside:!0,round:!0,modelValue:l.value[10],"onUpdate:modelValue":e[10]||(e[10]=t=>l.value[10]=t)},null,8,["modelValue"])]),n(d,{code:S,lang:"vue-html"},null,8,["code"])]),s("section",null,[e[30]||(e[30]=s("h4",{class:"title"},"Emit",-1)),e[31]||(e[31]=s("div",{class:"desc"},"emit: change",-1)),s("div",z,[n(i,{modelValue:l.value[11],"onUpdate:modelValue":e[11]||(e[11]=t=>l.value[11]=t)},null,8,["modelValue"])]),h(" Result: "+f(b.value),1)]),s("section",null,[e[36]||(e[36]=s("h4",{class:"title"},"Colors",-1)),e[37]||(e[37]=s("div",{class:"desc"},null,-1)),s("div",D,[s("div",j,[(v(),c(y,null,x(r,t=>s("div",{class:u(["be-tag dot",[t,{select:o.value===t}]]),key:t,onClick:Q=>o.value=t},null,10,q)),64))]),s("div",{class:u(["be-switch slide inside round",o.value])},[s("input",{type:"checkbox",checked:l.value},null,8,G),e[32]||(e[32]=s("span",{class:"switch"},null,-1))],2),s("div",{class:u(["be-switch button round",o.value])},[s("input",{type:"checkbox",checked:l.value},null,8,I),e[33]||(e[33]=s("span",{class:"on active"},"On",-1)),e[34]||(e[34]=s("span",{class:"off"},"Off",-1))],2),s("div",{class:u(["be-switch slide",o.value])},[s("input",{type:"checkbox",checked:l.value},null,8,J),e[35]||(e[35]=s("span",{class:"switch"},null,-1))],2)]),n(d,{code:C,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{Z as default};
