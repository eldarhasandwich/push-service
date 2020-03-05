
import PushService from './push-service'

const pushService = PushService({ 
  apiKey: `${process.env.PUSH_API_KEY}`
})

const userID = 'uumsqxnjr6pau5t5awrwn8qmu5jk6x'

pushService.push({
  title: 'HELLO THERE',
  user: userID,
  message: 'test message'
})

const eldarPush = pushService.toUser(userID)

eldarPush.push({
  message: 'just for eldar'
})