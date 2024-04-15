import{g as e,f as l}from"./focus-trap-5pso-6bw.js";import{o as t,u as s,e as a,b as r,d as n,_ as i,c as o,j as c,w as p,s as d}from"./el-button-wvYaTM86.js";import{d as u,i as y,D as b,aa as m,u as v,o as f,k as g,t as h,F as S,O as w,a as k,l as $,a0 as x,p as D,c as N,n as E,r as j,I as _,m as A,v as I}from"./index-afE12XCz.js";const z=Symbol("elDescriptions");var C=u({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup:()=>({descriptions:y(z,{})}),render(){var l,r,n,i,o,c,p;const d=e(this.cell),u=((null==(l=this.cell)?void 0:l.dirs)||[]).map((e=>{const{dir:l,arg:t,modifiers:s,value:a}=e;return[l,a,t,s]})),{border:y,direction:v}=this.descriptions,f="vertical"===v,g=(null==(i=null==(n=null==(r=this.cell)?void 0:r.children)?void 0:n.label)?void 0:i.call(n))||d.label,h=null==(p=null==(c=null==(o=this.cell)?void 0:o.children)?void 0:c.default)?void 0:p.call(c),S=d.span,w=d.align?`is-${d.align}`:"",k=d.labelAlign?`is-${d.labelAlign}`:w,$=d.className,x=d.labelClassName,D={width:t(d.width),minWidth:t(d.minWidth)},N=s("descriptions");switch(this.type){case"label":return b(m(this.tag,{style:D,class:[N.e("cell"),N.e("label"),N.is("bordered-label",y),N.is("vertical-label",f),k,x],colSpan:f?S:1},g),u);case"content":return b(m(this.tag,{style:D,class:[N.e("cell"),N.e("content"),N.is("bordered-content",y),N.is("vertical-content",f),w,$],colSpan:f?S:2*S-1},h),u);default:return b(m("td",{style:D,class:[N.e("cell"),w],colSpan:S},[a(g)?void 0:m("span",{class:[N.e("label"),x]},g),m("span",{class:[N.e("content"),$]},h)]),u)}}});const W=r({row:{type:n(Array),default:()=>[]}}),O={key:1},B=u({name:"ElDescriptionsRow"});var F=i(u({...B,props:W,setup(e){const l=y(z,{});return(e,t)=>"vertical"===v(l).direction?(f(),g(S,{key:0},[h("tr",null,[(f(!0),g(S,null,w(e.row,((e,l)=>(f(),k(v(C),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),h("tr",null,[(f(!0),g(S,null,w(e.row,((e,l)=>(f(),k(v(C),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(f(),g("tr",O,[(f(!0),g(S,null,w(e.row,((e,t)=>(f(),g(S,{key:`tr3-${t}`},[v(l).border?(f(),g(S,{key:0},[$(v(C),{cell:e,tag:"td",type:"label"},null,8,["cell"]),$(v(C),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(f(),k(v(C),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","descriptions-row.vue"]]);const R=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:o,title:{type:String,default:""},extra:{type:String,default:""}}),q=u({name:"ElDescriptions"});var G=i(u({...q,props:R,setup(e){const t=e,a=s("descriptions"),r=c(),n=x();D(z,t);const i=N((()=>[a.b(),a.m(r.value)])),o=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),p=()=>{if(!n.default)return[];const e=l(n.default()).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let a=[],r=t.column,i=0;return e.forEach(((l,n)=>{var c;const p=(null==(c=l.props)?void 0:c.span)||1;if(n<e.length-1&&(i+=p>r?r:p),n===e.length-1){const e=t.column-i%t.column;return a.push(o(l,e,r,!0)),void s.push(a)}p<r?(r-=p,a.push(l)):(a.push(o(l,p,r)),s.push(a),r=t.column,a=[])})),s};return(e,l)=>(f(),g("div",{class:E(v(i))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(f(),g("div",{key:0,class:E(v(a).e("header"))},[h("div",{class:E(v(a).e("title"))},[j(e.$slots,"title",{},(()=>[A(I(e.title),1)]))],2),h("div",{class:E(v(a).e("extra"))},[j(e.$slots,"extra",{},(()=>[A(I(e.extra),1)]))],2)],2)):_("v-if",!0),h("div",{class:E(v(a).e("body"))},[h("table",{class:E([v(a).e("table"),v(a).is("bordered",e.border)])},[h("tbody",null,[(f(!0),g(S,null,w(p(),((e,l)=>(f(),k(F,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","description.vue"]]);const H=u({name:"ElDescriptionsItem",props:r({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}})}),J=p(G,{DescriptionsItem:H}),K=d(H);export{K as E,J as a};
