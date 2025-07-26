import{_ as i}from"./CodeBlock-DpeeNE6v.js";import{_ as r}from"./PageContainer-6gRpGfhJ.js";import{_ as u,c,a as e,b as n,w as o,e as m,d as a,t as l,o as g}from"./index-DJRzCbrU.js";const p=`<!-- <div></div> 태그 사용 -->
<div class="be-segment">
   <div class="contents">Contents ... </div>
</div>`,v=`<!-- script setup -->
<!-- const contents = ref(null) -->
<BeSegment>{{ contents }}</BeSegment>`,f=`<!--@collapse: Boolean -->
<!--default: false -->

<BeSegement collapse> contents ... ...</BeSegement>`,b=`<!--@surface: Boolean -->
<!--default: false -->

<BeSegement surface> contents ... ...</BeSegement>`,B=`<!--@border: Boolean -->
<!--default: false -->

<BeSegement border> contents ... ...</BeSegement>`,S=`<!--@float: Boolean -->
<!--default: false -->

<BeSegement float> contents ... ...</BeSegement>`,_=`<!--@attached: Array -->
<!--default: [] -->

<BeSegement attached="['header', 'footer']">
   <template #header>
     <div class="header">Header</div>
   </template>
   contents ... ... 
   <template #footer>
     <div class="footer">Footer</div>
   </template>
</BeSegment>`,w=`<!--@align: {left | center | right} -->
<!--default: left -->

<BeSegement align="{align}"> contents ... ...</BeSegement>`,C=`<!--segment group -->
<!--border 적용 -->

<div class="be-segments border" >
   <BeSegement> contents ... ...</BeSegement>
   <BeSegement surface> contents ... ...</BeSegement>
   <BeSegement> contents ... ...</BeSegement>
</div>`,x={class:"page-wrapper be container"},q={class:"contents-wrapper"},L={class:"contents-wrapper"},V={class:"contents-wrapper"},h={class:"contents-wrapper"},y={class:"contents-wrapper"},A={class:"contents-wrapper"},F={class:"contents-wrapper"},H={class:"contents-wrapper"},N={class:"be-segments border round-xl"},s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!",R={__name:"SegmentView",setup(T){return(k,t)=>{const d=m("BeSegment");return g(),c("div",x,[t[21]||(t[21]=e("div",{class:"summary"},null,-1)),n(r,null,{base:o(()=>[e("section",null,[t[0]||(t[0]=e("div",{class:"desc"},[e("div",{class:"be-tag label lightblue"},"HTML")],-1)),e("div",{class:"contents-wrapper"},[e("div",{class:"be-segment"},[e("div",{class:"contents"},l(s))])]),n(i,{code:p,lang:"html"},null,8,["code"])]),e("section",null,[t[1]||(t[1]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",q,[n(d,null,{default:o(()=>[a(l(s))]),_:1})]),n(i,{code:v,lang:"vue-html"},null,8,["code"])])]),variants:o(()=>[e("section",null,[t[2]||(t[2]=e("h4",null,"Collapse",-1)),t[3]||(t[3]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",L,[n(d,{collapse:"",surface:"",border:""},{default:o(()=>[a(l(s)+l(s)+l(s)+l(s)+l(s)+l(s))]),_:1})]),n(i,{code:f,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[4]||(t[4]=e("h4",null,"Surface",-1)),t[5]||(t[5]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",V,[n(d,{surface:""},{default:o(()=>[a(l(s))]),_:1}),n(d,{surface:""},{default:o(()=>[a(l(s))]),_:1})]),n(i,{code:b,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[6]||(t[6]=e("h4",null,"Border",-1)),t[7]||(t[7]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",h,[n(d,{border:""},{default:o(()=>[a(l(s))]),_:1})]),n(i,{code:B,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[8]||(t[8]=e("h4",null,"Float",-1)),t[9]||(t[9]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",y,[n(d,{float:""},{default:o(()=>[a(l(s))]),_:1})]),n(i,{code:S,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[12]||(t[12]=e("h4",null,"Attached",-1)),t[13]||(t[13]=e("div",{class:"desc"},[e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",A,[n(d,{border:"",attached:["header","footer"]},{header:o(()=>t[10]||(t[10]=[e("div",{class:"title"},"Header",-1)])),footer:o(()=>t[11]||(t[11]=[e("div",{class:"f_content"},[e("p",null,"This is Footer")],-1)])),default:o(()=>[a(" "+l(s)+" ")]),_:1})]),n(i,{code:_,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[17]||(t[17]=e("h4",null,"Align",-1)),t[18]||(t[18]=e("div",{class:"desc"},[a(" Left | Center | Right "),e("div",{class:"be-tag label deepblue"},"Component")],-1)),e("div",F,[t[14]||(t[14]=e("h6",null,"Left",-1)),n(d,{align:"left"},{default:o(()=>[a(l(s))]),_:1}),t[15]||(t[15]=e("h6",null,"Center",-1)),n(d,{align:"center"},{default:o(()=>[a(l(s))]),_:1}),t[16]||(t[16]=e("h6",null,"Right",-1)),n(d,{align:"right"},{default:o(()=>[a(l(s))]),_:1})]),n(i,{code:w,lang:"vue-html"},null,8,["code"])]),e("section",null,[t[19]||(t[19]=e("h4",null,"Segments",-1)),t[20]||(t[20]=e("div",{class:"desc"},null,-1)),e("div",H,[e("div",N,[e("div",{class:"be-segment border"},[e("div",{class:"contents"},l(s))]),n(d,{surface:"",border:""},{default:o(()=>[a(l(s))]),_:1}),n(d,{border:""},{default:o(()=>[a(l(s))]),_:1})])]),n(i,{code:C,lang:"vue-html"},null,8,["code"])])]),_:1})])}}},I=u(R,[["__scopeId","data-v-cb77c29e"]]);export{I as default};
