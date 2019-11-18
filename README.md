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
- How to inject secrets via env vars / files, which is better

