import{_ as t}from"./CodeBlock-DS18R5tz.js";import{_ as m}from"./PageContainer-DFfZSwzV.js";import{r as c,c as b,b as s,w as p,a as n,e as g,d as v,t as a,n as w,o as f}from"./index-DvivQW6X.js";const B=`<!-- HTML -->
<div class="be-panel">
   <div class="panel-header">
       {header contents}
   </div>
   <div class="panel-contents">
       <div class="contents-wrapper">Contents ...</div>
   </div>
</div>`,y=`<!-- script setup -->
<!-- const title = title contents -->
<!-- const contents = contents -->
<BePanel title="title" contents="contents ..."></BePanel>`,C=`<!-- HTML -->
<div class="be-panel">
   <div class="panel-header">
       {header contents}
   </div>
   <div class="panel-contents">
       <div class="contents-wrapper">
       <div class="content-head">Header</div>
       <div class="content-body">Body ... </div>
       <div class="content-foot">Footer</div>
   </div>
</div>
<!-- Component -->
<BePanel title="title">
   <template #contents>
       contents header, body, footer
   </template>
</BePanel>`,T=`<!-- @border: Boolean -->
<!-- default: false -->

<BePanel title="title" contents="contents ..." border></BePanel>`,x=`<!-- @collapse: Boolean -->
<!-- @open: Boolean -->
<!-- default: false -->

<BePanel title="title" contents="contents ..."
   toggle-icon="xi-icon-toggle"
   collapse="collapse"
   open="open"
   max-height="120"
   @show="setOpen"
></BePanel>`,P=`<!-- HTML(details-summary) -->
<details class="be-panel">
   <summary class="panel-header">
       {header contents}
   </summary>
   <div class="panel-contents">
       <div class="contents-wrapper">Contents ...</div>
   </div>
</details>`,H={class:"be container page-wrapper"},L={class:"contents-wrapper"},M={class:"contents-wrapper"},N={class:"contents-wrapper"},l="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deserunt aspernatur, voluptatum maxime veritatis iusto facilis nobis maiores officia enim, ipsam corporis. Nihil, minima doloribus? Quod laboriosam molestias veniam? Blanditiis!",$={__name:"PanelView",setup(O){const o=c(!1),i=c(!0),u=d=>{i.value=d};return(d,e)=>{const r=g("BePanel");return f(),b("div",H,[s(m,null,{base:p(()=>[n("section",null,[e[1]||(e[1]=n("div",{class:"desc"},[n("div",{class:"be-tag label lightblue"},"HTML")],-1)),e[2]||(e[2]=n("div",{class:"contents-wrapper"},[n("div",{class:"be-panel"},[n("div",{class:"panel-header"},"Title"),n("div",{class:"panel-content"},[n("div",{class:"content-wrapper"},"contents")])])],-1)),s(t,{code:B,lang:"html"},null,8,["code"])]),n("section",null,[e[3]||(e[3]=n("div",{class:"desc"},[n("div",{class:"be-tag label deepblue"},"Component")],-1)),n("div",L,[s(r,{title:"Title",contents:l,border:!0,"toggle-icon":"xi-angle-down",collapse:!0,open:i.value,"max-height":120,onShow:u},null,8,["open"])]),s(t,{code:y,lang:"vue-html"},null,8,["code"])])]),variants:p(()=>[n("section",null,[e[4]||(e[4]=n("h4",null,"Border",-1)),e[5]||(e[5]=n("div",{class:"desc"},[n("div",{class:"be-tag label deepblue"},"Component")],-1)),n("div",M,[s(r,{title:"Title",contents:l,border:!0})]),s(t,{code:T,lang:"vue-html"},null,8,["code"])]),n("section",null,[e[11]||(e[11]=n("h4",null,"Contents",-1)),e[12]||(e[12]=n("div",{class:"desc"},null,-1)),n("div",{class:"contents-wrapper"},[n("div",{class:"be-panel"},[e[10]||(e[10]=n("div",{class:"panel-header"},"Title",-1)),n("div",{class:"panel-content"},[n("div",{class:"content-wrapper"},[e[8]||(e[8]=n("div",{class:"content-head"},"Header",-1)),n("div",{class:"content-body"},[e[6]||(e[6]=v(" Body ")),e[7]||(e[7]=n("br",null,null,-1)),v(" "+a(l))]),e[9]||(e[9]=n("div",{class:"content-foot"},"Footer",-1))])])])]),s(t,{code:C,lang:"vue-html"},null,8,["code"])]),n("section",null,[e[16]||(e[16]=n("h4",null,"Collapse",-1)),e[17]||(e[17]=n("div",{class:"desc"},null,-1)),n("div",N,[n("div",{class:w(["be-panel collapse border icon left",{open:o.value}])},[n("div",{class:"panel-header",onClick:e[0]||(e[0]=S=>o.value=!o.value)},e[13]||(e[13]=[n("div",{class:"title"},"Title",-1),n("span",{class:"panel-toggle-btn"},[n("i",{class:"icon xi-angle-down"})],-1)])),n("div",{class:"panel-content"},[n("div",{class:"content-wrapper"},[e[14]||(e[14]=n("div",{class:"content-head"},"Header",-1)),n("div",{class:"content-body"},a(l)),e[15]||(e[15]=n("div",{class:"content-foot"},"Footer",-1))])])],2)]),s(t,{code:x,lang:"vue-html"},null,8,["code"])]),n("section",null,[e[19]||(e[19]=n("h4",null,"Detaile - Summary",-1)),e[20]||(e[20]=n("div",{class:"desc"},[n("div",{class:"be-tag label lightblue"},"HTML")],-1)),n("div",{class:"contents-wrapper"},[n("details",{class:"be-panel"},[e[18]||(e[18]=n("summary",{class:"panel-header"},[n("div",{class:"title"},"Title"),n("span",{class:"panel-toggle-btn"},[n("i",{class:"icon xi-angle-down"})])],-1)),n("div",{class:"panel-content"},[n("div",{class:"content-wrapper"},[n("div",{class:"content-body"},a(l))])])])]),s(t,{code:P,lang:"html"},null,8,["code"])])]),_:1})])}}};export{$ as default};
