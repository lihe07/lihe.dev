import{M as r}from"./index.08b7eeb8.js";import{c as o,m as l}from"./entry-client.f253d0fe.js";const a={title:"Hello World",description:"Hello World"};function t(n){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},r(),n.components);return[o(e.h1,{children:"Hello World"}),`
`,o(e.p,{children:"Hello!"}),`
`,o(e.pre,{get children(){return o(e.code,{className:"language-js",children:`console.log('Hello World!');
`})}})]}function d(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?o(e,l(n,{get children(){return o(t,n)}})):t(n)}export{d as default,a as meta};
