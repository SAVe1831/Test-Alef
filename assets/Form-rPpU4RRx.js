import{_ as b,r as h,w as N,o as _,c as u,a as e,b as g,v as D,d as S,F as C,e as A,f as I,g as f,u as k}from"./index-DdjB1iei.js";const U={class:"personal-data"},$={class:"personal-data__form"},y={class:"personal-data__item"},V={class:"personal-data__item"},F={__name:"PersonalData",props:{parentName:String,parentAge:Number},setup(m,{emit:d}){const l=m,c=d,n=h(""),i=h(null),p=()=>{c("update:personalData",{parentName:n.value,parentAge:i.value})};return N(()=>l.parentName,o=>{n.value=o}),N(()=>l.parentAge,o=>{i.value=o}),(o,t)=>(_(),u("div",U,[t[4]||(t[4]=e("p",{class:"personal-data__title"},"Персональные данные",-1)),e("div",$,[e("div",y,[t[2]||(t[2]=e("label",{class:"personal-data__label",for:"name"},"Имя",-1)),g(e("input",{class:"personal-data__input",type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r),onInput:p,placeholder:"Ваше имя"},null,544),[[D,n.value]])]),e("div",V,[t[3]||(t[3]=e("label",{class:"personal-data__label",for:"age"},"Возраст",-1)),g(e("input",{class:"personal-data__input personal-data__input-number",type:"number",id:"age","onUpdate:modelValue":t[1]||(t[1]=r=>i.value=r),onInput:p,placeholder:"Ваш возраст"},null,544),[[D,i.value]])])])]))}},L=b(F,[["__scopeId","data-v-39f91d45"]]),w=""+new URL("../plus.svg",import.meta.url).href,P=""+new URL("../delete.svg",import.meta.url).href,x={class:"children-data"},B={class:"children-data__top"},J={class:"children-data__list"},O={class:"children-data__name"},T=["for"],M=["id","onUpdate:modelValue"],R={class:"children-data__age"},E=["for"],j=["id","onUpdate:modelValue"],q=["onClick"],z=["onClick"],G={__name:"ChildrenData",props:{childrenData:Array},setup(m,{emit:d}){const l=m,c=d,n=h([]),i=()=>{n.value.length<5&&n.value.push({name:"",age:""})},p=t=>{n.value.splice(t,1),o()},o=()=>{c("update:childrenData",n.value)};return N(l,()=>{n.value=l.childrenData}),(t,r)=>(_(),u("div",x,[e("div",B,[r[1]||(r[1]=e("p",{class:"children-data__title"},"Дети (макс. 5)",-1)),n.value.length<5?(_(),u("button",{key:0,class:"children-data__add",onClick:i},r[0]||(r[0]=[e("img",{src:w,alt:"plus"},null,-1),e("span",null,"Добавить ребенка",-1)]))):S("",!0)]),e("div",J,[(_(!0),u(C,null,A(n.value,(a,s)=>(_(),u("div",{key:s,class:"children-data__list-child-item"},[e("div",O,[e("label",{class:"children-data__label",for:"name-"+s},"Имя",8,T),g(e("input",{class:"children-data__input",type:"text",id:"name-"+s,"onUpdate:modelValue":v=>a.name=v,onInput:o,placeholder:"Имя ребенка"},null,40,M),[[D,a.name]])]),e("div",R,[e("label",{class:"children-data__label",for:"age-"+s},"Возраст",8,E),g(e("input",{class:"children-data__input children-data__input-number",type:"number",id:"age-"+s,"onUpdate:modelValue":v=>a.age=v,onInput:o,placeholder:"Возраст ребенка"},null,40,j),[[D,a.age]])]),e("span",{class:"children-data__delete-text",onClick:v=>p(s)},"Удалить",8,q),e("img",{class:"children-data__delete-icon",onClick:v=>p(s),src:P,alt:"delete"},null,8,z)]))),128))])]))}},H=b(G,[["__scopeId","data-v-8aec1412"]]),K={};function Q(m,d){return _(),u("div",null,d[0]||(d[0]=[e("button",null,"Сохранить",-1)]))}const W=b(K,[["render",Q],["__scopeId","data-v-c35c5c90"]]),X={class:"button-container"},Z={__name:"Form",setup(m){const d=k(),l=h({parentName:"",parentAge:null}),c=h([]),n=a=>{l.value.parentName=a.parentName,l.value.parentAge=a.parentAge,o(l.value)},i=a=>{c.value=a,t(a)},p=()=>{d.commit("setPersonalData",l.value),d.commit("setChildrenData",c.value)},o=a=>{localStorage.setItem("personalData",JSON.stringify(a))},t=a=>{localStorage.setItem("childrenData",JSON.stringify(a))},r=()=>{const a=localStorage.getItem("personalData");a&&(l.value=JSON.parse(a));const s=localStorage.getItem("childrenData");s&&(c.value=JSON.parse(s))};return I(()=>{r()}),(a,s)=>(_(),u("div",null,[f(L,{"onUpdate:personalData":n,parentName:l.value.parentName,parentAge:l.value.parentAge},null,8,["parentName","parentAge"]),f(H,{"onUpdate:childrenData":i,childrenData:c.value},null,8,["childrenData"]),e("div",X,[f(W,{onClick:p})])]))}};export{Z as default};
