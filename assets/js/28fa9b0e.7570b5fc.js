"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[773],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1226:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},xCatAge:function(){return m}});var n=r(2848),o=r(9213),a=(r(9496),r(9613)),i=["components"],s={},c="xCAT, the Bare-Metal Provisioner",l={unversionedId:"main-concepts/apps/xcat",id:"main-concepts/apps/xcat",title:"xCAT, the Bare-Metal Provisioner",description:"xCAT is complete solution for bare metal provisioning for High Performance Computing clusters.",source:"@site/docs/main-concepts/04-apps/07-xcat.mdx",sourceDirName:"main-concepts/04-apps",slug:"/main-concepts/apps/xcat",permalink:"/docs/main-concepts/apps/xcat",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/feat/docs/web/docs/main-concepts/04-apps/07-xcat.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Sealed Secrets",permalink:"/docs/main-concepts/gitops/sealed-secrets"},next:{title:"SLURM, A Highly Scalable Workload Manager",permalink:"/docs/main-concepts/apps/slurm"}},p={},u=[{value:"Architecture",id:"architecture",level:2},{value:"Why xCAT ?",id:"why-xcat-",level:2}],m=new Date(1999,10,31).getTime(),f={toc:u,xCatAge:m};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xcat-the-bare-metal-provisioner"},"xCAT, the Bare-Metal Provisioner"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://xcat.org"},"xCAT")," is complete solution for bare metal provisioning for High Performance Computing clusters."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The architecture is the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Xcat-arch",src:r(5145).Z,width:"888",height:"791"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"xCAT Management Node")," is deployed as a container and runs multiple network services responsible for the provisioning of bare-metal systems."),(0,a.kt)("p",null,'xCAT is also able to have "slaves" named ',(0,a.kt)("strong",{parentName:"p"},"Service Node.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Service Processor (SP)")," controls the hardware and is used to perform out-of-band hardware control (e.g. Integrated Management Module (IMM), Flexible Service Processor (FSP), Baseboard Management Controller (BMC), etc)."),(0,a.kt)("p",null,"The Service Processor is connected to xCAT via ",(0,a.kt)("strong",{parentName:"p"},"the Service Network.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Management Network")," is used for OS provisioning (via xNBA or PXE)."),(0,a.kt)("h2",{id:"why-xcat-"},"Why xCAT ?"),(0,a.kt)("p",null,"Our main criteria for choosing a bare metal provisioning solution is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating system image management: provisioning methods, supported operating systems, ease of use."),(0,a.kt)("li",{parentName:"ul"},"BMC configuration (IPMI, HMC, FSP, OpenBMC)"),(0,a.kt)("li",{parentName:"ul"},"Configuration management (Declarative, postboot scripts, backups, ...)")),(0,a.kt)("p",null,"While a lot of solutions exists for bare-metal provisioning like ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Ironic"},"OpenStack Ironic")," or ",(0,a.kt)("a",{parentName:"p",href:"https://maas.io/"},"MAAS"),", only a few are able to do ",(0,a.kt)("strong",{parentName:"p"},"diskless provisioning"),"."),(0,a.kt)("p",null,"Diskless (or Stateless) provisioning is based on an OverlayFS root, with the OS being loaded from a SquashFS image. The OverlayFS is mounted as a ",(0,a.kt)("inlineCode",{parentName:"p"},"tmpfs"),", that is, in the RAM."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"upper-lower",src:r(5011).Z,width:"1024",height:"495"})),(0,a.kt)("p",null,'Since the root is mounted in RAM, restarting a node will "clean it up", similar to a Docker container.'),(0,a.kt)("p",null,"With OverlayFS, we follow a proper DevOps practice where the architecture is immutable and mutable data is stored on disks."),(0,a.kt)("p",null,"Moreover, we are not only looking for a well-maintained open-source project, but also an easy-to-use solution."),(0,a.kt)("span",null,"We were interested in ",(0,a.kt)("a",{href:"https://github.com/ubccr/grendel"},"Grendel")," because it promises to be better than xCAT, but it is still too young and its documentation is not yet perfect. xCAT is ",Math.abs(new Date(Date.now()-m).getUTCFullYear()-1970)," years old, is still maintained by iBM and has every functionality for bare metal provisioning."),(0,a.kt)("p",null,"While xCAT is not really friendly to GitOps or Kubernetes, we plan to develop a way to configure xCAT declaratively from Kubernetes (probably by developing a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"Kubernetes Operator"),", or by applying the ",(0,a.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/admin-guides/references/man5/xcatstanzafile.5.html"},"stanza file")," at the boot of container)."),(0,a.kt)("p",null,"For now, the only way to use xCAT is to connect via SSH to your server."))}d.isMDXComponent=!0},5011:function(e,t,r){t.Z=r.p+"assets/images/6ecbb344ae8145db8deedaeecd0f49betplv-k3u1fbpfcp-zoom-1-dee8c5c7673755628f10a87b3ac5d06a.png"},5145:function(e,t,r){t.Z=r.p+"assets/images/Xcat-arch-513ff59b6b9772f1fbb4d01f333285c3.png"}}]);