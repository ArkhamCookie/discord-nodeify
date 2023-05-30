import chalk from 'chalk'
// import { send } from '../lib/send.js'

function discordStyle(text, styling) {
	if (styling === 'italic') {
		// console.log(chalk.bold(text))
		const italicText = '*' + text + '*'
		return italicText
	}

	if (styling === 'bold') {
		// console.log(chalk.bold(text))
		const boldText = '**' + text + '**'
		return boldText
	}

	if (styling === 'strikethrough') {
		// console.log(chalk.yellow(text))
		const strikethroughText = '~~' + text + '~~'
		return strikethroughText
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
