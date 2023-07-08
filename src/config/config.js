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
const BASE_PATH = Deno.env.get('BASE_PATH')

/** Config Verify */
async function fileExists(file) {
	if (!BASE_PATH) {
		console.warn('BASE_PATH isn\'t set')
		return false
	}
	try {
		await Deno.stat(file)
		return true
	} catch (error) {
		if (error) {
			console.warn('BASE_PATH doesn\'t exist')
			return false
		} else {
			throw error
		}
	}
}

function emptyCheck(option) {
	if (!option) {
		console.warn(option + 'isn\'t set')
		return false
	}
	return true
}

fileExists(BASE_PATH)

const options = [HOOK.hookURL, CLIENT_ID, BOT_TOKEN, SERVER_ID, BASE_PATH]

for (let i = 0; i < options.length; i++) {
	emptyCheck(options[i])
}

export { CLIENT_ID, BOT_TOKEN, HOOK, SERVER_ID }
