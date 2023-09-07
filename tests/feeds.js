import { ConfigFile, fetchFeed } from '../src/config/config.js'
import { YoutubeFeed } from '../src/config/feeds/youtube.js'

// YouTube (EthosLab)
const youtubeBase = 'https://youtube.com/feeds/videos.xml?channel_id='
const target = youtubeBase + ConfigFile.feeds.youtube.ethoslab
const youtubeEtho = new YoutubeFeed(await fetchFeed(target))

youtubeEtho.send()
