import{E as V}from"./base-fLZH5HYv.js";import{E as T}from"./el-button-ERDUNANg.js";/* empty css                 */import{E as U}from"./el-avatar-w7T_eUOA.js";/* empty css                */import{t as w}from"./ai-CC3AAqXz.js";import{u as H}from"./userStore-ZLRZICUc.js";import{u as z}from"./active-GDg61sWv.js";import{_ as B,h as y,A as F,j as d,s as t,u,k as o,w as p,I as b,F as P,O as j,o as r,a as E,t as I,l as L,x as N,y as W,v as g}from"./index-8Q_9VYoB.js";import{E as $}from"./index-EGs59zJd.js";import"./request-_oO3txSX.js";import"./axios-_sX4vCAy.js";const _=c=>(N("data-v-687b81e6"),c=c(),W(),c),q={class:"container"},O={class:"toptop"},G={class:"box1"},J=_(()=>t("div",null,"录 入",-1)),K={class:"box2"},M=_(()=>t("div",null,"阅 卷",-1)),Q={class:"box3"},R=_(()=>t("div",null,"分 析",-1)),X={class:"bottombottom"},Y={class:"content"},Z={key:0,class:"dialogbox"},tt={class:"left"},et=_(()=>t("div",{class:"right"},[t("div",{class:"name"},"AI"),t("div",{class:"res"},"需要做一些什么？")],-1)),st={class:"left"},ot={class:"right"},at={class:"name"},nt={class:"res"},rt={class:"input"},it={__name:"HomePage",setup(c){const S=H(),m=z(),i=y(""),l=y([]),x=async()=>{const e=document.querySelector(".bottombottom .content");l.value.push({isUser:!0,info:i.value}),e.scrollTop=e.scrollHeight;const s="57C8F5F7-36A9-769C-26D3-6ED7C76D3602",v=0,a=new FormData;a.append("sysId",s),a.append("content",i.value),a.append("fresh",v),i.value="";const f=await w(a);l.value.push({isUser:!1,info:f.data}),e.scrollTop=e.scrollHeight};return F(l,()=>{setTimeout(()=>{const e=document.querySelector(".bottombottom .content");console.log(e.scrollHeight),e.scrollTop=e.scrollHeight},500)},{deep:!0}),(e,s)=>{var k;const v=g("EditPen"),a=V,f=g("Tickets"),A=g("DataLine"),h=U,C=$,D=T;return r(),d("div",q,[t("div",O,[t("div",G,[t("a",{onClick:s[0]||(s[0]=()=>{u(m).updateActiveWeb("/test"),e.$router.push("/test")}),href:"javascript:;"},[o(a,null,{default:p(()=>[o(v)]),_:1}),J])]),t("div",K,[t("a",{onClick:s[1]||(s[1]=()=>{u(m).updateActiveWeb("/read"),e.$router.push("/read")}),href:"javascript:;"},[o(a,null,{default:p(()=>[o(f)]),_:1}),M])]),t("div",Q,[t("a",{onClick:s[2]||(s[2]=()=>{u(m).updateActiveWeb("/fenxi"),e.$router.push("/fenxi")}),href:"javascript:;"},[o(a,null,{default:p(()=>[o(A)]),_:1}),R])])]),t("div",X,[t("div",Y,[(k=l.value[0])!=null&&k.info?b("",!0):(r(),d("div",Z,[t("div",tt,[o(h,{size:25})]),et])),(r(!0),d(P,null,j(l.value,n=>(r(),d("div",{class:"dialogbox",key:n.info},[t("div",st,[n.isUser==!0?(r(),E(h,{key:0,size:25,src:u(S).userInfo.avatar},null,8,["src"])):b("",!0),n.isUser==!1?(r(),E(h,{key:1,size:25})):b("",!0)]),t("div",ot,[t("div",at,I(n.isUser==!0?"你":"人工智能"),1),t("div",nt,I(n.info),1)])]))),128))]),t("div",rt,[o(C,{modelValue:i.value,"onUpdate:modelValue":s[3]||(s[3]=n=>i.value=n),size:"large"},null,8,["modelValue"]),o(D,{onClick:x,type:"primary",size:"large"},{default:p(()=>[L("发送")]),_:1})])])])}}},kt=B(it,[["__scopeId","data-v-687b81e6"]]);export{kt as default};
