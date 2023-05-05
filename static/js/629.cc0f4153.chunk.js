"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[629],{9629:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,u,c,s,a=t(8683),l=t(5705),d=t(168),x=t(6444),f=(0,x.ZP)(l.l0)(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    width: 400px;\n    padding: 16px;\n    border: 2px solid black;\n"]))),p=(0,x.ZP)(l.gN)(i||(i=(0,d.Z)(["\n    padding: 8px;\n    width: 200px;\n    font-size: large;\n    outline: none;\n    border-radius: 8px;\n    :focus {\n        outline: 1px solid blue;\n    }\n"]))),h=x.ZP.button(o||(o=(0,d.Z)(["\n    width: max-content;\n    padding: 4px;\n    font-family: inherit;\n    font-size: medium;\n    border-radius: 8px;\n"]))),m=t(9434),b=t(1686),j=t.n(b),g=t(6916),v=function(n){return n.contacts.contactList},y=function(n){return n.filter},Z=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},k=(0,g.P1)([v,y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=t(6056),F=t(6382),P=t(184),_={name:"",number:""},N=function(){var n=(0,m.v9)(v),e=(0,m.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(l.J9,{initialValues:_,onSubmit:function(t,r){var i=r.resetForm;n.some((function(n){return n.number===t.number}))?j().Notify.failure("\u0421ontact with number ".concat(t.number," is already in contacts")):(e((0,C.uK)((0,a.Z)((0,a.Z)({},t),{},{id:(0,F.x0)()}))),j().Notify.success("Add contacts")),i()},children:(0,P.jsxs)(f,{children:[(0,P.jsx)("label",{htmlFor:"name",children:"Name"}),(0,P.jsx)(p,{type:"text",name:"name",required:!0}),(0,P.jsx)("label",{htmlFor:"number",children:"Number"}),(0,P.jsx)(p,{type:"tel",name:"number",required:!0}),(0,P.jsx)(h,{type:"submit",children:"Add contact"})]})})]})},I=x.ZP.div(u||(u=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n"]))),L=x.ZP.input(c||(c=(0,d.Z)(["\n    padding: 4px;\n    width: 200px;\n    font-size: large;\n    outline: none;\n    border-radius: 8px;\n    :focus {\n        outline: 1px solid blue;\n    }\n"]))),q=t(1429),z=function(){var n=(0,m.I0)(),e=(0,m.v9)(y);return(0,P.jsxs)(I,{children:[(0,P.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,P.jsx)(L,{type:"text",name:"filter",value:e,onChange:function(e){return n((0,q.r)(e.target.value))}})]})},A=x.ZP.li(s||(s=(0,d.Z)(["\n    margin-top: 12px;\n"]))),K=function(n){var e=n.id,t=n.name,r=n.phone,i=(0,m.I0)();return(0,P.jsxs)(A,{id:e,children:[t,": ",r," ",(0,P.jsx)(h,{type:"button",onClick:function(){i((0,C.GK)(e)),j().Notify.success("Contact ".concat(t," delete"))},children:"Delete"})]})},D=t(2791),E=function(){var n=(0,m.v9)(Z),e=(0,m.v9)(w),t=(0,m.v9)(k),r=(0,m.I0)();return(0,D.useEffect)((function(){r((0,C.yF)())}),[r]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsxs)("ul",{children:[0!==t.length&&(0,P.jsx)(z,{}),n&&!e&&(0,P.jsx)("b",{children:"Request in progress..."}),t.map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,P.jsx)(K,{id:e,name:t,phone:r},e)}))]})]})},G=function(){return(0,P.jsxs)("div",{children:[(0,P.jsx)(N,{}),(0,P.jsx)(E,{})]})}}}]);
//# sourceMappingURL=629.cc0f4153.chunk.js.map