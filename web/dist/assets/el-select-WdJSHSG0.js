import{d as se,c as p,o as b,j as L,s as $,r as F,n as h,u as v,a as P,w as I,V as El,k as _,L as G,I as z,b as J,X as gl,i as Ne,f as we,aq as Re,A as H,a7 as Cl,z as He,U as Sl,a5 as Ul,T as A,D as Ie,W as Ol,t as ee,h as B,B as wl,ar as Ll,an as ie,as as Oe,at as bl,M as Al,aj as Xl,G as Yl,p as Bl,v as x,au as Jl,F as Fe,O as hl,E as N,av as Zl,e as Ml,a6 as $l}from"./index-8Q_9VYoB.js";import{b as xl,u as ae,E as yl,_ as Te,w as ql,j as Wl,v as Fl,l as _l,e as en,A as ln,c as nn,i as on,V as tn,n as Vl,B as an,k as Nl}from"./base-fLZH5HYv.js";import{E as sn,C as rn,a as un,b as dn}from"./el-popper-VtmR0wtm.js";import{i as cn,E as pn}from"./index-EGs59zJd.js";import{E as fn}from"./el-scrollbar-IRktW7Zh.js";import{h as vn,f as mn,c as Rl,i as R,a as Il,b as bn,U as le,C as Hl}from"./el-button-ERDUNANg.js";import{e as hn}from"./strings-KykFHDex.js";import{E as kl}from"./vnode-V_EyjqrJ.js";import{s as gn}from"./index-MF98tEZs.js";import{i as Dl}from"./isEqual-L6DaMkDH.js";import{t as yn,b as Cn,d as Pl}from"./el-tag-OjcgpUt-.js";import{i as Sn}from"./validator-SivaTYXf.js";var zl=1/0,On=17976931348623157e292;function wn(e){if(!e)return e===0?e:0;if(e=yn(e),e===zl||e===-zl){var l=e<0?-1:1;return l*On}return e===e?e:0}function In(e){var l=wn(e),a=l%1;return l===l?a?l-a:l:0}function Tn(e,l,a,m){for(var r=e.length,c=a+(m?1:-1);m?c--:++c<r;)if(l(e[c],c,e))return c;return-1}var En=Math.max,Ln=Math.min;function Mn(e,l,a){var m=e==null?0:e.length;if(!m)return-1;var r=m-1;return a!==void 0&&(r=In(a),r=a<0?En(m+r,0):Ln(r,m-1)),Tn(e,Cn(l),r,!0)}const $n=e=>vn[e||"default"],Ql=xl({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:mn,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Vn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},kn=se({name:"ElTag"}),Dn=se({...kn,props:Ql,emits:Vn,setup(e,{emit:l}){const a=e,m=Rl(),r=ae("tag"),c=p(()=>{const{type:s,hit:w,effect:y,closable:C,round:T}=a;return[r.b(),r.is("closable",C),r.m(s),r.m(m.value),r.m(y),r.is("hit",w),r.is("round",T)]}),u=s=>{l("close",s)},g=s=>{l("click",s)};return(s,w)=>s.disableTransitions?(b(),L("span",{key:0,class:h(v(c)),style:J({backgroundColor:s.color}),onClick:g},[$("span",{class:h(v(r).e("content"))},[F(s.$slots,"default")],2),s.closable?(b(),P(v(yl),{key:0,class:h(v(r).e("close")),onClick:G(u,["stop"])},{default:I(()=>[_(v(El))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)):(b(),P(gl,{key:1,name:`${v(r).namespace.value}-zoom-in-center`,appear:""},{default:I(()=>[$("span",{class:h(v(c)),style:J({backgroundColor:s.color}),onClick:g},[$("span",{class:h(v(r).e("content"))},[F(s.$slots,"default")],2),s.closable?(b(),P(v(yl),{key:0,class:h(v(r).e("close")),onClick:G(u,["stop"])},{default:I(()=>[_(v(El))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)]),_:3},8,["name"]))}});var Pn=Te(Dn,[["__file","tag.vue"]]);const zn=ql(Pn),jl=Symbol("ElSelectGroup"),Qe=Symbol("ElSelect");function Kn(e,l){const a=Ne(Qe),m=Ne(jl,{disabled:!1}),r=p(()=>we(e.value)),c=p(()=>a.props.multiple?C(a.props.modelValue,e.value):T(e.value,a.props.modelValue)),u=p(()=>{if(a.props.multiple){const f=a.props.modelValue||[];return!c.value&&f.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),g=p(()=>e.label||(r.value?"":e.value)),s=p(()=>e.value||e.label||""),w=p(()=>e.disabled||l.groupDisabled||u.value),y=Cl(),C=(f=[],S)=>{if(r.value){const t=a.props.valueKey;return f&&f.some(O=>Re(R(O,t))===R(S,t))}else return f&&f.includes(S)},T=(f,S)=>{if(r.value){const{valueKey:t}=a.props;return R(f,t)===R(S,t)}else return f===S},M=()=>{!e.disabled&&!m.disabled&&(a.hoverIndex=a.optionsArray.indexOf(y.proxy))};H(()=>g.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),H(()=>e.value,(f,S)=>{const{remote:t,valueKey:O}=a.props;if(Object.is(f,S)||(a.onOptionDestroy(S,y.proxy),a.onOptionCreate(y.proxy)),!e.created&&!t){if(O&&we(f)&&we(S)&&f[O]===S[O])return;a.setSelected()}}),H(()=>m.disabled,()=>{l.groupDisabled=m.disabled},{immediate:!0});const{queryChange:E}=Re(a);return H(E,f=>{const{query:S}=v(f),t=new RegExp(hn(S),"i");l.visible=t.test(g.value)||e.created,l.visible||a.filteredOptionsCount--},{immediate:!0}),{select:a,currentLabel:g,currentValue:s,itemSelected:c,isDisabled:w,hoverItem:M}}const An=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=ae("select"),a=Wl(),m=p(()=>[l.be("dropdown","item"),l.is("disabled",v(g)),{selected:v(u),hover:v(C)}]),r=He({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:c,itemSelected:u,isDisabled:g,select:s,hoverItem:w}=Kn(e,r),{visible:y,hover:C}=Sl(r),T=Cl().proxy;s.onOptionCreate(T),Ul(()=>{const E=T.value,{selected:f}=s,t=(s.props.multiple?f:[f]).some(O=>O.value===T.value);A(()=>{s.cachedOptions.get(E)===T&&!t&&s.cachedOptions.delete(E)}),s.onOptionDestroy(E,T)});function M(){e.disabled!==!0&&r.groupDisabled!==!0&&s.handleOptionSelect(T)}return{ns:l,id:a,containerKls:m,currentLabel:c,itemSelected:u,isDisabled:g,select:s,hoverItem:w,visible:y,hover:C,selectOptionClick:M,states:r}}}),Bn=["id","aria-disabled","aria-selected"];function qn(e,l,a,m,r,c){return Ie((b(),L("li",{id:e.id,class:h(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...u)=>e.hoverItem&&e.hoverItem(...u)),onClick:l[1]||(l[1]=G((...u)=>e.selectOptionClick&&e.selectOptionClick(...u),["stop"]))},[F(e.$slots,"default",{},()=>[$("span",null,ee(e.currentLabel),1)])],42,Bn)),[[Ol,e.visible]])}var Tl=Te(An,[["render",qn],["__file","option.vue"]]);const Wn=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ne(Qe),l=ae("select"),a=p(()=>e.props.popperClass),m=p(()=>e.props.multiple),r=p(()=>e.props.fitInputWidth),c=B("");function u(){var g;c.value=`${(g=e.selectWrapper)==null?void 0:g.offsetWidth}px`}return wl(()=>{u(),Fl(e.selectWrapper,u)}),{ns:l,minWidth:c,popperClass:a,isMultiple:m,isFitInputWidth:r}}});function Fn(e,l,a,m,r,c){return b(),L("div",{class:h([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:J({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(b(),L("div",{key:0,class:h(e.ns.be("dropdown","header"))},[F(e.$slots,"header")],2)):z("v-if",!0),F(e.$slots,"default"),e.$slots.footer?(b(),L("div",{key:1,class:h(e.ns.be("dropdown","footer"))},[F(e.$slots,"footer")],2)):z("v-if",!0)],6)}var Nn=Te(Wn,[["render",Fn],["__file","select-dropdown.vue"]]);function Rn(e){const{t:l}=Il();return He({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}const Hn=(e,l,a)=>{const{t:m}=Il(),r=ae("select");_l({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},p(()=>e.suffixTransition===!1));const c=B(null),u=B(null),g=B(null),s=B(null),w=B(null),y=B(null),C=B(null),T=B(null),M=B(),E=Ll({query:""}),f=Ll(""),S=B([]);let t=0;const{form:O,formItem:U}=bn(),je=p(()=>!e.filterable||e.multiple||!l.visible),X=p(()=>e.disabled||(O==null?void 0:O.disabled)),Ee=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!X.value&&l.inputHovering&&n}),Le=p(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ge=p(()=>r.is("reverse",Le.value&&l.visible&&e.suffixTransition)),fe=p(()=>(O==null?void 0:O.statusIcon)&&(U==null?void 0:U.validateState)&&tn[U==null?void 0:U.validateState]),Me=p(()=>e.remote?300:0),ve=p(()=>e.loading?e.loadingText||m("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||m("el.select.noMatch"):l.options.size===0?e.noDataText||m("el.select.noData"):null),V=p(()=>{const n=Array.from(l.options.values()),o=[];return S.value.forEach(i=>{const d=n.findIndex(k=>k.currentLabel===i);d>-1&&o.push(n[d])}),o.length>=n.length?o:n}),Ue=p(()=>Array.from(l.cachedOptions.values())),Xe=p(()=>{const n=V.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ne=Rl(),Ye=p(()=>["small"].includes(ne.value)?"small":"default"),Je=p({get(){return l.visible&&ve.value!==!1},set(n){l.visible=n}});H([()=>X.value,()=>ne.value,()=>O==null?void 0:O.size],()=>{A(()=>{Q()})}),H(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),H(()=>e.modelValue,(n,o)=>{e.multiple&&(Q(),n&&n.length>0||u.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",Z(l.query))),me(),e.filterable&&!e.multiple&&(l.inputLength=20),!Dl(n,o)&&e.validateEvent&&(U==null||U.validate("change").catch(i=>en()))},{flush:"post",deep:!0}),H(()=>l.visible,n=>{var o,i,d,k,D;n?((i=(o=s.value)==null?void 0:o.updatePopper)==null||i.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(k=(d=g.value)==null?void 0:d.focus)==null||k.call(d),e.multiple?(D=u.value)==null||D.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),Z(l.query),!e.multiple&&!e.remote&&(E.value.query="",Oe(E),Oe(f)))):(e.filterable&&(ie(e.filterMethod)&&e.filterMethod(""),ie(e.remoteMethod)&&e.remoteMethod("")),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ze(),A(()=>{u.value&&u.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),a.emit("visible-change",n)}),H(()=>l.options.entries(),()=>{var n,o,i;if(!ln)return;(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&Q();const d=((i=C.value)==null?void 0:i.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!nn(e.modelValue)||!Array.from(d).includes(document.activeElement))&&me(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ve()},{flush:"post"}),H(()=>l.hoverIndex,n=>{on(n)&&n>-1?M.value=V.value[n]||{}:M.value={},V.value.forEach(o=>{o.hover=M.value===o})});const Q=()=>{A(()=>{var n,o;if(!c.value)return;const i=c.value.$el.querySelector("input");t=t||(i.clientHeight>0?i.clientHeight+2:0);const d=y.value,k=getComputedStyle(i).getPropertyValue(r.cssVarName("input-height")),D=Number.parseFloat(k)||$n(ne.value||(O==null?void 0:O.size)),q=ne.value||D===t||t<=0?D:t;!(i.offsetParent===null)&&(i.style.height=`${(l.selected.length===0?q:Math.max(d?d.clientHeight+(d.clientHeight>q?6:0):0,q))-2}px`),l.visible&&ve.value!==!1&&((o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n))})},Z=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(ie(e.filterMethod)||ie(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,A(()=>{var o,i;l.visible&&((i=(o=s.value)==null?void 0:o.updatePopper)==null||i.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&A(()=>{if(!X.value){const o=u.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,$e()}Q()}),e.remote&&ie(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):ie(e.filterMethod)?(e.filterMethod(n),Oe(f)):(l.filteredOptionsCount=l.optionsCount,E.value.query=n,Oe(E),Oe(f)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await A(),Ve())}},$e=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=u.value.value?"":l.cachedPlaceHolder)},Ve=()=>{const n=V.value.filter(d=>d.visible&&!d.disabled&&!d.states.groupDisabled),o=n.find(d=>d.created),i=n[0];l.hoverIndex=be(V.value,o||i)},me=()=>{var n;if(e.multiple)l.selectedLabel="";else{const i=ke(e.modelValue);(n=i.props)!=null&&n.created?(l.createdLabel=i.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=i.currentLabel,l.selected=i,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(i=>{o.push(ke(i))}),l.selected=o,A(()=>{Q()})},ke=n=>{let o;const i=bl(n).toLowerCase()==="object",d=bl(n).toLowerCase()==="null",k=bl(n).toLowerCase()==="undefined";for(let j=l.cachedOptions.size-1;j>=0;j--){const W=Ue.value[j];if(i?R(W.value,e.valueKey)===R(n,e.valueKey):W.value===n){o={value:n,currentLabel:W.currentLabel,isDisabled:W.isDisabled};break}}if(o)return o;const D=i?n.label:!d&&!k?n:"",q={value:n,currentLabel:D};return e.multiple&&(q.hitState=!1),q},Ze=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>V.value.findIndex(i=>R(i,n)===R(o,n)))):l.hoverIndex=-1:l.hoverIndex=V.value.findIndex(o=>pe(o)===pe(l.selected))},300)},xe=()=>{var n,o;_e(),(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&Q()},_e=()=>{var n;l.inputWidth=(n=c.value)==null?void 0:n.$el.offsetWidth},el=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,Z(l.query))},ll=Pl(()=>{el()},Me.value),nl=Pl(n=>{Z(n.target.value)},Me.value),oe=n=>{Dl(e.modelValue,n)||a.emit(Hl,n)},De=n=>Mn(n,o=>!l.disabledOptions.has(o)),ol=n=>{if(n.code!==kl.delete){if(n.target.value.length<=0&&!ge()){const o=e.modelValue.slice(),i=De(o);if(i<0)return;o.splice(i,1),a.emit(le,o),oe(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},re=(n,o)=>{const i=l.selected.indexOf(o);if(i>-1&&!X.value){const d=e.modelValue.slice();d.splice(i,1),a.emit(le,d),oe(d),a.emit("remove-tag",o.value)}n.stopPropagation(),de()},Pe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Al(o))for(const i of l.selected)i.isDisabled&&o.push(i.value);a.emit(le,o),oe(o),l.hoverIndex=-1,l.visible=!1,a.emit("clear"),de()},ze=n=>{var o;if(e.multiple){const i=(e.modelValue||[]).slice(),d=be(i,n.value);d>-1?i.splice(d,1):(e.multipleLimit<=0||i.length<e.multipleLimit)&&i.push(n.value),a.emit(le,i),oe(i),n.created&&(l.query="",Z(""),l.inputLength=20),e.filterable&&((o=u.value)==null||o.focus())}else a.emit(le,n.value),oe(n.value),l.visible=!1;tl(),!l.visible&&A(()=>{ue(n)})},be=(n=[],o)=>{if(!we(o))return n.indexOf(o);const i=e.valueKey;let d=-1;return n.some((k,D)=>Re(R(k,i))===R(o,i)?(d=D,!0):!1),d},tl=()=>{const n=u.value||c.value;n&&(n==null||n.focus())},ue=n=>{var o,i,d,k,D;const q=Array.isArray(n)?n[0]:n;let j=null;if(q!=null&&q.value){const W=V.value.filter(We=>We.value===q.value);W.length>0&&(j=W[0].$el)}if(s.value&&j){const W=(k=(d=(i=(o=s.value)==null?void 0:o.popperRef)==null?void 0:i.contentRef)==null?void 0:d.querySelector)==null?void 0:k.call(d,`.${r.be("dropdown","wrap")}`);W&&gn(W,j)}(D=T.value)==null||D.handleScroll()},he=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},il=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},al=n=>{n.code!==kl.backspace&&ge(!1),l.inputLength=u.value.value.length*15+20,Q()},ge=n=>{if(!Array.isArray(l.selected))return;const o=De(l.selected.map(d=>d.value)),i=l.selected[o];if(i)return n===!0||n===!1?(i.hitState=n,n):(i.hitState=!i.hitState,i.hitState)},sl=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,A(()=>Z(o));else{const i=o[o.length-1]||"";l.isOnComposition=!cn(i)}},rl=()=>{A(()=>ue(l.selected))},ul=n=>{l.focused||((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),l.focused=!0,a.emit("focus",n))},de=()=>{var n,o;l.visible?(n=u.value||c.value)==null||n.focus():(o=c.value)==null||o.focus()},dl=()=>{var n,o,i;l.visible=!1,(n=c.value)==null||n.blur(),(i=(o=g.value)==null?void 0:o.blur)==null||i.call(o)},Y=n=>{var o,i,d;(o=s.value)!=null&&o.isFocusInsideContent(n)||(i=w.value)!=null&&i.isFocusInsideContent(n)||(d=C.value)!=null&&d.contains(n.relatedTarget)||(l.visible&&ye(),l.focused=!1,a.emit("blur",n))},ce=n=>{Pe(n)},ye=()=>{l.visible=!1},Ce=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ke=n=>{n&&!l.mouseEnter||X.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!s.value||!s.value.isFocusInsideContent())&&(l.visible=!l.visible),de())},cl=()=>{l.visible?V.value[l.hoverIndex]&&ze(V.value[l.hoverIndex]):Ke()},pe=n=>we(n.value)?R(n.value,e.valueKey):n.value,Ae=p(()=>V.value.filter(n=>n.visible).every(n=>n.disabled)),pl=p(()=>e.multiple?l.selected.slice(0,e.maxCollapseTags):[]),Se=p(()=>e.multiple?l.selected.slice(e.maxCollapseTags):[]),Be=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!Ae.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=V.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Be(n),A(()=>ue(M.value))}},fl=()=>{l.mouseEnter=!0},qe=()=>{l.mouseEnter=!1},vl=(n,o)=>{var i,d;re(n,o),(d=(i=w.value)==null?void 0:i.updatePopper)==null||d.call(i)},ml=p(()=>({maxWidth:`${v(l.inputWidth)-32-(fe.value?22:0)}px`,width:"100%"}));return{optionList:S,optionsArray:V,hoverOption:M,selectSize:ne,handleResize:xe,debouncedOnInputChange:ll,debouncedQueryChange:nl,deletePrevTag:ol,deleteTag:re,deleteSelected:Pe,handleOptionSelect:ze,scrollToOption:ue,readonly:je,resetInputHeight:Q,showClose:Ee,iconComponent:Le,iconReverse:Ge,showNewOption:Xe,collapseTagSize:Ye,setSelected:me,managePlaceholder:$e,selectDisabled:X,emptyText:ve,toggleLastOptionHitState:ge,resetInputState:al,handleComposition:sl,onOptionCreate:he,onOptionDestroy:il,handleMenuEnter:rl,handleFocus:ul,focus:de,blur:dl,handleBlur:Y,handleClearClick:ce,handleClose:ye,handleKeydownEscape:Ce,toggleMenu:Ke,selectOption:cl,getValueKey:pe,navigateOptions:Be,handleDeleteTooltipTag:vl,dropMenuVisible:Je,queryChange:E,groupQueryChange:f,showTagList:pl,collapseTagList:Se,selectTagsStyle:ml,reference:c,input:u,iOSInput:g,tooltipRef:s,tagTooltipRef:w,tags:y,selectWrapper:C,scrollbar:T,handleMouseEnter:fl,handleMouseLeave:qe}};var Qn=se({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:a}){let m=[];function r(c,u){if(c.length!==u.length)return!1;for(const[g]of c.entries())if(c[g]!=u[g])return!1;return!0}return()=>{var c,u;const g=(c=l.default)==null?void 0:c.call(l),s=[];function w(y){Array.isArray(y)&&y.forEach(C=>{var T,M,E,f;const S=(T=(C==null?void 0:C.type)||{})==null?void 0:T.name;S==="ElOptionGroup"?w(!Al(C.children)&&!Array.isArray(C.children)&&ie((M=C.children)==null?void 0:M.default)?(E=C.children)==null?void 0:E.default():C.children):S==="ElOption"?s.push((f=C.props)==null?void 0:f.label):Array.isArray(C.children)&&w(C.children)})}return g.length&&w((u=g[0])==null?void 0:u.children),r(s,m)||(m=s,a("update-options",s)),g}}});const Kl="ElSelect",jn=se({name:Kl,componentName:Kl,components:{ElInput:pn,ElSelectMenu:Nn,ElOption:Tl,ElOptions:Qn,ElTag:zn,ElScrollbar:fn,ElTooltip:sn,ElIcon:yl},directives:{ClickOutside:rn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Sn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:un.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Vl,default:Xl},fitInputWidth:Boolean,suffixIcon:{type:Vl,default:Yl},tagType:{...Ql.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:dn,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[le,Hl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const a=ae("select"),m=ae("input"),{t:r}=Il(),c=Wl(),u=Rn(e),{optionList:g,optionsArray:s,hoverOption:w,selectSize:y,readonly:C,handleResize:T,collapseTagSize:M,debouncedOnInputChange:E,debouncedQueryChange:f,deletePrevTag:S,deleteTag:t,deleteSelected:O,handleOptionSelect:U,scrollToOption:je,setSelected:X,resetInputHeight:Ee,managePlaceholder:Le,showClose:Ge,selectDisabled:fe,iconComponent:Me,iconReverse:ve,showNewOption:V,emptyText:Ue,toggleLastOptionHitState:Xe,resetInputState:ne,handleComposition:Ye,onOptionCreate:Je,onOptionDestroy:Q,handleMenuEnter:Z,handleFocus:$e,focus:Ve,blur:me,handleBlur:ke,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:oe,handleDeleteTooltipTag:De,dropMenuVisible:ol,reference:re,input:Pe,iOSInput:ze,tooltipRef:be,tagTooltipRef:tl,tags:ue,selectWrapper:he,scrollbar:il,queryChange:al,groupQueryChange:ge,handleMouseEnter:sl,handleMouseLeave:rl,showTagList:ul,collapseTagList:de,selectTagsStyle:dl}=Hn(e,u,l),{inputWidth:Y,selected:ce,inputLength:ye,filteredOptionsCount:Ce,visible:Ke,selectedLabel:cl,hoverIndex:pe,query:Ae,inputHovering:pl,currentPlaceholder:Se,menuVisibleOnFocus:Be,isOnComposition:fl,options:qe,cachedOptions:vl,optionsCount:ml,prefixWidth:n}=Sl(u),o=p(()=>{const K=[a.b()],te=v(y);return te&&K.push(a.m(te)),e.disabled&&K.push(a.m("disabled")),K}),i=p(()=>[a.e("tags"),a.is("disabled",v(fe))]),d=p(()=>[a.b("tags-wrapper"),{"has-prefix":v(n)&&v(ce).length}]),k=p(()=>[a.e("input"),a.is(v(y)),a.is("disabled",v(fe))]),D=p(()=>[a.e("input"),a.is(v(y)),a.em("input","iOS")]),q=p(()=>[a.is("empty",!e.allowCreate&&!!v(Ae)&&v(Ce)===0)]),j=p(()=>({maxWidth:`${v(Y)>123&&v(ce).length>e.maxCollapseTags?v(Y)-123:v(Y)-75}px`})),W=p(()=>({marginLeft:`${v(n)}px`,flexGrow:1,width:`${v(ye)/(v(Y)-32)}%`,maxWidth:`${v(Y)-42}px`}));Bl(Qe,He({props:e,options:qe,optionsArray:s,cachedOptions:vl,optionsCount:ml,filteredOptionsCount:Ce,hoverIndex:pe,handleOptionSelect:U,onOptionCreate:Je,onOptionDestroy:Q,selectWrapper:he,selected:ce,setSelected:X,queryChange:al,groupQueryChange:ge})),wl(()=>{u.cachedPlaceHolder=Se.value=e.placeholder||(()=>r("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Se.value=""),Fl(he,T),e.remote&&e.multiple&&Ee(),A(()=>{const K=re.value&&re.value.$el;if(K&&(Y.value=K.getBoundingClientRect().width,l.slots.prefix)){const te=K.querySelector(`.${m.e("prefix")}`);n.value=Math.max(te.getBoundingClientRect().width+11,30)}}),X()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(le,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(le,"");const We=p(()=>{var K,te;return(te=(K=be.value)==null?void 0:K.popperRef)==null?void 0:te.contentRef});return{isIOS:an,onOptionsRendered:K=>{g.value=K},prefixWidth:n,selectSize:y,readonly:C,handleResize:T,collapseTagSize:M,debouncedOnInputChange:E,debouncedQueryChange:f,deletePrevTag:S,deleteTag:t,handleDeleteTooltipTag:De,deleteSelected:O,handleOptionSelect:U,scrollToOption:je,inputWidth:Y,selected:ce,inputLength:ye,filteredOptionsCount:Ce,visible:Ke,selectedLabel:cl,hoverIndex:pe,query:Ae,inputHovering:pl,currentPlaceholder:Se,menuVisibleOnFocus:Be,isOnComposition:fl,options:qe,resetInputHeight:Ee,managePlaceholder:Le,showClose:Ge,selectDisabled:fe,iconComponent:Me,iconReverse:ve,showNewOption:V,emptyText:Ue,toggleLastOptionHitState:Xe,resetInputState:ne,handleComposition:Ye,handleMenuEnter:Z,handleFocus:$e,focus:Ve,blur:me,handleBlur:ke,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:oe,dropMenuVisible:ol,reference:re,input:Pe,iOSInput:ze,tooltipRef:be,popperPaneRef:We,tags:ue,selectWrapper:he,scrollbar:il,wrapperKls:o,tagsKls:i,tagWrapperKls:d,inputKls:k,iOSInputKls:D,scrollbarKls:q,selectTagsStyle:dl,nsSelect:a,tagTextStyle:j,inputStyle:W,handleMouseEnter:sl,handleMouseLeave:rl,showTagList:ul,collapseTagList:de,tagTooltipRef:tl,contentId:c,hoverOption:w}}}),Gn=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Un=["disabled"],Xn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Yn(e,l,a,m,r,c){const u=x("el-tag"),g=x("el-tooltip"),s=x("el-icon"),w=x("el-input"),y=x("el-option"),C=x("el-options"),T=x("el-scrollbar"),M=x("el-select-menu"),E=Jl("click-outside");return Ie((b(),L("div",{ref:"selectWrapper",class:h(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...f)=>e.handleMouseEnter&&e.handleMouseEnter(...f)),onMouseleave:l[23]||(l[23]=(...f)=>e.handleMouseLeave&&e.handleMouseLeave(...f)),onClick:l[24]||(l[24]=G((...f)=>e.toggleMenu&&e.toggleMenu(...f),["stop"]))},[_(g,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:I(()=>{var f,S;return[$("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(b(),L("div",{key:0,ref:"tags",tabindex:"-1",class:h(e.tagsKls),style:J(e.selectTagsStyle),onClick:l[15]||(l[15]=(...t)=>e.focus&&e.focus(...t))},[e.collapseTags&&e.selected.length?(b(),P(gl,{key:0,onAfterLeave:e.resetInputHeight},{default:I(()=>[$("span",{class:h(e.tagWrapperKls)},[(b(!0),L(Fe,null,hl(e.showTagList,t=>(b(),P(u,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:I(()=>[$("span",{class:h(e.nsSelect.e("tags-text")),style:J(e.tagTextStyle)},ee(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(b(),P(u,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:I(()=>[e.collapseTagsTooltip?(b(),P(g,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:I(()=>[$("span",{class:h(e.nsSelect.e("tags-text"))},"+ "+ee(e.selected.length-e.maxCollapseTags),3)]),content:I(()=>[$("div",{class:h(e.nsSelect.e("collapse-tags"))},[(b(!0),L(Fe,null,hl(e.collapseTagList,t=>(b(),L("div",{key:e.getValueKey(t),class:h(e.nsSelect.e("collapse-tag"))},[_(u,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:O=>e.handleDeleteTooltipTag(O,t)},{default:I(()=>[$("span",{class:h(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},ee(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(b(),L("span",{key:1,class:h(e.nsSelect.e("tags-text"))},"+ "+ee(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):z("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):z("v-if",!0),e.collapseTags?z("v-if",!0):(b(),P(gl,{key:1,onAfterLeave:e.resetInputHeight},{default:I(()=>[$("span",{class:h(e.tagWrapperKls),style:J(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(b(!0),L(Fe,null,hl(e.selected,t=>(b(),P(u,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:I(()=>[$("span",{class:h(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},ee(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?Ie((b(),L("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:h(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:J(e.inputStyle),role:"combobox","aria-activedescendant":((f=e.hoverOption)==null?void 0:f.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=N(G(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=N(G(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=N((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=N(G((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=N((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=N(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Gn)),[[Zl,e.query]]):z("v-if",!0)],6)):z("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(b(),L("input",{key:1,ref:"iOSInput",class:h(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Un)):z("v-if",!0),_(w,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:h([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":((S=e.hoverOption)==null?void 0:S.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=N(G(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=N(G(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),N(G(e.selectOption,["stop","prevent"]),["enter"]),N(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=N(t=>e.visible=!1,["tab"]))]},$l({suffix:I(()=>[e.iconComponent&&!e.showClose?(b(),P(s,{key:0,class:h([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:I(()=>[(b(),P(Ml(e.iconComponent)))]),_:1},8,["class"])):z("v-if",!0),e.showClose&&e.clearIcon?(b(),P(s,{key:1,class:h([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:I(()=>[(b(),P(Ml(e.clearIcon)))]),_:1},8,["class","onClick"])):z("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:I(()=>[$("div",Xn,[F(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]}),content:I(()=>[_(M,null,$l({default:I(()=>[Ie(_(T,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:h(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:I(()=>[e.showNewOption?(b(),P(y,{key:0,value:e.query,created:!0},null,8,["value"])):z("v-if",!0),_(C,{onUpdateOptions:e.onOptionsRendered},{default:I(()=>[F(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(b(),L(Fe,{key:0},[e.$slots.empty?F(e.$slots,"empty",{key:0}):(b(),L("p",{key:1,class:h(e.nsSelect.be("dropdown","empty"))},ee(e.emptyText),3))],64)):z("v-if",!0)]),_:2},[e.$slots.header?{name:"header",fn:I(()=>[F(e.$slots,"header")])}:void 0,e.$slots.footer?{name:"footer",fn:I(()=>[F(e.$slots,"footer")])}:void 0]),1024)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[E,e.handleClose,e.popperPaneRef]])}var Jn=Te(jn,[["render",Yn],["__file","select.vue"]]);const Zn=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const l=ae("select"),a=B(!0),m=Cl(),r=B([]);Bl(jl,He({...Sl(e)}));const c=Ne(Qe);wl(()=>{r.value=u(m.subTree)});const u=s=>{const w=[];return Array.isArray(s.children)&&s.children.forEach(y=>{var C;y.type&&y.type.name==="ElOption"&&y.component&&y.component.proxy?w.push(y.component.proxy):(C=y.children)!=null&&C.length&&w.push(...u(y))}),w},{groupQueryChange:g}=Re(c);return H(g,()=>{a.value=r.value.some(s=>s.visible===!0)},{flush:"post"}),{visible:a,ns:l}}});function xn(e,l,a,m,r,c){return Ie((b(),L("ul",{class:h(e.ns.be("group","wrap"))},[$("li",{class:h(e.ns.be("group","title"))},ee(e.label),3),$("li",null,[$("ul",{class:h(e.ns.b("group"))},[F(e.$slots,"default")],2)])],2)),[[Ol,e.visible]])}var Gl=Te(Zn,[["render",xn],["__file","option-group.vue"]]);const fo=ql(Jn,{Option:Tl,OptionGroup:Gl}),vo=Nl(Tl);Nl(Gl);export{vo as E,fo as a,Tn as b};
