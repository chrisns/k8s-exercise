# Interview

## Exercise

- 🐳 dockerify the [app](./app)
- ☸ write a deployment and deploy to minikube
- 🍪 provide inbound access to the app

## Considerations / discussion points:

- The app is pretty flakey, so a:
  - small image will be important to improve startup time on rescheduling
  - aggressive checks will be needed to minimize bounced requests
  - multiple replicas will be needed to minimize dropped requests
- Network policy deny-all policy
- internal+external TLS, auth - how sidecar pattern might help with this
- How to run the app as non-privileged user
- Readonly FS
- How to inject secrets via env vars / files, which is better
- memory + cpu allocation right sizing
- autoscaling

## maybe if one can find a way to make ingress work:

```bash
minikube start --memory=4096 --addons=ingress
kubectl kustomize . | sed -e "s/minikube/$(minikube ip)/g" | kubectl apply -f -
```

## maybe if one can find a way to make ingress work:

```bash
minikube start --network-plugin=cni --memory=4096 --addons=ingress
kubectl create -f https://raw.githubusercontent.com/cilium/cilium/v1.6/install/kubernetes/quick-install.yaml
```