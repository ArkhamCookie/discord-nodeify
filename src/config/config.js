import { Webhook } from 'discord-webhook'
import 'dotenv'

const TOKEN = Deno.env.get('TOKEN')
const CLIENT_ID = Deno.env.get('CLIENT_ID')

const HOOK = new Webhook({
	url: Deno.env.get('WEBHOOK_URL'),
	throwErrors: true,
	retryOnLimit: false
})

export { CLIENT_ID, HOOK, TOKEN }
