import chalk from 'npm:chalk@5.2'
// import { send } from '../lib/send.js'

function discordStyle(text, styling) {
	switch (styling) {
	case 'italic': {
		const italicText = '*' + text + '*'
		return italicText
	}
	case 'bold': {
		const boldText = '**' + text + '**'
		return boldText
	}
	case 'strikethrough': {
		const strikethroughText = '~~' + text + '~~'
		return strikethroughText
	}
	default:
		return text
	}
}

function linkStyle(link, type, embedded) {
	if (type === undefined) {
		type = 'url'
	} else
	if (type === 'url') {
		console.log(type)
	}

	if (embedded === undefined) {
		embedded = true
	} else
	if (embedded === false) {
		link = '<' + link + '>'
		return link
	}
	console.log(chalk.blue(link))
}

linkStyle('https://example.com')

export { discordStyle, linkStyle }
