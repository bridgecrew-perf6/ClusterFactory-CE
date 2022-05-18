"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[979],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(2848),r=n(9213),o=(n(9496),n(9613)),l=["components"],i={},s="5. xCAT Deployment",p={unversionedId:"getting-started/xcat-deployment",id:"getting-started/xcat-deployment",title:"5. xCAT Deployment",description:"The argo/provisioning directory deploy the xCAT application.",source:"@site/docs/getting-started/05-xcat-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/xcat-deployment",permalink:"/docs/getting-started/xcat-deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/05-xcat-deployment.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"4. Argo Apps Deployment",permalink:"/docs/getting-started/argo-apps-deployment"},next:{title:"6. xCAT Configuration",permalink:"/docs/getting-started/xcat-configuration"}},c={},u=[{value:"1. Namespace and AppProject",id:"1-namespace-and-appproject",level:2},{value:"2. Volumes",id:"2-volumes",level:2},{value:"3. Apps",id:"3-apps",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"5-xcat-deployment"},"5. xCAT Deployment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"argo/provisioning")," directory deploy the xCAT application."),(0,o.kt)("p",null,"This time, we won't start from scratch."),(0,o.kt)("p",null,"However, the order is the same."),(0,o.kt)("h2",{id:"1-namespace-and-appproject"},"1. Namespace and AppProject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/provisioning\n")),(0,o.kt)("h2",{id:"2-volumes"},"2. Volumes"),(0,o.kt)("p",null,"Start with the xCAT volume. This is where xCAT will be storing sqlite databases, os images and more."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/volumes/xcat-pv.yml"',title:'"argo/provisioning/volumes/xcat-pv.yml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: xcat-pv\n  namespace: provisioning\n  labels:\n    app: xcat\nspec:\n  capacity:\n    storage: 50Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: 0993a28c-4c2f-4edb-94ee-ec0e8a20efff\n    volumeAttributes:\n      server: 10.10.2.11\n      share: '/srv/nfs4/k8s/xcat'\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/provisioning/volumes/xcat-pv.yml\n")),(0,o.kt)("p",null,"The label ",(0,o.kt)("inlineCode",{parentName:"p"},"app=xcat")," will be used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet")," to locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentVolume"),"."),(0,o.kt)("p",null,"You can use a StorageClass if you want. We won't be running multiple xCAT replica anyway."),(0,o.kt)("h2",{id:"3-apps"},"3. Apps"),(0,o.kt)("p",null,"Because, xCAT MUST use the host network to be able to provision the bare metal servers, we will use Multus CNI to expose the pod to the external network."),(0,o.kt)("p",null,"xCAT will deploy a lot of services including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A DHCP Server"),(0,o.kt)("li",{parentName:"ul"},"A TFTP Server"),(0,o.kt)("li",{parentName:"ul"},"A RSync Server"),(0,o.kt)("li",{parentName:"ul"},"A DNS Server"),(0,o.kt)("li",{parentName:"ul"},"xCAT Services"),(0,o.kt)("li",{parentName:"ul"},"And ",(0,o.kt)("a",{parentName:"li",href:"https://xcat-docs.readthedocs.io/en/stable/advanced/ports/xcat_ports.html"},"more"))),(0,o.kt)("p",null,"That's why we will use the Multus and CNI plugins to solve this particular problem."),(0,o.kt)("p",null,"Let's start with the obvious:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/xcat-app.yml"',title:'"argo/provisioning/apps/xcat-app.yml"'},'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: xcat-app\n  namespace: argocd\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  project: provisioning\n  source:\n    repoURL: git@github.com:squarefactory/cluster-factory-ce.git\n    targetRevision: HEAD\n    path: helm/xcat\n    helm:\n      releaseName: xcat\n\n      values: |\n        ...\n\n  destination:\n    server: \'https://kubernetes.default.svc\'\n    namespace: provisioning\n\n  syncPolicy:\n    automated:\n      prune: true # Specifies if resources should be pruned during auto-syncing ( false by default ).\n      selfHeal: true # Specifies if partial app sync should be executed when resources are changed only in target Kubernetes cluster and no git change detected ( false by default ).\n      allowEmpty: false # Allows deleting all application resources during automatic syncing ( false by default ).\n    syncOptions: []\n    retry:\n      limit: 5 # number of failed sync attempt retries; unlimited number of attempts if less than 0\n      backoff:\n        duration: 5s # the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")\n        factor: 2 # a factor to multiply the base duration after each failed retry\n        maxDuration: 3m # the maximum amount of time allowed for the backoff strategy\n')),(0,o.kt)("p",null,"For the values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values-custom.yaml"',title:'"values-custom.yaml"'},"nodeSelector:\n  topology.kubernetes.io/region: ch-sion\n  topology.kubernetes.io/zone: ch-sion-1\n\nresources:\n  requests:\n    cpu: '250m'\n    memory: '8Gi'\n  limits:\n    cpu: '8'\n    memory: '8Gi'\n\npersistence:\n  storageClassName: ''\n  accessModes: ['ReadWriteOnce']\n  size: 50Gi\n  selectorLabels:\n    app: xcat\n\nnet:\n  # Kubernetes host interface\n  masterInterface: eno2\n  mode: l2\n  type: ipvlan\n\n  # https://www.cni.dev/plugins/current/ipam/static/\n  ipam:\n    type: static\n    addresses:\n      - address: 10.10.2.160/24\n        gateway: 10.10.2.1\n    routes:\n      - dst: 0.0.0.0/0\n\n  dns:\n    nameservers:\n      - 127.0.0.1\n    searches:\n      - ch1.csquare.run\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," is very useful to make sure that xCAT stays in the right zone."),(0,o.kt)("p",null,"If you are using a StorageClass, remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistence.selectorLabels")," field."),(0,o.kt)("p",null,"Let's focus on the ",(0,o.kt)("inlineCode",{parentName:"p"},"net")," field. To expose xCAT to the external network, instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancers"),", we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus"),". Multus is a CNI plugin to attach multiple network interfaces on Pods."),(0,o.kt)("p",null,"However, we will use Multus CNI to replace the default network interface with a IPVLAN interface."),(0,o.kt)("p",null,"IPVLAN allows us to directly expose the pod to the host network. To do that, you must specify the network interface of the node with the ",(0,o.kt)("inlineCode",{parentName:"p"},"masterInterface")," field. Then, you should allocate an address using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ipam")," field."),(0,o.kt)("p",null,"More details on IPAM ",(0,o.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/ipam/static/"},"here")," and for IPVLAN ",(0,o.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/ipvlan/"},"here"),"."),(0,o.kt)("p",null,"This way, instead of using a Virtual Machine to deploy xCAT, you can use a container!"),(0,o.kt)("p",null,"Deploy the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/provisioning/apps/xcat-app.yml\n")),(0,o.kt)("p",null,"Login to xCAT using the indicated IP address ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh root@10.10.2.160 -p 2200")," (the password is ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster"),")."))}d.isMDXComponent=!0}}]);