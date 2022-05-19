"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[970],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3005:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(2848),o=r(9213),a=(r(9496),r(9613)),i=["components"],s={},c="K0s, the kubernetes distribution for bare-metal",l={unversionedId:"main-concepts/k0s",id:"main-concepts/k0s",title:"K0s, the kubernetes distribution for bare-metal",description:"Best description is obviously on their website: k0sproject.io.",source:"@site/docs/main-concepts/01-k0s.md",sourceDirName:"main-concepts",slug:"/main-concepts/k0s",permalink:"/docs/main-concepts/k0s",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/feat/docs/web/docs/main-concepts/01-k0s.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"6. xCAT Configuration",permalink:"/docs/getting-started/xcat-configuration"},next:{title:"MetalLB, the bare-metal Load Balancer",permalink:"/docs/main-concepts/core-network/metallb"}},u={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k0s-the-kubernetes-distribution-for-bare-metal"},"K0s, the kubernetes distribution for bare-metal"),(0,a.kt)("p",null,"Best description is obviously on their website: ",(0,a.kt)("a",{parentName:"p",href:"https://k0sproject.io"},"k0sproject.io"),"."),(0,a.kt)("p",null,"The reasons we are using k0s instead of Kubeadm, k3s, ...:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's ",(0,a.kt)("strong",{parentName:"li"},"light and customizable")," via a single YAML file, in the declarative way, therefore we can store the configuration of the whole cluster inside a git repository."),(0,a.kt)("li",{parentName:"ul"},"It allows ",(0,a.kt)("strong",{parentName:"li"},"HA, multi-node and single node deployment"),", which is very good for testing."),(0,a.kt)("li",{parentName:"ul"},"It runs with a single binary, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/k0sproject/k0s"},"k0s"),"."),(0,a.kt)("li",{parentName:"ul"},"It's open-source, including k0sctl. Meaning we could (and probably will) fork k0sctl."),(0,a.kt)("li",{parentName:"ul"},"It's a vanilla Kubernetes meaning it gets updated fast."),(0,a.kt)("li",{parentName:"ul"},"It allows ",(0,a.kt)("strong",{parentName:"li"},"easy upgrade, backup and restore"),".")),(0,a.kt)("p",null,"ClusterFactory aims to be an orchestration tool for many various workloads, including bare-metal and cloud workloads. Maintainability, ease of use, and declarative configuration are the keys to good long-term development. And that's exactly what k0s brings us."))}d.isMDXComponent=!0}}]);