import{_ as e}from"./CodeBlock-DS18R5tz.js";import{_ as k}from"./PageContainer-DFfZSwzV.js";import{_ as O,r as $,c as l,a as n,b as s,w as v,F as b,f as a,n as d,t as p,e as I,d as r,j as g,o as u}from"./index-DvivQW6X.js";const S=`<!-- <button></button> 태그 사용 -->
<button class="be-button">Contents-text</button>
<!-- <div></div> 태그 사용 -->
<div class="be-button">Contents-text</div>`,z=`<BeButton content-text="Contents-text"></BeButton>
<BeButton>Contents-text</BeButton>`,L=`<!-- @brandType: {primary || secondary} -->
<!-- html -->
<button class="be-button {brandType}">...</button>
<!-- component -->
<BeButton :brand="brandType">...</BeButton>`,N=`<!-- @status:{ success || danger || info || attention || importance} -->
<!-- html -->
<button class="be-button {status}">...</button>
<!-- component -->
<BeButton :status="status">...</BeButton>`,T=`<!-- @colors:{ red || orange || ... || gray} -->
<!-- html -->
<button class="be-button {colors}">...</button>
<!-- component -->
<BeButton :color="colors">...</BeButton>`,V=`<!-- @colorsLight:{ red-light || orange-light || ... || gray-light} -->
<!-- html -->
<button class="be-button {colorsLight}">...</button>
<!-- component -->
<BeButton :color="colorsLight">...</BeButton>`,D=`<!-- @text: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button text">...</button>
<!-- component -->
<BeButton text>...</BeButton>`,A=`<!-- @border: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button border">...</button>
<!-- component -->
<BeButton border>...</BeButton>`,E=`<!-- @disabled: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button disabled">...</button>
<!-- component -->
<BeButton disabled>...</BeButton>`,F=`<!-- @fluid: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button fluid">...</button>
<!-- component -->
<BeButton fluid>...</BeButton>`,P=`<!-- @compact: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button compact">...</button>
<!-- component -->
<BeButton compact>...</BeButton>`,R=`<!-- @outline: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button outline">...</button>
<!-- component -->
<BeButton outline>...</BeButton>`,j=`<!-- @round: Boolean -->
<!-- default: false -->

<!-- html -->
<button class="be-button round">...</button>
<!-- component -->
<BeButton round>...</BeButton>`,M=`<!-- @icon: String -->
<!-- default: null -->

<!-- html -->
<button class="be-button icon">
   <i class="xi-icon-name" />
</button>
<!-- component -->
<BeButton icon="xi-icon-name">...</BeButton>
<!-- fallthrough attribute & slot -->
<BeButton class="icon">
   <i class="xi-icon-name" />
</BeButton>`,H=`<!-- @withIcon: String -->
<!-- @iconPos: String -->
<!-- default: null -->

<!-- html -->
<!-- icon left -->
<button class="be-button">
   <i class="icon left xi-icon-name" />
   Content-text
</button>
<!-- icon right -->
<button class="be-button">
   Content-text
   <i class="icon right xi-icon-name" />
</button>
<!-- icon both -->
<button class="be-button">
   <i class="icon left xi-icon-name" />
   Content-text
   <i class="icon right xi-icon-name" />
</button>
<!-- component -->
<BeButton with-icon="xi-icon-name" icon-pos="{left || right || both}">...</BeButton>`,q=`<!-- @size: {tiny || small || medium || large || huge || massive} -->

<!-- html -->
<button class="be-button {size}">...</button>
<!-- component -->
<BeButton :size="size">...</BeButton>`,G=`<!-- @badge: String -->
<!-- @badgeOption: Object -->
<!-- default: null -->

<!-- html -->
<button class="be-button badge">
   <!-- reference: Badge 컴포넌트의 속성을 동일하게 적용 -->
   <span class="in-badge {badge-option}">{badge}</span>
</button>
<!-- component -->
<BeButton badge="{badge}" badge-option="{badgeOption}">...</BeButton>`,J=`<!-- emit: onClick -->
<BeButton @onClick="handleClick">...</BeButton>`,K=`<!-- html -->
<div class="buttons">
   <div class="be-button"></button>
   <div class="be-button"></button>
   ...
   <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<!-- const selected = ref() -->
<BeButtons :buttons v-model="selected"></BeButtons>`,Q=`<div class="buttons round">
   <div class="be-button"></button>
   <div class="be-button"></button>
   ...
   <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<BeButtons :buttons round></BeButtons>`,U=`<div class="buttons border">
   <div class="be-button"></button>
   <div class="be-button"></button>
   ...
   <div class="be-button"></button>
</div>
<!-- component -->
<!-- const buttons = [] -->
<BeButtons :buttons border></BeButtons>`,W={class:"page-wrapper be-container"},X={class:"contents-wrapper"},Y={class:"contents-wrapper"},Z={class:"contents-wrapper"},h={class:"contents-wrapper"},_={class:"contents-wrapper"},tt={class:"contents-wrapper"},nt={key:0,class:"icon left xi-airplane"},ot={class:"contents-wrapper"},st={class:"contents-wrapper"},et={key:0,class:"icon left xi-airplane"},lt={class:"contents-wrapper"},ut={key:0,class:"icon left xi-airplane"},it={class:"contents-wrapper"},dt={key:0,class:"icon left xi-airplane"},bt={class:"contents-wrapper"},at={class:"contents-wrapper"},rt={key:0,class:"icon left xi-airplane"},ct={class:"contents-wrapper"},pt={class:"contents-wrapper"},mt={class:"contents-wrapper"},Bt={class:"contents-wrapper"},vt={class:"buttons"},gt={class:"contents-wrapper"},xt={class:"be-buttons"},ft=["onClick"],Ct={class:"contents-wrapper"},yt={class:"be-buttons round"},wt=["onClick"],kt={class:"contents-wrapper"},Ot={class:"be-buttons border"},$t=["onClick"],It={__name:"ButtonView",setup(St){const C=["success","danger","info","attention","importance"],x=["red","orange","yellow","lightgreen","green","lightblue","blue","deepblue","deeppurple","purple","brown","gray"],m=["primary","secondary","round","outline","icon"],y=["home","user","arrow-left","arrow-right","accessibility"],w=["tiny","small","medium","large","huge","massive"],B=$(0);return(zt,t)=>{const i=I("BeButton");return u(),l("div",W,[t[69]||(t[69]=n("div",{class:"summary"},null,-1)),s(k,null,{base:v(()=>[n("section",null,[t[1]||(t[1]=n("h4",{class:"title"},null,-1)),t[2]||(t[2]=n("div",{class:"desc"},[n("div",{class:"be-tag label lightblue"},"HTML")],-1)),t[3]||(t[3]=n("div",{class:"contents-wrapper"},[n("div",{class:"be-button"},"Base(class)"),n("button",{class:"be-button"},"Base(tag)")],-1)),s(e,{code:S,lang:"html"},null,8,["code"])]),n("section",null,[t[5]||(t[5]=n("h4",{class:"title"},null,-1)),t[6]||(t[6]=n("div",{class:"desc"},[n("div",{class:"be-tag label deepblue"},"Component")],-1)),n("div",X,[s(i,{"content-text":"Component"}),s(i,{brand:"primary","content-text":"Comp(brand)"}),s(i,{status:"danger","content-text":"Comp(status)"}),s(i,{icon:""},{default:v(()=>t[4]||(t[4]=[n("i",{class:"icon xi-user"},null,-1)])),_:1})]),s(e,{code:z,lang:"vue-html"},null,8,["code"])])]),variants:v(()=>[n("section",null,[t[7]||(t[7]=n("h4",{class:"title"},"Brand",-1)),t[8]||(t[8]=n("div",{class:"desc"},null,-1)),t[9]||(t[9]=n("div",{class:"contents-wrapper"},[n("button",{class:"be-button primary"},"Primary"),n("button",{class:"be-button secondary"},"Secondary")],-1)),s(e,{code:L,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[10]||(t[10]=n("h4",{class:"title"},"Status",-1)),t[11]||(t[11]=n("div",{class:"desc"},null,-1)),n("div",Y,[(u(),l(b,null,a(C,o=>n("button",{key:o,class:d(["be-button",o])},p(o),3)),64))]),s(e,{code:N,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[12]||(t[12]=n("h4",{class:"title"},"Colors",-1)),t[13]||(t[13]=n("div",{class:"desc"},null,-1)),n("div",Z,[(u(),l(b,null,a(x,o=>n("button",{key:o,class:d(["be-button",o])},p(o),3)),64)),s(i,{color:"lightblue","content-text":"Comp(color)"})]),s(e,{code:T,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[14]||(t[14]=n("h4",{class:"title"},"Colors-light",-1)),t[15]||(t[15]=n("div",{class:"desc"},null,-1)),n("div",h,[(u(),l(b,null,a(x,o=>n("button",{key:o,class:d(["be-button",`${o}-light`])},p(o),3)),64)),s(i,{color:"lightblue-light","content-text":"Comp(color)"})]),s(e,{code:V,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[19]||(t[19]=n("h4",{class:"title"},"Text",-1)),t[20]||(t[20]=n("div",{class:"desc"},null,-1)),n("div",_,[t[16]||(t[16]=n("button",{class:"be-button text"},"text",-1)),t[17]||(t[17]=n("button",{class:"be-button primary text"},"text",-1)),t[18]||(t[18]=n("button",{class:"be-button text"},[n("i",{class:"icon left xi-text-size"}),r(" text ")],-1)),s(i,{text:!0,"content-text":"Comp(text)"})]),s(e,{code:D,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[23]||(t[23]=n("h4",{class:"title"},"Border",-1)),t[24]||(t[24]=n("div",{class:"desc"},null,-1)),n("div",tt,[t[22]||(t[22]=n("button",{class:"be-button border"},"border",-1)),(u(),l(b,null,a(m,o=>n("button",{key:o,class:d(["be-button border",o])},[o.indexOf("icon")>-1?(u(),l("i",nt)):g("",!0),t[21]||(t[21]=r(" border "))],2)),64)),s(i,{border:!0,"content-text":"Comp(border)"})]),s(e,{code:A,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[27]||(t[27]=n("h4",{class:"title"},"Disabled",-1)),t[28]||(t[28]=n("div",{class:"desc"},null,-1)),n("div",ot,[t[25]||(t[25]=n("button",{class:"be-button disabled"},"disabled",-1)),t[26]||(t[26]=n("button",{class:"be-button",disabled:""},"disabled(attr)",-1)),s(i,{disabled:!0,"content-text":"Comp(disabled)"})]),s(e,{code:E,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[30]||(t[30]=n("h4",{class:"title"},"Fluid",-1)),t[31]||(t[31]=n("div",{class:"desc"},null,-1)),n("div",st,[t[29]||(t[29]=n("button",{class:"be-button fluid"},"fluid",-1)),(u(),l(b,null,a(m,o=>n("button",{key:o,class:d(["be-button fluid",o])},[o.indexOf("icon")>-1?(u(),l("i",et)):g("",!0),r(" fluid ("+p(o)+") ",1)],2)),64)),s(i,{fluid:!0,"content-text":"Comp(fluid)"})]),s(e,{code:F,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[34]||(t[34]=n("h4",{class:"title"},"Compact",-1)),t[35]||(t[35]=n("div",{class:"desc"},null,-1)),n("div",lt,[t[33]||(t[33]=n("button",{class:"be-button compact"},"compact",-1)),(u(),l(b,null,a(m,o=>n("button",{key:o,class:d(["be-button compact",o])},[o.indexOf("icon")>-1?(u(),l("i",ut)):g("",!0),t[32]||(t[32]=r(" compact "))],2)),64)),s(i,{compact:!0,"content-text":"Comp(compact)"})]),s(e,{code:P,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[38]||(t[38]=n("h4",{class:"title"},"Outline",-1)),t[39]||(t[39]=n("div",{class:"desc"},null,-1)),n("div",it,[t[37]||(t[37]=n("button",{class:"be-button outline"},"outline",-1)),(u(),l(b,null,a(m,o=>n("button",{key:o,class:d(["be-button outline",o])},[o.indexOf("icon")>-1?(u(),l("i",dt)):g("",!0),t[36]||(t[36]=r(" outline "))],2)),64)),s(i,{outline:!0,"content-text":"Comp(outline)"})]),s(e,{code:R,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[42]||(t[42]=n("h4",{class:"title"},"Icons(xeicon 2.3.3)",-1)),t[43]||(t[43]=n("div",{class:"desc"},null,-1)),n("div",bt,[t[40]||(t[40]=n("button",{class:"be-button icon"},[n("i",{class:"xi-airplane"})],-1)),t[41]||(t[41]=n("button",{class:"be-button icon"},[n("i",{class:"xi-airplane"})],-1)),(u(),l(b,null,a(m,(o,c)=>n("button",{key:o,class:d(["be-button icon",o])},[n("i",{class:d(`xi-${y[c]}`)},null,2)],2)),64)),s(i,{icon:"xi-airplane"})]),s(e,{code:M,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[46]||(t[46]=n("h4",{class:"title"},"Round",-1)),t[47]||(t[47]=n("div",{class:"desc"},null,-1)),n("div",at,[t[45]||(t[45]=n("button",{class:"be-button round"},"round",-1)),(u(),l(b,null,a(m,o=>n("button",{key:o,class:d(["be-button round",o])},[o.indexOf("icon")>-1?(u(),l("i",rt)):g("",!0),t[44]||(t[44]=r(" round "))],2)),64)),s(i,{round:!0,"content-text":"Comp(round)"})]),s(e,{code:j,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[48]||(t[48]=n("h4",{class:"title"},"Size",-1)),t[49]||(t[49]=n("div",{class:"desc"},null,-1)),n("div",ct,[(u(),l(b,null,a(w,o=>n("button",{key:o,class:d(["be-button",o])},p(o),3)),64))]),s(e,{code:q,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[53]||(t[53]=n("h4",{class:"title"},"Icon with text",-1)),t[54]||(t[54]=n("div",{class:"desc"},null,-1)),n("div",pt,[t[50]||(t[50]=n("button",{class:"be-button"},[n("i",{class:"icon left xi-angle-left"}),r(" Icon Left ")],-1)),t[51]||(t[51]=n("button",{class:"be-button"},[r(" Icon Right "),n("i",{class:"icon right xi-angle-right"})],-1)),t[52]||(t[52]=n("button",{class:"be-button"},[n("i",{class:"icon left xi-angle-left"}),r(" Icon Both "),n("i",{class:"icon right xi-angle-right"})],-1)),s(i,{"with-icon":"xi-airplane","icon-pos":"left","content-text":"Comp(icon)"})]),s(e,{code:H,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[57]||(t[57]=n("h4",{class:"title"},"Badge",-1)),t[58]||(t[58]=n("div",{class:"desc"},null,-1)),n("div",mt,[t[55]||(t[55]=n("button",{class:"be-button badge"},[r(" Bedge Best "),n("span",{class:"in-badge primary"},"Best")],-1)),t[56]||(t[56]=n("button",{class:"be-button badge"},[r(" Bedge New "),n("span",{class:"in-badge be-red"},"N")],-1)),s(i,{badge:"COMP","badge-option":"secondary","content-text":"Comp(badge)"})]),s(e,{code:G,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[60]||(t[60]=n("h4",{class:"title"},"Event: Click",-1)),t[61]||(t[61]=n("div",{class:"desc"},null,-1)),n("div",Bt,[s(i,{onOnClick:t[0]||(t[0]=o=>console.log("Click"))},{default:v(()=>t[59]||(t[59]=[r(" Click it! ")])),_:1})]),s(e,{code:J,lang:"vue-html"},null,8,["code"])])]),extention:v(()=>[n("div",vt,[t[68]||(t[68]=n("h1",{class:"title"},"Buttons",-1)),n("section",null,[t[62]||(t[62]=n("h4",{class:"title"},"Buttons",-1)),t[63]||(t[63]=n("div",{class:"desc"},null,-1)),n("div",gt,[n("div",xt,[(u(),l(b,null,a(["A","B","C","D"],(o,c)=>n("div",{class:d(["be-button",{selected:B.value===c}]),key:o,onClick:f=>B.value=c},p(o)+" Button ",11,ft)),64))])]),s(e,{code:K,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[64]||(t[64]=n("h4",{class:"title"},"Buttons-Round",-1)),t[65]||(t[65]=n("div",{class:"desc"},null,-1)),n("div",Ct,[n("div",yt,[(u(),l(b,null,a(["A","B","C","D"],(o,c)=>n("div",{class:d(["be-button",{selected:B.value===c}]),key:o,onClick:f=>B.value=c},p(o)+" Button ",11,wt)),64))])]),s(e,{code:Q,lang:"vue-html"},null,8,["code"])]),n("section",null,[t[66]||(t[66]=n("h4",{class:"title"},"Buttons-Border",-1)),t[67]||(t[67]=n("div",{class:"desc"},null,-1)),n("div",kt,[n("div",Ot,[(u(),l(b,null,a(["A","B","C","D"],(o,c)=>n("div",{class:d(["be-button",{selected:B.value===c}]),key:o,onClick:f=>B.value=c},p(o)+" Button ",11,$t)),64))])]),s(e,{code:U,lang:"vue-html"},null,8,["code"])])])]),_:1})])}}},Vt=O(It,[["__scopeId","data-v-6cfa224b"]]);export{Vt as default};
