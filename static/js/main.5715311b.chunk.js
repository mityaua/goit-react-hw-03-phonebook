(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1cFsA",label:"ContactForm_label__2RL0L",input:"ContactForm_input__35jaA",button__wrapper:"ContactForm_button__wrapper__2TqPj",button:"ContactForm_button__1IYXE"}},function(t,e,n){t.exports={item:"ContactItem_item__26suR",name:"ContactItem_name__2E6sD",number:"ContactItem_number__3WqcS",button:"ContactItem_button__1sAC_"}},,,function(t,e,n){t.exports={title:"App_title__1W9ir"}},,,,function(t,e,n){t.exports={label:"Filter_label__3nhrb",input:"Filter_input__1w1B_"}},,function(t,e,n){t.exports={container:"Container_container__2UkDb"}},,function(t,e,n){t.exports={list:"ContactList_list__3CHj_"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=n(15),i=n(4),l=n(5),u=n(8),m=n(7),b=n(12),d=n.n(b),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})};j.defaultProps={children:[]};var p=j,f=n(13),_=n(24),C=n(2),O=n.n(C),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hanldeChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.hanldeSubmit=function(e){e.preventDefault();var n={id:Object(_.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({id:"",name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:O.a.form,onSubmit:this.hanldeSubmit,children:[Object(h.jsxs)("label",{className:O.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Contact name","aria-label":"Input for your name",className:O.a.input,value:this.state.name,onChange:this.hanldeChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:O.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number","aria-label":"Input for your phone number",className:O.a.input,value:this.state.number,onChange:this.hanldeChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("div",{className:O.a.button__wrapper,children:Object(h.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})})]})}}]),n}(a.Component),x=n(10),g=n.n(x),N=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",placeholder:"Search...",className:g.a.input,value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})};N.defaultProps={value:""};var y=N,S=n(3),A=n.n(S),F=function(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsxs)("li",{className:A.a.item,children:[Object(h.jsxs)("span",{className:A.a.name,children:[e.name,": "]}),Object(h.jsx)("a",{href:"tel:".concat(e.number),className:A.a.number,children:e.number}),Object(h.jsx)("button",{className:A.a.button,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})},w=n(14),D=n.n(w),k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:D.a.list,children:e.map((function(t){return Object(h.jsx)(F,{contact:t,onDeleteContact:n},t.id)}))})},I=n(6),z=n.n(I),J=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Doctor Who",number:"459-12-56"},{id:"id-2",name:"Rose Tyler",number:"443-89-12"},{id:"id-3",name:"Martha Jones",number:"645-17-79"},{id:"id-4",name:"Donna Noble",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already on contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(h.jsxs)(p,{children:[Object(h.jsx)("h1",{className:z.a.title,children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:z.a.title,children:"Contacts"}),Object(h.jsx)(y,{value:t,onChange:this.changeFilter}),Object(h.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(21);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.5715311b.chunk.js.map