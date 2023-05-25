import { Webhook } from 'minimal-discord-webhook-node'
import { hook } from './config/config.js'
import { send } from './lib/send.js'

const username = hook.setUsername('Nodeify')

send('Hello ES6!')
