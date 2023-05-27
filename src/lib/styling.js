import chalk from 'chalk'
import { send } from '../lib/send.js'

let message

/*
const italic = '*' + text + '*'
const bold = '**' + text + '**'
const boldItalic = '***' + text + '***'
const strikethrough = '~~' + text + '~~'
*/

function discordStyle(text, styling) {
	if (styling === 'italic') {
		message = '*' + text + '*'
		send(message)
		console.log(chalk.bold(text))
	}

	if (styling === 'bold') {
		message = '**' + text + '**'
		send(message)
		console.log(chalk.bold(text))
	}

	if (styling === 'strikethrough') {
		message = '~~' + text + '~~'
		send(message)
		console.log(chalk.yellow(text))
	}
	// message = italic(text)
}

export { discordStyle }
