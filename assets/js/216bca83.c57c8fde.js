"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[300],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(2848),a=n(9213),o=(n(9496),n(9613)),i=["components"],s={},l="2. K0s Configuration",c={unversionedId:"getting-started/k0s-configuration",id:"getting-started/k0s-configuration",title:"2. K0s Configuration",description:"Specifying the hosts",source:"@site/docs/getting-started/02-k0s-configuration.md",sourceDirName:"getting-started",slug:"/getting-started/k0s-configuration",permalink:"/docs/getting-started/k0s-configuration",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/feat/docs/web/docs/getting-started/02-k0s-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"1. Requirements and recommendations",permalink:"/docs/getting-started/requirements-recommendations"},next:{title:"3. Core Apps Deployment",permalink:"/docs/getting-started/core-apps-deployment"}},u={},p=[{value:"Specifying the hosts",id:"specifying-the-hosts",level:2},{value:"Configuring the k0s architecture",id:"configuring-the-k0s-architecture",level:2},{value:"Configuring MetalLB",id:"configuring-metallb",level:2},{value:"Configuring Traefik",id:"configuring-traefik",level:2},{value:"Initial Deployment",id:"initial-deployment",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-k0s-configuration"},"2. K0s Configuration"),(0,o.kt)("h2",{id:"specifying-the-hosts"},"Specifying the hosts"),(0,o.kt)("p",null,"You may want to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork")," the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce"},"Cluster Factory CE repository"),", so you could use Argo CD on your own repository."),(0,o.kt)("p",null,"For now, let's just clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"git clone https://github.com/SquareFactory/cluster-factory-ce.git\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"k0sctl.yaml")," file. Start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," field :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=k0sctl.yaml",title:"k0sctl.yaml"},'apiVersion: k0sctl.k0sproject.io/v1beta1\nkind: Cluster\nmetadata:\n  name: my-home-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 10.10.2.16\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      privateInterface: eno2\n      privateAddress: 10.10.2.16\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=<country code>-<city>,topology.kubernetes.io/zone=<country code>-<city>-<index>"\n      hooks:\n        apply:\n          after:\n            - mkdir -p /var/lib/k0s/kubelet\n            - sh -c "if [ -L /var/lib/kubelet ]; then echo symlink already exists; else rm -f /var/lib/kubelet && ln -s /var/lib/k0s/kubelet /var/lib/kubelet; fi"\n            - sh -c \'if [ "$(getenforce)" -nq "Permissive" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" -nq "Permissive" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 172.24.0.4\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: worker\n      privateInterface: priv0\n      privateAddress: 172.24.0.4\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=<country code>-<city>,topology.kubernetes.io/zone=<country code>-<city>-<index>"\n      hooks:\n        apply:\n          after:\n            - mkdir -p /var/lib/k0s/kubelet\n            - sh -c "if [ -L /var/lib/kubelet ]; then echo symlink already exists; else rm -f /var/lib/kubelet && ln -s /var/lib/k0s/kubelet /var/lib/kubelet; fi"\n            - sh -c \'if [ "$(getenforce)" -nq "Permissive" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" -nq "Permissive" ]; then setenforce 0; fi\'\n  ...\n')),(0,o.kt)("p",null,"Provide each host with a valid IP address that is reachable by k0ctl, and the connection details for an SSH connection. Edit the labels for multi-zone usage."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/k0sproject/k0sctl#spec-fields"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"k0sctl.yaml")," specification is written in the repository of k0sctl"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should read the specification carefully as the modification of one the host field won't be allowed in the future"),"."),(0,o.kt)("p",null,"If you wish to use a HA setup, please follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.k0sproject.io/v1.23.6+k0s.0/high-availability/"},"this guide"),"."),(0,o.kt)("h2",{id:"configuring-the-k0s-architecture"},"Configuring the k0s architecture"),(0,o.kt)("p",null,"After you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," field, you must configure the k0s architecture by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"k0s")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k0sctl.yaml > spec > k0s"',title:'"k0sctl.yaml',">":!0,spec:!0,'k0s"':!0},"k0s:\n  version: 1.23.6+k0s.1\n  dynamicConfig: false\n  config:\n    apiVersion: k0s.k0sproject.io/v1beta1\n    kind: Cluster\n    metadata:\n      name: k8s.my.home\n    spec:\n      api:\n        k0sApiPort: 9443\n        port: 6443\n      installConfig:\n        users:\n          etcdUser: etcd\n          kineUser: kube-apiserver\n          konnectivityUser: konnectivity-server\n          kubeAPIserverUser: kube-apiserver\n          kubeSchedulerUser: kube-scheduler\n      konnectivity:\n        adminPort: 8133\n        agentPort: 8132\n      network:\n        calico:\n          mode: 'vxlan'\n          overlay: Always\n          mtu: 0\n          wireguard: false\n        kubeProxy:\n          disabled: false\n          mode: iptables\n        kuberouter:\n          autoMTU: true\n          mtu: 0\n          peerRouterASNs: ''\n          peerRouterIPs: ''\n        podCIDR: 10.244.0.0/16\n        provider: calico\n        serviceCIDR: 10.96.0.0/12\n      podSecurityPolicy:\n        defaultPolicy: 00-k0s-privileged\n      storage:\n        type: etcd\n      telemetry:\n        enabled: false\n")),(0,o.kt)("p",null,"Check the CIDR and make sure it doesn't conflict with any IP range of your network."),(0,o.kt)("p",null,"Again, ",(0,o.kt)("strong",{parentName:"p"},"You should read the specification carefully as the modification of one the k0s field won't be allowed in the future"),"."),(0,o.kt)("p",null,"If you wish to use a HA setup, please follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.k0sproject.io/v1.23.6+k0s.0/high-availability/"},"this guide"),"."),(0,o.kt)("p",null,"After setting up k0s, you can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," field. This field can be changed at any time. You can add or change extensions. However, removing an extension is permanent."),(0,o.kt)("h2",{id:"configuring-metallb"},"Configuring MetalLB"),(0,o.kt)("p",null,"Start with ",(0,o.kt)("inlineCode",{parentName:"p"},"metallb"),". MetalLB is a L2/L3 load balancer designed for bare metal Kubernetes clusters. It exposes the kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Services")," to the external network. It uses either L2 or BGP to advertise routes. The network indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"metallb")," must be outside the network when using BGP. Otherwise, when using L2, the network must be the same as your private network. For multi-zone clusters, you MUST use BGP."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"k0s_metallb_loadbalancer",src:n(3462).Z,width:"509",height:"310"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'MetalLB 0.13.0 will allow you to create "zoned" L2 announcements, which means you can make ARP calls by zone.'),(0,o.kt)("p",{parentName:"div"},"More precisely, this means that you can allow ",(0,o.kt)("inlineCode",{parentName:"p"},"10.10.2.100")," in the network ",(0,o.kt)("inlineCode",{parentName:"p"},"10.10.2.0/24")," in one zone, and ",(0,o.kt)("inlineCode",{parentName:"p"},"172.24.0.100")," in the network ",(0,o.kt)("inlineCode",{parentName:"p"},"172.24.0.18")," in an another zone, which means that you wouldn't need BGP anymore."),(0,o.kt)("p",{parentName:"div"},"However, MetalLB 0.13.0 is not yet available at the time of writing."))),(0,o.kt)("p",null,"Your router must be capable of using BGP. If not, you should use an appliance with BGP capabilities (like pfSense, or just a Linux machine with BIRD)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"k0sctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: metallb\n  chartname: bitnami/metallb\n  version: '3.0.4'\n  namespace: metallb\n  values: |\n\n    configInline:\n      peers:\n        - peer-address: 172.24.0.2\n          peer-asn: 65007\n          my-asn: 64500\n          source-address: 172.24.0.4\n          node-selectors:\n            - match-labels:\n                kubernetes.io/hostname: k0s-exoscale-at-vie-1\n        - peer-address: 10.10.2.1\n          peer-asn: 65503\n          my-asn: 64501\n          source-address: 10.10.2.16\n          node-selectors:\n            - match-labels:\n                kubernetes.io/hostname: mn1.ch1.csquare.run\n\n      address-pools:\n        - name: main-pool\n          protocol: bgp\n          addresses:\n            - 10.10.4.100/32\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/configuration/#layer-2-configuration"},"Use L2 if you have only one zone"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"k0sctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: metallb\n  chartname: bitnami/metallb\n  version: '3.0.4'\n  namespace: metallb\n  values: |\n\n    configInline:\n      address-pools:\n        - name: main-pool\n          protocol: layer2\n          addresses:\n            - 10.10.2.100/32\n")),(0,o.kt)("h2",{id:"configuring-traefik"},"Configuring Traefik"),(0,o.kt)("p",null,"After configuring the Load Balancer, you should configure Traefik, the main Ingress and L7 load balancer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"',title:'"k0sctl.yaml',">":!0,spec:!0,k0s:!0,extensions:!0,helm:!0,'charts[]"':!0},"- name: traefik\n  chartname: traefik/traefik\n  version: '10.19.5'\n  namespace: traefik\n  values: |\n\n    ingressClass:\n      enabled: true\n      isDefaultClass: true\n\n    service:\n      enabled: true\n      annotations:\n        metallb.universe.tf/address-pool: main-pool\n        metallb.universe.tf/allow-shared-ip: traefik-lb-key\n      spec:\n        externalTrafficPolicy: Cluster\n        loadBalancerIP: 10.10.4.100\n\n    providers:\n      kubernetesCRD:\n        enabled: true\n        allowCrossNamespace: true\n        allowExternalNameServices: true\n        namespaces: []\n      kubernetesIngress:\n        enabled: true\n        allowExternalNameServices: true\n        namespaces: []\n        ingressClass: traefik\n        publishedService:\n          enabled: true\n\n    globalArguments:\n      - '--global.checknewversion'\n      - '--api.dashboard=true'\n\n    additionalArguments:\n      - '--entryPoints.websecure.proxyProtocol.insecure'\n      - '--entryPoints.websecure.forwardedHeaders.insecure'\n\n    ingressRoute:\n      dashboard:\n        enabled: false\n\n    ports:\n      traefik:\n        port: 9000\n        expose: false\n        exposedPort: 9000\n        protocol: TCP\n      dns-tcp:\n        port: 8053\n        expose: true\n        exposedPort: 53\n        protocol: TCP\n      dns-udp:\n        port: 8054\n        expose: true\n        exposedPort: 53\n        protocol: UDP\n      web:\n        port: 80\n        expose: true\n        exposedPort: 80\n        protocol: TCP\n      websecure:\n        port: 443\n        expose: true\n        exposedPort: 443\n        protocol: TCP\n        # NOTE: use cert-manager.\n        tls:\n          enabled: false\n      metrics:\n        port: 9100\n        expose: false\n        exposedPort: 9100\n        protocol: TCP\n\n    securityContext:\n      capabilities:\n        drop: [ALL]\n        add: [NET_BIND_SERVICE]\n      readOnlyRootFilesystem: true\n      runAsGroup: 0\n      runAsNonRoot: false\n      runAsUser: 0\n\n    podSecurityContext:\n      fsGroup: 65532\n")),(0,o.kt)("p",null,"Look for ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," and use the IPs from the MetalLB."),(0,o.kt)("p",null,"Add or remove ports. Since Traefik will be used as the main Ingress, these ports will be exposed to the external network."),(0,o.kt)("p",null,"The IngressClass is ",(0,o.kt)("inlineCode",{parentName:"p"},"traefik"),". If you don't want to use Traefik, feel free to add another extension."),(0,o.kt)("p",null,"We use Traefik because it can do a lot of complex route operations while still being able to do basic HTTP routing."),(0,o.kt)("h2",{id:"initial-deployment"},"Initial Deployment"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"1.deploy-k0s.sh")," script to deploy the cluster."),(0,o.kt)("p",null,"You can re-run the scripts if you modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"k0sctl.yaml")," file."),(0,o.kt)("p",null,"Or, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"k0sctl")," manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce"',title:'"user@local:/cluster-factory-ce"'},'PATH="$(pwd)/bin:${PATH}"\nk0sctl apply --config ./k0sctl.yaml\n\n# Fetch the kubeconfig\nk0sctl kubeconfig --config ./k0sctl.yaml >./kubeconfig\n')),(0,o.kt)("p",null,"Store the kubeconfig inside ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),", or just ",(0,o.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$(pwd)/kubeconfig"),"."),(0,o.kt)("p",null,"Just make sure to verify which configuration you are using with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config view"),"."),(0,o.kt)("p",null,"Congratulation, you have deployed your Kubernetes cluster! However, it's still missing a few core features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sealed Secrets, secret management optimized for GitOps"),(0,o.kt)("li",{parentName:"ul"},"Cert-manager issuers, to generate your SSL certificates and enable, for free, TLS configuration."),(0,o.kt)("li",{parentName:"ul"},"Argo CD, to enable GitOps."),(0,o.kt)("li",{parentName:"ul"},"CoreDNS configurations")))}m.isMDXComponent=!0},3462:function(e,t,n){t.Z=n.p+"assets/images/k0s_metallb_loadbalancer-078ac32f99bb6d2bd24ca04c1f679be0.png"}}]);