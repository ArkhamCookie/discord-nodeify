import { Webhook } from 'npm:minimal-discord-webhook-node@1'
import 'https://deno.land/std@0.190.0/dotenv/load.ts'

const hook = new Webhook({
	url: process.env.WEBHOOK_URL,
	throwErrors: true,
	retryOnLimit: false
})

export { hook }
