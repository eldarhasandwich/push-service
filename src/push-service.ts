
import * as agent from 'superagent'

interface CreationParams {
  apiKey: string
}

interface PushParams {
  message: string
  title?: string
  devices?: string[]
  url?: string
  urlTitle?: string
  timestamp?: number
}

interface ExplicitUserPushParams extends PushParams {
  user: string
}

const PUSHOVER_API_HOST = 'https://api.pushover.net/1/messages.json'

const PushService = (service: CreationParams) => {
  return {
    push: (params: ExplicitUserPushParams) => {
      agent.post(PUSHOVER_API_HOST)
        .send({
          token: service.apiKey,
          ...params
        })
    },
    toUser: (user: string) => {
      return {
        push: (params: PushParams) => {
          agent.post(PUSHOVER_API_HOST)
            .send({
              token: service.apiKey,
              ...params,
              user
            })
        }
      }
    }
  }
}

export default PushService