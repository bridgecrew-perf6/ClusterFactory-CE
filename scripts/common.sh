#!/bin/sh

section() {
  echo
  echo "---$1---"
}

WORKDIR=$(pwd)
export WORKDIR
export KUBECONFIG="$WORKDIR/kubeconfig"

mkdir -p ./bin
PATH="$(pwd)/bin:${PATH}"
export PATH

architecture=""
case $(uname -m) in
x86_64) architecture="x64" ;;
arm) dpkg --print-architecture | grep -q "arm64" && architecture="arm64" || architecture="arm" ;;
*) echo "Unsupported architecture: $(uname -m)" && exit 1 ;;
esac

os=""
case "$(uname)" in
'Linux')
  os='linux'
  ;;
'Darwin')
  os='darwin'
  ;;
*) echo "Unsupported OS: $(uname)" ;;
esac

echo "Detected supported architecture: $(uname -m)"

CFCTL="$(command -v cfctl)"
if ! [ -x "${CFCTL}" ]; then
  CFCTL_VERSION=v0.13.0+9002
  echo "cfctl could not be found. Downloading it locally in ./bin"
  rm -f ./bin/cfctl
  curl -fsSL -o ./bin/cfctl "https://github.com/SquareFactory/cfctl/releases/download/${CFCTL_VERSION}/cfctl-${os}-${architecture}"
  chmod +x ./bin/cfctl
  CFCTL="$(command -v cfctl)"
fi
echo "Found cfctl: $(cfctl version)"
echo
export CFCTL

architecture=""
case $(uname -m) in
x86_64) architecture="amd64" ;;
arm) dpkg --print-architecture | grep -q "arm64" && architecture="arm64" || architecture="arm" ;;
*) echo "Unsupported architecture: $(uname -m)" && exit 1 ;;
esac

KUBECTL="$(command -v kubectl)"
if ! [ -x "${KUBECTL}" ]; then
  echo "kubectl could not be found. Downloading it locally in ./bin"
  rm -f ./bin/kubectl
  curl -fsSL -o ./bin/kubectl "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/${os}/${architecture}/kubectl"
  chmod +x ./bin/kubectl
  KUBECTL="$(command -v kubectl)"
fi
echo "Found kubectl: $(kubectl version --client)"
echo
export KUBECTL

KUBESEAL="$(command -v kubeseal)"
if ! [ -x "$KUBESEAL" ]; then
  KUBESEAL_VERSION=0.18.0
  echo "kubeseal could not be found. Downloading it locally in ./bin."
  rm -f ./bin/kubeseal
  curl -fsSL "https://github.com/bitnami-labs/sealed-secrets/releases/download/v${KUBESEAL_VERSION}/kubeseal-${KUBESEAL_VERSION}-${os}-${architecture}.tar.gz" | tar -zxvf - kubeseal
  mv kubeseal ./bin/kubeseal
  chmod +x ./bin/kubeseal
  KUBESEAL="$(command -v kubeseal)"
fi
echo "Found kubectl: $(kubeseal --version)"
echo
export KUBESEAL

HELM="$(command -v helm)"
if ! [ -x "$HELM" ]; then
  HELM_VERSION=v3.9.0
  echo "helm could not be found. Downloading it locally in ./bin."
  rm -f ./bin/helm
  curl -fsSL "https://get.helm.sh/helm-${HELM_VERSION}-${os}-${architecture}.tar.gz" | tar -zxvf - "${os}-${architecture}/helm"
  mv "${os}-${architecture}/helm" ./bin/helm
  rmdir "${os}-${architecture}"
  chmod +x ./bin/helm
  HELM="$(command -v helm)"
fi
echo "Found helm: $(helm version)"
echo
export HELM

ETCDCTL="$(command -v etcdctl)"
if ! [ -x "$ETCDCTL" ]; then
  ETCDCTL_VERSION=v3.5.4
  GOOGLE_URL=https://storage.googleapis.com/etcd
  echo "etcdctl could not be found. Downloading it locally in ./bin."
  rm -f ./bin/etcdctl
  curl -fsSL "${GOOGLE_URL}/${ETCDCTL_VERSION}/etcd-${ETCDCTL_VERSION}-${os}-${architecture}.tar.gz" | tar -zxvf - "etcd-${ETCDCTL_VERSION}-${os}-${architecture}/etcdctl"
  mv "etcd-${ETCDCTL_VERSION}-${os}-${architecture}/etcdctl" ./bin/etcdctl
  rmdir "etcd-${ETCDCTL_VERSION}-${os}-${architecture}"
  chmod +x ./bin/etcdctl
  ETCDCTL="$(command -v etcdctl)"
fi
echo "Found etcdctl: $(etcdctl version)"
echo
export ETCDCTL
