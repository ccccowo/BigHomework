import{i as e}from"./request2-8GU6WOJp.js";const a=()=>e.get("/showQues/all/"),s=a=>e.post("/ques/add/",a),d=a=>e.post("/quesKind/add/",a),t=a=>e.get(`/showQues/byQuesKindId/?quesKindId=${a}`),p=a=>e.get(`/showQues/byQuesId/?quesId=${a}`),o=a=>e.delete(`/delete/Ques/byQuesId/?quesId=${a}`),r=()=>e.get("/showPaper/all"),m=a=>e.post("/paper/add/",a),I=a=>e.get(`/showPaper/byPaperId/?paperId=${a}`),l=a=>e.delete(`/delete/Paper/byPaperId/?paperId=${a}`),x=()=>e.get("/showExam/all/"),u=()=>e.get("/exam/beforeAdd/"),g=a=>e.post("/exam/add/",a),$=a=>e.delete(`/exam/cancel/?examId=${a}`),n=a=>e.get(`/showExam/byExamId/?examId=${a}`),b=a=>e.delete(`/delete/Exam/byExamId/?examId=${a}`),h=(a,s)=>e.get(`/exam/changeHasAnswer/?examId=${a}&status=${s}`),w=a=>e.post("/answer/add/",a),y=a=>e.post("/certify/add/",a),i=(a,s)=>e.get(`/analyse/normal/?paperId=${a}&examId=${s}`);export{s as a,m as b,I as c,h as d,p as e,u as f,n as g,r as h,g as i,$ as j,o as k,a as l,x as m,d as n,t as o,l as p,b as q,w as r,y as s,i as t};
