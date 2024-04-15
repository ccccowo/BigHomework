import{b as e,c as t,i as a,C as l,I as n,e as i,U as s,f as r,u as o,g as u,h as d,j as p,k as c,a as m,_ as v,t as f,l as h,w as b,n as g,o as y,p as w,E as x}from"./el-button-wvYaTM86.js";import{E as N}from"./el-overlay-3IU7Au7U.js";/* empty css                 */import{u as k,a as I,E as _}from"./el-popper-uBN1jnws.js";import{E as V,a as q}from"./el-form-item-XdtgwD_C.js";import"./el-tag-7GjTWn-W.js";import{E as j,a as S}from"./el-select-xMlXidor.js";import"./el-scrollbar-vybkKUqc.js";import{u as C,c as Y,E as A,a as F,b as X}from"./imghandle-h_XX_iF-.js";/* empty css                */import{E,a as R}from"./el-switch-toBBjcd3.js";import{d as K,h as P,z as O,c as U,A as B,B as M,C as H,o as T,k as z,D as $,u as W,n as D,E as L,l as G,w as J,G as Q,a as Z,H as ee,I as te,J as ae,K as le,L as ne,M as ie,v as se,m as re,r as oe,N as ue,_ as de,g as pe,t as ce,F as me,O as ve,P as fe,Q as he,x as be,y as ge}from"./index-afE12XCz.js";import{g as ye,a as we}from"./texthandle-7F_vs62c.js";import{a as xe,b as Ne}from"./test-y3wzIP-I.js";import{E as ke}from"./index-N5fRpmYF.js";import{E as Ie}from"./index-JPUmXDR2.js";import{v as _e}from"./index-AGQUXvI5.js";import{d as Ve}from"./dropdown-mRi2qNw8.js";import"./index-KKobhxVb.js";import"./focus-trap-5pso-6bw.js";import"./castArray-k9TcYJOl.js";import"./_baseClone-SyVPMbir.js";import"./_initCloneObject-zYbwKfTJ.js";import"./strings-x1tLdWO8.js";import"./validator-X17wg_rN.js";import"./request-MLV9EytQ.js";import"./axios--miOKxDG.js";import"./directive-J_YZ0NkB.js";import"./request2-8GU6WOJp.js";const qe=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||a(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),je={[l]:(e,t)=>t!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[n]:e=>a(e)||i(e),[s]:e=>a(e)||i(e)},Se=["aria-label","onKeydown"],Ce=["aria-label","onKeydown"],Ye=K({name:"ElInputNumber"});const Ae=b(v(K({...Ye,props:qe,emits:je,setup(e,{expose:t,emit:v}){const b=e,{t:g}=r(),y=o("input-number"),w=P(),x=O({currentValue:b.modelValue,userInput:null}),{formItem:N}=u(),k=U((()=>a(b.modelValue)&&b.modelValue<=b.min)),I=U((()=>a(b.modelValue)&&b.modelValue>=b.max)),_=U((()=>{const e=Y(b.step);return d(b.precision)?Math.max(Y(b.modelValue),e):(b.precision,b.precision)})),V=U((()=>b.controls&&"right"===b.controlsPosition)),q=p(),j=c(),S=U((()=>{if(null!==x.userInput)return x.userInput;let e=x.currentValue;if(i(e))return"";if(a(e)){if(Number.isNaN(e))return"";d(b.precision)||(e=e.toFixed(b.precision))}return e})),C=(e,t)=>{if(d(t)&&(t=_.value),0===t)return Math.round(e);let a=String(e);const l=a.indexOf(".");if(-1===l)return e;if(!a.replace(".","").split("")[l+t])return e;const n=a.length;return"5"===a.charAt(n-1)&&(a=`${a.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(a).toFixed(t))},Y=e=>{if(i(e))return 0;const t=e.toString(),a=t.indexOf(".");let l=0;return-1!==a&&(l=t.length-a-1),l},A=(e,t=1)=>a(e)?C(e+b.step*t):x.currentValue,F=()=>{if(b.readonly||j.value||I.value)return;const e=Number(S.value)||0,t=A(e);R(t),v(n,x.currentValue)},X=()=>{if(b.readonly||j.value||k.value)return;const e=Number(S.value)||0,t=A(e,-1);R(t),v(n,x.currentValue)},E=(e,t)=>{const{max:a,min:l,step:n,precision:r,stepStrictly:o,valueOnClear:u}=b;a<l&&f("InputNumber","min should not be greater than max.");let p=Number(e);if(i(e)||Number.isNaN(p))return null;if(""===e){if(null===u)return null;p=ie(u)?{min:l,max:a}[u]:u}return o&&(p=C(Math.round(p/n)*n,r)),d(r)||(p=C(p,r)),(p>a||p<l)&&(p=p>a?a:l,t&&v(s,p)),p},R=(e,t=!0)=>{var a;const n=x.currentValue,i=E(e);t?n!==i&&(x.userInput=null,v(s,i),v(l,i,n),b.validateEvent&&(null==(a=null==N?void 0:N.validate)||a.call(N,"change").catch((e=>h()))),x.currentValue=i):v(s,i)},K=e=>{x.userInput=e;const t=""===e?null:Number(e);v(n,t),R(t,!1)},se=e=>{const t=""!==e?Number(e):"";(a(t)&&!Number.isNaN(t)||""===e)&&R(t),x.userInput=null},re=e=>{v("focus",e)},oe=e=>{var t;x.userInput=null,v("blur",e),b.validateEvent&&(null==(t=null==N?void 0:N.validate)||t.call(N,"blur").catch((e=>h())))};return B((()=>b.modelValue),((e,t)=>{const a=E(e,!0);null===x.userInput&&a!==t&&(x.currentValue=a)}),{immediate:!0}),M((()=>{var e;const{min:t,max:l,modelValue:n}=b,i=null==(e=w.value)?void 0:e.input;if(i.setAttribute("role","spinbutton"),Number.isFinite(l)?i.setAttribute("aria-valuemax",String(l)):i.removeAttribute("aria-valuemax"),Number.isFinite(t)?i.setAttribute("aria-valuemin",String(t)):i.removeAttribute("aria-valuemin"),i.setAttribute("aria-valuenow",x.currentValue||0===x.currentValue?String(x.currentValue):""),i.setAttribute("aria-disabled",String(j.value)),!a(n)&&null!=n){let e=Number(n);Number.isNaN(e)&&(e=null),v(s,e)}})),H((()=>{var e,t;const a=null==(e=w.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${null!=(t=x.currentValue)?t:""}`)})),t({focus:()=>{var e,t;null==(t=null==(e=w.value)?void 0:e.focus)||t.call(e)},blur:()=>{var e,t;null==(t=null==(e=w.value)?void 0:e.blur)||t.call(e)}}),(e,t)=>(T(),z("div",{class:D([W(y).b(),W(y).m(W(q)),W(y).is("disabled",W(j)),W(y).is("without-controls",!e.controls),W(y).is("controls-right",W(V))]),onDragstart:t[1]||(t[1]=ne((()=>{}),["prevent"]))},[e.controls?$((T(),z("span",{key:0,role:"button","aria-label":W(g)("el.inputNumber.decrease"),class:D([W(y).e("decrease"),W(y).is("disabled",W(k))]),onKeydown:L(X,["enter"])},[G(W(m),null,{default:J((()=>[W(V)?(T(),Z(W(Q),{key:0})):(T(),Z(W(ee),{key:1}))])),_:1})],42,Se)),[[W(_e),X]]):te("v-if",!0),e.controls?$((T(),z("span",{key:1,role:"button","aria-label":W(g)("el.inputNumber.increase"),class:D([W(y).e("increase"),W(y).is("disabled",W(I))]),onKeydown:L(F,["enter"])},[G(W(m),null,{default:J((()=>[W(V)?(T(),Z(W(ae),{key:0})):(T(),Z(W(le),{key:1}))])),_:1})],42,Ce)),[[W(_e),F]]):te("v-if",!0),G(W(Ie),{id:e.id,ref_key:"input",ref:w,type:"number",step:e.step,"model-value":W(S),placeholder:e.placeholder,readonly:e.readonly,disabled:W(j),size:W(q),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:t[0]||(t[0]=ne((()=>{}),["prevent"])),onKeydown:[L(ne(F,["prevent"]),["up"]),L(ne(X,["prevent"]),["down"])],onBlur:oe,onFocus:re,onInput:K,onChange:se},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","input-number.vue"]])),Fe=e({trigger:k.trigger,placement:Ve.placement,disabled:k.disabled,visible:I.visible,transition:I.transition,popperOptions:Ve.popperOptions,tabindex:Ve.tabindex,content:I.content,popperStyle:I.popperStyle,popperClass:I.popperClass,enterable:{...I.enterable,default:!0},effect:{...I.effect,default:"light"},teleported:I.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Xe={"update:visible":e=>g(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},Ee=K({name:"ElPopover"}),Re=K({...Ee,props:Fe,emits:Xe,setup(e,{expose:t,emit:a}){const l=e,n=U((()=>l["onUpdate:visible"])),i=o("popover"),s=P(),r=U((()=>{var e;return null==(e=W(s))?void 0:e.popperRef})),u=U((()=>[{width:y(l.width)},l.popperStyle])),d=U((()=>[i.b(),l.popperClass,{[i.m("plain")]:!!l.content}])),p=U((()=>l.transition===`${i.namespace.value}-fade-in-linear`)),c=()=>{a("before-enter")},m=()=>{a("before-leave")},v=()=>{a("after-enter")},f=()=>{a("update:visible",!1),a("after-leave")};return t({popperRef:r,hide:()=>{var e;null==(e=s.value)||e.hide()}}),(e,t)=>(T(),Z(W(_),ue({ref_key:"tooltipRef",ref:s},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":W(d),"popper-style":W(u),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":W(p),"onUpdate:visible":W(n),onBeforeShow:c,onBeforeHide:m,onShow:v,onHide:f}),{content:J((()=>[e.title?(T(),z("div",{key:0,class:D(W(i).e("title")),role:"title"},se(e.title),3)):te("v-if",!0),oe(e.$slots,"default",{},(()=>[re(se(e.content),1)]))])),default:J((()=>[e.$slots.reference?oe(e.$slots,"reference",{key:0}):te("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const Ke=(e,t)=>{const a=t.arg||t.value,l=null==a?void 0:a.popperRef;l&&(l.triggerRef=e)};const Pe=b(v(Re,[["__file","popover.vue"]]),{directive:w({mounted(e,t){Ke(e,t)},updated(e,t){Ke(e,t)}},"popover")}),Oe=e=>(be("data-v-8694cc53"),e=e(),ge(),e),Ue={key:0,class:"select"},Be={class:"switch"},Me={class:"title"},He={class:"upload"},Te=["src"],ze={class:"el-upload-list__item-actions"},$e=["onClick"],We=["onClick"],De={key:1,class:"box"},Le=["src"],Ge={class:"selected"},Je={key:0,class:"img"},Qe=["src"],Ze={key:1,class:"tool"},et=Oe((()=>ce("canvas",null,null,-1))),tt={key:1,class:"ret2"},at={class:"content"},lt={style:{"text-align":"right",margin:"0"}},nt={key:0,class:"before"},it=Oe((()=>ce("br",null,null,-1))),st={key:1,class:"after"},rt=["src"],ot={class:"dialog-footer"},ut=de({__name:"CarvePage",setup(e){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,pe()),l=e=>{const a=document.querySelector("canvas");(e=>{const l=.9*t,n=2e3*(e+1);a.width=l*devicePixelRatio,a.height=n*devicePixelRatio,a.style.width=l+"px",a.style.height=n+"px",a.fillStyle="rgba(0,0,0,0)"})(e);const l=a.getContext("2d"),n=[];class i{constructor(e,t){this.color="rgba(0,0,0,0)",this.startX=e,this.startY=t,this.endX=e,this.endY=t}get minX(){return Math.min(this.startX,this.endX)}get maxX(){return Math.max(this.startX,this.endX)}get minY(){return Math.min(this.startY,this.endY)}get maxY(){return Math.max(this.startY,this.endY)}draw(){l.beginPath(),l.moveTo(this.minX*devicePixelRatio,this.minY*devicePixelRatio),l.lineTo(this.maxX*devicePixelRatio,this.minY*devicePixelRatio),l.lineTo(this.maxX*devicePixelRatio,this.maxY*devicePixelRatio),l.lineTo(this.minX*devicePixelRatio,this.maxY*devicePixelRatio),l.lineTo(this.minX*devicePixelRatio,this.minY*devicePixelRatio),l.fillStyle=this.color,l.fill(),l.strokeStyle="#f00",l.lineCap="square",l.lineWidth=2*devicePixelRatio,l.stroke()}isInside(e,t){return e>=this.minX&&e<=this.maxX&&t<=this.maxY&&t>=this.minY}}a.onmousedown=e=>{requestAnimationFrame(s);const t=a.getBoundingClientRect(),l=e.clientX-t.left,o=e.clientY-t.top,d=r(l,o);if(d){const{startX:e,startY:a,endX:i,endY:r}=d;window.onmousemove=n=>{requestAnimationFrame(s);const u=n.clientX-t.left-l,p=n.clientY-t.top-o;d.startX=e+u,d.startY=a+p,d.endX=i+u,d.endY=r+p},window.onmouseup=e=>{window.onmousemove=null,window.onmouseup=null,requestAnimationFrame(s);const t=n.indexOf(d);let a=u.value[t];a={x1:d.startX,y1:d.startY,x2:d.endX,y2:d.endY,num:u.value.length+1,img:"",quesId:"known",paper:"known",typ:"INFO"},u.value[t]=a}}else{const e=new i(l,o);n.push(e),window.onmousemove=a=>{requestAnimationFrame(s),e.endX=a.clientX-t.left,e.endY=a.clientY-t.top},window.onmouseup=t=>{window.onmousemove=null,window.onmouseup=null,requestAnimationFrame(s),u.value.push({x1:l,y1:o,x2:e.endX,y2:e.endY,num:u.value.length+1,img:"",quesId:"known",paper:"known",typ:"INFO"})}}};const s=()=>{l.clearRect(0,0,a.width,a.height);for(const e of n)e.draw()};s();const r=(e,t)=>{for(let a=n.length-1;a>=0;a--){const l=n[a];if(l.isInside(e,t))return l}return null}},n=P([]),i=P(1),s=P(""),r=P(!0),o=P(0);P();const u=P([]),d=P([]),p=P([]),c=P("http://8.137.85.0:8008/files/download/img10aa5b14-fb2b-11ee-9b91-00163e04f5e4.jpg"),v=async()=>{if(1==B.value)i.value=2,o.value=1,l(o.value),p.value.push(c.value),d.value.push(c.value);else{i.value=2,o.value=n.value.length,l(o.value);const e=E.service({fullscreen:!0});for(let t of n.value){const e=t.raw.name,a=await C(e,t.raw);d.value.push(a.data)}e.close()}},f=P([]),h=P([]),b=async()=>{u.value.sort(((e,t)=>e.y1-t.y1)).reserve;const e=document.querySelectorAll("img");let t=[];for(let i=0;i<e.length;i++)t[i]=0===i?e[i].clientHeight:t[i-1]+e[i].clientHeight;let a=0,l=0;for(let i=0;i<u.value.length;i++){u.value[i].y1>t[a]&&(a++,l=0),u.value[i].img=d.value[a],u.value[i].num=l,l++;const n=e[a].naturalWidth,s=e[a].clientWidth,r=e[a].naturalHeight,o=e[a].clientHeight;u.value[i].x1=Math.floor(u.value[i].x1*n/s),u.value[i].x2=Math.ceil(u.value[i].x2*n/s),u.value[i].y1=Math.floor((u.value[i].y1-(a-1<0?0:t[a-1]))*r/o),u.value[i].y2=Math.ceil((u.value[i].y2-(a-1<0?0:t[a-1]))*r/o)}u.value.forEach((e=>{let t={img:"STRUCTURE"};t.x1=e.x1,t.y1=e.y1,t.x2=e.x2,t.y2=e.y2,t.num=e.num,t.quesId=e.quesId,t.paper=e.paper,t.typ=e.typ,h.value.push(t)}));const n=E.service({fullscreen:!0});for(let i of u.value){const e=new FormData;e.append("img",i.img),e.append("num",i.num),e.append("x1",i.x1),e.append("x2",i.x2),e.append("y1",i.y1),e.append("y2",i.y2);const t=await Y(e);f.value.push({img:t.data,res:"",flag:!1})}ke.success("切割图片成功"),n.close();document.querySelector("canvas").remove(),i.value=3},g=P([{quesKindId:1,quesKindName:"单选题"},{quesKindId:2,quesKindName:"多选题"},{quesKindId:3,quesKindName:"简答题"},{quesKindId:4,quesKindName:"判断题"}]),y=P(""),w=P(""),k=P([]),I=P([]),_=P(!1),K=P({paperName:"",paperFullScore:"",paperLevel:"80.01",quesKindIds:"",quesIds:""}),O=()=>{_.value=!0},U=async()=>{await F({structure:h.value}),K.value.quesKindIds="["+k.value.join(",")+"]",K.value.quesIds="["+I.value.join(",")+"]";const e=await Ne(K.value);ke.success("添加试卷成功"),_.value=!1;const t={old:"known",update:{paper:e.data.data.paperId,ques:e.data.data.quesIds}};await X(t),a.go(-1)},B=P(!1);return(e,t)=>{const a=R,l=x,o=m,u=A,h=j,C=S,Y=V,F=Ae,X=q,P=Pe,M=Ie,H=N;return T(),z(me,null,[1==i.value?(T(),z("div",Ue,[ce("div",Be,[G(a,{modelValue:B.value,"onUpdate:modelValue":t[0]||(t[0]=e=>B.value=e)},null,8,["modelValue"]),re("是否开启演示模式")]),ce("div",Me,[re("请选择试卷图片 "),G(l,{color:"#045afe",onClick:v},{default:J((()=>[re("选择完毕")])),_:1})]),ce("div",He,[B.value?te("",!0):(T(),Z(u,{key:0,"on-change":e.handleChange,"file-list":n.value,"onUpdate:fileList":t[1]||(t[1]=e=>n.value=e),action:"#","list-type":"picture-card","auto-upload":!1},{file:J((({file:t})=>[ce("div",null,[ce("img",{class:"el-upload-list__item-thumbnail",src:t.url},null,8,Te),ce("span",ze,[ce("span",{class:"el-upload-list__item-preview",onClick:e=>(e=>{s.value=e.url,r.value=!0})(t)},[G(o,null,{default:J((()=>[G(W(fe))])),_:1})],8,$e),e.disabled?te("",!0):(T(),z("span",{key:0,class:"el-upload-list__item-delete",onClick:e=>(e=>{const t=c.createObjectURL(e.raw);p.value.remove(t)})(t)},[G(o,null,{default:J((()=>[G(W(he))])),_:1})],8,We))])])])),default:J((()=>[G(o,null,{default:J((()=>[G(W(le))])),_:1})])),_:1},8,["on-change","file-list"])),B.value?(T(),z("div",De,[ce("img",{src:c.value},null,8,Le)])):te("",!0)])])):te("",!0),ce("div",Ge,[2==i.value?(T(),z("div",Je,[(T(!0),z(me,null,ve(d.value,(e=>(T(),z("img",{src:e,key:e},null,8,Qe)))),128))])):te("",!0),2==i.value||3==i.value?(T(),z("div",Ze,[2==i.value?(T(),Z(l,{key:0,onClick:b,color:"#045afe"},{default:J((()=>[re("请求图片切割")])),_:1})):te("",!0),3==i.value?(T(),Z(l,{key:1,onClick:O,color:"#045afe"},{default:J((()=>[re("添加试卷")])),_:1})):te("",!0)])):te("",!0),et]),3==i.value?(T(),z("div",tt,[(T(!0),z(me,null,ve(f.value,(e=>(T(),Z(P,{placement:"left",width:300,trigger:"click",key:e.img},{reference:J((()=>[ce("img",{class:"carveimg",src:e.img},null,8,rt)])),default:J((()=>[ce("div",at,se(e.res),1),ce("div",lt,[""==e.res?(T(),z("div",nt,[G(l,{onClick:t=>(async e=>{const t=new FormData;t.append("img",e.img);const a=E.service({fullscreen:!0}),l=await ye(t);ke.success("获取文字识别成功"),a.close();const n=f.value.indexOf(e);f.value[n].res=l.data.res})(e),size:"large",type:"primary"},{default:J((()=>[re("请求文字识别")])),_:2},1032,["onClick"])])):te("",!0),it,""!=e.res?(T(),z("div",st,[G(X,{"label-width":"auto"},{default:J((()=>[G(Y,{label:"题型:"},{default:J((()=>[G(C,{size:"large",modelValue:y.value,"onUpdate:modelValue":t[2]||(t[2]=e=>y.value=e),placeholder:"Select"},{default:J((()=>[(T(!0),z(me,null,ve(g.value,(e=>(T(),Z(h,{key:e.quesKindId,label:e.quesKindName,value:e.quesKindId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),G(Y,{label:"题目分数:"},{default:J((()=>[G(F,{modelValue:w.value,"onUpdate:modelValue":t[3]||(t[3]=e=>w.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),G(l,{onClick:t=>(async e=>{if(""==y.value)return void ke.warning("还未选择题型");if(""==w.value)return void ke.warning("还未输入题目分数");e.flag=!0;const t=E.service({fullscreen:!0}),a=await we(e.img),l={quesKindId:y.value,quesContent:e.res,quesAnswer:a.data.ans,quesDefaultScore:w.value,quesLevel:200.01},n=await xe(l);ke.success("添加试题成功"),t.close(),I.value.push(n.data.data.quesId),-1==k.value.indexOf(y.value)&&null!=y.value&&k.value.push(y.value)})(e),size:"large",type:"primary",disabled:e.flag},{default:J((()=>[re(se(1==e.flag?"已添加":"添加题目"),1)])),_:2},1032,["onClick","disabled"])])):te("",!0)])])),_:2},1024)))),128))])):te("",!0),G(H,{class:"paperdialog",modelValue:_.value,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value=e),width:"400"},{footer:J((()=>[ce("div",ot,[G(l,{onClick:t[6]||(t[6]=e=>_.value=!1)},{default:J((()=>[re("取消")])),_:1}),G(l,{type:"primary",onClick:U},{default:J((()=>[re(" 确定 ")])),_:1})])])),default:J((()=>[G(X,{model:K.value,rules:e.rulse},{default:J((()=>[G(Y,{prop:"paperName",label:"试卷名称："},{default:J((()=>[G(M,{modelValue:K.value.paperName,"onUpdate:modelValue":t[4]||(t[4]=e=>K.value.paperName=e),placeholder:"请输入试卷名称"},null,8,["modelValue"])])),_:1}),G(Y,{prop:"paperFullScore",label:"全卷总分："},{default:J((()=>[G(M,{modelValue:K.value.paperFullScore,"onUpdate:modelValue":t[5]||(t[5]=e=>K.value.paperFullScore=e),placeholder:"请输入全卷总分"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])],64)}}},[["__scopeId","data-v-8694cc53"]]);export{ut as default};
