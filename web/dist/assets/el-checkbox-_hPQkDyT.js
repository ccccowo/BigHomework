import{M as R,i as I,c as p,A as X,T as Y,a7 as Z,h as G,ai as E,f as fe,aq as A,d as L,a0 as _,o as x,a as ee,w as ne,u,n as C,S as w,L as $,j as y,aW as F,D as N,s as K,r as P,F as ke,t as ae,l as le,I as z,e as te,b as he,p as pe,U as ge}from"./index-8Q_9VYoB.js";import{F as H,S as q,o as Ce,B as xe,G as ye,H as Se,u as oe,U as V,d as Le,b as O,c as W,e as se}from"./el-button-ERDUNANg.js";import{i as j,f as D,c as T,e as ie,a as Be,u as M,_ as U,b as Ee,d as Ie,w as we,k as ue}from"./base-fLZH5HYv.js";import{i as $e}from"./isEqual-L6DaMkDH.js";import{i as Fe,h as Ne}from"./hasIn-iSdSfYCx.js";import{l as Ve,a as Ge}from"./_Uint8Array-LNA8QHR0.js";function ze(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var De=800,Te=16,Pe=Date.now;function Oe(e){var n=0,l=0;return function(){var a=Pe(),s=Te-(a-l);if(l=a,s>0){if(++n>=De)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Me(e){return function(){return e}}var Ue=H?function(e,n){return H(e,"toString",{configurable:!0,enumerable:!1,value:Me(n),writable:!0})}:Fe;const Re=Ue;var Ae=Oe(Re),J=Math.max;function Ke(e,n,l){return n=J(n===void 0?e.length-1:n,0),function(){for(var a=arguments,s=-1,d=J(a.length-n,0),b=Array(d);++s<d;)b[s]=a[n+s];s=-1;for(var t=Array(n+1);++s<n;)t[s]=a[s];return t[n]=l(b),ze(e,this,t)}}var Q=q?q.isConcatSpreadable:void 0;function He(e){return Ce(e)||Ve(e)||!!(Q&&e&&e[Q])}function re(e,n,l,a,s){var d=-1,b=e.length;for(l||(l=He),s||(s=[]);++d<b;){var t=e[d];n>0&&l(t)?n>1?re(t,n-1,l,a,s):Ge(s,t):a||(s[s.length]=t)}return s}function qe(e){var n=e==null?0:e.length;return n?re(e,1):[]}function We(e){return Ae(Ke(e,void 0,qe),e+"")}function je(e,n,l){for(var a=-1,s=n.length,d={};++a<s;){var b=n[a],t=xe(e,b);l(t,b)&&ye(d,Se(b,e),t)}return d}function Je(e,n){return je(e,n,function(l,a){return Ne(e,a)})}var Qe=We(function(e,n){return e==null?{}:Je(e,n)});const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:oe,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},be={[V]:e=>R(e)||j(e)||D(e),change:e=>R(e)||j(e)||D(e)},B=Symbol("checkboxGroupContextKey"),Xe=({model:e,isChecked:n})=>{const l=I(B,void 0),a=p(()=>{var d,b;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(b=l==null?void 0:l.min)==null?void 0:b.value;return!T(t)&&e.value.length>=t&&!n.value||!T(m)&&e.value.length<=m&&n.value});return{isDisabled:Le(p(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},Ye=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:d})=>{const b=I(B,void 0),{formItem:t}=O(),{emit:m}=Z();function o(i){var v,k;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(k=e.falseLabel)!=null?k:!1}function f(i,v){m("change",o(i),v)}function h(i){if(l.value)return;const v=i.target;m("change",o(v.checked),i)}async function S(i){l.value||!a.value&&!s.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=o([!1,e.falseLabel].includes(n.value)),await Y(),f(n.value,i)))}const r=p(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return X(()=>e.modelValue,()=>{r.value&&(t==null||t.validate("change").catch(i=>ie()))}),{handleChange:h,onClickRoot:S}},Ze=e=>{const n=G(!1),{emit:l}=Z(),a=I(B,void 0),s=p(()=>T(a)===!1),d=G(!1);return{model:p({get(){var t,m;return s.value?(t=a==null?void 0:a.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:n.value},set(t){var m,o;s.value&&E(t)?(d.value=((m=a==null?void 0:a.max)==null?void 0:m.value)!==void 0&&t.length>(a==null?void 0:a.max.value),d.value===!1&&((o=a==null?void 0:a.changeEvent)==null||o.call(a,t))):(l(V,t),n.value=t)}}),isGroup:s,isLimitExceeded:d}},_e=(e,n,{model:l})=>{const a=I(B,void 0),s=G(!1),d=p(()=>{const o=l.value;return D(o)?o:E(o)?fe(e.label)?o.map(A).some(f=>$e(f,e.label)):o.map(A).includes(e.label):o!=null?o===e.trueLabel:!!o}),b=W(p(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value}),{prop:!0}),t=W(p(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value})),m=p(()=>!!n.default||!Be(e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},en=(e,{model:n})=>{function l(){E(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},ce=(e,n)=>{const{formItem:l}=O(),{model:a,isGroup:s,isLimitExceeded:d}=Ze(e),{isFocused:b,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=_e(e,n,{model:a}),{isDisabled:h}=Xe({model:a,isChecked:t}),{inputId:S,isLabeledByFormItem:r}=se(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:s}),{handleChange:i,onClickRoot:v}=Ye(e,{model:a,isLimitExceeded:d,hasOwnLabel:f,isDisabled:h,isLabeledByFormItem:r});return en(e,{model:a}),{inputId:S,isLabeledByFormItem:r,isChecked:t,isDisabled:h,isFocused:b,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:a,handleChange:i,onClickRoot:v}},nn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],an=["id","indeterminate","disabled","value","name","tabindex"],ln=L({name:"ElCheckbox"}),tn=L({...ln,props:de,emits:be,setup(e){const n=e,l=_(),{inputId:a,isLabeledByFormItem:s,isChecked:d,isDisabled:b,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:h,onClickRoot:S}=ce(n,l),r=M("checkbox"),i=p(()=>[r.b(),r.m(m.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=p(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",t.value)]);return(k,c)=>(x(),ee(te(!u(o)&&u(s)?"span":"label"),{class:C(u(i)),"aria-controls":k.indeterminate?k.controls:null,onClick:u(S)},{default:ne(()=>[K("span",{class:C(u(v))},[k.trueLabel||k.falseLabel?N((x(),y("input",{key:0,id:u(a),"onUpdate:modelValue":c[0]||(c[0]=g=>w(f)?f.value=g:null),class:C(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,name:k.name,tabindex:k.tabindex,disabled:u(b),"true-value":k.trueLabel,"false-value":k.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(h)&&u(h)(...g)),onFocus:c[2]||(c[2]=g=>t.value=!0),onBlur:c[3]||(c[3]=g=>t.value=!1),onClick:c[4]||(c[4]=$(()=>{},["stop"]))},null,42,nn)),[[F,u(f)]]):N((x(),y("input",{key:1,id:u(a),"onUpdate:modelValue":c[5]||(c[5]=g=>w(f)?f.value=g:null),class:C(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,disabled:u(b),value:k.label,name:k.name,tabindex:k.tabindex,onChange:c[6]||(c[6]=(...g)=>u(h)&&u(h)(...g)),onFocus:c[7]||(c[7]=g=>t.value=!0),onBlur:c[8]||(c[8]=g=>t.value=!1),onClick:c[9]||(c[9]=$(()=>{},["stop"]))},null,42,an)),[[F,u(f)]]),K("span",{class:C(u(r).e("inner"))},null,2)],2),u(o)?(x(),y("span",{key:0,class:C(u(r).e("label"))},[P(k.$slots,"default"),k.$slots.default?z("v-if",!0):(x(),y(ke,{key:0},[le(ae(k.label),1)],64))],2)):z("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var on=U(tn,[["__file","checkbox.vue"]]);const sn=["name","tabindex","disabled","true-value","false-value"],un=["name","tabindex","disabled","value"],rn=L({name:"ElCheckboxButton"}),dn=L({...rn,props:de,emits:be,setup(e){const n=e,l=_(),{isFocused:a,isChecked:s,isDisabled:d,checkboxButtonSize:b,model:t,handleChange:m}=ce(n,l),o=I(B,void 0),f=M("checkbox"),h=p(()=>{var r,i,v,k;const c=(i=(r=o==null?void 0:o.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(k=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?k:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",b.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",a.value)]);return(r,i)=>(x(),y("label",{class:C(u(S))},[r.trueLabel||r.falseLabel?N((x(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>w(t)?t.value=v:null),class:C(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[2]||(i[2]=v=>a.value=!0),onBlur:i[3]||(i[3]=v=>a.value=!1),onClick:i[4]||(i[4]=$(()=>{},["stop"]))},null,42,sn)),[[F,u(t)]]):N((x(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>w(t)?t.value=v:null),class:C(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[7]||(i[7]=v=>a.value=!0),onBlur:i[8]||(i[8]=v=>a.value=!1),onClick:i[9]||(i[9]=$(()=>{},["stop"]))},null,42,un)),[[F,u(t)]]),r.$slots.default||r.label?(x(),y("span",{key:2,class:C(u(f).be("button","inner")),style:he(u(s)?u(h):void 0)},[P(r.$slots,"default",{},()=>[le(ae(r.label),1)])],6)):z("v-if",!0)],2))}});var ve=U(dn,[["__file","checkbox-button.vue"]]);const bn=Ee({modelValue:{type:Ie(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:oe,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),cn={[V]:e=>E(e),change:e=>E(e)},vn=L({name:"ElCheckboxGroup"}),mn=L({...vn,props:bn,emits:cn,setup(e,{emit:n}){const l=e,a=M("checkbox"),{formItem:s}=O(),{inputId:d,isLabeledByFormItem:b}=se(l,{formItemContext:s}),t=async o=>{n(V,o),await Y(),n("change",o)},m=p({get(){return l.modelValue},set(o){t(o)}});return pe(B,{...Qe(ge(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),X(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>ie()))}),(o,f)=>{var h;return x(),ee(te(o.tag),{id:u(d),class:C(u(a).b("group")),role:"group","aria-label":u(b)?void 0:o.label||"checkbox-group","aria-labelledby":u(b)?(h=u(s))==null?void 0:h.labelId:void 0},{default:ne(()=>[P(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var me=U(mn,[["__file","checkbox-group.vue"]]);const xn=we(on,{CheckboxButton:ve,CheckboxGroup:me});ue(ve);const yn=ue(me);export{xn as E,yn as a,re as b,Ke as o,Ae as s};
