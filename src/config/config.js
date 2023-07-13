import { existsSync } from 'https://deno.land/std@0.193.0/fs/mod.ts'
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

/** Config Options */
const SERVER_ID = Deno.env.get('SERVER_ID')

/** Feed(s) Config */
let CONFIG_FILE
if (
	existsSync(Deno.cwd() + '/config.json', {
		isReadable: true,
		isFile: true
	})
) {
	CONFIG_FILE = Deno.cwd() + '/config.json'
} else if (
	existsSync(Deno.cwd() + '/.env', {
		isReadable: true,
		isFile: true
	})
) {
	CONFIG_FILE = Deno.cwd() + '/.env'
} else {
	CONFIG_FILE = false
}

/** Config Verify */
function emptyCheck(option) {
	if (!option) {
		console.warn(option + 'isn\'t set')
		return false
	}
	return true
}

const options = [HOOK.hookURL, CLIENT_ID, BOT_TOKEN, SERVER_ID]

for (let i = 0; i < options.length; i++) {
	emptyCheck(options[i])
}

export { BOT_TOKEN, CLIENT_ID, CONFIG_FILE, HOOK, SERVER_ID }
