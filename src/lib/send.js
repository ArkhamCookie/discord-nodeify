import { Webhook } from 'npm:minimal-discord-webhook-node@1'
import 'https://deno.land/std@0.190.0/dotenv/load.ts'

const hook = new Webhook({
	url: Deno.env.get('WEBHOOK_URL'),
	throwErrors: true,
	retryOnLimit: false
})

function send(message) {
	hook.send(message)
}

export { hook, send }
