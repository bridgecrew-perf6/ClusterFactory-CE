"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[476],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(2848),a=r(9213),c=(r(9496),r(9613)),o=["components"],i={},s="cert-manager",u={unversionedId:"main-concepts/gitops/cert-manager",id:"main-concepts/gitops/cert-manager",title:"cert-manager",description:"Like the name indicates, cert-manager adds certificates and certificate issuers as custom resource for Kubernetes.",source:"@site/docs/main-concepts/03-gitops/04-cert-manager.md",sourceDirName:"main-concepts/03-gitops",slug:"/main-concepts/gitops/cert-manager",permalink:"/docs/main-concepts/gitops/cert-manager",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-concepts/03-gitops/04-cert-manager.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Argo CD",permalink:"/docs/main-concepts/gitops/argocd"},next:{title:"Sealed Secrets",permalink:"/docs/main-concepts/gitops/sealed-secrets"}},p={},l=[],f={toc:l};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cert-manager"},"cert-manager"),(0,c.kt)("p",null,"Like the name indicates, cert-manager adds certificates and certificate issuers as custom resource for Kubernetes."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"High level overview diagram explaining cert-manager architecture",src:r(7562).Z,width:"1088",height:"624"})),(0,c.kt)("p",null,"It's possible to manage self-signed certificates, a private CA, ACME issuers, ..."),(0,c.kt)("p",null,"cert-manager also automatically generates and renews certificates using the Kubernetes annotation field in the Ingress resource."),(0,c.kt)("p",null,"Although cert-manager ",(0,c.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/master/providers/kubernetes-crd/#letsencrypt-support-with-the-custom-resource-definition-provider"},"is not compatible with the Traefik IngressRoute resource"),", the certificate can be managed using a ",(0,c.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/certificate/"},"Certificate resource"),"."))}m.isMDXComponent=!0},7562:function(e,t,r){t.Z=r.p+"assets/images/high-level-overview-50c4f8ffb0afde9e922c3ded01752ced.svg"}}]);