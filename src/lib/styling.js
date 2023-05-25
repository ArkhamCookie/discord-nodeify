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
	if (styling === 'bold') {
		message = '**' + text + '**'
		send(message)
		console.log(chalk.bold(text))
	}
	// message = italic(text)
}

discordStyle('bold', 'bold')

export { discordStyle }
