"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Overview","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Welcome to the Cluster Factory CE Documentation","href":"/docs/overview/welcome","docId":"overview/welcome"}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"1. Requirements and recommendations","href":"/docs/getting-started/requirements-recommendations","docId":"getting-started/requirements-recommendations"},{"type":"link","label":"2. K0s Configuration","href":"/docs/getting-started/k0s-configuration","docId":"getting-started/k0s-configuration"},{"type":"link","label":"3. Core Apps Deployment","href":"/docs/getting-started/core-apps-deployment","docId":"getting-started/core-apps-deployment"},{"type":"link","label":"4. Argo Apps Deployment","href":"/docs/getting-started/argo-apps-deployment","docId":"getting-started/argo-apps-deployment"},{"type":"link","label":"5. xCAT Deployment","href":"/docs/getting-started/xcat-deployment","docId":"getting-started/xcat-deployment"},{"type":"link","label":"6. xCAT Configuration","href":"/docs/getting-started/xcat-configuration","docId":"getting-started/xcat-configuration"}]},{"type":"category","label":"Main Concepts","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"K0s, the Kubernetes distribution for bare-metal","href":"/docs/main-concepts/k0s","docId":"main-concepts/k0s"},{"type":"category","label":"Core Network","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"MetalLB, the bare-metal Load Balancer","href":"/docs/main-concepts/core-network/metallb","docId":"main-concepts/core-network/metallb"},{"type":"link","label":"Traefik, the All-in-One L7 Load Balancer and Ingress","href":"/docs/main-concepts/core-network/traefik","docId":"main-concepts/core-network/traefik"},{"type":"link","label":"Multus CNI, the Swiss army knife of networking","href":"/docs/main-concepts/core-network/multus-cni","docId":"main-concepts/core-network/multus-cni"}]},{"type":"category","label":"GitOps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Argo CD","href":"/docs/main-concepts/gitops/argocd","docId":"main-concepts/gitops/argocd"},{"type":"link","label":"cert-manager","href":"/docs/main-concepts/gitops/cert-manager","docId":"main-concepts/gitops/cert-manager"},{"type":"link","label":"Sealed Secrets","href":"/docs/main-concepts/gitops/sealed-secrets","docId":"main-concepts/gitops/sealed-secrets"}]},{"type":"category","label":"Main Applications","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"xCAT, the Bare-Metal Provisioner","href":"/docs/main-concepts/apps/xcat","docId":"main-concepts/apps/xcat"},{"type":"link","label":"SLURM, A Highly Scalable Workload Manager","href":"/docs/main-concepts/apps/slurm","docId":"main-concepts/apps/slurm"},{"type":"link","label":"CernVM-FS, A Scalable, Distributed Read-Only File-System","href":"/docs/main-concepts/apps/cvmfs","docId":"main-concepts/apps/cvmfs"}]}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Core","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Updating the K0s Helm extensions","href":"/docs/guides/core/updatting-helm-extensions","docId":"guides/core/updatting-helm-extensions"},{"type":"link","label":"Updating the K0s cluster","href":"/docs/guides/core/updating-k0s-cluster","docId":"guides/core/updating-k0s-cluster"},{"type":"link","label":"Backup and restore","href":"/docs/guides/core/backup-restore","docId":"guides/core/backup-restore"}]},{"type":"category","label":"Monitoring Stack","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deploy the Kube Prometheus Stack","href":"/docs/guides/monitoring/deploy","docId":"guides/monitoring/deploy"}]},{"type":"category","label":"Provisioning Stack","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How to deploy xCAT","href":"/docs/guides/provisioning/deploy-xcat","docId":"guides/provisioning/deploy-xcat"},{"type":"link","label":"Build an OS Image with Packer","href":"/docs/guides/provisioning/packer-build","docId":"guides/provisioning/packer-build"},{"type":"link","label":"Configure xCAT to provision the nodes","href":"/docs/guides/provisioning/configure-xcat","docId":"guides/provisioning/configure-xcat"},{"type":"link","label":"GitOps with xCAT","href":"/docs/guides/provisioning/gitops-with-xcat","docId":"guides/provisioning/gitops-with-xcat"}]},{"type":"category","label":"SLURM Stack","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deploying SLURM Cluster","href":"/docs/guides/slurm/deploy-slurm","docId":"guides/slurm/deploy-slurm"},{"type":"link","label":"Deploy Open OnDemand","href":"/docs/guides/slurm/deploy-ondemand","docId":"guides/slurm/deploy-ondemand"}]},{"type":"category","label":"CVMFS Stack","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Mount CVMFS repositories on Kubernetes","href":"/docs/guides/cvmfs/mount-cvmfs","docId":"guides/cvmfs/mount-cvmfs"},{"type":"link","label":"Deploy a CVMFS Stratum 1","href":"/docs/guides/cvmfs/deploy-cvmfs","docId":"guides/cvmfs/deploy-cvmfs"}]},{"type":"category","label":"KubeVirt","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deploy a VM with KubeVirt","href":"/docs/guides/kubevirt/deploy-vm","docId":"guides/kubevirt/deploy-vm"}]},{"type":"link","label":"Deploy a LDAP server","href":"/docs/guides/deploy-ldap","docId":"guides/deploy-ldap"},{"type":"link","label":"Develop Applications to integrate into Cluster Factory","href":"/docs/guides/develop-apps","docId":"guides/develop-apps"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"cfctl","href":"/docs/reference/cfctl","docId":"reference/cfctl"}]},{"type":"category","label":"See Also","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Contributing","href":"/docs/see-also/contributing","docId":"see-also/contributing"},{"type":"link","label":"Frequently Asked Questions","href":"/docs/see-also/faq","docId":"see-also/faq"}]}]},"docs":{"getting-started/argo-apps-deployment":{"id":"getting-started/argo-apps-deployment","title":"4. Argo Apps Deployment","description":"Time to play with Argo CD!","sidebar":"docs"},"getting-started/core-apps-deployment":{"id":"getting-started/core-apps-deployment","title":"3. Core Apps Deployment","description":"CoreDNS configuration","sidebar":"docs"},"getting-started/k0s-configuration":{"id":"getting-started/k0s-configuration","title":"2. K0s Configuration","description":"Specifying the hosts","sidebar":"docs"},"getting-started/requirements-recommendations":{"id":"getting-started/requirements-recommendations","title":"1. Requirements and recommendations","description":"Requirements","sidebar":"docs"},"getting-started/xcat-configuration":{"id":"getting-started/xcat-configuration","title":"6. xCAT Configuration","description":"This part of the documentation is mostly a draft.","sidebar":"docs"},"getting-started/xcat-deployment":{"id":"getting-started/xcat-deployment","title":"5. xCAT Deployment","description":"The argo/provisioning directory deploys the xCAT application.","sidebar":"docs"},"guides/core/backup-restore":{"id":"guides/core/backup-restore","title":"Backup and restore","description":"Backup","sidebar":"docs"},"guides/core/updating-k0s-cluster":{"id":"guides/core/updating-k0s-cluster","title":"Updating the K0s cluster","description":"Updating the k0s cluster is super easy!","sidebar":"docs"},"guides/core/updatting-helm-extensions":{"id":"guides/core/updatting-helm-extensions","title":"Updating the K0s Helm extensions","description":"Updating and applying k0sctl.yaml will create downtime!","sidebar":"docs"},"guides/cvmfs/deploy-cvmfs":{"id":"guides/cvmfs/deploy-cvmfs","title":"Deploy a CVMFS Stratum 1","description":"image-20220509180348675","sidebar":"docs"},"guides/cvmfs/mount-cvmfs":{"id":"guides/cvmfs/mount-cvmfs","title":"Mount CVMFS repositories on Kubernetes","description":"image-20220509154116581","sidebar":"docs"},"guides/deploy-ldap":{"id":"guides/deploy-ldap","title":"Deploy a LDAP server","description":"Helm and Docker resources","sidebar":"docs"},"guides/develop-apps":{"id":"guides/develop-apps","title":"Develop Applications to integrate into Cluster Factory","description":"This guide covers the general process to develop an application for Cluster","sidebar":"docs"},"guides/kubevirt/deploy-vm":{"id":"guides/kubevirt/deploy-vm","title":"Deploy a VM with KubeVirt","description":"This guide is still a draft.","sidebar":"docs"},"guides/monitoring/deploy":{"id":"guides/monitoring/deploy","title":"Deploy the Kube Prometheus Stack","description":"image-20220510142533326","sidebar":"docs"},"guides/provisioning/configure-xcat":{"id":"guides/provisioning/configure-xcat","title":"Configure xCAT to provision the nodes","description":"In the next version of ClusterFactory, xCAT will be a Kubernetes operator.","sidebar":"docs"},"guides/provisioning/deploy-xcat":{"id":"guides/provisioning/deploy-xcat","title":"How to deploy xCAT","description":"xCAT deployment graph","sidebar":"docs"},"guides/provisioning/gitops-with-xcat":{"id":"guides/provisioning/gitops-with-xcat","title":"GitOps with xCAT","description":"In the next version of ClusterFactory, xCAT will be a Kubernetes operator.","sidebar":"docs"},"guides/provisioning/packer-build":{"id":"guides/provisioning/packer-build","title":"Build an OS Image with Packer","description":"Rocky Linux OS Image","sidebar":"docs"},"guides/slurm/deploy-ondemand":{"id":"guides/slurm/deploy-ondemand","title":"Deploy Open OnDemand","description":"Open OnDemand, a dashboard for SLURM, can be deployed along with the SLURM controller.","sidebar":"docs"},"guides/slurm/deploy-slurm":{"id":"guides/slurm/deploy-slurm","title":"Deploying SLURM Cluster","description":"image-20220512151655613","sidebar":"docs"},"main-concepts/apps/cvmfs":{"id":"main-concepts/apps/cvmfs","title":"CernVM-FS, A Scalable, Distributed Read-Only File-System","description":"HPC clusters often use environment modules to share software between compute nodes.","sidebar":"docs"},"main-concepts/apps/slurm":{"id":"main-concepts/apps/slurm","title":"SLURM, A Highly Scalable Workload Manager","description":"Slurm is an open-source cluster resource management and job scheduling system.","sidebar":"docs"},"main-concepts/apps/xcat":{"id":"main-concepts/apps/xcat","title":"xCAT, the Bare-Metal Provisioner","description":"xCAT is complete solution for bare metal provisioning for","sidebar":"docs"},"main-concepts/core-network/metallb":{"id":"main-concepts/core-network/metallb","title":"MetalLB, the bare-metal Load Balancer","description":"A good article is written here.","sidebar":"docs"},"main-concepts/core-network/multus-cni":{"id":"main-concepts/core-network/multus-cni","title":"Multus CNI, the Swiss army knife of networking","description":"Multus CNI allows us to attach multiple network interfaces to pods, similarly to Docker and Virtual Machines.","sidebar":"docs"},"main-concepts/core-network/traefik":{"id":"main-concepts/core-network/traefik","title":"Traefik, the All-in-One L7 Load Balancer and Ingress","description":"The reason we are not using NGINX Ingress Controller is quite simple. Thanks to the IngressRoute custom resource definition, we can practically do everything, including TCP and UDP routing.","sidebar":"docs"},"main-concepts/gitops/argocd":{"id":"main-concepts/gitops/argocd","title":"Argo CD","description":"Argo CD is a GitOps continuous delivery tool for Kubernetes. It clones, retrieves","sidebar":"docs"},"main-concepts/gitops/cert-manager":{"id":"main-concepts/gitops/cert-manager","title":"cert-manager","description":"Like the name indicates, cert-manager adds certificates and certificate issuers as custom resources for Kubernetes.","sidebar":"docs"},"main-concepts/gitops/sealed-secrets":{"id":"main-concepts/gitops/sealed-secrets","title":"Sealed Secrets","description":"Sealed Secrets encrypt the Secret resources into a SealedSecret using asymmetric encryption.","sidebar":"docs"},"main-concepts/k0s":{"id":"main-concepts/k0s","title":"K0s, the Kubernetes distribution for bare-metal","description":"Best description is obviously on their website: k0sproject.io.","sidebar":"docs"},"overview/welcome":{"id":"overview/welcome","title":"Welcome to the Cluster Factory CE Documentation","description":"Cluster Factory CE is an open-source k8s-based infrastructure orchestration tool that automates the process of deploying, managing and monitoring workload-optimized clusters from bare metal servers to VMs and containers.","sidebar":"docs"},"reference/cfctl":{"id":"reference/cfctl","title":"cfctl","description":"This reference is still a draft.","sidebar":"docs"},"see-also/contributing":{"id":"see-also/contributing","title":"Contributing","description":"You can read the contributing guide in the official GitHub repository.","sidebar":"docs"},"see-also/faq":{"id":"see-also/faq","title":"Frequently Asked Questions","description":"Kubernetes is quite complex compared to Virtual Machines. How do I learn about Kubernetes? about Cluster Factory?","sidebar":"docs"}}}')}}]);