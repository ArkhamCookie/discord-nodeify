import { parseFeed } from 'rss'

const base = 'https://youtube.com/feeds/videos.xml?channel_id='
const id = 'UCFKDEp9si4RmHFWJW1vYsMA'
const target = base + id

const response = await fetch(target)
const xml = await response.text()
const feed = await parseFeed(xml)

class YoutubeFeed {
	constructor(feed) {
		this.title = feed.title.value
	}

	entries(entries) {
		console.log(entries)
	}
}

const youtubeEtho = new YoutubeFeed(feed)

console.log(youtubeEtho)
