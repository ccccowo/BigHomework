import{_ as C,b as m,d as t,n as S}from"./base-fLZH5HYv.js";import{u as b,a as E}from"./el-popper-VtmR0wtm.js";import{E as o}from"./vnode-V_EyjqrJ.js";import{d as T,r as O,h as _,p as I,i as L,B as $,u as f,a5 as h}from"./index-8Q_9VYoB.js";const M=T({inheritAttrs:!1});function w(n,l,i,s,a,d){return O(n.$slots,"default")}var B=C(M,[["render",w],["__file","collection.vue"]]);const P=T({name:"ElCollectionItem",inheritAttrs:!1});function v(n,l,i,s,a,d){return O(n.$slots,"default")}var A=C(P,[["render",v],["__file","collection-item.vue"]]);const K="data-el-collection-item",x=n=>{const l=`El${n}Collection`,i=`${l}Item`,s=Symbol(l),a=Symbol(i),d={...B,name:l,setup(){const u=_(null),c=new Map;I(s,{itemMap:c,getItems:()=>{const r=f(u);if(!r)return[];const e=Array.from(r.querySelectorAll(`[${K}]`));return[...c.values()].sort((N,g)=>e.indexOf(N.ref)-e.indexOf(g.ref))},collectionRef:u})}},y={...A,name:i,setup(u,{attrs:c}){const p=_(null),r=L(s,void 0);I(a,{collectionItemRef:p}),$(()=>{const e=f(p);e&&r.itemMap.set(e,{ref:e,...c})}),h(()=>{const e=f(p);r.itemMap.delete(e)})}};return{COLLECTION_INJECTION_KEY:s,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:d,ElCollectionItem:y}},V=m({trigger:b.trigger,effect:{...E.effect,default:"light"},type:{type:t(String)},placement:{type:t(String),default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:t([Number,String]),default:0},maxHeight:{type:t([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:t(Object)},teleported:E.teleported}),k=m({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:S}}),q=m({onKeydown:{type:t(Function)}}),Y=[o.down,o.pageDown,o.home],j=[o.up,o.pageUp,o.end],z=[...Y,...j],{ElCollection:G,ElCollectionItem:H,COLLECTION_INJECTION_KEY:W,COLLECTION_ITEM_INJECTION_KEY:Q}=x("Dropdown");export{Q as C,G as E,z as F,j as L,k as a,K as b,x as c,V as d,H as e,q as f,W as g};
