"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[278],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(2848),o=n(9213),a=(n(9496),n(9613)),i=["components"],s={},l="Build an OS Image with Packer",c={unversionedId:"guides/provisioning/packer-build",id:"guides/provisioning/packer-build",title:"Build an OS Image with Packer",description:"Rocky Linux OS Image",source:"@site/docs/guides/02-provisioning/02-packer-build.md",sourceDirName:"guides/02-provisioning",slug:"/guides/provisioning/packer-build",permalink:"/docs/guides/provisioning/packer-build",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/feat/docs/web/docs/guides/02-provisioning/02-packer-build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"How to deploy xCAT",permalink:"/docs/guides/provisioning/deploy-xcat"},next:{title:"Configure xCAT to provision the nodes",permalink:"/docs/guides/provisioning/configure-xcat"}},u={},p=[{value:"Rocky Linux OS Image",id:"rocky-linux-os-image",level:2},{value:"Configuring and Launching Packer",id:"configuring-and-launching-packer",level:3},{value:"Exporting to xCAT",id:"exporting-to-xcat",level:3},{value:"Configure the OS Image on xCAT",id:"configure-the-os-image-on-xcat",level:3},{value:"Generate the initramfs and pack the image as squashfs",id:"generate-the-initramfs-and-pack-the-image-as-squashfs",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-an-os-image-with-packer"},"Build an OS Image with Packer"),(0,a.kt)("h2",{id:"rocky-linux-os-image"},"Rocky Linux OS Image"),(0,a.kt)("h3",{id:"configuring-and-launching-packer"},"Configuring and Launching Packer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/packer-recipes"},(0,a.kt)("inlineCode",{parentName:"a"},"packer-recipes")," directory inside the git repository")," contains examples of Packer configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="rocky.nothing.json"',title:'"rocky.nothing.json"'},'{\n  "variables": {\n    "boot_wait": "3s",\n    "disk_size": "10G",\n    "iso_checksum": "5a0dc65d1308e47b51a49e23f1030b5ee0f0ece3702483a8a6554382e893333c",\n    "iso_url": "https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-boot.iso",\n    "memsize": "8192",\n    "numvcpus": "4"\n  },\n  "builders": [\n    {\n      "type": "qemu",\n      "accelerator": "kvm",\n      "communicator": "none",\n      "boot_command": [\n        "<up><tab><bs><bs><bs><bs><bs> ",\n        "inst.ks=http://{{ .HTTPIP }}:{{ .HTTPPort }}/ks.nothing.cfg ",\n        "inst.cmdline",\n        "<enter><wait>"\n      ],\n      "boot_wait": "{{ user `boot_wait` }}",\n      "disk_size": "{{ user `disk_size` }}",\n      "iso_url": "{{ user `iso_url` }}",\n      "iso_checksum": "{{ user `iso_checksum` }}",\n      "headless": true,\n      "cpus": "{{ user `numvcpus` }}",\n      "memory": "{{ user `memsize` }}",\n      "vnc_bind_address": "0.0.0.0",\n      "http_directory": "http",\n      "shutdown_timeout": "1h",\n      "qemuargs": [["-serial", "stdio"]]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"When running Packer, the process is the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launch a HTTP server which serves the ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," directory."),(0,a.kt)("li",{parentName:"ul"},"Launch a VM and a VNC session."),(0,a.kt)("li",{parentName:"ul"},"Boot on the ISO and enter the ",(0,a.kt)("inlineCode",{parentName:"li"},"boot_command")," to load the RedHat Kickstart file from HTTP."),(0,a.kt)("li",{parentName:"ul"},"Run the Kickstart RedHat file. This file automates the installation process of the OS."),(0,a.kt)("li",{parentName:"ul"},"Shutdown the VM.")),(0,a.kt)("p",null,"Configure the installation process by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"http/ks.nothing.cfg"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="http/ks.nothing.cfg"',title:'"http/ks.nothing.cfg"'},'url --url="https://dl.rockylinux.org/vault/rocky/8.4/BaseOS/x86_64/os/"\n# License agreement\neula --agreed\n# Disable Initial Setup on first boot\nfirstboot --disable\n# Poweroff after the install is finished\npoweroff\n# Firewall\nfirewall --enabled --service=ssh\n# Disable Initial Setup on first boot\nfirstboot --disable\nignoredisk --only-use=vda\n# System language\nlang en_US.UTF-8\n# Keyboard layout\nkeyboard us\n# Network information\nnetwork --bootproto=dhcp --device=eth0\n# SELinux configuration\nselinux --disabled\n# System timezone\ntimezone UTC --isUtc\n# System bootloader configuration\nbootloader --location=mbr --driveorder="vda" --timeout=1\n# Root password\nrootpw --plaintext an_example_of_default_password\n# System services\nservices --enabled="chronyd"\n\nrepo --name="AppStream" --baseurl=https://dl.rockylinux.org/vault/rocky/8.4/AppStream/x86_64/os/\nrepo --name="Extras" --baseurl=https://dl.rockylinux.org/vault/rocky/8.4/extras/x86_64/os/\nrepo --name="PowerTools" --baseurl=https://dl.rockylinux.org/vault/rocky/8.4/PowerTools/x86_64/os/\nrepo --name="epel" --baseurl=https://mirror.init7.net/fedora/epel/8/Everything/x86_64/\n\n# Clear the Master Boot Record\nzerombr\n# Remove partitions\nclearpart --all --initlabel\n# Automatically create partition\npart / --size=1 --grow --asprimary --fstype=xfs\n\n# Postinstall\n%post --erroronfail\nset -ex\n# backup sshkey\nmkdir -m0700 /root/.ssh/\ncat <<EOF >/root/.ssh/authorized_keys\nssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPd+X08wpIGwKZ0FsJu1nkR3o1CzlXF3OkgQd/WYB2fX nguyen@csquare\nEOF\n\nchmod 0600 /root/.ssh/authorized_keys\nrestorecon -R /root/.ssh/\n\ncat << EOF >>/etc/fstab\ndevpts  /dev/pts devpts   gid=5,mode=620 0 0\ntmpfs   /dev/shm tmpfs    defaults       0 0\nproc    /proc    proc     defaults       0 0\nsysfs   /sys     sysfs    defaults       0 0\nEOF\n\n# Postinstall\n#-- No firewall\nsystemctl disable firewalld\n\n# Kickstart copies install boot options. Serial is turned on for logging with\n# Packer which disables console output. Disable it so console output is shown\n# during deployments\nsed -i \'s/^GRUB_TERMINAL=.*/GRUB_TERMINAL_OUTPUT="console"/g\' /etc/default/grub\nsed -i \'/GRUB_SERIAL_COMMAND="serial"/d\' /etc/default/grub\nsed -ri \'s/(GRUB_CMDLINE_LINUX=".*)\\s+console=ttyS0(.*")/\\1\\2/\' /etc/default/grub\n\n# Clean up install config not applicable to deployed environments.\nfor f in resolv.conf; do\n    rm -f /etc/$f\n    touch /etc/$f\n    chown root:root /etc/$f\n    chmod 644 /etc/$f\ndone\n\nrm -f /etc/sysconfig/network-scripts/ifcfg-[^lo]*\n\ndnf clean all\n%end\n\n%packages\n@minimal-environment\nchrony\n\nbash-completion\ncloud-init\n# cloud-init only requires python3-oauthlib with MAAS. As such upstream\n# removed this dependency.\npython3-oauthlib\nrsync\ntar\n# grub2-efi-x64 ships grub signed for UEFI secure boot. If grub2-efi-x64-modules\n# is installed grub will be generated on deployment and unsigned which breaks\n# UEFI secure boot.\ngrub2-efi-x64\nefibootmgr\nshim-x64\ndosfstools\nlvm2\nmdadm\ndevice-mapper-multipath\niscsi-initiator-utils\n\n-plymouth\n# Remove Intel wireless firmware\n-i*-firmware\n%end\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"packages")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," blocks are probably what you are interested in."),(0,a.kt)("p",null,"Run packer with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/cluster-factory-ce/packer-recipes/rocky"',title:'"user@local:/cluster-factory-ce/packer-recipes/rocky"'},'packer build -ver "numvcpus=12" -var "memsize=23609" rocky.nothing.json\n')),(0,a.kt)("p",null,"The next steps is to export to xCAT, which can be a little tricky."),(0,a.kt)("h3",{id:"exporting-to-xcat"},"Exporting to xCAT"),(0,a.kt)("p",null,"After building the OS image, a qcow2 file is generated inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"output-qemu")," directory."),(0,a.kt)("p",null,"Mount the qcow with the script ",(0,a.kt)("inlineCode",{parentName:"p"},"setup-nbd"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@local:/cluster-factory-ce/packer-recipes/rocky"',title:'"root@local:/cluster-factory-ce/packer-recipes/rocky"'},'# Do it as root!\nexport IMAGE_PATH=output-qemu/packer-qemu\n./scripts-local/setup-nbd\n\nexport TMP_DIR=$(mktemp -d /tmp/packer-XXXX)\nmount "${NBD}p1" "$TMP_DIR"\n')),(0,a.kt)("p",null,"Then, copy the root filesystem via rsync:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@local:/cluster-factory-ce/packer-recipes/rocky"',title:'"root@local:/cluster-factory-ce/packer-recipes/rocky"'},'rsync -avzP "$TMP_DIR/" "root@<xcat server>:/<path to os image>/rootimg/"\n# Example: rsync -avzP "$TMP_DIR/" "root@10.10.2.2:/install/netboot/rocky8.4/x86_64/compute/rootimg/"\n')),(0,a.kt)("p",null,"And unmount and teardown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@local:/cluster-factory-ce/packer-recipes/rocky"',title:'"root@local:/cluster-factory-ce/packer-recipes/rocky"'},'umount -f "$TMP_DIR"\nrmdir --ignore-fail-on-non-empty "$TMP_DIR"\n./scripts-local/teardown-nbd\n')),(0,a.kt)("h3",{id:"configure-the-os-image-on-xcat"},"Configure the OS Image on xCAT"),(0,a.kt)("p",null,"SSH to the xCAT server (",(0,a.kt)("inlineCode",{parentName:"p"},"ssh root@10.10.2.2 -p 2200"),")."),(0,a.kt)("p",null,"Create a stanza:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="osimage.stanza"',title:'"osimage.stanza"'},"rocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    profile=compute\n    provmethod=netboot\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n")),(0,a.kt)("p",null,"And apply it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat osimage.stanza | mkdef -z\n")),(0,a.kt)("h3",{id:"generate-the-initramfs-and-pack-the-image-as-squashfs"},"Generate the initramfs and pack the image as squashfs"),(0,a.kt)("p",null,"Generate the kernel and initrd for the netboot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"geninitrd rocky8.4-x86_64-netboot-compute\n")),(0,a.kt)("p",null,"To pack the image as squashfs, call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"packimage -m squashfs -c pigz rocky8.4-x86_64-netboot-compute\n")))}m.isMDXComponent=!0}}]);