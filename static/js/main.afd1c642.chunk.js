(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),a=n(8),o=n(2),r=n(6),i=n.n(r),l=n(1),u=(n(15),n(16),n(17),n(0)),j=function(){return Object(u.jsx)("div",{className:"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},d=(n(19),function(e){var t=e.posts,n=e.selectedPostId,c=e.onSelectPost;return t?0===t.length?Object(u.jsx)("h1",{style:{textAlign:"center"},children:"The user has no posts yet"}):Object(u.jsxs)("div",{className:"PostsList",children:[Object(u.jsx)("h2",{children:"Posts:"}),Object(u.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:t.map((function(e){return Object(u.jsxs)("li",{className:"PostsList__item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(u.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){n===e.id?c(0):c(e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]}):Object(u.jsx)(j,{})}),b="https://mate.academy/students-api";function m(e){return fetch("".concat(b).concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var h=n(9),O=(n(20),function(e){var t=e.postId,n=e.onRefreshComent,c=Object(l.useState)(""),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(l.useState)(""),j=Object(o.a)(i,2),d=j[0],O=j[1],p=Object(l.useState)(""),f=Object(o.a)(p,2),x=f[0],v=f[1],_=Object(l.useState)(0),N=Object(o.a)(_,2),y=N[0],P=N[1];Object(l.useEffect)((function(){m("/comments").then((function(e){return P(Math.max.apply(Math,Object(h.a)(e.map((function(e){return e.id}))))+1)}))}));return Object(u.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){var c;e.preventDefault(),c={id:y,postId:t,name:a,email:d,body:x},fetch("".concat(b,"/comments"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(c)}),r(""),O(""),v(""),n(!0)},children:[Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:a,onChange:function(e){var t=e.target;return r(t.value)},required:!0})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){var t=e.target;return O(t.value)},required:!0})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:x,onChange:function(e){var t=e.target;return v(t.value)},required:!0})}),Object(u.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),p=(n(21),function(e){var t=e.details,n=e.selectedPostId,c=Object(l.useState)([]),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(l.useState)(!1),d=Object(o.a)(i,2),h=d[0],p=d[1],f=Object(l.useState)(!1),x=Object(o.a)(f,2),v=x[0],_=x[1];return Object(l.useEffect)((function(){var e;(n===(null===t||void 0===t?void 0:t.id)||v)&&(e=n,m("/comments?postId=".concat(e))).then((function(e){return r(e)})),_(!1)}),[null===t||void 0===t?void 0:t.id,v]),t?Object(u.jsxs)("div",{className:"PostDetails",children:[Object(u.jsx)("h2",{children:"Post details:"}),Object(u.jsx)("section",{className:"PostDetails__post",children:Object(u.jsx)("p",{children:t.body})}),Object(u.jsxs)("section",{className:"PostDetails__comments",children:[a.length>0&&Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){return p(!h)},children:h?"Hide ".concat(a.length," comments"):"Show ".concat(a.length," comments")}),h&&Object(u.jsx)("ul",{className:"PostDetails__list",children:a.map((function(e){return Object(u.jsxs)("li",{className:"PostDetails__list-item",children:[Object(u.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;t=e.id,fetch("".concat(b,"/comments/").concat(t),{method:"DELETE"}),_(!0)},children:"X"}),Object(u.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(u.jsx)(O,{postId:n,onRefreshComent:_})})})]}):Object(u.jsx)(j,{})}),f=function(){return m("/todos")},x=function(e){return f().then((function(t){return t.filter((function(t){return t.userId===e}))}))},v=function(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(l.useState)([]),r=Object(o.a)(s,2),j=r[0],b=r[1],h=Object(l.useState)(null),O=Object(o.a)(h,2),v=O[0],_=O[1],N=Object(l.useState)(!1),y=Object(o.a)(N,2),P=y[0],S=y[1],C=Object(l.useState)(0),g=Object(o.a)(C,2),w=g[0],D=g[1],I=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target,c(null),"0"!==n.value){e.next=10;break}return e.t0=c,e.next=6,f();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 10:x(+n.value).then((function(e){return c(e)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;return f().then((function(e){c(e)})),m("/users").then((function(e){b(e)})),0!==w&&((e=w,m("/posts/".concat(e))).then((function(e){return _(e)})),S(!0)),0===w?S(!1):_(null)}),[w]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App__header",children:Object(u.jsxs)("label",{children:["Select a user: \xa0",Object(u.jsxs)("select",{className:"App__user-selector",onChange:I,children:[Object(u.jsx)("option",{value:"0",children:"All users"}),j.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(u.jsxs)("main",{className:"App__main",children:[Object(u.jsx)("div",{className:"App__sidebar",children:Object(u.jsx)(d,{posts:n,selectedPostId:w,onSelectPost:D,onSetDetailVisibility:S})}),P&&Object(u.jsx)("div",{className:"App__content",children:Object(u.jsx)(p,{details:v,selectedPostId:w})})]})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.afd1c642.chunk.js.map