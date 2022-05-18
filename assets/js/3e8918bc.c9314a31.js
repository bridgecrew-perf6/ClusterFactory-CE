"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[0],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(2848),a=n(9213),r=(n(9496),n(9613)),i=["components"],s={},l="6. xCAT Configuration",c={unversionedId:"getting-started/xcat-configuration",id:"getting-started/xcat-configuration",title:"6. xCAT Configuration",description:"This part of the documentation is mostly a draft.",source:"@site/docs/getting-started/06-xcat-configuration.md",sourceDirName:"getting-started",slug:"/getting-started/xcat-configuration",permalink:"/docs/getting-started/xcat-configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/06-xcat-configuration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"5. xCAT Deployment",permalink:"/docs/getting-started/xcat-deployment"},next:{title:"K0s, the kubernetes distribution for bare-metal",permalink:"/docs/main-concepts/k0s"}},p={},m=[{value:"Network configuration",id:"network-configuration",level:2},{value:"OS Image configuration",id:"os-image-configuration",level:2},{value:"Node configuration",id:"node-configuration",level:2},{value:"Deploy",id:"deploy",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-xcat-configuration"},"6. xCAT Configuration"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This part of the documentation is mostly a draft."),(0,r.kt)("p",{parentName:"div"},"Best way to get started is to follow ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/get-started/quick_start.html"},"the xCAT official quick start"),"."))),(0,r.kt)("p",null,"The configuration of xCAT don't follow the GitOps ways and certainly don't follow the declarative way since we need to SSH to the pod."),(0,r.kt)("p",null,"In the future, we plan to develop and integrate this feature. For now, let's just SSH to the container."),(0,r.kt)("p",null,'In this guide we will try to get as close as possible to the "declarative" method. xCAT works with stanza files. The whole xCAT cluster can be configured with one big stanza file.'),(0,r.kt)("p",null,"It looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'compute01:\n      objtype=node\n      arch=x86_64\n      mgt=ipmi\n      cons=ipmi\n      bmc=10.1.0.12\n      nictypes.etn0=ethernet\n      nicips.eth0=11.10.1.3\n      nichostnamesuffixes.eth0=-eth0\n      nicnetworks.eth0=clstrnet1\n      nictypes.eth1=ethernet\n      nicips.eth1=60.0.0.7|70.0.0.7\n      nichostnamesuffixes.eth1=-eth1|-eth1-lab\n      nicnetworks.eth1=clstrnet2|clstrnet3\n      nicaliases.eth0="alias1 alias2"\n      nicaliases.eth1="alias3|alias4"\n')),(0,r.kt)("p",null,"A full cluster looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# <xCAT data object stanza file>\n\nmontbhandler.pm:\n    objtype=notification\n    tableops=a,u,d\n    tables=monsetting\n\n10_10_2_0-255_255_255_0:\n    objtype=network\n    domain=ch1.csquare.run\n    gateway=10.10.2.1\n    mask=255.255.255.0\n    mgtifname=ens18\n    mtu=1500\n    nameservers=10.10.4.100\n    net=10.10.2.0\n    tftpserver=<xcatmaster>\n\nib0ipv41:\n    objtype=network\n    mask=255.255.255.0\n    mgtifname=ib0\n    net=192.168.1.0\n\nrocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/xcatdata/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    postbootscripts=git-configs-execute its-a-fake-password-dont-worry compute\n    profile=compute\n    provmethod=netboot\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n\ncn1:\n    objtype=node\n    addkcmdline=modprobe.blacklist=nouveau crashkernel=256M\n    arch=x86_64\n    bmc=10.10.3.51\n    bmcpassword=password\n    bmcusername=admin\n    cons=ipmi\n    consoleenabled=1\n    currstate=netboot rocky8.4-x86_64-compute\n    groups=compute,all\n    ip=10.10.2.51\n    mac=18:c0:4d:b7:88:5f\n    mgt=ipmi\n    netboot=xnba\n    nicips.ib0=192.168.1.51\n    nicnetworks.ib0=ib0ipv41\n    nictypes.ib0=Infiniband\n    os=rocky8.4\n    postbootscripts=nvidia-xorg\n    profile=compute\n    provmethod=rocky8.4-x86_64-netboot-compute\n    serialport=1\n    serialspeed=115200\n    status=booted\n    statustime=05-03-2022 10:23:10\n    updatestatus=synced\n    updatestatustime=03-23-2022 10:27:05\n\n1:\n    objtype=policy\n    name=root\n    rule=allow\n\n1.2:\n    objtype=policy\n    name=xcatmn\n    rule=trusted\n\n2:\n    objtype=policy\n    commands=getbmcconfig\n    rule=allow\n\n2.1:\n    objtype=policy\n    commands=remoteimmsetup\n    rule=allow\n\n2.3:\n    objtype=policy\n    commands=lsxcatd\n    rule=allow\n\n3:\n    objtype=policy\n    commands=nextdestiny\n    rule=allow\n\n4:\n    objtype=policy\n    commands=getdestiny\n    rule=allow\n\n4.4:\n    objtype=policy\n    commands=getpostscript\n    rule=allow\n\n4.5:\n    objtype=policy\n    commands=getcredentials\n    rule=allow\n\n4.6:\n    objtype=policy\n    commands=syncfiles\n    rule=allow\n\n4.7:\n    objtype=policy\n    commands=litefile\n    rule=allow\n\n4.8:\n    objtype=policy\n    commands=litetree\n    rule=allow\n\n4.9:\n    objtype=policy\n    commands=getadapter\n    rule=allow\n\nall:\n    objtype=group\n    members=cn1\n\ncompute:\n    objtype=group\n    members=cn1\n\nclustersite:\n    objtype=site\n    SNsyncfiledir=/var/xcat/syncfiles\n    auditnosyslog=0\n    auditskipcmds=ALL\n    blademaxp=64\n    cleanupdiskfullxcatpost=no\n    cleanupxcatpost=no\n    consoleondemand=no\n    databaseloc=/var/lib\n    db2installloc=/mntdb2\n    dhcplease=43200\n    dnshandler=ddns\n    domain=xcat.provisioning.svc.cluster.local\n    enableASMI=no\n    forwarders=10.96.0.10\n    fsptimeout=0\n    installdir=/install\n    ipmimaxp=64\n    ipmiretries=3\n    ipmitimeout=2\n    master=10.10.2.160\n    maxssh=8\n    nameservers=10.10.2.160\n    nodesyncfiledir=/var/xcat/node/syncfiles\n    powerinterval=0\n    ppcmaxp=64\n    ppcretry=3\n    ppctimeout=0\n    sharedtftp=1\n    sshbetweennodes=ALLGROUPS\n    syspowerinterval=0\n    tftpdir=/tftpboot\n    timezone=Etc/UCT\n    useNmapfromMN=no\n    vsftp=n\n    xcatconfdir=/etc/xcat\n    xcatdport=3001\n    xcatiport=3002\n\nrocky8.4-x86_64:\n    objtype=osdistro\n    arch=x86_64\n    basename=rocky\n    dirpaths=/install/rocky8.4/x86_64\n    majorversion=8\n    minorversion=4\n    type=Linux\n")),(0,r.kt)("p",null,"Some field are auto-generated. So let's just configure the network, the OS Image and the nodes."),(0,r.kt)("h2",{id:"network-configuration"},"Network configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"10_10_2_0-255_255_255_0:\n    objtype=network\n    domain=my.home\n    gateway=10.10.2.1\n    mask=255.255.255.0\n    mgtifname=ens18\n    mtu=1500\n    nameservers=10.10.4.100\n    net=10.10.2.0\n    tftpserver=<xcatmaster>\n")),(0,r.kt)("p",null,"To apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/latest/guides/admin-guides/references/man5/networks.5.html"},"here"),"."),(0,r.kt)("p",null,"For Infiniband, follow ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/advanced/networks/infiniband/network_configuration.html"},"this guide"),"."),(0,r.kt)("h2",{id:"os-image-configuration"},"OS Image configuration"),(0,r.kt)("p",null,"Use Packer to build OS images."),(0,r.kt)("p",null,"You can build the SquareFactory OS image using the recipes stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"packer-recipes"),". Basically, it runs RedHat Kickstart and install all the stuff."),(0,r.kt)("p",null,"The rootfs is then copied to xCAT using rsync."),(0,r.kt)("p",null,"You can use the xCAT OS image builder, but we highly recommend using Packer to create OS images for cloud and bare metal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"rocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    postbootscripts=git-configs-execute its-a-fake-password-dont-worry compute\n    profile=compute\n    provmethod=netboot\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n")),(0,r.kt)("p",null,"Our rootfs is stored inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/install/netboot/rocky8.4/x86_64/compute/rootimg"),"."),(0,r.kt)("p",null,"Create one postbootscript inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/install/postscripts")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"git-configs-execute"),", which basically git clone and execute scripts from a git repository."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/install/postscripts/git-configs-execute"',title:'"/install/postscripts/git-configs-execute"'},'#!/bin/sh\n# Params:\n#  1: password for the ssh key\n#  2: node type (compute or private)\n\nset -x\n\nmkdir -p /configs\ncat << EOF > /key.enc\n# An encrypted private key using:\n# openssl enc -aes-256-cbc -a -salt -pbkdf2  -in id_ed25519_api -out id_ed25519_api.enc\nEOF\nchmod 600 /key.enc\necho "$1" | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\nchmod 600 /key\nGIT_SSH_COMMAND=\'ssh -i /key -o IdentitiesOnly=yes\' git clone git@github.com:SquareFactory/compute-configs.git /configs\nif [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then\n  cd /configs || exit 1\n  ./post.sh "$2"\nfi\nrm -f /key /key.env\n\n# Security\nchmod -R g-rwx,o-rwx .\n')),(0,r.kt)("p",null,"This script clone ",(0,r.kt)("inlineCode",{parentName:"p"},"git@github.com:SquareFactory/compute-configs.git")," and executes ",(0,r.kt)("inlineCode",{parentName:"p"},"post.sh")," inside the git repository."),(0,r.kt)("p",null,"This script enables us to use Git as the source of truth instead of xCAT."),(0,r.kt)("p",null,"To apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"To generate the kernel and initrd for the netboot, call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"geninitrd rocky8.4-x86_64-netboot-compute\n")),(0,r.kt)("p",null,"To pack the image as squashfs, call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"packimage -m squashfs -c pigz rocky8.4-x86_64-netboot-compute\n")),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/admin-guides/references/man5/osimage.5.html"},"here"),"."),(0,r.kt)("h2",{id:"node-configuration"},"Node configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"cn1:\n    objtype=node\n    addkcmdline=modprobe.blacklist=nouveau crashkernel=256M\n    arch=x86_64\n    bmc=10.10.3.51\n    bmcpassword=password\n    bmcusername=admin\n    cons=ipmi\n    consoleenabled=1\n    currstate=netboot rocky8.4-x86_64-compute\n    groups=compute,all\n    ip=10.10.2.51\n    mac=18:c0:4d:b7:88:5f\n    mgt=ipmi\n    netboot=xnba\n    os=rocky8.4\n    profile=compute\n    provmethod=rocky8.4-x86_64-netboot-compute\n    serialport=1\n    serialspeed=115200\n")),(0,r.kt)("p",null,"To apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/admin-guides/references/man7/node.7.html"},"here"),"."),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"rpower cn1 on # or rpower cn1 reset\n")),(0,r.kt)("p",null,"Congratulations, you've deployed a bare-metal server! xCAT is a heavy beast, but a complete bare metal provisioner. We recommend that you familiarize yourself with the software very quickly by reading the ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/overview/index.html"},"xCAT documentation"),"."),(0,r.kt)("p",null,"Next steps should be to configure your compute nodes and install a job scheduler like Slurm so you can run parallel jobs!"))}d.isMDXComponent=!0}}]);