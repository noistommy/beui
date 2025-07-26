import{_ as s}from"./CodeBlock-Cbxo2neG.js";import{_ as b}from"./PageContainer-Du3trmM7.js";import{r as u,c as v,a as t,b as n,w as c,e as m,t as r,d as p,o as g}from"./index-CVN9JbJB.js";const x=`<!-- <div></div> 태그 사용 -->
<div class="be-input">
   <input type="text" placeholder="입력하세요" ... />
</div>`,h=`<!-- script setup -->
<!-- const inputValue = ref(null) -->
<BeInput v-model="inputValue" placeholder="입력하세요"></BeInput>`,y=`<!-- @disabled: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input disabled">
   <input type="text" placeholder="입력하세요" disabled />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" disabled></BeInput>`,f=`<!-- @readonly: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input readonly">
   <input type="text" placeholder="입력하세요" readonly />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" readonly></BeInput>`,B=`<!-- @underline: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input underline">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" underline></BeInput>`,I=`<!-- @transparent: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input transparent">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" transparent></BeInput>`,V=`<!-- @compact: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input compact">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" compact></BeInput>`,w=`<!-- @edit: Boolean -->
<!-- @editMode: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input edit {editable}">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" edit edit-mode={true || false}></BeInput>`,O=`<!-- @status: success || danger || info || attention || importance -->

<!-- html -->
<div class="be-input {status}">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" status="{status}"></BeInput>`,S=`<!-- @fluid: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-input fluid">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" fluid></BeInput>`,C=`<!-- @unit: String -->
<!-- default: false -->

<!-- html -->
<div class="be-input unit" data-unit="{unit}">
   <input type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" unit="{unit}"></BeInput>`,N=`<!-- @icon-left: String -->
<!-- @icon-right: String -->
<!-- default: false -->

<!-- html -->
<div class="be-input icon left">
   <i class="icon xi-icon-left" />
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input icon right">
   <input type="text" placeholder="입력하세요" />
   <i class="icon xi-icon-right" />
</div>
<div class="be-input icon both">
   <i class="icon xi-icon-left" />
   <input type="text" placeholder="입력하세요" />
   <i class="icon xi-icon-right" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요"
   icon-left="{iconLeft}"
   icon-right="{iconRight}"
 ></BeInput>`,T=`<!-- @clear: Boolean -->
<!-- default: false -->

<!--only component -->
<BeInput v-model="inputValue" placeholder="입력하세요" clear></BeInput>`,k=`<!-- @badge: String -->
<!-- @badgeOption: Object -->
<!-- default: null -->

<!-- html -->
<div class="be-input badge">
   <input type="text" placeholder="입력하세요" />
   <span class="be-badge {badgeOption}">{badge}</span>
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요"
   badge="{badge}"
   badge-option="{badgeOption}"
 ></BeInput>`,R=`<!-- @label: String -->
<!-- default: null -->

<!-- html -->
<div class="be-input label left">
   <label>{label}</label>
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input label right">
   <input type="text" placeholder="입력하세요" />
   <label>{label}</label>
</div>
<!-- component & slot -->
<BeInput placeholder="입력하세요">
    <input v-model="inputValue" type="text" placeholder="입력하세요" />
   <label>{label}</label>
</BeInput>`,$=`<!-- @button: String -->
<!-- @buttonOption: Object -->
<!-- default: null -->

<!-- html -->
<div class="be-input button left">
   <button class="be-button {buttonOption}">{button}</button>
   <input type="text" placeholder="입력하세요" />
</div>
<div class="be-input button right">
   <input type="text" placeholder="입력하세요" />
   <button class="be-button {buttonOption}">{button}</button>
</div>
<!-- component & slot -->
<BeInput placeholder="입력하세요">
    <input type="text" placeholder="입력하세요" />
   <button class="be-button {buttonOption}">{button}</button>
</BeInput>`,D=`<!-- @type: input || textarea -->
<!-- default: input -->

<!-- html -->
<div class="be-input">
   <textarea type="text" placeholder="입력하세요" />
</div>
<div class="be-input short">
   <textarea type="text" placeholder="입력하세요" />
</div>
<!-- component -->
<BeInput v-model="inputValue" placeholder="입력하세요" type="textarea"></BeInput>
<BeInput placeholder="입력하세요">
    <textarea type="text" placeholder="입력하세요" />
</BeInput>`,E={class:"page-wrapper be-container"},F={class:"contents-wrapper"},L={class:"contents-wrapper"},M={class:"contents-wrapper"},U={class:"contents-wrapper"},j={class:"contents-wrapper"},H={class:"contents-wrapper"},q={class:"contents-wrapper"},z={class:"contents-wrapper"},A={class:"contents-wrapper"},G={class:"contents-wrapper"},J={class:"contents-wrapper"},K={class:"contents-wrapper"},P={class:"contents-wrapper"},l="입력하세요",_={__name:"InputView",setup(Q){const a=u(!1),i=u("init");return(W,e)=>{const o=m("BeInput");return g(),v("div",E,[e[47]||(e[47]=t("div",{class:"summary"},null,-1)),n(b,null,{base:c(()=>[t("section",null,[e[2]||(e[2]=t("div",{class:"desc"},[t("span",{class:"be-tag label lightblue"},"HTML")],-1)),t("div",{class:"contents-wrapper"},[t("div",{class:"be-input"},[t("input",{type:"text",placeholder:l})])]),n(s,{code:x,lang:"html"},null,8,["code"])]),t("section",null,[e[3]||(e[3]=t("div",{class:"desc"},[t("span",{class:"be-tag label deepblue"},"Component")],-1)),t("div",F,[n(o,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d),placeholder:l},null,8,["modelValue"]),p(" Result: "+r(i.value),1)]),n(s,{code:h,lang:"vue-html"},null,8,["code"])])]),variants:c(()=>[t("section",null,[e[4]||(e[4]=t("h4",{class:"title"},"Disabled",-1)),e[5]||(e[5]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",L,[t("div",{class:"be-input disabled"},[t("input",{type:"text",placeholder:l,disabled:""})]),n(o,{disabled:!0,placeholder:l})]),n(s,{code:y,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[6]||(e[6]=t("h4",{class:"title"},"Readonly",-1)),e[7]||(e[7]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",M,[t("div",{class:"be-input readonly"},[t("input",{type:"text",readonly:"",placeholder:l})]),n(o,{readonly:!0,placeholder:l})]),n(s,{code:f,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[8]||(e[8]=t("h4",{class:"title"},"Underline",-1)),e[9]||(e[9]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",U,[t("div",{class:"be-input underline"},[t("input",{type:"text",placeholder:l})]),n(o,{underline:!0,placeholder:l})]),n(s,{code:B,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[10]||(e[10]=t("h4",{class:"title"},"Transparent",-1)),e[11]||(e[11]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",j,[t("div",{class:"be-input transparent"},[t("input",{type:"text",placeholder:l})]),n(o,{transparent:!0,placeholder:l})]),n(s,{code:I,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[12]||(e[12]=t("h4",{class:"title"},"Compact",-1)),e[13]||(e[13]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",H,[t("div",{class:"be-input compact"},[t("input",{type:"text",placeholder:l})]),n(o,{compact:!0,placeholder:l})]),n(s,{code:V,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[16]||(e[16]=t("h4",{class:"title"},"Edit",-1)),e[17]||(e[17]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",q,[e[14]||(e[14]=t("div",{class:"be-input edit"},[t("input",{type:"text",placeholder:"일반 모드"})],-1)),e[15]||(e[15]=t("div",{class:"be-input edit editable"},[t("input",{type:"text",placeholder:"수정 모드"})],-1)),n(o,{edit:!0,"edit-mode":a.value,placeholder:l},null,8,["edit-mode"]),t("div",{class:"be-button",onClick:e[1]||(e[1]=d=>a.value=!a.value)}," EDIT "+r(a.value?"OFF":"ON"),1)]),n(s,{code:w,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[20]||(e[20]=t("h4",{class:"title"},"Status",-1)),e[21]||(e[21]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",z,[e[18]||(e[18]=t("div",{class:"be-input success"},[t("input",{type:"text",placeholder:"success mode"})],-1)),e[19]||(e[19]=t("div",{class:"be-input danger"},[t("input",{type:"text",placeholder:"danger mode"})],-1)),n(o,{status:"success",placeholder:l})]),n(s,{code:O,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[22]||(e[22]=t("h4",{class:"title"},"Fluid",-1)),e[23]||(e[23]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",A,[t("div",{class:"be-input fluid"},[t("input",{type:"text",placeholder:l})]),n(o,{fluid:!0,placeholder:l})]),n(s,{code:S,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[24]||(e[24]=t("h4",{class:"title"},"Unit",-1)),e[25]||(e[25]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component"),p(" 1글자 unit만 적용 (대, 개, 월, 일, 명, 년...) ")],-1)),t("div",G,[t("div",{class:"be-input unit","data-unit":"대"},[t("input",{type:"text",placeholder:l,class:"align-right"})]),n(o,{unit:"명",placeholder:l})]),n(s,{code:C,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[30]||(e[30]=t("h4",{class:"title"},"Icon",-1)),e[31]||(e[31]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",J,[t("div",{class:"be-input icon left"},[e[26]||(e[26]=t("i",{class:"icon xi-search"},null,-1)),t("input",{type:"text",placeholder:l})]),t("div",{class:"be-input icon right"},[t("input",{type:"text",placeholder:l}),e[27]||(e[27]=t("i",{class:"icon xi-close"},null,-1))]),t("div",{class:"be-input icon both"},[e[28]||(e[28]=t("i",{class:"icon xi-search"},null,-1)),t("input",{type:"text",placeholder:l}),e[29]||(e[29]=t("i",{class:"icon xi-close"},null,-1))]),n(o,{"icon-left":"users","icon-right":"lock",placeholder:l})]),n(s,{code:N,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[32]||(e[32]=t("h4",{class:"title"},"Clear Icon",-1)),e[33]||(e[33]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component"),p(" 입력값을 초기화 하기 위한 버튼 제공 ")],-1)),t("div",K,[n(o,{clear:!0})]),n(s,{code:T,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[35]||(e[35]=t("h4",{class:"title"},"Badge",-1)),e[36]||(e[36]=t("div",{class:"desc"},[t("span",{class:"be-tag label"},"component")],-1)),t("div",P,[t("div",{class:"be-input badge"},[t("input",{type:"text",placeholder:l}),e[34]||(e[34]=t("span",{class:"be-badge red"},"R",-1))]),n(o,{badge:"10","badge-option":"blue"})]),n(s,{code:k,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[39]||(e[39]=t("h4",{class:"title"},"Label",-1)),e[40]||(e[40]=t("div",{class:"desc"},null,-1)),t("div",{class:"contents-wrapper"},[t("div",{class:"be-input labeled right"},[t("input",{type:"text",placeholder:l}),e[37]||(e[37]=t("label",null,"$",-1))]),t("div",{class:"be-input labeled left"},[t("input",{type:"text",placeholder:l}),e[38]||(e[38]=t("label",null,"Name",-1))])]),n(s,{code:R,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[43]||(e[43]=t("h4",{class:"title"},"Button",-1)),e[44]||(e[44]=t("div",{class:"desc"},null,-1)),t("div",{class:"contents-wrapper"},[t("div",{class:"be-input button left"},[t("input",{type:"text",placeholder:l}),e[41]||(e[41]=t("button",{class:"be-button primary"},"Save",-1))]),t("div",{class:"be-input button right"},[t("input",{type:"text",placeholder:l}),e[42]||(e[42]=t("button",{class:"be-button icon"},[t("i",{class:"ixon xi-upload"})],-1))])]),n(s,{code:$,lang:"vue-html"},null,8,["code"])]),t("section",null,[e[45]||(e[45]=t("h4",{class:"title"},"Textarea",-1)),e[46]||(e[46]=t("div",{class:"desc"},null,-1)),t("div",{class:"contents-wrapper"},[t("div",{class:"be-input fluid"},[t("textarea",{type:"text",placeholder:l})]),t("div",{class:"be-input fluid short"},[t("textarea",{type:"text",placeholder:l})])]),n(s,{code:D,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{_ as default};
