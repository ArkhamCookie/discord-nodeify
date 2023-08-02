import { parseFeed } from 'rss'
import { MessageBuilder } from 'discord-webhook'
import { HOOK } from '../config.js'

// https://api.substack.com/feed/podcast/1180773.rss
const base = 'https://api.substack.com/feed/podcast/'
const id = '1180773.rss'
const target = base + id

const response = await fetch(target)
if (!response.status === 200) {
	console.log(response.status)
}
const xml = await response.text()
const feed = await parseFeed(xml)

class PodcastFeed {
	constructor(feed) {
		const { entries } = feed

		// this.channel = feed.channel

		this.latest = entries[0]
		this.author = this.latest['dc:creator'][0]
		this.title = this.latest.title.value
		this.url = this.latest.links[0].href
		this.direct = this.latest.attachments[0].url

		// this.media = this.latest
		this.description = this.latest.description.value // raw html
	}

	send() {
		// HOOK.setUsername(this.author)
		HOOK.setUsername('Podcast')

		this.embedded = new MessageBuilder()
			.setTitle(this.title)
			.setURL(this.url)
			.addField('Direct', this.direct)
			// .setFooter(this.direct)

		HOOK.send(this.embedded)
	}
}

// console.log(feed)
// const podcastReport = new PodcastFeed(feed)
// podcastReport.send()

export { PodcastFeed }
