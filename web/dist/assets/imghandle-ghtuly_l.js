import{d as N,c as C,aH as Le,aI as pe,aj as Re,aJ as fe,V as ve,an as me,M as te,o as g,j as P,n as m,u as e,s as A,b as I,r as R,t as V,I as k,a as O,w as _,e as _e,ai as ye,aA as S,h as ge,F as Te,E as he,L as q,aK as Ue,k as B,P as Oe,Q as De,O as Be,az as Ae,i as Ne,ar as Y,aL as se,A as ae,a5 as Ie,p as je,a2 as Me,a6 as oe,N as ne}from"./index-8Q_9VYoB.js";import{b as H,d as b,u as K,E as j,_ as z,w as be,t as ee,a as ke,m as Z,K as qe,e as Ke}from"./base-fLZH5HYv.js";import{a as He,d as X,l as ze}from"./el-button-ERDUNANg.js";import{b as We}from"./_baseClone-kDeojI09.js";import{i as Ve}from"./isEqual-L6DaMkDH.js";import{i as W}from"./request-_oO3txSX.js";var Xe=1,Ge=4;function re(t){return We(t,Xe|Ge)}const Je=H({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:t=>`${t}%`}}),Qe=["aria-valuenow"],Ye={viewBox:"0 0 100 100"},Ze=["d","stroke","stroke-linecap","stroke-width"],xe=["d","stroke","opacity","stroke-linecap","stroke-width"],et={key:0},tt=N({name:"ElProgress"}),st=N({...tt,props:Je,setup(t){const s=t,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=K("progress"),f=C(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:F(s.percentage)})),c=C(()=>(s.strokeWidth/s.width*100).toFixed(1)),y=C(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(c.value)/2}`,10):0),E=C(()=>{const r=y.value,L=s.type==="dashboard";return`
          M 50 50
          m 0 ${L?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${L?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${L?"":"-"}${r*2}
          `}),h=C(()=>2*Math.PI*y.value),$=C(()=>s.type==="dashboard"?.75:1),w=C(()=>`${-1*h.value*(1-$.value)/2}px`),v=C(()=>({strokeDasharray:`${h.value*$.value}px, ${h.value}px`,strokeDashoffset:w.value})),l=C(()=>({strokeDasharray:`${h.value*$.value*(s.percentage/100)}px, ${h.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),o=C(()=>{let r;return s.color?r=F(s.percentage):r=a[s.status]||a.default,r}),d=C(()=>s.status==="warning"?Le:s.type==="line"?s.status==="success"?pe:Re:s.status==="success"?fe:ve),n=C(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),p=C(()=>s.format(s.percentage));function i(r){const L=100/r.length;return r.map((T,U)=>te(T)?{color:T,percentage:(U+1)*L}:T).sort((T,U)=>T.percentage-U.percentage)}const F=r=>{var L;const{color:D}=s;if(me(D))return D(r);if(te(D))return D;{const T=i(D);for(const U of T)if(U.percentage>r)return U.color;return(L=T[T.length-1])==null?void 0:L.color}};return(r,L)=>(g(),P("div",{class:m([e(u).b(),e(u).m(r.type),e(u).is(r.status),{[e(u).m("without-text")]:!r.showText,[e(u).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),P("div",{key:0,class:m(e(u).b("bar"))},[A("div",{class:m(e(u).be("bar","outer")),style:I({height:`${r.strokeWidth}px`})},[A("div",{class:m([e(u).be("bar","inner"),{[e(u).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(u).bem("bar","inner","striped")]:r.striped},{[e(u).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:I(e(f))},[(r.showText||r.$slots.default)&&r.textInside?(g(),P("div",{key:0,class:m(e(u).be("bar","innerText"))},[R(r.$slots,"default",{percentage:r.percentage},()=>[A("span",null,V(e(p)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),P("div",{key:1,class:m(e(u).b("circle")),style:I({height:`${r.width}px`,width:`${r.width}px`})},[(g(),P("svg",Ye,[A("path",{class:m(e(u).be("circle","track")),d:e(E),stroke:`var(${e(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),fill:"none",style:I(e(v))},null,14,Ze),A("path",{class:m(e(u).be("circle","path")),d:e(E),stroke:e(o),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),style:I(e(l))},null,14,xe)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),P("div",{key:2,class:m(e(u).e("text")),style:I({fontSize:`${e(n)}px`})},[R(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(g(),O(e(j),{key:1},{default:_(()=>[(g(),O(_e(e(d))))]),_:1})):(g(),P("span",et,V(e(p)),1))])],6)):k("v-if",!0)],10,Qe))}});var at=z(st,[["__file","progress.vue"]]);const ot=be(at),$e=Symbol("uploadContextKey"),nt="ElUpload";class rt extends Error{constructor(s,a,u,f){super(s),this.name="UploadAjaxError",this.status=a,this.method=u,this.url=f}}function le(t,s,a){let u;return a.response?u=`${a.response.error||a.response}`:a.responseText?u=`${a.responseText}`:u=`fail to ${s.method} ${t} ${a.status}`,new rt(u,a.status,s.method,t)}function lt(t){const s=t.responseText||t.response;if(!s)return s;try{return JSON.parse(s)}catch{return s}}const it=t=>{typeof XMLHttpRequest>"u"&&ee(nt,"XMLHttpRequest is undefined");const s=new XMLHttpRequest,a=t.action;s.upload&&s.upload.addEventListener("progress",c=>{const y=c;y.percent=c.total>0?c.loaded/c.total*100:0,t.onProgress(y)});const u=new FormData;if(t.data)for(const[c,y]of Object.entries(t.data))ye(y)&&y.length?u.append(c,...y):u.append(c,y);u.append(t.filename,t.file,t.file.name),s.addEventListener("error",()=>{t.onError(le(a,t,s))}),s.addEventListener("load",()=>{if(s.status<200||s.status>=300)return t.onError(le(a,t,s));t.onSuccess(lt(s))}),s.open(t.method,a,!0),t.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const f=t.headers||{};if(f instanceof Headers)f.forEach((c,y)=>s.setRequestHeader(y,c));else for(const[c,y]of Object.entries(f))ke(y)||s.setRequestHeader(c,String(y));return s.send(u),s},we=["text","picture","picture-card"];let ut=1;const x=()=>Date.now()+ut++,Pe=H({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>Z({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>Z([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:we,default:"text"},httpRequest:{type:b(Function),default:it},disabled:Boolean,limit:Number}),dt=H({...Pe,beforeUpload:{type:b(Function),default:S},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:S},onChange:{type:b(Function),default:S},onPreview:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),ct=H({files:{type:b(Array),default:()=>Z([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:S},listType:{type:String,values:we,default:"text"}}),pt={remove:t=>!!t},ft=["onKeydown"],vt=["src"],mt=["onClick"],yt=["title"],gt=["onClick"],ht=["onClick"],bt=N({name:"ElUploadList"}),kt=N({...bt,props:ct,emits:pt,setup(t,{emit:s}){const a=t,{t:u}=He(),f=K("upload"),c=K("icon"),y=K("list"),E=X(),h=ge(!1),$=C(()=>[f.b("list"),f.bm("list",a.listType),f.is("disabled",a.disabled)]),w=v=>{s("remove",v)};return(v,l)=>(g(),O(Ae,{tag:"ul",class:m(e($)),name:e(y).b()},{default:_(()=>[(g(!0),P(Te,null,Be(v.files,o=>(g(),P("li",{key:o.uid||o.name,class:m([e(f).be("list","item"),e(f).is(o.status),{focusing:h.value}]),tabindex:"0",onKeydown:he(d=>!e(E)&&w(o),["delete"]),onFocus:l[0]||(l[0]=d=>h.value=!0),onBlur:l[1]||(l[1]=d=>h.value=!1),onClick:l[2]||(l[2]=d=>h.value=!1)},[R(v.$slots,"default",{file:o},()=>[v.listType==="picture"||o.status!=="uploading"&&v.listType==="picture-card"?(g(),P("img",{key:0,class:m(e(f).be("list","item-thumbnail")),src:o.url,alt:""},null,10,vt)):k("v-if",!0),o.status==="uploading"||v.listType!=="picture-card"?(g(),P("div",{key:1,class:m(e(f).be("list","item-info"))},[A("a",{class:m(e(f).be("list","item-name")),onClick:q(d=>v.handlePreview(o),["prevent"])},[B(e(j),{class:m(e(c).m("document"))},{default:_(()=>[B(e(Ue))]),_:1},8,["class"]),A("span",{class:m(e(f).be("list","item-file-name")),title:o.name},V(o.name),11,yt)],10,mt),o.status==="uploading"?(g(),O(e(ot),{key:0,type:v.listType==="picture-card"?"circle":"line","stroke-width":v.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:I(v.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),A("label",{class:m(e(f).be("list","item-status-label"))},[v.listType==="text"?(g(),O(e(j),{key:0,class:m([e(c).m("upload-success"),e(c).m("circle-check")])},{default:_(()=>[B(e(pe))]),_:1},8,["class"])):["picture-card","picture"].includes(v.listType)?(g(),O(e(j),{key:1,class:m([e(c).m("upload-success"),e(c).m("check")])},{default:_(()=>[B(e(fe))]),_:1},8,["class"])):k("v-if",!0)],2),e(E)?k("v-if",!0):(g(),O(e(j),{key:2,class:m(e(c).m("close")),onClick:d=>w(o)},{default:_(()=>[B(e(ve))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(E)?k("v-if",!0):(g(),P("i",{key:3,class:m(e(c).m("close-tip"))},V(e(u)("el.upload.deleteTip")),3)),v.listType==="picture-card"?(g(),P("span",{key:4,class:m(e(f).be("list","item-actions"))},[A("span",{class:m(e(f).be("list","item-preview")),onClick:d=>v.handlePreview(o)},[B(e(j),{class:m(e(c).m("zoom-in"))},{default:_(()=>[B(e(Oe))]),_:1},8,["class"])],10,gt),e(E)?k("v-if",!0):(g(),P("span",{key:0,class:m(e(f).be("list","item-delete")),onClick:d=>w(o)},[B(e(j),{class:m(e(c).m("delete"))},{default:_(()=>[B(e(De))]),_:1},8,["class"])],10,ht))],2)):k("v-if",!0)])],42,ft))),128)),R(v.$slots,"append")]),_:3},8,["class","name"]))}});var ie=z(kt,[["__file","upload-list.vue"]]);const $t=H({disabled:{type:Boolean,default:!1}}),wt={file:t=>ye(t)},Pt=["onDrop","onDragover"],Ee="ElUploadDrag",Et=N({name:Ee}),Ct=N({...Et,props:$t,emits:wt,setup(t,{emit:s}){const a=Ne($e);a||ee(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=K("upload"),f=ge(!1),c=X(),y=h=>{if(c.value)return;f.value=!1,h.stopPropagation();const $=Array.from(h.dataTransfer.files),w=a.accept.value;if(!w){s("file",$);return}const v=$.filter(l=>{const{type:o,name:d}=l,n=d.includes(".")?`.${d.split(".").pop()}`:"",p=o.replace(/\/.*$/,"");return w.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?n===i:/\/\*$/.test(i)?p===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?o===i:!1)});s("file",v)},E=()=>{c.value||(f.value=!0)};return(h,$)=>(g(),P("div",{class:m([e(u).b("dragger"),e(u).is("dragover",f.value)]),onDrop:q(y,["prevent"]),onDragover:q(E,["prevent"]),onDragleave:$[0]||($[0]=q(w=>f.value=!1,["prevent"]))},[R(h.$slots,"default")],42,Pt))}});var St=z(Ct,[["__file","upload-dragger.vue"]]);const Ft=H({...Pe,beforeUpload:{type:b(Function),default:S},onRemove:{type:b(Function),default:S},onStart:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),Lt=["onKeydown"],Rt=["name","multiple","accept"],_t=N({name:"ElUploadContent",inheritAttrs:!1}),Tt=N({..._t,props:Ft,setup(t,{expose:s}){const a=t,u=K("upload"),f=X(),c=Y({}),y=Y(),E=n=>{if(n.length===0)return;const{autoUpload:p,limit:i,fileList:F,multiple:r,onStart:L,onExceed:D}=a;if(i&&F.length+n.length>i){D(n,F);return}r||(n=n.slice(0,1));for(const T of n){const U=T;U.uid=x(),L(U),p&&h(U)}},h=async n=>{if(y.value.value="",!a.beforeUpload)return w(n);let p,i={};try{const r=a.data,L=a.beforeUpload(n);i=se(a.data)?re(a.data):a.data,p=await L,se(a.data)&&Ve(r,i)&&(i=re(a.data))}catch{p=!1}if(p===!1){a.onRemove(n);return}let F=n;p instanceof Blob&&(p instanceof File?F=p:F=new File([p],n.name,{type:n.type})),w(Object.assign(F,{uid:n.uid}),i)},$=async(n,p)=>me(n)?n(p):n,w=async(n,p)=>{const{headers:i,data:F,method:r,withCredentials:L,name:D,action:T,onProgress:U,onSuccess:Ce,onError:Se,httpRequest:Fe}=a;try{p=await $(p??F,n)}catch{a.onRemove(n);return}const{uid:G}=n,J={headers:i||{},withCredentials:L,file:n,data:p,method:r,filename:D,action:T,onProgress:M=>{U(M,n)},onSuccess:M=>{Ce(M,n),delete c.value[G]},onError:M=>{Se(M,n),delete c.value[G]}},Q=Fe(J);c.value[G]=Q,Q instanceof Promise&&Q.then(J.onSuccess,J.onError)},v=n=>{const p=n.target.files;p&&E(Array.from(p))},l=()=>{f.value||(y.value.value="",y.value.click())},o=()=>{l()};return s({abort:n=>{ze(c.value).filter(n?([i])=>String(n.uid)===i:()=>!0).forEach(([i,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete c.value[i]})},upload:h}),(n,p)=>(g(),P("div",{class:m([e(u).b(),e(u).m(n.listType),e(u).is("drag",n.drag)]),tabindex:"0",onClick:l,onKeydown:he(q(o,["self"]),["enter","space"])},[n.drag?(g(),O(St,{key:0,disabled:e(f),onFile:E},{default:_(()=>[R(n.$slots,"default")]),_:3},8,["disabled"])):R(n.$slots,"default",{key:1}),A("input",{ref_key:"inputRef",ref:y,class:m(e(u).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:v,onClick:p[0]||(p[0]=q(()=>{},["stop"]))},null,42,Rt)],42,Lt))}});var ue=z(Tt,[["__file","upload-content.vue"]]);const de="ElUpload",ce=t=>{var s;(s=t.url)!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(t.url)},Ut=(t,s)=>{const a=qe(t,"fileList",void 0,{passive:!0}),u=l=>a.value.find(o=>o.uid===l.uid);function f(l){var o;(o=s.value)==null||o.abort(l)}function c(l=["ready","uploading","success","fail"]){a.value=a.value.filter(o=>!l.includes(o.status))}const y=(l,o)=>{const d=u(o);d&&(console.error(l),d.status="fail",a.value.splice(a.value.indexOf(d),1),t.onError(l,d,a.value),t.onChange(d,a.value))},E=(l,o)=>{const d=u(o);d&&(t.onProgress(l,d,a.value),d.status="uploading",d.percentage=Math.round(l.percent))},h=(l,o)=>{const d=u(o);d&&(d.status="success",d.response=l,t.onSuccess(l,d,a.value),t.onChange(d,a.value))},$=l=>{ke(l.uid)&&(l.uid=x());const o={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(t.listType==="picture-card"||t.listType==="picture")try{o.url=URL.createObjectURL(l)}catch(d){Ke(de,d.message),t.onError(d,o,a.value)}a.value=[...a.value,o],t.onChange(o,a.value)},w=async l=>{const o=l instanceof File?u(l):l;o||ee(de,"file to be removed not found");const d=n=>{f(n);const p=a.value;p.splice(p.indexOf(n),1),t.onRemove(n,p),ce(n)};t.beforeRemove?await t.beforeRemove(o,a.value)!==!1&&d(o):d(o)};function v(){a.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var o;return l&&((o=s.value)==null?void 0:o.upload(l))})}return ae(()=>t.listType,l=>{l!=="picture-card"&&l!=="picture"||(a.value=a.value.map(o=>{const{raw:d,url:n}=o;if(!n&&d)try{o.url=URL.createObjectURL(d)}catch(p){t.onError(p,o,a.value)}return o}))}),ae(a,l=>{for(const o of l)o.uid||(o.uid=x()),o.status||(o.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:f,clearFiles:c,handleError:y,handleProgress:E,handleStart:$,handleSuccess:h,handleRemove:w,submit:v,revokeFileObjectURL:ce}},Ot=N({name:"ElUpload"}),Dt=N({...Ot,props:dt,setup(t,{expose:s}){const a=t,u=X(),f=Y(),{abort:c,submit:y,clearFiles:E,uploadFiles:h,handleStart:$,handleError:w,handleRemove:v,handleSuccess:l,handleProgress:o,revokeFileObjectURL:d}=Ut(a,f),n=C(()=>a.listType==="picture-card"),p=C(()=>({...a,fileList:h.value,onStart:$,onProgress:o,onSuccess:l,onError:w,onRemove:v}));return Ie(()=>{h.value.forEach(d)}),je($e,{accept:Me(a,"accept")}),s({abort:c,submit:y,clearFiles:E,handleStart:$,handleRemove:v}),(i,F)=>(g(),P("div",null,[e(n)&&i.showFileList?(g(),O(ie,{key:0,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(v)},oe({append:_(()=>[B(ue,ne({ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!e(n)||e(n)&&!i.showFileList?(g(),O(ue,ne({key:1,ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),i.$slots.trigger?R(i.$slots,"default",{key:2}):k("v-if",!0),R(i.$slots,"tip"),!e(n)&&i.showFileList?(g(),O(ie,{key:3,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(v)},oe({_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}});var Bt=z(Dt,[["__file","upload.vue"]]);const Kt=be(Bt),Ht=(t,s)=>W({url:`/files/upload/${t}`,method:"PUT",data:s,config:{headers:{"Content-Type":"image/png"}}}),zt=t=>W({url:"/api/seg/save/",method:"POST",data:t}),Wt=t=>W({url:"/api/seg/structure/",method:"PUT",data:t}),Vt=t=>W({url:"/api/seg/update/",method:"PATCH",data:t}),Xt=t=>W({url:"/api/seg/do/",method:"POST",data:t});export{Kt as E,Wt as a,Vt as b,zt as c,Xt as d,Ht as u};
