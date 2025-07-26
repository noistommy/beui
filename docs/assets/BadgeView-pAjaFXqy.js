import{_ as a}from"./CodeBlock-DpeeNE6v.js";import{_ as c}from"./PageContainer-6gRpGfhJ.js";import{c as o,a as e,b as l,w as d,d as s,F as u,f as m,t as p,n as B,e as i,o as r}from"./index-DJRzCbrU.js";const w=`<!-- Parent element 내부에 사용 -->
<div class="parent-element">
   ...
   <div class="be-badge">N</div>
</div>`,f=`<!-- Parent element 내부에 사용 -->
<div class="parent-element">
   ...
   <BeBadge>N</BeBadge>
</div>`,y=`<!-- @mark: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="parent-element">
   ...
   <div class="be-badge mark"></div>
</div> 
<!-- component -->
<div class="parent-element">
   ...
   <BeBadge mark></BeBadge>
</div>`,k=`<!-- @shadow: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="parent-element">
   ...
   <div class="be-badge shadow"></div>
</div> 
<!-- component -->
<div class="parent-element">
   ...
   <BeBadge shadow></BeBadge>
</div>`,C=`<!-- @align: {left | center | right} -->
<!-- default: center -->

<!-- html -->
<div class="parent-element">
   ...
   <div class="be-badge align-{align}"></div>
</div> 
<!-- component -->
<div class="parent-element">
   ...
   <BeBadge align="{align}">A</BeBadge>
</div>`,N=`<!-- @color: String -->
<!-- default: null -->

<!-- html -->
<div class="parent-element">
   ...
   <div class="be-badge {color}"></div>
</div> 
<!-- component -->
<div class="parent-element">
   ...
   <BeBadge color="{color}">C</BeBadge>
</div>`,x={class:"page-wrapper be container"},S={class:"contents-wrapper"},h={class:"contents-wrapper"},P={__name:"BadgeView",setup(F){const v=["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"];return(V,n)=>{const b=i("BeBadge"),g=i("BeButton");return r(),o("div",x,[n[17]||(n[17]=e("div",{class:"summary"},null,-1)),l(c,null,{base:d(()=>[e("section",null,[n[0]||(n[0]=e("div",{class:"desc"},[e("div",{class:"be-tag label lightblue"},"HTML")],-1)),n[1]||(n[1]=e("div",{class:"contents-wrapper"},[e("div",{class:"be-button"},[s(" Badge (0) "),e("div",{class:"be-badge"},"0")]),e("div",{class:"be-button"},[s(" Badge (1) "),e("div",{class:"be-badge red"},"1")]),e("div",{class:"be-button"},[s(" Badge (10) "),e("div",{class:"be-badge secondary"},"10")]),e("div",{class:"be-button"},[s(" Badge (N) "),e("div",{class:"be-badge attention"},"N")]),e("div",{class:"be-button"},[s(" Badge (N) "),e("div",{class:"be-badge success"},[e("i",{class:"icon xi-upload"})])])],-1)),l(a,{code:w,lang:"html"},null,8,["code"])]),e("section",null,[n[4]||(n[4]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",S,[l(g,null,{default:d(()=>[n[3]||(n[3]=s(" Badge(Comp) ")),l(b,{shadow:"",color:"red",align:"right"},{default:d(()=>n[2]||(n[2]=[s("C")])),_:1})]),_:1})]),l(a,{code:f,lang:"vue-html"},null,8,["code"])])]),variants:d(()=>[e("section",null,[n[5]||(n[5]=e("h4",null,"Mark",-1)),n[6]||(n[6]=e("div",{class:"desc"},null,-1)),n[7]||(n[7]=e("div",{class:"contents-wrapper"},[e("div",{class:"be-button"},[s(" Float "),e("div",{class:"be-badge secondary"},"F")]),e("div",{class:"be-button"},[s(" Mark "),e("div",{class:"be-badge secondary mark"})])],-1)),l(a,{code:y,lang:"vue-html"},null,8,["code"])]),e("section",null,[n[8]||(n[8]=e("h4",null,"Shadow",-1)),n[9]||(n[9]=e("div",{class:"desc"},null,-1)),n[10]||(n[10]=e("div",{class:"contents-wrapper"},[e("div",{class:"be-button"},[s(" Shdow on "),e("div",{class:"be-badge secondary shadow"},"O")]),e("div",{class:"be-button"},[s(" Shdow off "),e("div",{class:"be-badge secondary"},"X")])],-1)),l(a,{code:k,lang:"vue-html"},null,8,["code"])]),e("section",null,[n[11]||(n[11]=e("h4",null,"Align",-1)),n[12]||(n[12]=e("div",{class:"desc"},null,-1)),n[13]||(n[13]=e("div",{class:"contents-wrapper"},[e("div",{class:"be-button"},[s(" Left "),e("div",{class:"be-badge primary shadow align-left"},"3000")]),e("div",{class:"be-button"},[s(" Center "),e("div",{class:"be-badge primary shadow align-center"},"3000")]),e("div",{class:"be-button"},[s(" Right "),e("div",{class:"be-badge primary shadow align-right"},"3000")])],-1)),l(a,{code:C,lang:"vue-html"},null,8,["code"])]),e("section",null,[n[15]||(n[15]=e("h4",null,"Color",-1)),n[16]||(n[16]=e("div",{class:"desc"},null,-1)),e("div",h,[(r(),o(u,null,m(v,t=>e("div",{class:"be-button",key:t},[s(p(t)+" ",1),e("div",{class:B(["be-badge shadow",t])},n[14]||(n[14]=[e("i",{class:"icon xi-tint"},null,-1)]),2)])),64))]),l(a,{code:N,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{P as default};
