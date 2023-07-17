import{r as f}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,x=Symbol.for("react.element"),E=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,O=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function u(o,e,p){var r,t={},s=null,i=null;p!==void 0&&(s=""+p),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)v.call(e,r)&&!g.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:x,type:o,key:s,ref:i,props:t,_owner:O.current}}l.Fragment=E;l.jsx=u;l.jsxs=u;_.exports=l;var k=_.exports;const a=({...o})=>k.jsx("div",{...o,children:"Hello World"});try{a.displayName="HelloWorld",a.__docgenInfo={description:"Primary UI component for user interaction",displayName:"HelloWorld",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const j={title:"Example/HelloWorld",component:a,tags:["autodocs"],argTypes:{}},n={args:{}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Example"];export{n as Example,S as __namedExportsOrder,j as default};
//# sourceMappingURL=HelloWorld.stories-b25c6c1d.js.map
