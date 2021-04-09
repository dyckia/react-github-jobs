(this["webpackJsonpreact-github-jobs"]=this["webpackJsonpreact-github-jobs"]||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(20),s=t.n(r),o=t(27),i=t(8),j=t(16),l=t(171),b=t(17),d=t.n(b),u="/positions.json";function O(e,a){switch(a.type){case"loading":return{loading:!0,jobs:[]};case"retrieved":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case"error":return Object(i.a)(Object(i.a)({},e),{},{error:a.payload.error,loading:!1,jobs:[]});case"checkNextPage":return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var h=t(174),x=t(169),m=t(170),p=t(172),g=t(39),f=t.n(g),y=t(2);function v(e){var a=e.job,t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(y.jsx)(h.a,{className:"mb-3",children:Object(y.jsxs)(h.a.Body,{children:[Object(y.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)(h.a.Title,{children:[a.title," - ",Object(y.jsx)("span",{className:"text-muted font-weight-light",children:a.company})]}),Object(y.jsx)(h.a.Subtitle,{className:"text-muted mb-2",children:new Date(a.created_at).toLocaleDateString()}),Object(y.jsx)(x.a,{variant:"secondary",className:"mr-2",children:a.type}),Object(y.jsx)(x.a,{variant:"secondary",className:"mr-2",children:a.location}),Object(y.jsx)("div",{style:{wordBreak:"break-all"},children:Object(y.jsx)(f.a,{source:a.how_to_apply})})]}),Object(y.jsx)("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})]}),Object(y.jsx)(h.a.Text,{children:Object(y.jsx)(m.a,{variant:"primary",onClick:function(){return s((function(){return!r}))},children:r?"Hide Details":"View Details"})}),Object(y.jsx)(p.a,{in:r,children:Object(y.jsx)("div",{children:Object(y.jsx)(f.a,{source:a.description})})})]})})}var k=t(175);function N(e){var a=e.page,t=e.setPage,c=e.hasNextPage;function n(e){t((function(a){return a+e}))}return Object(y.jsxs)(k.a,{children:[1!==a&&Object(y.jsx)(k.a.Prev,{onClick:function(){return n(-1)}}),1!==a&&Object(y.jsx)(k.a.Item,{onClick:function(){return t(1)},children:"1"}),a>3&&Object(y.jsx)(k.a.Ellipsis,{}),a>2&&Object(y.jsx)(k.a.Item,{onClick:function(){return n(-1)},children:a-1}),Object(y.jsx)(k.a.Item,{active:!0,children:a}),c&&Object(y.jsx)(k.a.Item,{onClick:function(){return n(1)},children:a+1}),c&&Object(y.jsx)(k.a.Next,{onClick:function(){return n(1)}})]})}var C=t(173),P=t(64);function w(e){var a=e.params,t=e.onParamChange;return Object(y.jsx)(C.a,{className:"mb-4",children:Object(y.jsxs)(C.a.Row,{className:"align-items-end",children:[Object(y.jsxs)(C.a.Group,{as:P.a,children:[Object(y.jsx)(C.a.Label,{children:"Description"}),Object(y.jsx)(C.a.Control,{type:"text",name:"description",value:a.description||"",onChange:t})]}),Object(y.jsxs)(C.a.Group,{as:P.a,children:[Object(y.jsx)(C.a.Label,{children:"Location"}),Object(y.jsx)(C.a.Control,{type:"text",name:"location",value:a.location||"",onChange:t})]}),Object(y.jsx)(C.a.Group,{as:P.a,xs:"auto",className:"ml-2",children:Object(y.jsx)(C.a.Check,{type:"checkbox",label:"Only Full Time",value:a.full_time,name:"full_time",id:"full-time",onChange:t,className:"mb-2"})})]})})}var T=function(){var e=Object(c.useState)({}),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(1),s=Object(j.a)(r,2),b=s[0],h=s[1],x=function(e,a){var t=Object(c.useReducer)(O,{jobs:[],loading:!0}),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=d.a.CancelToken.source();s({type:"loading"}),d.a.get(u,{cancelToken:t.token,params:Object(i.a)(Object(i.a)({},e),{},{page:a,markdown:!0})}).then((function(e){s({type:"retrieved",payload:{jobs:e.data}})})).catch((function(e){d.a.isCancel(e)||s({type:"error",payload:{error:e}})}));var c=d.a.CancelToken.source();return d.a.get(u,{cancelToken:c.token,params:Object(i.a)(Object(i.a)({},e),{},{page:a+1,markdown:!0})}).then((function(e){s({type:"checkNextPage",payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){d.a.isCancel(e)||s({type:"error",payload:{error:e}})})),function(){t.cancel(),c.cancel()}}),[e,a]),r}(t,b),m=x.jobs,p=x.loading,g=x.error,f=x.hasNextPage;return Object(y.jsxs)(l.a,{className:"my-4",children:[Object(y.jsx)("h1",{className:"mb-4",children:"GitHub Jobs"}),Object(y.jsx)(w,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;h(1),n((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a,t))}))}}),Object(y.jsx)(N,{page:b,setPage:h,hasNextPage:f}),p&&Object(y.jsx)("h1",{children:"Loading..."}),g&&Object(y.jsx)("h1",{children:"Error. Try refreshing."}),m.map((function(e){return Object(y.jsx)(v,{job:e},e.id)})),Object(y.jsx)(N,{page:b,setPage:h,hasNextPage:f})]})};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.af3f59e4.chunk.js.map