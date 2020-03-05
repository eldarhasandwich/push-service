# push-service

Thin wrapper on PushOver API

```ts
// init module
const pushService = PushService({ apiKey: '...' })

// smack that endpoint
pushService.push({
  user: // string REQUIRED
  message: // string REQUIRED
  title: // string
  devices?: // string[]
  url: // string
  urlTitle: // string
  timestamp: // number
})

// create a hook specific to a user
const userHook = pushService.toUser('1234') // userId

userHook.push({
  message: // string REQUIRED
  title: // string
  devices?: // string[]
  url: // string
  urlTitle: // string
  timestamp: // number
})
```