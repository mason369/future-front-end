import{g as a,B as e,q as s,T as t,o as l,c as n,w as i,s as c,x as d,i as r,h as o,D as u,n as m,l as f,v as p,F as h,U as _,j as v,V as g,W as x,A as b,X as k,Y as C,Z as S,_ as j,$ as w,a0 as y,p as A,k as I,a1 as L,r as P,a2 as E,a3 as B}from"./vendor-02b3194e.js";import{A as $}from"./index-67a62d1a.js";import{u as z,a as K,_ as M}from"./index-74115732.js";const q=a=>(A("data-v-336f0d90"),a=a(),I(),a),D=q((()=>f("img",{class:"channel-img",src:"https://cdn.discordapp.com/icons/464395429392678912/401026c51da58472a16c650ee263701d.webp?size=160",alt:""},null,-1))),F=q((()=>f("div",{class:"listItem-3SmSlK"},[f("div",{class:"guildSeparator-a4uisj"})],-1))),R=q((()=>f("div",{class:"listItem-3SmSlK"},[f("div",{class:"guildSeparator-a4uisj"})],-1))),T=M(a({__name:"index",setup(a){const A=z(),I=()=>!0,L=e(!0),P=_(),E=s([]);t((()=>{B()}));const B=K((async()=>{const a=await $.getAsideSidebarList();E.push(...a.data)})),M=()=>"/main"===P.currentRoute.value.path.slice(0,5);return P.afterEach((a=>{M()?(()=>{const a=document.getElementById("rePathClass");a&&a.classList.add("is-active")})():(()=>{const a=document.getElementById("rePathClass");a&&a.classList.remove("is-active")})()})),(a,e)=>{const s=v,t=g,_=x,B=b,$=k,z=C,K=S;return l(),n(K,{width:"90px",class:"main-aside"},{default:i((()=>[c(z,{"default-active":"/main/@me",collapse:L.value,router:"",class:m(["el-menu-vertical-demo",{"is-active":M}])},{default:i((()=>[c(_,{index:"/main/@me",id:"rePathClass"},{default:i((()=>[c(s,{"raw-content":"","hide-after":50,class:"box-item",effect:"dark",content:"私信",placement:"right",enterable:!1},{default:i((()=>[D])),_:1}),d(A).getPrivateLetterCount.length>0?(l(),n(t,{key:0,max:99,value:d(A).getPrivateLetterCount.length,class:"item-message"},null,8,["value"])):r("",!0)])),_:1}),F,(l(!0),o(h,null,u(E,(e=>(l(),n(_,{key:e.id,index:"/channels/"+e.id,class:m({"is-active":a.$route.path==="/channels/"+e.id}),onClick:a=>{return s=e,void P.push(`/channels/${s.id}`);var s}},{title:i((()=>[f("span",null,p(e.name),1)])),default:i((()=>[c(B,{class:"channel-img",size:50,src:e.img,onError:I},null,8,["src"]),e.count>0?(l(),n(t,{key:0,max:99,value:e.count,class:"item-message"},null,8,["value"])):r("",!0)])),_:2},1032,["index","class","onClick"])))),128)),c(s,{"hide-after":50,class:"box-item",effect:"dark",content:"创建组",placement:"right",enterable:!1},{default:i((()=>[c(_,{index:"1",class:"add-icon"},{default:i((()=>[c($,null,{default:i((()=>[c(d(j),{class:"icon"})])),_:1})])),_:1})])),_:1}),c(s,{"hide-after":50,class:"box-item",effect:"dark",content:"探索公共组",placement:"right",enterable:!1},{default:i((()=>[c(_,{index:"2",class:"add-icon"},{default:i((()=>[c($,null,{default:i((()=>[c(d(w),{class:"icon"})])),_:1})])),_:1})])),_:1}),R,c(s,{"hide-after":50,class:"box-item",effect:"dark",content:"下载App",placement:"right",enterable:!1},{default:i((()=>[c(_,{index:"3",class:"add-icon"},{default:i((()=>[c($,null,{default:i((()=>[c(d(y),{class:"icon"})])),_:1})])),_:1})])),_:1})])),_:1},8,["collapse","class"])])),_:1})}}}),[["__scopeId","data-v-336f0d90"]]),U=M(a({__name:"index",setup:a=>(a,e)=>{const s=P("router-view"),t=E,d=B,r=L;return l(),n(r,{class:"main-box"},{default:i((()=>[c(T,{class:"channel-sidebar"}),c(d,{class:"main-box-right"},{default:i((()=>[c(t,{span:4,class:"leftAside"},{default:i((()=>[c(s,{name:"leftAside"})])),_:1}),c(t,{span:20,class:"rightMain"},{default:i((()=>[c(s,{name:"rightMain"})])),_:1})])),_:1})])),_:1})}}),[["__scopeId","data-v-0deb883e"]]);export{U as default};
