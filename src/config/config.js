import { Webhook } from 'discord-webhook'
import { parseFeed } from 'rss'
import 'dotenv'

/** Webhook Config */
const HOOK = new Webhook({
	url: Deno.env.get('WEBHOOK_URL'),
	throwErrors: true,
	retryOnLimit: false
})

/** Bot Secrets */
const CLIENT_ID = Deno.env.get('CLIENT_ID')
const BOT_TOKEN = Deno.env.get('BOT_TOKEN')

/** Config File */
const file = await import('../../config.json', {
	assert: { type: 'json' }
})
const ConfigFile = file.default

/** Feeds */
// const youtubeBase = 'https://youtube.com/feeds/videos.xml?channel_id='

async function fetchFeed(target) {
	const response = await fetch(target)

	if (!response.status === 200) {
		console.error(response.status + ': ' + response.statusText)
		return false
	}

	const xml = await response.text()
	const feed = await parseFeed(xml)
	return feed
}

export { BOT_TOKEN, CLIENT_ID, ConfigFile, fetchFeed, HOOK }
