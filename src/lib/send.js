import { Webhook } from 'minimal-discord-webhook-node'
import { hook } from '../config/config.js'

function send(message) {
	hook.send(message)
}

export { send }
