import{_ as t}from"./CodeBlock-Bi4m5WSL.js";import{_ as m}from"./PageContainer-RAF9BO4c.js";import{_ as c,c as d,a as s,b as n,w as o,e as T,d as e,F as v,f as r,n as p,t as u,o as g}from"./index-YGnsNkeF.js";const B=`<!-- html -->
<div class="be-tag label">Tag</div>
<div class="be-tag line"></div>
<div class="be-tag dot"></div>
<!-- component -->
<BeTag type="label">Tag(Comp)</BeTag>`,f=`<!-- html -->
<div class="be-tag label">Tag</div>
<!-- component -->
<BeTag type="label">Tag(Comp)</BeTag>`,x=`<!-- html -->
<div class="be-tag line"></div>
<!-- component -->
<BeTag type="line"></BeTag>`,y=`<!-- html -->
<div class="be-tag dot"></div>
<!-- component -->
<BeTag type="dot"></BeTag>`,w=`<!-- html -->
<div class="be-tag label icon">
   <i class="xi-icon-name"></i>
</div>
<div class="be-tag label">
   <i class="icon left xi-icon-name"></i>
   Left
</div>
<div class="be-tag label icon">
   Right
   <i class="icon right xi-icon-name"></i>
</div>
<!-- component -->
<BeTag type="label" icon="xi-ixcon-name"></BeTag>
<BeTag type="label" icon="xi-ixcon-name" icon-pos="left">Left</BeTag>
<BeTag type="label" icon="xi-ixcon-name" icon-pos="right">Right</BeTag>`,C=`<!-- html -->
<div class="be-tag label round">Round</div>
<!-- component -->
<BeTag type="label" round></BeTag>`,P=`<!-- @pointing: Boolean -->
<!-- @pointingPos: {up | down | left | right} -->

<!-- html -->
<div class="be-tag label pointing {pointingPos}">Point</div>
<!-- component -->
<BeTag type="label" pointing pointing-pos="{pointingPos}">Point</BeTag>`,R=`<!-- only html -->
<div class="be-tags">
   <div class="be-tag label">A</div>
   <BeTag type="label">B</BeTag>
   <div class="be-tag label">C</div>
</div>`,k=`<!-- only html -->
<div class="be-tags one-of-a-kind">
   <div class="be-tag label">A</div>
   <BeTag type="label">B</BeTag>
   <div class="be-tag label">C</div>
</div>`,A=`<!-- @color: String -->

<!-- html -->
<div class="be-tag label {color}">colors</div>
<!-- component -->
<BeTag type="label" color="{color}">Colors</BeTag>`,L=`<!-- @color: String -->
<!-- @light: Boolean -->

<!-- html -->
<div class="be-tag label {color} light">colors</div>
<!-- component -->
<BeTag type="label" color="{color}" light>Colors</BeTag>`,N={class:"page-wrapper be container"},S={class:"contents-wrapper"},V={class:"contents-wrapper"},E={class:"contents-wrapper"},U={class:"contents-wrapper"},D={class:"contents-wrapper"},F={class:"contents-wrapper"},H={class:"contents-wrapper"},I={__name:"TagsView",setup($){const b=["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"];return(z,l)=>{const a=T("BeTag");return g(),d("div",N,[l[56]||(l[56]=s("div",{class:"summary"},null,-1)),n(m,null,{base:o(()=>[s("section",null,[l[11]||(l[11]=s("h4",{class:"title"},"Base",-1)),l[12]||(l[12]=s("div",{class:"desc"},[s("div",{class:"be-tag label lightblue"},"HTML"),s("div",{class:"be-tag label deepblue"},"component")],-1)),s("div",S,[l[1]||(l[1]=s("div",{class:"be-tag label"},"BASE",-1)),l[2]||(l[2]=s("div",{class:"be-tag label"},"기본태그",-1)),l[3]||(l[3]=s("div",{class:"be-tag label round"},"Round",-1)),l[4]||(l[4]=s("div",{class:"be-tag label icon"},[s("i",{class:"icon xi-tag"})],-1)),l[5]||(l[5]=s("div",{class:"be-tag line"},null,-1)),l[6]||(l[6]=s("div",{class:"be-tag line red"},null,-1)),l[7]||(l[7]=s("div",{class:"be-tag line blue"},null,-1)),l[8]||(l[8]=s("div",{class:"be-tag dot purple"},null,-1)),l[9]||(l[9]=s("div",{class:"be-tag dot orange"},null,-1)),l[10]||(l[10]=s("div",{class:"be-tag dot lightblue"},null,-1)),n(a,null,{default:o(()=>l[0]||(l[0]=[e("Tag(Comp)")])),_:1})]),n(t,{code:B,lang:"vue-html"},null,8,["code"])])]),variants:o(()=>[s("section",null,[l[17]||(l[17]=s("h4",{class:"title"},"Type: label",-1)),l[18]||(l[18]=s("div",{class:"desc"},null,-1)),s("div",V,[l[14]||(l[14]=s("div",{class:"be-tag label"},"BASE",-1)),l[15]||(l[15]=s("div",{class:"be-tag label"},"기본태그",-1)),l[16]||(l[16]=s("div",{class:"be-tag label icon"},[s("i",{class:"icon xi-tag"})],-1)),n(a,null,{default:o(()=>l[13]||(l[13]=[e("label type")])),_:1})]),n(t,{code:f,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[23]||(l[23]=s("h4",{class:"title"},"Type: line",-1)),l[24]||(l[24]=s("div",{class:"desc"},null,-1)),s("div",E,[l[19]||(l[19]=s("div",{class:"be-tag line"},null,-1)),l[20]||(l[20]=s("div",{class:"be-tag line red"},null,-1)),l[21]||(l[21]=s("div",{class:"be-tag line blue"},null,-1)),l[22]||(l[22]=s("div",{class:"be-tag line green"},null,-1)),n(a,{type:"line"})]),n(t,{code:x,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[29]||(l[29]=s("h4",{class:"title"},"Type: dot",-1)),l[30]||(l[30]=s("div",{class:"desc"},null,-1)),s("div",U,[l[25]||(l[25]=s("div",{class:"be-tag dot"},null,-1)),l[26]||(l[26]=s("div",{class:"be-tag dot red"},null,-1)),l[27]||(l[27]=s("div",{class:"be-tag dot blue"},null,-1)),l[28]||(l[28]=s("div",{class:"be-tag dot green"},null,-1)),n(a,{type:"dot"})]),n(t,{code:y,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[38]||(l[38]=s("h4",{class:"title"},"Icon",-1)),l[39]||(l[39]=s("div",{class:"desc"},"label 타입의 경우에 사용",-1)),s("div",D,[l[32]||(l[32]=s("div",{class:"be-tag label icon"},[s("i",{class:"icon xi-bell"})],-1)),l[33]||(l[33]=s("div",{class:"be-tag label"},[s("i",{class:"icon left xi-angle-left"}),e(" Left ")],-1)),l[34]||(l[34]=s("div",{class:"be-tag label"},[e(" Right "),s("i",{class:"icon right xi-angle-right"})],-1)),l[35]||(l[35]=s("div",{class:"be-tag label blue"},[s("i",{class:"icon left xi-user"}),e(" User ")],-1)),l[36]||(l[36]=s("div",{class:"be-tag label red"},[s("i",{class:"icon left xi-new"}),e(" New ")],-1)),l[37]||(l[37]=s("div",{class:"be-tag label deeppurple"},[e(" Tag "),s("i",{class:"icon right xi-close"})],-1)),n(a,{icon:"xi-tag","icon-pos":"left"},{default:o(()=>l[31]||(l[31]=[e("icon(Comp)")])),_:1})]),n(t,{code:w,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[40]||(l[40]=s("h4",{class:"title"},"Round",-1)),l[41]||(l[41]=s("div",{class:"desc"},null,-1)),l[42]||(l[42]=s("div",{class:"contents-wrapper"},[s("div",{class:"be-tag label round"},[s("i",{class:"icon left xi-angle-left"}),e(" Left ")]),s("div",{class:"be-tag label round"},[e(" Right "),s("i",{class:"icon right xi-angle-right"})]),s("div",{class:"be-tag label round blue"},[s("i",{class:"icon left xi-user"}),e(" User ")]),s("div",{class:"be-tag label round red"},[s("i",{class:"icon left xi-new"}),e(" New ")]),s("div",{class:"be-tag label round deeppurple"},[e(" Tag "),s("i",{class:"icon right xi-close"})])],-1)),n(t,{code:C,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[43]||(l[43]=s("h4",{class:"title"},"Pointing",-1)),l[44]||(l[44]=s("div",{class:"desc"},null,-1)),l[45]||(l[45]=s("div",{class:"contents-wrapper"},[s("div",{class:"be-tag pointing up"},[e(" Point Up "),s("i",{class:"icon right xi-angle-right"})]),s("div",{class:"be-tag pointing blue down"},[s("i",{class:"icon left xi-user"}),e(" Point Down ")]),s("div",{class:"be-tag pointing left"},[e(" Point left "),s("i",{class:"icon right xi-angle-right"})]),s("div",{class:"be-tag pointing blue right"},[s("i",{class:"icon left xi-user"}),e(" Point Right ")])],-1)),n(t,{code:P,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[46]||(l[46]=s("h4",{class:"title"},"Tags",-1)),l[47]||(l[47]=s("div",{class:"desc"},null,-1)),l[48]||(l[48]=s("div",{class:"contents-wrapper"},[s("div",{class:"be-tags"},[s("div",{class:"be-tag label green"},"Tag A"),s("div",{class:"be-tag label deepblue"},"Tag B"),s("div",{class:"be-tag label orange"},"Tag C")])],-1)),n(t,{code:R,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[49]||(l[49]=s("h4",{class:"title"},"Tags: Hover Effect",-1)),l[50]||(l[50]=s("div",{class:"desc"},null,-1)),l[51]||(l[51]=s("div",{class:"contents-wrapper"},[s("div",{class:"be-tags one-of-a-kind"},[s("div",{class:"be-tag label green"},"Tag A"),s("div",{class:"be-tag label deepblue"},"Tag B"),s("div",{class:"be-tag label orange"},"Tag C")])],-1)),n(t,{code:k,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[52]||(l[52]=s("h4",{class:"title"},"Color",-1)),l[53]||(l[53]=s("div",{class:"desc"},null,-1)),s("div",F,[(g(),d(v,null,r(b,i=>s("div",{key:i,class:p(["be-tag label",i])},u(i),3)),64))]),n(t,{code:A,lang:"vue-html"},null,8,["code"])]),s("section",null,[l[54]||(l[54]=s("h4",{class:"title"},"Color - light",-1)),l[55]||(l[55]=s("div",{class:"desc"},null,-1)),s("div",H,[(g(),d(v,null,r(b,i=>s("div",{key:i,class:p(["be-tag label light",i])},u(i),3)),64))]),n(t,{code:L,lang:"vue-html"},null,8,["code"])])]),_:1})])}}},G=c(I,[["__scopeId","data-v-bd5162be"]]);export{G as default};
