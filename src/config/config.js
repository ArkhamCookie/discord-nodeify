import { Webhook } from 'minimal-discord-webhook-node'
import 'dotenv/config'

const hook = new Webhook({
	url: process.env.WEBHOOK_URL,
	throwErrors: false,
	retryOnLimit: false
})

export { hook }
