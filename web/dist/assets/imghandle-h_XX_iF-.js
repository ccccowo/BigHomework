import{d as e,c as t,aN as a,aO as s,ao as l,aP as o,V as n,at as r,M as i,o as u,k as d,n as c,u as p,t as f,b as v,r as y,v as m,I as h,a as g,w as b,e as k,an as w,aI as $,h as x,F,E as T,L as R,aQ as E,l as S,P as C,Q as L,O as _,aF as P,i as U,ax as O,aR as B,aq as j,A as D,a6 as N,p as q,a2 as A,a7 as H,N as I}from"./index-afE12XCz.js";import{b as M,d as W,u as K,a as z,_ as X,w as J,t as Q,e as V,m as G,f as Y,k as Z,a1 as ee,a2 as te,l as ae}from"./el-button-wvYaTM86.js";import{b as se}from"./_baseClone-SyVPMbir.js";import{i as le}from"./request-MLV9EytQ.js";function oe(e){return se(e,5)}const ne=M({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:W(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:W([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:W(Function),default:e=>`${e}%`}}),re=["aria-valuenow"],ie={viewBox:"0 0 100 100"},ue=["d","stroke","stroke-linecap","stroke-width"],de=["d","stroke","opacity","stroke-linecap","stroke-width"],ce={key:0},pe=e({name:"ElProgress"});const fe=J(X(e({...pe,props:ne,setup(e){const w=e,$={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},x=K("progress"),F=t((()=>({width:`${w.percentage}%`,animationDuration:`${w.duration}s`,backgroundColor:D(w.percentage)}))),T=t((()=>(w.strokeWidth/w.width*100).toFixed(1))),R=t((()=>["circle","dashboard"].includes(w.type)?Number.parseInt(""+(50-Number.parseFloat(T.value)/2),10):0)),E=t((()=>{const e=R.value,t="dashboard"===w.type;return`\n          M 50 50\n          m 0 ${t?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${t?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${t?"":"-"}${2*e}\n          `})),S=t((()=>2*Math.PI*R.value)),C=t((()=>"dashboard"===w.type?.75:1)),L=t((()=>`${-1*S.value*(1-C.value)/2}px`)),_=t((()=>({strokeDasharray:`${S.value*C.value}px, ${S.value}px`,strokeDashoffset:L.value}))),P=t((()=>({strokeDasharray:`${S.value*C.value*(w.percentage/100)}px, ${S.value}px`,strokeDashoffset:L.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),U=t((()=>{let e;return e=w.color?D(w.percentage):$[w.status]||$.default,e})),O=t((()=>"warning"===w.status?a:"line"===w.type?"success"===w.status?s:l:"success"===w.status?o:n)),B=t((()=>"line"===w.type?12+.4*w.strokeWidth:.111111*w.width+2)),j=t((()=>w.format(w.percentage)));const D=e=>{var t;const{color:a}=w;if(r(a))return a(e);if(i(a))return a;{const s=function(e){const t=100/e.length;return e.map(((e,a)=>i(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(a);for(const t of s)if(t.percentage>e)return t.color;return null==(t=s[s.length-1])?void 0:t.color}};return(e,t)=>(u(),d("div",{class:c([p(x).b(),p(x).m(e.type),p(x).is(e.status),{[p(x).m("without-text")]:!e.showText,[p(x).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(u(),d("div",{key:0,class:c(p(x).b("bar"))},[f("div",{class:c(p(x).be("bar","outer")),style:v({height:`${e.strokeWidth}px`})},[f("div",{class:c([p(x).be("bar","inner"),{[p(x).bem("bar","inner","indeterminate")]:e.indeterminate},{[p(x).bem("bar","inner","striped")]:e.striped},{[p(x).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:v(p(F))},[(e.showText||e.$slots.default)&&e.textInside?(u(),d("div",{key:0,class:c(p(x).be("bar","innerText"))},[y(e.$slots,"default",{percentage:e.percentage},(()=>[f("span",null,m(p(j)),1)]))],2)):h("v-if",!0)],6)],6)],2)):(u(),d("div",{key:1,class:c(p(x).b("circle")),style:v({height:`${e.width}px`,width:`${e.width}px`})},[(u(),d("svg",ie,[f("path",{class:c(p(x).be("circle","track")),d:p(E),stroke:`var(${p(x).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":e.strokeLinecap,"stroke-width":p(T),fill:"none",style:v(p(_))},null,14,ue),f("path",{class:c(p(x).be("circle","path")),d:p(E),stroke:p(U),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":p(T),style:v(p(P))},null,14,de)]))],6)),!e.showText&&!e.$slots.default||e.textInside?h("v-if",!0):(u(),d("div",{key:2,class:c(p(x).e("text")),style:v({fontSize:`${p(B)}px`})},[y(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(u(),g(p(z),{key:1},{default:b((()=>[(u(),g(k(p(O))))])),_:1})):(u(),d("span",ce,m(p(j)),1))]))],6))],10,re))}}),[["__file","progress.vue"]])),ve=Symbol("uploadContextKey");class ye extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function me(e,t,a){let s;return s=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new ye(s,a.status,t.method,e)}const he=["text","picture","picture-card"];let ge=1;const be=()=>Date.now()+ge++,ke=M({action:{type:String,default:"#"},headers:{type:W(Object)},method:{type:String,default:"post"},data:{type:W([Object,Function,Promise]),default:()=>G({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:W(Array),default:()=>G([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:he,default:"text"},httpRequest:{type:W(Function),default:e=>{"undefined"==typeof XMLHttpRequest&&Q("ElUpload","XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",(t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)}));const s=new FormData;if(e.data)for(const[o,n]of Object.entries(e.data))w(n)&&n.length?s.append(o,...n):s.append(o,n);s.append(e.filename,e.file,e.file.name),t.addEventListener("error",(()=>{e.onError(me(a,e,t))})),t.addEventListener("load",(()=>{if(t.status<200||t.status>=300)return e.onError(me(a,e,t));e.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(t))})),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const l=e.headers||{};if(l instanceof Headers)l.forEach(((e,a)=>t.setRequestHeader(a,e)));else for(const[o,n]of Object.entries(l))V(n)||t.setRequestHeader(o,String(n));return t.send(s),t}},disabled:Boolean,limit:Number}),we=M({...ke,beforeUpload:{type:W(Function),default:$},beforeRemove:{type:W(Function)},onRemove:{type:W(Function),default:$},onChange:{type:W(Function),default:$},onPreview:{type:W(Function),default:$},onSuccess:{type:W(Function),default:$},onProgress:{type:W(Function),default:$},onError:{type:W(Function),default:$},onExceed:{type:W(Function),default:$}}),$e=M({files:{type:W(Array),default:()=>G([])},disabled:{type:Boolean,default:!1},handlePreview:{type:W(Function),default:$},listType:{type:String,values:he,default:"text"}}),xe=["onKeydown"],Fe=["src"],Te=["onClick"],Re=["title"],Ee=["onClick"],Se=["onClick"],Ce=e({name:"ElUploadList"});var Le=X(e({...Ce,props:$e,emits:{remove:e=>!!e},setup(e,{emit:a}){const l=e,{t:r}=Y(),i=K("upload"),k=K("icon"),w=K("list"),$=Z(),U=x(!1),O=t((()=>[i.b("list"),i.bm("list",l.listType),i.is("disabled",l.disabled)])),B=e=>{a("remove",e)};return(e,t)=>(u(),g(P,{tag:"ul",class:c(p(O)),name:p(w).b()},{default:b((()=>[(u(!0),d(F,null,_(e.files,(a=>(u(),d("li",{key:a.uid||a.name,class:c([p(i).be("list","item"),p(i).is(a.status),{focusing:U.value}]),tabindex:"0",onKeydown:T((e=>!p($)&&B(a)),["delete"]),onFocus:t[0]||(t[0]=e=>U.value=!0),onBlur:t[1]||(t[1]=e=>U.value=!1),onClick:t[2]||(t[2]=e=>U.value=!1)},[y(e.$slots,"default",{file:a},(()=>["picture"===e.listType||"uploading"!==a.status&&"picture-card"===e.listType?(u(),d("img",{key:0,class:c(p(i).be("list","item-thumbnail")),src:a.url,alt:""},null,10,Fe)):h("v-if",!0),"uploading"===a.status||"picture-card"!==e.listType?(u(),d("div",{key:1,class:c(p(i).be("list","item-info"))},[f("a",{class:c(p(i).be("list","item-name")),onClick:R((t=>e.handlePreview(a)),["prevent"])},[S(p(z),{class:c(p(k).m("document"))},{default:b((()=>[S(p(E))])),_:1},8,["class"]),f("span",{class:c(p(i).be("list","item-file-name")),title:a.name},m(a.name),11,Re)],10,Te),"uploading"===a.status?(u(),g(p(fe),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(a.percentage),style:v("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):h("v-if",!0)],2)):h("v-if",!0),f("label",{class:c(p(i).be("list","item-status-label"))},["text"===e.listType?(u(),g(p(z),{key:0,class:c([p(k).m("upload-success"),p(k).m("circle-check")])},{default:b((()=>[S(p(s))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(u(),g(p(z),{key:1,class:c([p(k).m("upload-success"),p(k).m("check")])},{default:b((()=>[S(p(o))])),_:1},8,["class"])):h("v-if",!0)],2),p($)?h("v-if",!0):(u(),g(p(z),{key:2,class:c(p(k).m("close")),onClick:e=>B(a)},{default:b((()=>[S(p(n))])),_:2},1032,["class","onClick"])),h(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),h(" This is a bug which needs to be fixed "),h(" TODO: Fix the incorrect navigation interaction "),p($)?h("v-if",!0):(u(),d("i",{key:3,class:c(p(k).m("close-tip"))},m(p(r)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(u(),d("span",{key:4,class:c(p(i).be("list","item-actions"))},[f("span",{class:c(p(i).be("list","item-preview")),onClick:t=>e.handlePreview(a)},[S(p(z),{class:c(p(k).m("zoom-in"))},{default:b((()=>[S(p(C))])),_:1},8,["class"])],10,Ee),p($)?h("v-if",!0):(u(),d("span",{key:0,class:c(p(i).be("list","item-delete")),onClick:e=>B(a)},[S(p(z),{class:c(p(k).m("delete"))},{default:b((()=>[S(p(L))])),_:1},8,["class"])],10,Se))],2)):h("v-if",!0)]))],42,xe)))),128)),y(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","upload-list.vue"]]);const _e=M({disabled:{type:Boolean,default:!1}}),Pe={file:e=>w(e)},Ue=["onDrop","onDragover"],Oe="ElUploadDrag",Be=e({name:Oe});var je=X(e({...Be,props:_e,emits:Pe,setup(e,{emit:t}){const a=U(ve);a||Q(Oe,"usage: <el-upload><el-upload-dragger /></el-upload>");const s=K("upload"),l=x(!1),o=Z(),n=e=>{if(o.value)return;l.value=!1,e.stopPropagation();const s=Array.from(e.dataTransfer.files),n=a.accept.value;if(!n)return void t("file",s);const r=s.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?`.${a.split(".").pop()}`:"",l=t.replace(/\/.*$/,"");return n.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?l===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));t("file",r)},r=()=>{o.value||(l.value=!0)};return(e,t)=>(u(),d("div",{class:c([p(s).b("dragger"),p(s).is("dragover",l.value)]),onDrop:R(n,["prevent"]),onDragover:R(r,["prevent"]),onDragleave:t[0]||(t[0]=R((e=>l.value=!1),["prevent"]))},[y(e.$slots,"default")],42,Ue))}}),[["__file","upload-dragger.vue"]]);const De=M({...ke,beforeUpload:{type:W(Function),default:$},onRemove:{type:W(Function),default:$},onStart:{type:W(Function),default:$},onSuccess:{type:W(Function),default:$},onProgress:{type:W(Function),default:$},onError:{type:W(Function),default:$},onExceed:{type:W(Function),default:$}}),Ne=["onKeydown"],qe=["name","multiple","accept"],Ae=e({name:"ElUploadContent",inheritAttrs:!1});var He=X(e({...Ae,props:De,setup(e,{expose:t}){const a=e,s=K("upload"),l=Z(),o=O({}),n=O(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:o,onStart:n,onExceed:r}=a;if(s&&l.length+e.length>s)r(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=be(),n(e),t&&v(e)}}},v=async e=>{if(n.value.value="",!a.beforeUpload)return m(e);let t,s={};try{const l=a.data,o=a.beforeUpload(e);s=B(a.data)?oe(a.data):a.data,t=await o,B(a.data)&&j(l,s)&&(s=oe(a.data))}catch(o){t=!1}if(!1===t)return void a.onRemove(e);let l=e;t instanceof Blob&&(l=t instanceof File?t:new File([t],e.name,{type:e.type})),m(Object.assign(l,{uid:e.uid}),s)},m=async(e,t)=>{const{headers:s,data:l,method:n,withCredentials:i,name:u,action:d,onProgress:c,onSuccess:p,onError:f,httpRequest:v}=a;try{t=await(async(e,t)=>r(e)?e(t):e)(null!=t?t:l,e)}catch(g){return void a.onRemove(e)}const{uid:y}=e,m={headers:s||{},withCredentials:i,file:e,data:t,method:n,filename:u,action:d,onProgress:t=>{c(t,e)},onSuccess:t=>{p(t,e),delete o.value[y]},onError:t=>{f(t,e),delete o.value[y]}},h=v(m);o.value[y]=h,h instanceof Promise&&h.then(m.onSuccess,m.onError)},h=e=>{const t=e.target.files;t&&i(Array.from(t))},k=()=>{l.value||(n.value.value="",n.value.click())},w=()=>{k()};return t({abort:e=>{ee(o.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete o.value[e]}))},upload:v}),(e,t)=>(u(),d("div",{class:c([p(s).b(),p(s).m(e.listType),p(s).is("drag",e.drag)]),tabindex:"0",onClick:k,onKeydown:T(R(w,["self"]),["enter","space"])},[e.drag?(u(),g(je,{key:0,disabled:p(l),onFile:i},{default:b((()=>[y(e.$slots,"default")])),_:3},8,["disabled"])):y(e.$slots,"default",{key:1}),f("input",{ref_key:"inputRef",ref:n,class:c(p(s).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:h,onClick:t[0]||(t[0]=R((()=>{}),["stop"]))},null,42,qe)],42,Ne))}}),[["__file","upload-content.vue"]]);const Ie="ElUpload",Me=e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)},We=e({name:"ElUpload"});const Ke=J(X(e({...We,props:we,setup(e,{expose:a}){const s=e,l=Z(),o=O(),{abort:n,submit:r,clearFiles:i,uploadFiles:c,handleStart:f,handleError:v,handleRemove:m,handleSuccess:k,handleProgress:w,revokeFileObjectURL:$}=((e,t)=>{const a=te(e,"fileList",void 0,{passive:!0}),s=e=>a.value.find((t=>t.uid===e.uid));function l(e){var a;null==(a=t.value)||a.abort(e)}return D((()=>e.listType),(t=>{"picture-card"!==t&&"picture"!==t||(a.value=a.value.map((t=>{const{raw:s,url:l}=t;if(!l&&s)try{t.url=URL.createObjectURL(s)}catch(o){e.onError(o,t,a.value)}return t})))})),D(a,(e=>{for(const t of e)t.uid||(t.uid=be()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:a,abort:l,clearFiles:function(e=["ready","uploading","success","fail"]){a.value=a.value.filter((t=>!e.includes(t.status)))},handleError:(t,l)=>{const o=s(l);o&&(o.status="fail",a.value.splice(a.value.indexOf(o),1),e.onError(t,o,a.value),e.onChange(o,a.value))},handleProgress:(t,l)=>{const o=s(l);o&&(e.onProgress(t,o,a.value),o.status="uploading",o.percentage=Math.round(t.percent))},handleStart:t=>{V(t.uid)&&(t.uid=be());const s={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if("picture-card"===e.listType||"picture"===e.listType)try{s.url=URL.createObjectURL(t)}catch(l){ae(Ie,l.message),e.onError(l,s,a.value)}a.value=[...a.value,s],e.onChange(s,a.value)},handleSuccess:(t,l)=>{const o=s(l);o&&(o.status="success",o.response=t,e.onSuccess(t,o,a.value),e.onChange(o,a.value))},handleRemove:async t=>{const o=t instanceof File?s(t):t;o||Q(Ie,"file to be removed not found");const n=t=>{l(t);const s=a.value;s.splice(s.indexOf(t),1),e.onRemove(t,s),Me(t)};e.beforeRemove?!1!==await e.beforeRemove(o,a.value)&&n(o):n(o)},submit:function(){a.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var a;return e&&(null==(a=t.value)?void 0:a.upload(e))}))},revokeFileObjectURL:Me}})(s,o),x=t((()=>"picture-card"===s.listType)),F=t((()=>({...s,fileList:c.value,onStart:f,onProgress:w,onSuccess:k,onError:v,onRemove:m})));return N((()=>{c.value.forEach($)})),q(ve,{accept:A(s,"accept")}),a({abort:n,submit:r,clearFiles:i,handleStart:f,handleRemove:m}),(e,t)=>(u(),d("div",null,[p(x)&&e.showFileList?(u(),g(Le,{key:0,disabled:p(l),"list-type":e.listType,files:p(c),"handle-preview":e.onPreview,onRemove:p(m)},H({append:b((()=>[S(He,I({ref_key:"uploadRef",ref:o},p(F)),{default:b((()=>[e.$slots.trigger?y(e.$slots,"trigger",{key:0}):h("v-if",!0),!e.$slots.trigger&&e.$slots.default?y(e.$slots,"default",{key:1}):h("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:b((({file:t})=>[y(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0),!p(x)||p(x)&&!e.showFileList?(u(),g(He,I({key:1,ref_key:"uploadRef",ref:o},p(F)),{default:b((()=>[e.$slots.trigger?y(e.$slots,"trigger",{key:0}):h("v-if",!0),!e.$slots.trigger&&e.$slots.default?y(e.$slots,"default",{key:1}):h("v-if",!0)])),_:3},16)):h("v-if",!0),e.$slots.trigger?y(e.$slots,"default",{key:2}):h("v-if",!0),y(e.$slots,"tip"),!p(x)&&e.showFileList?(u(),g(Le,{key:3,disabled:p(l),"list-type":e.listType,files:p(c),"handle-preview":e.onPreview,onRemove:p(m)},H({_:2},[e.$slots.file?{name:"default",fn:b((({file:t})=>[y(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0)]))}}),[["__file","upload.vue"]])),ze=(e,t)=>le({url:`/files/upload/${e}`,method:"PUT",data:t,config:{headers:{"Content-Type":"image/png"}}}),Xe=e=>le({url:"/api/seg/save/",method:"POST",data:e}),Je=e=>le({url:"/api/seg/structure/",method:"PUT",data:e}),Qe=e=>le({url:"/api/seg/update/",method:"PATCH",data:e}),Ve=e=>le({url:"/api/seg/do/",method:"POST",data:e});export{Ke as E,Je as a,Qe as b,Xe as c,Ve as d,ze as u};
