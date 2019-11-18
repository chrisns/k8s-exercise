# myapp

if you have node installed you can start this by

```bash
npm start
```

It will listen on port `3000` on all interfaces

I did an awful job of writing it so;

 - it takes **10 seconds** to start up
 - it takes a further **5 seconds** to be able to accept requests
 - 33% of the time it fails to start up
 - it crashes and stops serving requests after **2 mins** but the process doesn't exit
 - if you send any request before it has started up **10 seconds** (including healtchecks) it crashes

 You can check if the app is healthy on `/health` and if it is ready to accept requests on `/ready`
 