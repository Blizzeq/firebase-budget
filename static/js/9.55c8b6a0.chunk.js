(this["webpackJsonpfirebase-budget"]=this["webpackJsonpfirebase-budget"]||[]).push([[9],{117:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),r=n(74),s=n(2),u=n(60),o=n(3),d=n(7),i=n(62),l=function(){var e=Object(d.a)(Object(o.a)().mark((function e(t,n){var a,c,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(i.f)(Object(i.b)(u.b,"users"),Object(i.h)("uid","==",null===t||void 0===t?void 0:t.uid)),e.next=4,Object(i.d)(a);case 4:c=e.sent,r=c.docs[0].data(),n(r.name),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),n(t.displayName),console.error(e.t0),console.log("Error fetching user name");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(Object(o.a)().mark((function e(t,n){var a,c,r,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(i.f)(Object(i.b)(u.b,"users"),Object(i.h)("uid","==",null===t||void 0===t?void 0:t.uid)),e.next=4,Object(i.d)(a);case 4:return c=e.sent,e.next=7,Object(i.d)(Object(i.b)(u.b,"users",c.docs[0].id,"budgets"));case 7:r=e.sent,s=r.docs.map((function(e){return e.data()})),n(s.map((function(e){return{name:e.name,amount:e.amount,budgetId:e.budgetId,category:e.category,totalBudget:e.totalBudget}}))),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),console.log("Error fetching budgets");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),j=n(118),O=n(113),g=n(22),m=n(116),p=n(88),h=n(8),f=n(89),x=function(){var e=Object(d.a)(Object(o.a)().mark((function e(t,n,a,c,r,s,d,l,b){var j,O,g,m;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!1),j=Object(i.f)(Object(i.b)(u.b,"users"),Object(i.h)("uid","==",null===t||void 0===t?void 0:t.uid)),e.next=5,Object(i.d)(j);case 5:return O=e.sent,e.next=8,Object(i.d)(Object(i.b)(u.b,"users",O.docs[0].id,"budgets"));case 8:if(g=e.sent,m=g.docs.map((function(e){return e.data()})),m.map((function(e){return e.name})).includes(n)){e.next=17;break}return e.next=14,Object(i.a)(Object(i.b)(u.b,"users",O.docs[0].id,"budgets"),{uid:t.uid,budgetId:Object(f.uuid)(),name:n,category:l,amount:c,totalBudget:b});case 14:a([].concat(Object(h.a)(r),[{name:n,amount:c,category:l,totalBudget:b,budgetId:Object(f.uuid)(),uid:t.uid}])),e.next=18;break;case 17:alert("Budget name already exists");case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.error(e.t0),console.log("Error creating budget");case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n,a,c,r,s,u,o,d){return e.apply(this,arguments)}}(),v=n(115),B=n(5);var k=function(){return Object(B.jsx)(v.a,{className:"Alert-Budget",severity:"error",children:"Budget Amount can't be higher than Maximum Budget"})};var N=function(e){var t=e.user,n=e.addBudget,r=e.setAddBudget,s=e.budgets,u=e.setBudgets,o=e.setBudgetName,d=e.setBudgetAmount,i=e.budgetName,l=e.budgetAmount,b=e.totalBudget,O=e.setTotalBudget,h=Object(c.useState)(!1),f=Object(a.a)(h,2),v=f[0],N=f[1],y=Object(c.useState)("Other"),C=Object(a.a)(y,2),S=C[0],w=C[1],A=Object(c.useState)(!1),D=Object(a.a)(A,2),F=D[0],E=D[1];return Object(B.jsx)("div",{className:"Dashboard-AddBudget-Form",children:Object(B.jsxs)(g.b,{children:[F&&Object(B.jsx)(k,{}),Object(B.jsxs)(m.a,{noValidate:!0,validated:v,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{if(l>b)return E(!0),void setTimeout((function(){E(!1)}),2500);x(t,i,u,l,s,n,r,S,b)}N(!0)},className:"createBudgetForm",children:[Object(B.jsx)("p",{className:"edit-info",children:"Enter budget name"}),Object(B.jsxs)(p.a,{controlId:"floatingBudget",label:"Budget Name",children:[Object(B.jsx)(m.a.Control,{type:"text",placeholder:"Budget",onChange:function(e){return o(e.target.value)},required:!0}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a name for your budget."})]}),Object(B.jsx)("p",{className:"edit-info",children:"Select budget category"}),Object(B.jsxs)(m.a.Select,{"aria-label":"Default select example",onChange:function(e){return w(e.target.value)},children:[Object(B.jsx)("option",{children:"Select category"}),Object(B.jsx)("option",{value:"Housing",children:"Housing"}),Object(B.jsx)("option",{value:"Transportation",children:"Transportation"}),Object(B.jsx)("option",{value:"Food",children:"Food"}),Object(B.jsx)("option",{value:"Utilities",children:"Utilities"}),Object(B.jsx)("option",{value:"Insurance",children:"Insurance"}),Object(B.jsx)("option",{value:"Medical/Dental",children:"Medical/Dental"}),Object(B.jsx)("option",{value:"Savings",children:"Savings"}),Object(B.jsx)("option",{value:"Other",children:"Other"})]}),Object(B.jsx)("p",{className:"edit-info",children:"Enter current budget amount"}),Object(B.jsxs)(p.a,{controlId:"floatingAmount",label:"Current Amount",children:[Object(B.jsx)(m.a.Control,{type:"number",placeholder:"Amount",onChange:function(e){return d(e.target.valueAsNumber)},required:!0}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a valid amount."})]}),Object(B.jsx)("p",{className:"edit-info",children:"Enter maximum budget amount"}),Object(B.jsxs)(p.a,{controlId:"floatingAmount",label:"Maximum Amount",children:[Object(B.jsx)(m.a.Control,{type:"number",placeholder:"Amount",onChange:function(e){return O(e.target.valueAsNumber)},required:!0}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a valid total amount."})]}),Object(B.jsx)(j.a,{variant:"success",type:"submit",className:"btn-submit",children:"Add Budget"}),Object(B.jsx)(j.a,{variant:"danger",onClick:function(){return r(!n)},className:"btn-cancel",children:"Cancel"})]})]})})},y=function(){var e=Object(d.a)(Object(o.a)().mark((function e(t,n,a,c,r,s){var d,l,j,O;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!1),d=Object(i.f)(Object(i.b)(u.b,"users"),Object(i.h)("uid","==",null===t||void 0===t?void 0:t.uid)),e.next=5,Object(i.d)(d);case 5:return l=e.sent,e.next=8,Object(i.d)(Object(i.b)(u.b,"users",l.docs[0].id,"budgets"));case 8:return j=e.sent,O=j.docs.find((function(e){return e.data().name===n})),e.next=12,Object(i.c)(O.ref);case 12:return e.next=14,b(t,c);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0),console.log("Error deleting budget");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,a,c,r,s){return e.apply(this,arguments)}}();var C=function(e){var t=e.user,n=e.delBudget,r=e.setDelBudget,s=e.budgets,u=e.setBudgets,o=Object(c.useState)(s[0].name),d=Object(a.a)(o,2),i=d[0],l=d[1];return Object(B.jsx)("div",{className:"Dashboard-DeleteBudget-Form",children:Object(B.jsx)(g.b,{children:Object(B.jsxs)(m.a,{onSubmit:function(){y(t,i,s,u,n,r)},className:"deleteBudgetForm",children:[Object(B.jsx)("p",{className:"delete-info",children:"Select budget"}),Object(B.jsx)(m.a.Select,{"aria-label":"Default select example",value:i,onChange:function(e){return l(e.target.value)},children:s.map((function(e,t){return Object(B.jsx)("option",{id:e.budgetId,value:e.name,children:e.name},t)}))}),Object(B.jsx)(j.a,{variant:"success",type:"submit",className:"btn-delete",children:"Delete Budget"}),Object(B.jsx)(j.a,{variant:"danger",onClick:function(){return r(!n)},className:"btn-cancel",children:"Cancel"})]})})})},S=function(){var e=Object(d.a)(Object(o.a)().mark((function e(t,n,a,c,r,s,d,l){var j,O,g,m;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!1),j=Object(i.f)(Object(i.b)(u.b,"users"),Object(i.h)("uid","==",null===t||void 0===t?void 0:t.uid)),e.next=5,Object(i.d)(j);case 5:return O=e.sent,e.next=8,Object(i.d)(Object(i.b)(u.b,"users",O.docs[0].id,"budgets"));case 8:return g=e.sent,m=g.docs.find((function(e){return e.data().name===s})),e.next=12,Object(i.g)(m.ref,{name:n,amount:r,category:c,totalBudget:l});case 12:return e.next=14,b(t,a);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0),console.log("Error updating budget");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,a,c,r,s,u,o){return e.apply(this,arguments)}}();var w=function(e){var t=e.user,n=e.budgets,r=e.setBudgets,s=e.budgetName,u=e.setBudgetName,o=e.editBudget,d=e.setEditBudget,i=e.budgetAmount,l=e.setBudgetAmount,b=e.totalBudget,O=e.setTotalBudget,h=Object(c.useState)(!1),f=Object(a.a)(h,2),x=f[0],v=f[1],N=Object(c.useState)(n[0].name),y=Object(a.a)(N,2),C=y[0],w=y[1],A=Object(c.useState)(n[0].category),D=Object(a.a)(A,2),F=D[0],E=D[1],I=Object(c.useState)(!1),T=Object(a.a)(I,2),P=T[0],L=T[1],M=function(){L(!0),setTimeout((function(){L(!1)}),2500)};return Object(c.useEffect)((function(){n.map((function(e){return e.name===C&&(u(e.name),l(e.amount),E(e.category),O(e.totalBudget)),null}))}),[C]),Object(B.jsx)("div",{className:"Dashboard-EditBudget-Form",children:Object(B.jsxs)(g.b,{children:[P&&Object(B.jsx)(k,{}),Object(B.jsxs)(m.a,{noValidate:!0,validated:x,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{if(M(),e.preventDefault(),i>b)return void M();S(t,s,r,F,i,C,d,b)}v(!0)},className:"editBudgetForm",children:[Object(B.jsx)("p",{className:"edit-info",children:"Select budget"}),Object(B.jsx)(m.a.Select,{"aria-label":"Default select example",value:C,onChange:function(e){return w(e.target.value)},children:n.map((function(e,t){return Object(B.jsx)("option",{id:e.budgetId,value:e.name,children:e.name},t)}))}),n.map((function(e){return[e.name===C&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("p",{className:"edit-info",children:"Edit budget name"}),Object(B.jsxs)(p.a,{controlId:"floatingBudget",label:C,children:[Object(B.jsx)(m.a.Control,{type:"text",placeholder:"Budget",defaultValue:e.name,onChange:function(e){return u(e.target.value)}}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a new name."})]}),Object(B.jsx)("p",{className:"edit-info",children:"Select budget category"}),Object(B.jsxs)(m.a.Select,{"aria-label":"Default select example",onChange:function(e){return E(e.target.value)},children:[Object(B.jsx)("option",{children:n.map((function(e){return[e.name===C&&e.category]}))}),Object(B.jsx)("option",{value:"Housing",children:"Housing"}),Object(B.jsx)("option",{value:"Transportation",children:"Transportation"}),Object(B.jsx)("option",{value:"Food",children:"Food"}),Object(B.jsx)("option",{value:"Utilities",children:"Utilities"}),Object(B.jsx)("option",{value:"Insurance",children:"Insurance"}),Object(B.jsx)("option",{value:"Medical/Dental",children:"Medical/Dental"}),Object(B.jsx)("option",{value:"Savings",children:"Savings"}),Object(B.jsx)("option",{value:"Other",children:"Other"})]}),Object(B.jsx)("p",{className:"edit-info",children:"Edit current budget amount"}),Object(B.jsxs)(p.a,{controlId:"floatingAmount",label:n.map((function(e){return[e.name===C&&e.amount]})),children:[Object(B.jsx)(m.a.Control,{type:"number",placeholder:"Amount",defaultValue:e.amount,onChange:function(e){return l(e.target.valueAsNumber)}}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a new amount."})]}),Object(B.jsx)("p",{className:"edit-info",children:"Edit maximum budget amount"}),Object(B.jsxs)(p.a,{controlId:"floatingAmount",label:n.map((function(e){return[e.name===C&&e.totalBudget]})),children:[Object(B.jsx)(m.a.Control,{type:"number",placeholder:"Amount",defaultValue:e.totalBudget,onChange:function(e){return O(e.target.valueAsNumber)}}),Object(B.jsx)(m.a.Control.Feedback,{children:"Looks good!"}),Object(B.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Please provide a new amount."})]}),Object(B.jsx)(j.a,{variant:"success",type:"submit",className:"btn-edit",children:"Edit Budget"}),Object(B.jsx)(j.a,{variant:"danger",onClick:function(){return d(!o)},className:"btn-cancel",children:"Cancel"})]})]}))]})]})})};var A=function(e){var t=e.budgets,n=Object(c.useState)(0),r=Object(a.a)(n,2),s=r[0],u=r[1];return Object(c.useEffect)((function(){!function(){var e=0;t.forEach((function(t){e+=t.amount})),u(e)}()}),[t]),Object(B.jsx)("div",{className:"Summary",children:Object(B.jsxs)(g.d,{className:"text-center text-white",style:{backgroundColor:"#1c1c1c"},children:[Object(B.jsx)(g.c,{className:"p-4 pb-0",children:Object(B.jsx)("section",{children:Object(B.jsxs)("p",{className:"d-flex justify-content-center align-items-center budget-total",children:["Total budget: ",s]})})}),Object(B.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2022 Copyright:",Object(B.jsx)("a",{className:"text-white ms-2",href:"https://github.com/Blizzeq",children:"Jakub Krasuski"})]})]})})},D=n(13);t.default=function(e){var t=e.isLoading,n=e.setIsLoading,o=Object(r.a)(u.a),d=Object(a.a)(o,2),i=d[0],m=d[1],p=Object(c.useState)(""),h=Object(a.a)(p,2),f=h[0],x=h[1],v=Object(s.C)(),k=Object(c.useState)(""),y=Object(a.a)(k,2),S=y[0],F=y[1],E=Object(c.useState)(0),I=Object(a.a)(E,2),T=I[0],P=I[1],L=Object(c.useState)(0),M=Object(a.a)(L,2),V=M[0],U=M[1],H=Object(c.useState)(!1),q=Object(a.a)(H,2),z=q[0],J=q[1],G=Object(c.useState)(!1),K=Object(a.a)(G,2),X=K[0],Y=K[1],Q=Object(c.useState)(!1),R=Object(a.a)(Q,2),W=R[0],Z=R[1],$=Object(c.useState)([]),_=Object(a.a)($,2),ee=_[0],te=_[1];return Object(c.useEffect)((function(){if(m)n(!0);else{if(!1===m&&n(!1),!i)return v("/");Object(u.c)(i),l(i,x),b(i,te)}}),[i,m,v]),Object(B.jsx)(B.Fragment,{children:t?Object(B.jsx)(D.a,{}):Object(B.jsxs)("div",{className:"Dashboard",children:[Object(B.jsxs)("div",{className:"Dashboard-Header",children:[f," ",Object(B.jsx)(j.a,{variant:"secondary",onClick:function(){return Object(u.e)()},children:"Logout"})]}),Object(B.jsxs)("div",{className:"Dashboard-Menu",children:[z?Object(B.jsx)(N,{addBudget:z,setAddBudget:J,user:i,budgetName:S,setBudgetName:F,budgetAmount:T,setBudgetAmount:P,setBudgets:te,budgets:ee,totalBudget:V,setTotalBudget:U}):Object(B.jsxs)("div",{className:"Dashboard-AddBudget",children:[Object(B.jsx)(j.a,{variant:"success",onClick:function(){return J(!z)},children:"+"})," ",Object(B.jsx)("span",{children:"Add new Budget"})]}),0!==ee.length&&[X?Object(B.jsx)(C,{delBudget:X,setDelBudget:Y,user:i,budgets:ee,setBudgets:te}):Object(B.jsxs)("div",{className:"Dashboard-DeleteBudget",children:[Object(B.jsx)(j.a,{variant:"danger",onClick:function(){return Y(!X)},children:"-"})," ",Object(B.jsx)("span",{children:"Delete existing Budget"})]})],0!==ee.length&&[W?Object(B.jsx)(w,{user:i,budgets:ee,setBudgets:te,budgetName:S,setBudgetName:F,editBudget:W,setEditBudget:Z,budgetAmount:T,setBudgetAmount:P,totalBudget:V,setTotalBudget:U}):Object(B.jsxs)("div",{className:"Dashboard-EditBudget",children:[Object(B.jsx)(j.a,{variant:"warning",onClick:function(){return Z(!W)},children:"\u270e"})," ",Object(B.jsx)("span",{children:"Edit existing Budget"})]})]]}),Object(B.jsx)("div",{className:"Dashboard-Budget",children:0!==ee.length&&[ee.map((function(e,t){return Object(B.jsxs)(g.b,{children:[Object(B.jsx)("p",{className:"Budget-Name",children:e.name}),Object(B.jsx)("p",{className:"Budget-Category",children:e.category}),Object(B.jsx)("p",{className:"Budget-Bar",children:Object(B.jsx)(O.a,{animated:!0,now:e.amount,max:e.totalBudget})}),Object(B.jsxs)("p",{className:"Budget-Amount",children:[e.amount,"/",e.totalBudget]})]},t)}))]}),Object(B.jsx)(A,{budgets:ee})]})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return i}));var a=n(3),c=n(7),r=n(71),s=n(70),u=n(62),o=(Object(r.a)({apiKey:"AIzaSyC3DMSjnUoA9dF9GM17-cXY2vGrD01UOsg",authDomain:"budget-app-fba0d.firebaseapp.com",projectId:"budget-app-fba0d",storageBucket:"budget-app-fba0d.appspot.com",messagingSenderId:"304622335247",appId:"1:304622335247:web:fed99b704be7ad5cdafa7a"}),Object(s.g)()),d=Object(u.e)(),i=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Object(u.f)(Object(u.b)(d,"users"),Object(u.h)("uid","==",t.uid)),e.next=4,Object(u.d)(n);case 4:if(0!==e.sent.docs.length){e.next=8;break}return e.next=8,Object(u.a)(Object(u.b)(d,"users"),{uid:t.uid,name:t.displayName,authProvider:"google",email:t.email});case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=new s.c,b=function(){var e=Object(c.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.m)(o,l);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t,n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.k)(o,t,n);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t,n,c){var r,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.f)(o,n,c);case 3:return r=e.sent,i=r.user,e.next=7,Object(u.a)(Object(u.b)(d,"users"),{uid:i.uid,name:t,authProvider:"local",email:n});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.j)(o,t);case 3:alert("Password reset email sent"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){Object(s.n)(o)}}}]);
//# sourceMappingURL=9.55c8b6a0.chunk.js.map