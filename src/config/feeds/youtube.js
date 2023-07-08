import {
	MediaRss,
	parseFeed
} from 'rss'
import { MessageBuilder } from 'discord-webhook'
import { HOOK } from '../config.js'

const base = 'https://youtube.com/feeds/videos.xml?channel_id='
const id = 'UCFKDEp9si4RmHFWJW1vYsMA' // Will be moved to config
const target = base + id

const response = await fetch(target)
const xml = await response.text()
const feed = await parseFeed(xml) // entries

class YoutubeFeed {
	constructor(feed) {
		const { entries } = feed

		this.author = feed.author.name
		this.authorUrl = feed.author.uri

		this.latest = feed.entries[0]
		this.title = this.latest.title.value
		this.url = this.latest.links[0].href

		this.media = entries[0][MediaRss.Group]
		this.description = this.media[MediaRss.Description].value
		this.thumbnail = this.media['media:thumbnail'].url
	}

	fetch() {
		this.foo = this.latest['yt:videoid'].value
	}

	send() {
		HOOK.setUsername('YouTube')
		HOOK.setAvatar('https://lh3.googleusercontent.com/DMPqTbcN-R_kPwzF0qg9zZH8UPLtVBoqrDQ_63zhmIq5NUBrllM5Xkj2h7Bi0X_KPzJ6_sTvRFIXWB2HIEeFd2EtnRyUbs0uWTPey3MYtSICaibNBfcA=v0-s1050')

		this.embedded = new MessageBuilder()
			.setAuthor(this.author)
			.setTitle(this.title)
			.setURL(this.url)
			// .setDescription(this.description)
			.setImage(this.thumbnail)
			.setColor('#FF0000')
			// .setFooter(this.authorUrl, 'https://yt3.googleusercontent.com/ytc/AOPolaTuRnaVi7_ll-vH08j-PeM4VqS1Ja1fEwV4zjF5=s176-c-k-c0x00ffffff-no-rj')
			.addField('foo', 'hey', true)
			.addField('boo', 'hi')

		HOOK.send(this.embedded)
	}
}

const youtubeEtho = new YoutubeFeed(feed)

youtubeEtho.send()
