import{_ as e}from"./CodeBlock-Cbxo2neG.js";import{_ as v}from"./PageContainer-Du3trmM7.js";import{_ as m,c as d,a as s,b as a,w as r,F as t,f as o,n as u,j as b,o as i}from"./index-CVN9JbJB.js";const p=`<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
   <!-- span-1은 생략 가능 -->
   <div class="column"> column 1 </div>
   <div class="column"> column 2 </div>
   <div class="column"> column 3 </div>
    ... 
   <div class="column"> column 12 </div>
</div>`,f=`<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
   <!-- span-{md|sm|xs}-{number} -->
   <!-- {md|sm|xs} 각 영역에서만 적용 됩니다. -->
   <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div>
    ... 
</div>`,_=`<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- number / 12 분할 합니다. -->
<div class="be-grid divide-{number}">
   <div class="column"> column </div>
    ... 
</div>`,g=`<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- 각 number 만큼씩 영역을 분할합니다. -->
<!-- 각 넘버의 합은 12입니다. a + b + c = 12 -->
<div class="be-grid">
   <div class="column span-{a}"> column a</div>
   <div class="column span-{b}"> column b</div>
   <div class="column span-{c}"> column c</div>
</div>`,$=`<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid">
   <div class="column span-8">
       <div class="ga-grid">
           <div class="column span-{a}"> column a</div>
           <div class="column span-{b}"> column b</div>
       </div>
   </div>
   ...
</div>`,y=`<!-- HTML -->
<!-- Grid Column: 12 -->
<div class="be-grid justify-left" >...</div>
<div class="be-grid justify-center" >...</div>
<div class="be-grid justify-right" >...</div>
<div class="be-grid justify-between" >...</div>
<div class="be-grid justify-around" >...</div>`,h=`<!-- HTML -->
<!-- Grid Column: 12 -->
<!-- offset number 만큼 영역을 offset 합니다. -->
<!-- 각 span과 offset의 합은 12입니다. a + A + b + B = 12 -->
<div class="be-grid">
   <div class="column span-{a} offset-{A}"> column a</div>
   <div class="column span-{b} offset-{B}"> column b</div>
</div>`,k={class:"be container page-wrapper"},w={class:"contents-wrapper"},C={class:"be-grid"},j=["data-col"],L={class:"contents-wrapper"},G=["data-col"],x={class:"contents-wrapper"},H={class:"be-grid"},M=["data-col"],T={class:"be-grid"},B=["data-col"],V={class:"be-grid"},A=["data-col"],N={class:"contents-wrapper"},F={class:"be-grid"},R=["data-col"],z={key:0,class:"be-grid"},D=["data-col"],E={class:"contents-wrapper"},I={class:"be-grid divide-8"},O=["data-col"],W={class:"be-grid divide-8 justify-center"},q=["data-col"],J={class:"be-grid divide-8 justify-right"},K=["data-col"],P={class:"be-grid divide-8 justify-between"},Q=["data-col"],S={class:"be-grid divide-8 justify-around"},U=["data-col"],X={class:"contents-wrapper"},Y={class:"be-grid"},Z=["data-col"],ss={__name:"GridView",setup(ns){return(ls,n)=>(i(),d("div",k,[n[20]||(n[20]=s("div",{class:"summary"},null,-1)),a(v,null,{base:r(()=>[s("section",null,[n[0]||(n[0]=s("h4",{class:"title"},"Base",-1)),n[1]||(n[1]=s("div",{class:"desc"},[s("span",{class:"be-tag label lightblue"},"HTML")],-1)),s("div",w,[s("div",C,[(i(),d(t,null,o(12,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,j)),64))])]),a(e,{code:p,lang:"html"},null,8,["code"])])]),variants:r(()=>[s("section",null,[n[2]||(n[2]=s("h4",{class:"title"},"Divide",-1)),n[3]||(n[3]=s("div",{class:"desc"},null,-1)),s("div",L,[(i(),d(t,null,o([2,4,6,8,10],l=>s("div",{class:u(["be-grid",`divide-${l}`]),key:`grid-${l}`},[(i(!0),d(t,null,o(l,c=>(i(),d("div",{class:"column",key:`base-${c}`,"data-col":`col-${c}`},null,8,G))),128))],2)),64))]),a(e,{code:_,lang:"html"},null,8,["code"])]),s("section",null,[n[4]||(n[4]=s("h4",{class:"title"},"Widths",-1)),n[5]||(n[5]=s("div",{class:"desc"},null,-1)),s("div",x,[s("div",H,[(i(),d(t,null,o([2,6,4],l=>s("div",{class:u(["column",`span-${l}`]),key:`base-${l}`,"data-col":`col-${l}`},null,10,M)),64))]),s("div",T,[(i(),d(t,null,o([4,4,4],l=>s("div",{class:u(["column",`span-${l}`]),key:`base-${l}`,"data-col":`col-${l}`},null,10,B)),64))]),s("div",V,[(i(),d(t,null,o([2,7,3],l=>s("div",{class:u(["column",`span-${l}`]),key:`base-${l}`,"data-col":`col-${l}`},null,10,A)),64))])]),a(e,{code:g,lang:"html"},null,8,["code"])]),s("section",null,[n[6]||(n[6]=s("h4",{class:"title"},"Nested",-1)),n[7]||(n[7]=s("div",{class:"desc"},null,-1)),s("div",N,[s("div",F,[(i(),d(t,null,o([3,8,1],l=>s("div",{class:u(["column",`span-${l}`]),key:`base-${l}`,"data-col":`col-${l}`},[l===8?(i(),d("div",z,[(i(),d(t,null,o([4,4,4],c=>s("div",{class:u(["column",`span-${c}`]),key:`base-${c}`,"data-col":`nested-col-${c}`},null,10,D)),64))])):b("",!0)],10,R)),64))])]),a(e,{code:$,lang:"html"},null,8,["code"])]),s("section",null,[n[13]||(n[13]=s("h4",{class:"title"},"Align",-1)),n[14]||(n[14]=s("div",{class:"desc"},null,-1)),s("div",E,[n[8]||(n[8]=s("h5",null,"Left(default)",-1)),s("div",I,[(i(),d(t,null,o(4,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,O)),64))]),n[9]||(n[9]=s("h5",null,"Center",-1)),s("div",W,[(i(),d(t,null,o(4,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,q)),64))]),n[10]||(n[10]=s("h5",null,"Right",-1)),s("div",J,[(i(),d(t,null,o(4,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,K)),64))]),n[11]||(n[11]=s("h5",null,"Between",-1)),s("div",P,[(i(),d(t,null,o(4,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,Q)),64))]),n[12]||(n[12]=s("h5",null,"Around",-1)),s("div",S,[(i(),d(t,null,o(4,l=>s("div",{class:"column",key:`base-${l}`,"data-col":`col-${l}`},null,8,U)),64))])]),a(e,{code:y,lang:"html"},null,8,["code"])]),s("section",null,[n[15]||(n[15]=s("h4",{class:"title"},"Offset",-1)),n[16]||(n[16]=s("div",{class:"desc"},null,-1)),n[17]||(n[17]=s("div",{class:"contents-wrapper"},[s("div",{class:"be-grid"},[s("div",{class:"column span-3 offset-3","data-col":"col-3 / offset-3"}),s("div",{class:"column span-3 offset-3","data-col":"col-3 / offset-3"})]),s("div",{class:"be-grid"},[s("div",{class:"column span-7 offset-3","data-col":"col-7 / offset-3"}),s("div",{class:"column span-2","data-col":"col-1"})])],-1)),a(e,{code:h,lang:"html"},null,8,["code"])]),s("section",null,[n[18]||(n[18]=s("h4",{class:"title"},"Reponsive",-1)),n[19]||(n[19]=s("div",{class:"desc"},null,-1)),s("div",X,[s("div",Y,[(i(),d(t,null,o(12,l=>s("div",{class:"column span-md-2 span-sm-4 span-xs-12",key:`base-${l}`,"data-col":`col-${l}`},null,8,Z)),64))])]),a(e,{code:f,lang:"html"},null,8,["code"])])]),_:1})]))}},os=m(ss,[["__scopeId","data-v-e5cf9561"]]);export{os as default};
