import{g as e,B as a,q as s,Q as t,a9 as l,o as i,h as n,l as d,y as r,O as o,n as c,C as u,x as p,s as m,w as f,u as v,F as y,P as _,aa as g,p as h,k,m as b,c as x,r as K,ab as F,_ as C,v as A,i as w,D as I,ac as P,$ as q,j as B,a0 as D,a4 as z,a6 as L}from"./vendor-7f21fd24.js";import{a as O,U as T,_ as j,b as R}from"./index-f15b5e13.js";const U=e=>(h("data-v-c423b862"),e=e(),k(),e),$={class:"add-friend"},H=U((()=>d("h2",null,"添加好友",-1))),E=U((()=>d("p",null,"你可以用id来添加好友。",-1))),M={class:"search"},N={class:"search-input"},Q={class:"content"},V={key:0,class:"error-text"},G={key:1,class:"error-text"},J={class:"search-btn"},S={class:"add-friends-main"},W=j(e({__name:"AddFriend",setup(e){const h=a(null),k=a(!1),b=a(""),x=a(!1),K=a(!1),F=s({mapKey:{id:"",username:"",email:"",discriminator:"",password:"",createdAt:"",updatedAt:"",role:"",img:""}});t((()=>{h.value&&h.value.focus()})),l((()=>b.value),((e,a)=>{k.value=!e,K.value=/^\d+$/.test(e)}),{immediate:!0});const C=O((async()=>{if(/^\d+$/.test(b.value)){const{data:e,code:a}=await T.getUserInfo(b.value);if(200!==a)throw new Error("请求数据失败");F.mapKey.id=e.mapKey.id,F.mapKey.username=e.mapKey.username,F.mapKey.email=e.mapKey.email,F.mapKey.discriminator=e.mapKey.discriminator,F.mapKey.password=e.mapKey.password,F.mapKey.createdAt=e.mapKey.createdAt,F.mapKey.updatedAt=e.mapKey.updatedAt,F.mapKey.role=e.mapKey.role,F.mapKey.img=e.mapKey.img}else x.value=!0}));return(e,a)=>{const s=_,t=g;return i(),n(y,null,[d("div",$,[H,E,d("div",M,[d("div",N,[r(d("input",{type:"text",placeholder:"输入id",ref_key:"inputRef",ref:h,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e),class:c({"is-error":!K.value&&b.value}),onKeyup:a[1]||(a[1]=u(((...e)=>p(C)&&p(C)(...e)),["enter"]))},null,34),[[o,b.value]]),d("div",{class:c(["popover",{show:!K.value&&b.value}])},[d("div",Q,[K.value?(i(),n("p",G,"唔，没起作用。请再次检查字母大小写，拼写，空格与数字是否正确。")):(i(),n("p",V,"请输入正确的好友id标签！如：123412"))])],2),d("div",J,[m(s,{type:"primary",disabled:k.value||!K.value,style:{"background-color":"#5865f2"},onClick:p(C)},{default:f((()=>[v(" 搜索 ")])),_:1},8,["disabled","onClick"])])])])]),d("div",S,[m(t,{description:"暂无好友","image-size":200,class:"empty-box"})])],64)}}}),[["__scopeId","data-v-c423b862"]]),X=j(e({__name:"All",setup(a){const s=R(),t=b((()=>s.friends.length));return e({name:"All"}),(e,a)=>{const l=K("FriendsDisplay"),n=g;return p(t)?(i(),x(l,{key:0,status:"all",list:p(s).friends,"icon-right":"fa-solid fa-bars","icon-left":"fa-solid fa-comments","title-text":"好友总数"},null,8,["list"])):(i(),x(n,{key:1,description:"暂无好友","image-size":200,class:"empty-box"}))}}}),[["__scopeId","data-v-df9ae9b7"]]),Y=j(e({__name:"Online",setup(a){const s=R(),t=b((()=>s.handleOnlineFriendsList.length));return e({name:"Online"}),(e,a)=>{const l=K("FriendsDisplay"),n=g;return p(t)?(i(),x(l,{key:0,status:"all",list:p(s).handleOnlineFriendsList,"icon-right":"fa-solid fa-bars","icon-left":"fa-solid fa-comments","title-text":"在线"},null,8,["list"])):(i(),x(n,{key:1,description:"暂无好友","image-size":200,class:"empty-box"}))}}}),[["__scopeId","data-v-1651881e"]]),Z=j(e({__name:"Blocked",setup(e){const a=R(),s=b((()=>a.blockedFriends.length));return(e,t)=>{const l=K("FriendsDisplay"),n=g;return p(s)?(i(),x(l,{key:0,status:"blocked",list:p(a).blockedFriends,"icon-right":"fa-solid fa-user-xmark","title-text":"已屏蔽数"},null,8,["list"])):(i(),x(n,{key:1,description:"暂无好友","image-size":200,class:"empty-box"}))}}}),[["__scopeId","data-v-57ea4e3e"]]),ee=j(e({__name:"ToBeDetermined",setup(a){const s=R(),t=b((()=>s.pendingFriends.length));return e({name:"Blocked"}),(e,a)=>{const l=K("FriendsDisplay"),n=g;return p(t)?(i(),x(l,{key:0,status:"ToBeDetermined",list:p(s).handlePendingFriendsList,"icon-left":"fa-solid fa-check","icon-right":"fa-solid fa-xmark","title-text":"待处理数"},null,8,["list"])):(i(),x(n,{key:1,description:"暂无好友","image-size":200,class:"empty-box"}))}}}),[["__scopeId","data-v-3ea53328"]]),ae=e=>(h("data-v-764122fb"),e=e(),k(),e),se={class:"header-left-left"},te=ae((()=>d("span",null,[d("i",{class:"fa-solid fa-user"}),v(" 好友 ")],-1))),le=ae((()=>d("div",{class:"divider-q3P9HC"},null,-1))),ie={key:0,class:"msgNum"},ne={class:"header-right-right"},de=ae((()=>d("span",null,[d("i",{class:"fa-solid fa-message"})],-1))),re=ae((()=>d("div",{class:"divider-q3P9HC"},null,-1))),oe=ae((()=>d("span",null,[d("i",{class:"fa-solid fa-inbox"})],-1))),ce=ae((()=>d("span",null,[d("i",{class:"fa-solid fa-circle-question"})],-1))),ue=j(e({__name:"index",setup(e){const s=a(1),r=R(),o=F([Y,X,ee,Z,W]);return t((()=>{r.getFriends(),r.getPendingFriends(),r.getBlockedFriends()})),l(s,(e=>{r.getFriends()}),{immediate:!0}),(e,a)=>{const t=q,l=B,u=D,_=z,g=L,h=C;return i(),x(h,null,{default:f((()=>[m(_,{class:"main-box-right-header2"},{default:f((()=>[m(u,null,{default:f((()=>[m(t,{span:19,class:"header-left"},{default:f((()=>[d("div",se,[te,le,d("span",{class:c({"is-active":1===s.value}),onClick:a[0]||(a[0]=e=>s.value=1)}," 在线 ",2),d("span",{class:c({"is-active":2===s.value}),onClick:a[1]||(a[1]=e=>s.value=2)}," 全部 ",2),d("span",{class:c({"is-active":3===s.value}),onClick:a[2]||(a[2]=e=>s.value=3)},[v(" 待定 "),p(r).handlePendingFriendsRequestList.length?(i(),n("i",ie,A(p(r).handlePendingFriendsRequestList.length),1)):w("",!0)],2),d("span",{class:c({"is-active":4===s.value}),onClick:a[3]||(a[3]=e=>s.value=4)}," 已屏蔽 ",2),d("span",{class:c({"is-active-add":5===s.value}),onClick:a[4]||(a[4]=e=>s.value=5)}," 添加好友 ",2)])])),_:1}),m(t,{span:5,class:"header-right"},{default:f((()=>[d("div",ne,[m(l,{"hide-after":50,class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"bottom"},{default:f((()=>[de])),_:1}),re,m(l,{"hide-after":50,class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"bottom"},{default:f((()=>[oe])),_:1}),m(l,{"hide-after":50,class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"bottom"},{default:f((()=>[ce])),_:1})])])),_:1})])),_:1})])),_:1}),m(u,{class:"main-box-right-main2"},{default:f((()=>[m(t,{span:17},{default:f((()=>[m(h,null,{default:f((()=>[m(g,{class:"main-box-right-main2-main1"},{default:f((()=>[(i(!0),n(y,null,I(p(o),((e,a)=>(i(),n(y,null,[s.value===a+1?(i(),x(u,{key:a},{default:f((()=>[(i(),x(P(e)))])),_:2},1024)):w("",!0)],64)))),256))])),_:1})])),_:1})])),_:1}),m(t,{span:7},{default:f((()=>[m(h,null,{default:f((()=>[m(g,{class:"main-box-right-main2-main2"},{default:f((()=>[v("Main")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-764122fb"]]);export{ue as default};
