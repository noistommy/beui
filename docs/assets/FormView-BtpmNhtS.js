import{_ as i}from"./CodeBlock-Bi4m5WSL.js";import{_ as h}from"./PageContainer-RAF9BO4c.js";import{_,r as B,c as n,a as l,b as t,w as p,F as a,f as o,t as r,n as b,e as c,o as d}from"./index-YGnsNkeF.js";const w=`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,g=`<!-- HTML -->
<div class="be-form">
   <div class="header">
       <div class="title"> Title </div>
   </div>
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,T=`<!-- HTML -->
<div class="be-form">
   <div class="field inline">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,k=`<!-- HTML -->
<!-- with label -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
<!-- without label -->
   <div class="field">
       <input type="text" />
   </div>
</div>`,F=`<!-- HTML -->
<div class="be-form">
   <div class="field disabled">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,H=`<!-- HTML -->
<div class="be-form">
   <div class="fields">
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>`,M=`<!-- HTML -->
<div class="be-form">
   <div class="fields divide-{number}">
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>`,C=`<!-- HTML -->
<!-- Grid System과 동일한 스타일이 적용 됩니다. -->
<div class="be-form">
   <div class="fields">
       <div class="field span-{a}">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field span-{b}">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>`,$=`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Textarea </label>
       <textarea></textarea>
   </div>
   <div class="field short">
       <label> Textarea Short </label>
       <textarea></textarea>
   </div>
</div>`,V=`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <BeInput />
   </div>
   <div class="field short">
       <label> Label </label>
       <BeSeletBox :options />
   </div>
   <div class="field short">
       <label> Label </label>
       <BeCheckBox />
   </div>
</div>`,I={class:"be container page-wrapper"},S={class:"contents-wrapper"},R={class:"be-form"},W={class:"fields"},D={for:""},P=["placeholder"],G={class:"contents-wrapper"},N={class:"be-form"},U={class:"fields divide-3"},z={for:""},A=["placeholder"],E={class:"fields divide-4"},j={for:""},q=["placeholder"],J={class:"contents-wrapper"},K={class:"be-form"},O={class:"fields"},Q={for:""},X=["placeholder"],Y={class:"fields"},Z={for:""},ll=["placeholder"],el={class:"contents-wrapper"},sl={class:"be-form"},tl={class:"field"},il={class:"field"},nl={class:"field"},dl={class:"field"},al={__name:"FormView",setup(ol){const v=B(!0),u=[{id:1,option:"Run",icon:"xi-run",val:"run"},{id:2,option:"Bicycle",icon:"xi-bicycle",val:"bicycle"},{id:3,option:"Airplane",icon:"xi-airplane",val:"airplane"},{id:4,option:"Public:car",icon:"xi-car",val:"car"},{id:5,option:"Public:bus",icon:"xi-bus",val:"bus"},{id:6,option:"Public:taxi",icon:"xi-taxi",val:"taxi"}],f=["Run","Walk","Fly"];return(rl,e)=>{const m=c("BeInput"),x=c("BeSelectBox"),L=c("BeCheckBox"),y=c("BeRadio");return d(),n("div",I,[e[31]||(e[31]=l("div",{class:"summary"},null,-1)),t(h,null,{base:p(()=>[l("section",null,[e[1]||(e[1]=l("div",{class:"desc"},[l("span",{class:"be-tag label lightblue"},"HTML")],-1)),e[2]||(e[2]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"field"},[l("label",{for:""},"Label"),l("input",{type:"text",placeholder:"Base Form"})])])],-1)),t(i,{code:w,lang:"html"},null,8,["code"])])]),variants:p(()=>[l("section",null,[e[3]||(e[3]=l("h4",{class:"title"},"Title",-1)),e[4]||(e[4]=l("div",{class:"desc"},null,-1)),e[5]||(e[5]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"header"},[l("div",{class:"title"},"Form Title")]),l("div",{class:"field"},[l("label",{for:""},"Label"),l("input",{type:"text",placeholder:"Base Form"})])])],-1)),t(i,{code:g,lang:"html"},null,8,["code"])]),l("section",null,[e[6]||(e[6]=l("h4",{class:"title"},"Inline",-1)),e[7]||(e[7]=l("div",{class:"desc"},null,-1)),e[8]||(e[8]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"field inline"},[l("label",{for:""},"Label"),l("input",{type:"text",placeholder:"Base Form"})])])],-1)),t(i,{code:T,lang:"html"},null,8,["code"])]),l("section",null,[e[9]||(e[9]=l("h4",{class:"title"},"Use Label",-1)),e[10]||(e[10]=l("div",{class:"desc"},null,-1)),e[11]||(e[11]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"field"},[l("label",{for:""},"Label"),l("input",{type:"text",placeholder:"With Label"})]),l("div",{class:"field"},[l("input",{type:"text",placeholder:"Without Label"})])])],-1)),t(i,{code:k,lang:"html"},null,8,["code"])]),l("section",null,[e[12]||(e[12]=l("h4",{class:"title"},"Disabled",-1)),e[13]||(e[13]=l("div",{class:"desc"},null,-1)),e[14]||(e[14]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"field disabled"},[l("label",{for:""},"Label"),l("input",{type:"text",placeholder:"disabled"})])])],-1)),t(i,{code:F,lang:"html"},null,8,["code"])]),l("section",null,[e[15]||(e[15]=l("h4",{class:"title"},"Field Group",-1)),e[16]||(e[16]=l("div",{class:"desc"},null,-1)),l("div",S,[l("div",R,[l("div",W,[(d(),n(a,null,o(3,s=>l("div",{class:"field",key:s},[l("label",D,"Label "+r(s),1),l("input",{type:"text",placeholder:`Label ${s}`},null,8,P)])),64))])])]),t(i,{code:H,lang:"html"},null,8,["code"])]),l("section",null,[e[17]||(e[17]=l("h4",{class:"title"},"Fields Divide",-1)),e[18]||(e[18]=l("div",{class:"desc"},null,-1)),l("div",G,[l("div",N,[l("div",U,[(d(),n(a,null,o(3,s=>l("div",{class:"field column",key:s},[l("label",z,"field "+r(s),1),l("input",{type:"text",placeholder:`Field ${s}`},null,8,A)])),64))]),l("div",E,[(d(),n(a,null,o(4,s=>l("div",{class:"field column",key:s},[l("label",j,"field "+r(s),1),l("input",{type:"text",placeholder:`Field ${s}`},null,8,q)])),64))])])]),t(i,{code:M,lang:"html"},null,8,["code"])]),l("section",null,[e[20]||(e[20]=l("h4",{class:"title"},"Widths",-1)),e[21]||(e[21]=l("div",{class:"desc"},null,-1)),l("div",J,[l("div",K,[e[19]||(e[19]=l("div",{class:"fields right-side"},[l("div",{class:"field column"},[l("label",{for:""},"Label")]),l("div",{class:"field column"},[l("input",{type:"text",placeholder:"Input value"})])],-1)),l("div",O,[(d(),n(a,null,o([2,6,4],s=>l("div",{class:b(["field column",`span-${s}`]),key:s},[l("label",Q,"field "+r(s),1),l("input",{type:"text",placeholder:`Field ${s}`},null,8,X)],2)),64))]),l("div",Y,[(d(),n(a,null,o([2,7,3],s=>l("div",{class:b(["field column",`span-${s}`]),key:s},[l("label",Z,"field "+r(s),1),l("input",{type:"text",placeholder:`Field ${s}`},null,8,ll)],2)),64))])])]),t(i,{code:C,lang:"html"},null,8,["code"])]),l("section",null,[e[22]||(e[22]=l("h4",{class:"title"},"Textarea",-1)),e[23]||(e[23]=l("div",{class:"desc"},null,-1)),e[24]||(e[24]=l("div",{class:"contents-wrapper"},[l("div",{class:"be-form"},[l("div",{class:"field"},[l("label",{for:""},"textarea label"),l("textarea",{placeholder:"textarea large"})]),l("div",{class:"field short"},[l("label",{for:""},"textarea label"),l("textarea",{placeholder:"textarea short"})])])],-1)),t(i,{code:$,lang:"html"},null,8,["code"])]),l("section",null,[e[29]||(e[29]=l("h4",{class:"title"},"Base with Comp",-1)),e[30]||(e[30]=l("div",{class:"desc"},null,-1)),l("div",el,[l("div",sl,[l("div",tl,[e[25]||(e[25]=l("label",{for:""},"Input",-1)),t(m,{placeholder:"with be-input"})]),l("div",il,[e[26]||(e[26]=l("label",{for:""},"Selectbox",-1)),t(x,{options:u,placeholder:"with be-selectbox"})]),l("div",nl,[e[27]||(e[27]=l("label",{for:""},"Checkbox",-1)),t(L,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s),id:"checkComp","label-text":"Be-Checkbox"},null,8,["modelValue"])]),l("div",dl,[e[28]||(e[28]=l("label",{for:""},"Radio",-1)),t(y,{"option-list":f})])])]),t(i,{code:V,lang:"vue-html"},null,8,["code"])])]),_:1})])}}},bl=_(al,[["__scopeId","data-v-dafff410"]]);export{bl as default};
