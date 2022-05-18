"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[700],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9496);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),f=s,v=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5441:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var n=r(2848),s=r(9213),a=(r(9496),r(9613)),o=["components"],c={},l="Mount CVMFS repositories on Kubernetes",i={unversionedId:"guides/cvmfs/mount-cvmfs",id:"guides/cvmfs/mount-cvmfs",title:"Mount CVMFS repositories on Kubernetes",description:"image-20220509154116581",source:"@site/docs/guides/04-cvmfs/01-mount-cvmfs.md",sourceDirName:"guides/04-cvmfs",slug:"/guides/cvmfs/mount-cvmfs",permalink:"/docs/guides/cvmfs/mount-cvmfs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/04-cvmfs/01-mount-cvmfs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Deploy Open OnDemand",permalink:"/docs/guides/slurm/deploy-ondemand"},next:{title:"Deploy a CVMFS Stratum 1",permalink:"/docs/guides/cvmfs/deploy-cvmfs"}},p={},u=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. AppProject",id:"1-appproject",level:2},{value:"2. Secrets",id:"2-secrets",level:2},{value:"3. Editing <code>cvmfs-service-app.yml</code> values",id:"3-editing-cvmfs-service-appyml-values",level:2},{value:"3.a. Select the CVMFS repositories",id:"3a-select-the-cvmfs-repositories",level:3},{value:"3.b. Configure the CVMFS client",id:"3b-configure-the-cvmfs-client",level:3},{value:"3.c. Configure the keys",id:"3c-configure-the-keys",level:3},{value:"3.d. Verify the default values.",id:"3d-verify-the-default-values",level:3},{value:"4. Deploy the CVMFS service",id:"4-deploy-the-cvmfs-service",level:2},{value:"5. Mount the repositories to a container",id:"5-mount-the-repositories-to-a-container",level:2}],m={toc:u};function f(e){var t=e.components,c=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mount-cvmfs-repositories-on-kubernetes"},"Mount CVMFS repositories on Kubernetes"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220509154116581",src:r(6998).Z,width:"1009",height:"369"})),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The CVMFS CSI Plugin isn't stable yet, so we have to do the old way: using ",(0,a.kt)("inlineCode",{parentName:"p"},"hostPath"),"."))),(0,a.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,a.kt)("p",null,"The Helm resources is stored on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/helm/cvmfs-service"},"Cluster Factory Git Repository"),"."),(0,a.kt)("p",null,"The Dockerfile is described in the git repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.dev/cvmfs/cvmfs/blob/devel/packaging/container/Dockerfile"},"cvmfs/cvmfs"),"."),(0,a.kt)("p",null,"An Docker image can be pulled with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/cvmfs/cvmfs:latest\n")),(0,a.kt)("h2",{id:"1-appproject"},"1. AppProject"),(0,a.kt)("p",null,"Apply the AppProject:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/cvmfs/app-project.yml\n")),(0,a.kt)("h2",{id:"2-secrets"},"2. Secrets"),(0,a.kt)("p",null,"Create a SealedSecret which contains the keys of the repositories:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"-secret.yml.local")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/cvmfs/secrets/cvmfs-keys-secret.yml.local"',title:'"argo/cvmfs/secrets/cvmfs-keys-secret.yml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cvmfs-keys-secret\n  namespace: cvmfs\ntype: Opaque\nstringData:\n  software.sion.csquare.run.pub: |\n    -----BEGIN PUBLIC KEY-----\n    ...\n    -----END PUBLIC KEY-----\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"./kubeseal-every-local-files.sh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/cvmfs/secrets/cvmfs-keys-sealed-secret.yml\n")),(0,a.kt)("h2",{id:"3-editing-cvmfs-service-appyml-values"},"3. Editing ",(0,a.kt)("inlineCode",{parentName:"h2"},"cvmfs-service-app.yml")," values"),(0,a.kt)("h3",{id:"3a-select-the-cvmfs-repositories"},"3.a. Select the CVMFS repositories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source > helm > values > repositories"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'repositories"':!0},"repositories:\n  - name: software-sion-csquare-run\n    repository: software.sion.csquare.run\n")),(0,a.kt)("h3",{id:"3b-configure-the-cvmfs-client"},"3.b. Configure the CVMFS client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source > helm > values > configs"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'configs"':!0},'configs:\n  default.local:\n    mountPath: default.local\n    contents: |\n      CVMFS_QUOTA_LIMIT=-1\n      CVMFS_USE_GEOAPI=no\n      CVMFS_HTTP_PROXY="DIRECT"\n      CVMFS_KEYS_DIR="/etc/cvmfs/keys"\n      CVMFS_SERVER_URL="http://cvmfs.ch1.csquare.run/cvmfs/@fqrn@"\n      CVMFS_USER=root\n')),(0,a.kt)("h3",{id:"3c-configure-the-keys"},"3.c. Configure the keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source > helm > values > keys"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'keys"':!0},"keys:\n  secretName: 'cvmfs-keys-secret'\n")),(0,a.kt)("p",null,"The keys will be mounted on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/cvmfs/keys")," directory. If you wish to change the path of each key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source > helm > values > keys"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'keys"':!0},"keys:\n  secretName: 'cvmfs-keys-secret'\n  items:\n    - key: software.sion.csquare.run.pub\n      path: sion.csquare.run/software.sion.csquare.run.pub\n")),(0,a.kt)("p",null,"The key will be moved to the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/cvmfs/keys/sion.csquare.run/software.sion.csquare.run.pub"),"."),(0,a.kt)("h3",{id:"3d-verify-the-default-values"},"3.d. Verify the default values."),(0,a.kt)("p",null,"Verify the default value inside the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/helm/cvmfs-service/values.yaml"},"git repository"),"."),(0,a.kt)("p",null,"You can change the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostPath")," if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source > helm > values > persistence"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,source:!0,helm:!0,values:!0,'persistence"':!0},"persistence:\n  hostPath: /cvmfs\n")),(0,a.kt)("h2",{id:"4-deploy-the-cvmfs-service"},"4. Deploy the CVMFS service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},"kubectl apply -f argo/provisioning/apps/cvmfs-service-app.yml\n")),(0,a.kt)("h2",{id:"5-mount-the-repositories-to-a-container"},"5. Mount the repositories to a container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="job.yaml"',title:'"job.yaml"'},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: list-cvmfs\nspec:\n  template:\n    spec:\n      containers:\n        - name: list-cvmfs\n          image: busybox\n          command: ['ls', '/cvmfs/software.sion.csquare.run']\n          volumeMounts:\n            - mountPath: /cvmfs/software.sion.csquare.run\n              name: software-sion-csquare-run\n              readOnly: true\n      restartPolicy: Never\n      volumes:\n        - name: software-sion-csquare-run\n          hostPath:\n            path: /cvmfs/cvmfs-k8s/mounts/software.sion.csquare.run\n            type: Directory\n  backoffLimit: 0\n")))}f.isMDXComponent=!0},6998:function(e,t,r){t.Z=r.p+"assets/images/image-20220509154116581-980a4a608d5e4e2012e25cd601aa9dd7.png"}}]);