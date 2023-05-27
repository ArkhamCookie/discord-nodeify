import { Webhook } from 'minimal-discord-webhook-node'
import 'dotenv/config'

const hook = new Webhook({
	url: process.env.WEBHOOK_URL,
	throwErrors: true,
	retryOnLimit: false
})

export { hook }
