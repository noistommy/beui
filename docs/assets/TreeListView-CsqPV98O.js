import{_ as n}from"./CodeBlock-Bi4m5WSL.js";import{_ as i}from"./PageContainer-RAF9BO4c.js";import{r as o,c as d,b as t,w as s,a as l,e as m,o as c}from"./index-YGnsNkeF.js";const u=`//  tree list data set 
const treeList = [
   { label: 'Tree Item 1', children: [
           { label: 'Tree Item 1-1', children: [ ... ] },
           { label: 'Tree Item 1-2', children: [ ... ] },
           { label: 'Tree Item 1-3', children: [ ... ] },
       ]
   },
   { label: 'Tree Item 2', children: [
           { label: 'Tree Item 2-1', children: [ ... ] },
           { label: 'Tree Item 2-2', children: [ ... ] },
           { label: 'Tree Item 2-3', children: [ ... ] },
       ]
   },
]
// TreeList item은 label(제목)과 children (하위 목록)으로 구성합니다. 
// 하위목록 레벨에 제한은 없습니다. 
// 하위목록은 상위 목록과 동일한 구성입니다.`,b=`<!-- script setup -->
<!-- const treeList = [] -->
<BeTree :tree-data="treeList"></BeTree>`,v=`<!-- @useMark: Boolean -->
<!-- default: true -->
<BeTree :tree-data="treeList" :use-mark="useMark"></BeTree>`,p={class:"be container page-wrapper"},T={class:"contents-wrapper"},f={class:"contents-wrapper"},g={__name:"TreeListView",setup(k){const r=o([{label:"tree item level 1",children:[{label:"tree item level 1-1",children:[{label:"tree item level 1-1-1"}]},{label:"tree item level 1-2"}]},{label:"tree item level 2",children:[{label:"tree item level 2-1",children:[{label:"tree item level 2-1-1"}]},{label:"tree item level 2-2",children:[{label:"tree item level 2-2-1"},{label:"tree item level 2-2-2",children:[{label:"tree item level 2-2-2-1"},{label:"tree item level 2-2-2-2"},{label:"tree item level 2-2-2-3"}]}]}]}]);return(_,e)=>{const a=m("BeTree");return c(),d("div",p,[t(i,null,{base:s(()=>[l("section",null,[e[0]||(e[0]=l("div",{class:"desc"},[l("div",{class:"be-tag label deepblue"},"Component")],-1)),l("div",T,[t(a,{"tree-data":r.value},null,8,["tree-data"])]),t(n,{code:b,lang:"vue-html"},null,8,["code"])]),l("section",null,[e[1]||(e[1]=l("h4",null,"Data Set",-1)),e[2]||(e[2]=l("div",{class:"desc"},null,-1)),t(n,{code:u,lang:"javascript",border:!1,"use-toggle":!1},null,8,["code"])])]),variants:s(()=>[l("section",null,[e[5]||(e[5]=l("h4",null,"Use Mark",-1)),e[6]||(e[6]=l("div",{class:"desc"},"기본값 useMark: true",-1)),l("div",f,[e[3]||(e[3]=l("div",{class:"title"},"mark 사용",-1)),t(a,{"tree-data":r.value},null,8,["tree-data"]),e[4]||(e[4]=l("div",{class:"title"},"mark 사용 안함",-1)),t(a,{"tree-data":r.value,"use-mark":!1},null,8,["tree-data"])]),t(n,{code:v,lang:"vue-html"},null,8,["code"])])]),_:1})])}}};export{g as default};
