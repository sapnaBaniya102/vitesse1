import{o as n,b as s,d as t,g as h,u as f,h as v,y as x,p as k,i as p,t as o,j as e,F as b,z as C,A as g,q as y,B as A}from"./vendor.00a65a29.js";import{u as V}from"./app.0baafdf5.js";const L={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},N=t("path",{d:"M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",fill:"currentColor"},null,-1),$=t("path",{d:"M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",fill:"currentColor"},null,-1),w=t("path",{d:"M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",fill:"currentColor"},null,-1),z=[N,$,w];function B(i,l){return n(),s("svg",L,z)}var M={name:"carbon-pedestrian",render:B};const j={class:"text-4xl"},E={class:"text-sm opacity-50"},F={key:0,class:"text-sm mt-4"},R={class:"opacity-75"},H=h({props:{name:null},setup(i){const l=i,_=f(),c=V(),{t:a}=v();return x(()=>{c.setNewName(l.name)}),(S,u)=>{const d=M,m=k("router-link");return n(),s("div",null,[t("p",j,[p(d,{class:"inline-block"})]),t("p",null,o(e(a)("intro.hi",{name:l.name})),1),t("p",E,[t("em",null,o(e(a)("intro.dynamic-route")),1)]),e(c).otherNames.length?(n(),s("p",F,[t("span",R,o(e(a)("intro.aka"))+":",1),t("ul",null,[(n(!0),s(b,null,C(e(c).otherNames,r=>(n(),s("li",{key:r},[p(m,{to:`/hi/${r}`,replace:""},{default:y(()=>[A(o(r),1)]),_:2},1032,["to"])]))),128))])])):g("",!0),t("div",null,[t("button",{class:"btn m-3 text-sm mt-6",onClick:u[0]||(u[0]=r=>e(_).back())},o(e(a)("button.back")),1)])])}}});export{H as default};