#!/bin/sh

usage() {
	printf "Usage: get-yt-rss <channel-url>\n"

	exit 2
}

[ "$#" != 1 ] && usage

curl -sS "$1" \
| grep --extended-regexp --only-matching "<link rel=\"alternate\" type=\"application/rss\+xml\" title=\"RSS\" href=\"https://www\.youtube\.com/feeds/videos\.xml\?channel_id=\S+\">" \
| cut --delimiter="\"" --fields=8
