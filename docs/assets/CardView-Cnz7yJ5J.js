import{_ as a}from"./CodeBlock-Cbxo2neG.js";import{_ as r}from"./PageContainer-Du3trmM7.js";import{c as u,a as e,b as l,w as n,e as c,d as o,t as d,o as m}from"./index-CVN9JbJB.js";const p="/assets/profile_img-C6anksDO.png",v=`<!-- <div></div> 태그 사용 -->
<div class="be-card">
   <div class="contents">Contents ... </div>
</div>`,b=`<!-- script setup -->
<!-- const contents = ref(null) -->
<BeCard>{{ contents }}</BeCard>`,g=`<!-- @title: String -->
<!-- default: null -->
<BeCard title="{title}" >{{ contents }}</BeCard>`,f=`<!-- @image: Boolean, Object -->
<!-- default: null -->
<!-- image: { src, alt } -->
<BeCard image="{image}" >{{ contents }}</BeCard>
<!--  slot image -->
<BeCard image="{image}" >
   <template #image>
       <img src="{src}" alt="{alt}" />
   </template>
   ... ...
</BeCard>`,C=`<!-- @extra: Boolean -->
<!-- default: false -->
<!--  slot extra -->
<BeCard extra="{extra}" >
   ... ...
   <template #extra>
       {extra_contents}
   </template>
</BeCard>`,B=`<!-- @attached: Boolean -->
<!-- default: false -->
<!--  slot header & footer -->
<BeCard extra="{extra}" >
   <template #header>
       {header_contents}
   </template>
   {{ contents }}
   <template #footer>
       {footer_contents}
   </template>
</BeCard>`,x=`<!-- @border: Boolean -->
<!-- default: true -->
<BeCard border="{border}" >{{ contents }}</BeCard>`,T=`<!-- @float: Boolean -->
<!-- default: false -->
<BeCard float="{float}" >{{ contents }}</BeCard>`,w=`<!-- only html -->
<div class="be-card">
   <BeCard >{{ contents }}</BeCard>
   <BeCard >{{ contents }}</BeCard>
   <BeCard >{{ contents }}</BeCard>
</div>`,_={class:"page-wrapper be container"},E={class:"contents-wrapper"},L={class:"contents-wrapper"},I={class:"contents-wrapper"},q={class:"contents-wrapper"},y={class:"contents-wrapper"},D={class:"contents-wrapper"},V={class:"contents-wrapper"},k={class:"contents-wrapper"},N={class:"be-cards"},i="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!",j={__name:"CardView",setup(A){return(H,t)=>{const s=c("BeCard");return m(),u("div",_,[t[21]||(t[21]=e("div",{class:"summary"},null,-1)),l(r,null,{base:n(()=>[e("section",null,[t[0]||(t[0]=e("div",{class:"desc"},[e("div",{class:"be-tag label lightblue"},"HTML")],-1)),e("div",{class:"contents-wrapper"},[e("div",{class:"be-card"},[e("div",{class:"contents"},d(i))])]),l(a,{code:v,lang:"html"},null,8,["code"])]),e("section",null,[t[1]||(t[1]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",E,[l(s,null,{default:n(()=>[o(d(i))]),_:1})]),l(a,{code:b,lang:"vue-html"},null,8,["code"])])]),variants:n(()=>[e("section",null,[t[2]||(t[2]=e("h4",null,"Title",-1)),t[3]||(t[3]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",L,[l(s,{title:"TITLE"},{default:n(()=>[o(d(i))]),_:1})]),l(a,{code:g,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[6]||(t[6]=e("h4",null,"Image",-1)),t[7]||(t[7]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",I,[l(s,{title:"TITLE",image:""},{image:n(()=>t[4]||(t[4]=[e("img",{src:p,alt:"profile"},null,-1)])),default:n(()=>[t[5]||(t[5]=e("p",null,"I`am Tommy",-1))]),_:1})]),l(a,{code:f,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[9]||(t[9]=e("h4",null,"Extra",-1)),t[10]||(t[10]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",q,[l(s,{title:"TITLE",extra:""},{extra:n(()=>t[8]||(t[8]=[o("Extra")])),default:n(()=>[o(d(i)+" ")]),_:1})]),l(a,{code:C,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[13]||(t[13]=e("h4",null,"Attached",-1)),t[14]||(t[14]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",y,[l(s,{title:"TITLE",attached:""},{header:n(()=>t[11]||(t[11]=[e("div",{class:"hd_content"},[e("div",{class:"be-tag label red"},"HEAD"),e("div",{class:"be-button icon round small"},[e("div",{class:"icon xi-close"})])],-1)])),footer:n(()=>t[12]||(t[12]=[e("div",{class:"ft_content"},[e("button",{class:"be-button"},"Detail")],-1)])),default:n(()=>[o(" "+d(i)+" ")]),_:1})]),l(a,{code:B,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[15]||(t[15]=e("h4",null,"border: false",-1)),t[16]||(t[16]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",D,[l(s,{title:"TITLE",border:!1},{default:n(()=>[o(d(i))]),_:1})]),l(a,{code:x,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[17]||(t[17]=e("h4",null,"Float",-1)),t[18]||(t[18]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",V,[l(s,{title:"TITLE",float:""},{default:n(()=>[o(d(i))]),_:1})]),l(a,{code:T,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[19]||(t[19]=e("h4",null,"Cards",-1)),t[20]||(t[20]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",k,[e("div",N,[l(s,{title:"Card1"},{default:n(()=>[o(d(i))]),_:1}),l(s,{title:"Card2"},{default:n(()=>[o(d(i))]),_:1})])]),l(a,{code:w,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{j as default};
