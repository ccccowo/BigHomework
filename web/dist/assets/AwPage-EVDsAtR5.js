import{E as e,a}from"./el-button-wvYaTM86.js";import{E as l}from"./el-overlay-3IU7Au7U.js";import{u as s,d as t,E as o}from"./imghandle-h_XX_iF-.js";/* empty css                */import{E as i,a as u}from"./el-switch-toBBjcd3.js";import{E as r,a as c,b as d}from"./el-empty-yt1aZcAy.js";import"./el-tab-pane-w40geAFS.js";import{E as n}from"./el-scrollbar-vybkKUqc.js";import{m as p,r as m,s as f,d as v}from"./test-y3wzIP-I.js";import{_ as g,h as b,j,o as y,k as _,t as w,l as h,w as k,F as x,a as I,I as C,O as V,m as E,v as q,x as U,y as A}from"./index-afE12XCz.js";import{E as T}from"./index-N5fRpmYF.js";import"./index-KKobhxVb.js";import"./focus-trap-5pso-6bw.js";import"./_baseClone-SyVPMbir.js";import"./_initCloneObject-zYbwKfTJ.js";import"./request-MLV9EytQ.js";import"./axios--miOKxDG.js";import"./validator-X17wg_rN.js";import"./directive-J_YZ0NkB.js";import"./strings-x1tLdWO8.js";import"./request2-8GU6WOJp.js";const z=e=>(U("data-v-6696df2b"),e=e(),A(),e),P=z((()=>w("div",{class:"topTitle"}," 答卷上传 ",-1))),D={class:"container"},J={class:"bottom"},L=["onClick"],N={href:"javascript:;"},O={class:"content"},B=z((()=>w("div",{class:"test"},null,-1))),F={class:"bottom"},G={href:"javascript:;"},H={class:"content"},K={class:"switch"},R=z((()=>w("div",{class:"el-upload__text"},[E(" Drop file here or "),w("em",null,"click to upload")],-1))),$=z((()=>w("div",{class:"el-upload__tip"}," jpg/png files ",-1))),M=z((()=>w("div",{class:"el-upload__text"},[E(" Drop file here or "),w("em",null,"click to upload")],-1))),Q=z((()=>w("div",{class:"el-upload__tip"}," xlsx file ",-1))),S={key:2,class:"img"},W=z((()=>w("div",{class:"title"},"学生答卷:",-1))),X=["src"],Y={key:3,class:"excel"},Z=z((()=>w("div",{class:"title"},"准考证号:",-1))),ee=["href"],ae={class:"dialog-footer"},le=g({__name:"AwPage",setup(g){const U=b("first"),A=b([]),z=async()=>{const e=await p();A.value=e.data.data.filter((e=>0==e.hasAnswers))};z();const le=b({paperId:1,imgs:[],cert:""}),se=b(""),te=b(!1),oe=b([]),ie=b([]),ue=async()=>{if(0==oe.value.length)return void T({message:"请上传答卷",type:"warning"});for(let a of oe.value)if("image/jpeg"!==a.raw.type&&"image/png"!==a.raw.type)return T.error("Picture must be JPG/Peng format!"),!1;const e=i.service({fullscreen:!0});for(let a of oe.value){const e=a.raw.name,l=await s(e,a.raw);le.value.imgs.push(l.data)}oe.value=[],e.close(),T({message:"上传答卷成功！",type:"success"})},re=async()=>{if(0==ie.value.length)return void T({message:"请上传准考证",type:"warning"});const e=i.service({fullscreen:!0});for(let a of ie.value){const e=a.raw.name,l=await s(e,a.raw);le.value.cert=l.data}ie.value=[],e.close(),T({message:"上传准考证成功",type:"success"})},ce=async()=>{const e=i.service({fullscreen:!0});1==pe.value&&(le.value.imgs=me.value,le.value.cert=fe.value);const a=await t(le.value),l=a.data.ans,s=a.data.cert;for(let t of l){const e={examId:se.value,paperId:le.value.paperId,certId:t.certId,quesId:t.quesId,ansImg:t.url,scanResult:"TAT"};await m(e)}const o={examId:se.value,certs:s};await f(o),T({message:"上传成功",type:"success"}),await v(se.value,1),e.close(),te.value=!1,z(),ne()},de=b([]),ne=async()=>{const e=await p();de.value=e.data.data.filter((e=>1==e.hasAnswers))};ne();const pe=b(!1),me=b(["http://8.137.85.0:8008/files/download/img28e88b06-fb2b-11ee-9b91-00163e04f5e4.jpg","http://8.137.85.0:8008/files/download/img35d347a2-fb2b-11ee-8aee-00163e04f5e4.jpg","http://8.137.85.0:8008/files/download/img3fbdba2c-fb2b-11ee-8aee-00163e04f5e4.jpg","http://8.137.85.0:8008/files/download/img4bb1e2cc-fb2b-11ee-8aee-00163e04f5e4.jpg","http://8.137.85.0:8008/files/download/img55008978-fb2b-11ee-8aee-00163e04f5e4.jpg"]),fe=b("http://8.137.85.0:8008/files/download/img3a59e4ce-fb2c-11ee-9b91-00163e04f5e4.xlsx");return(s,t)=>{const i=d,p=e,m=n,f=c,v=r,g=u,b=j("upload-filled"),T=a,z=o,ne=l;return y(),_(x,null,[P,w("div",D,[h(v,{type:"card",modelValue:U.value,"onUpdate:modelValue":t[1]||(t[1]=e=>U.value=e),class:"demo-tabs",onTabClick:s.handleClick},{default:k((()=>[h(f,{label:"未开始",name:"first"},{default:k((()=>[0===A.value.length?(y(),I(i,{key:0,class:"bottom","image-size":200})):C("",!0),w("ul",J,[h(m,null,{default:k((()=>[(y(!0),_(x,null,V(A.value,(e=>(y(),_("li",{key:e.examId,onClick:a=>{return l=e,le.value.paperId=l.paperIds.slice(1,-1),void(se.value=l.examId);var l}},[w("a",N,[h(p,{color:"#045afe",plain:"",type:"success"},{default:k((()=>[E("答卷")])),_:1}),w("div",O,[E(q(e.examName)+" ",1),h(p,{onClick:t[0]||(t[0]=e=>te.value=!0),class:"start",type:"primary",plain:""},{default:k((()=>[E("上传答卷")])),_:1})])])],8,L)))),128))])),_:1})]),B])),_:1}),h(f,{label:"已完成",name:"three"},{default:k((()=>[0===de.value.length?(y(),I(i,{key:0,class:"bottom","image-size":200})):C("",!0),w("ul",F,[(y(!0),_(x,null,V(de.value,(e=>(y(),_("li",{key:e.examId},[w("a",G,[h(p,{color:"#045afe",plain:"",type:"success"},{default:k((()=>[E("答卷")])),_:1}),w("div",H,[E(q(e.examName)+" ",1),h(p,{onClick:a=>s.$router.push({path:"/assign",query:{examId:e.examId}}),class:"start",type:"primary",plain:""},{default:k((()=>[E("分配阅卷任务")])),_:2},1032,["onClick"])])])])))),128))])])),_:1})])),_:1},8,["modelValue","onTabClick"]),h(ne,{modelValue:te.value,"onUpdate:modelValue":t[6]||(t[6]=e=>te.value=e)},{footer:k((()=>[w("span",ae,[h(p,{onClick:t[5]||(t[5]=e=>te.value=!1)},{default:k((()=>[E("取消上传")])),_:1}),h(p,{onClick:ce,color:"#045afe"},{default:k((()=>[E("确认上传")])),_:1})])])),default:k((()=>[w("div",K,[h(g,{modelValue:pe.value,"onUpdate:modelValue":t[2]||(t[2]=e=>pe.value=e)},null,8,["modelValue"]),E("是否开启演示模式")]),pe.value?C("",!0):(y(),I(z,{key:0,"file-list":oe.value,"onUpdate:fileList":t[3]||(t[3]=e=>oe.value=e),class:"upload-demo",drag:"",action:"#",multiple:"","auto-upload":!1},{tip:k((()=>[$,h(p,{type:"success",plain:"",size:"large",onClick:ue},{default:k((()=>[E("确认上传答卷")])),_:1})])),default:k((()=>[h(T,{class:"el-icon--upload"},{default:k((()=>[h(b)])),_:1}),R])),_:1},8,["file-list"])),pe.value?C("",!0):(y(),I(z,{key:1,"file-list":ie.value,"onUpdate:fileList":t[4]||(t[4]=e=>ie.value=e),class:"upload-demo",drag:"",action:"#",multiple:"","auto-upload":!1},{tip:k((()=>[Q,h(p,{type:"success",plain:"",size:"large",onClick:re},{default:k((()=>[E("确认上传准考证")])),_:1})])),default:k((()=>[h(T,{class:"el-icon--upload"},{default:k((()=>[h(b)])),_:1}),M])),_:1},8,["file-list"])),pe.value?(y(),_("div",S,[W,(y(!0),_(x,null,V(me.value,(e=>(y(),_("img",{src:e},null,8,X)))),256))])):C("",!0),pe.value?(y(),_("div",Y,[Z,w("a",{href:fe.value}," 本次考试准考证号",8,ee)])):C("",!0)])),_:1},8,["modelValue"])])],64)}}},[["__scopeId","data-v-6696df2b"]]);export{le as default};
