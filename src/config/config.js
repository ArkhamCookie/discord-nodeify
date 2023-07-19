import { Webhook } from 'discord-webhook'
import 'dotenv'

/** Webhook Config */
const HOOK = new Webhook({
	url: Deno.env.get('WEBHOOK_URL'),
	throwErrors: true,
	retryOnLimit: false
})

/** Bot Config */
const CLIENT_ID = Deno.env.get('CLIENT_ID')
const BOT_TOKEN = Deno.env.get('BOT_TOKEN')

export { BOT_TOKEN, CLIENT_ID, HOOK }
