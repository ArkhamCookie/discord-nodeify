import { parseFeed } from 'rss'
import { SubstackPodcastFeed } from '../../src/config/feeds/substack-podcast.js'


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

console.log(feed)
const podcastReport = new SubstackPodcastFeed(feed)
podcastReport.send()
