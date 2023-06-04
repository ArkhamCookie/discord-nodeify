import { Webhook } from 'npm:minimal-discord-webhook-node@1'
import 'https://deno.land/std@0.190.0/dotenv/load.ts'

const TOKEN = Deno.env.get('TOKEN')
const CLIENT_ID = Deno.env.get('CLIENT_ID')

const HOOK = new Webhook({
	url: Deno.env.get('WEBHOOK_URL'),
	throwErrors: true,
	retryOnLimit: false
})

export { HOOK, TOKEN, CLIENT_ID }
