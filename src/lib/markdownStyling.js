function style(input) {
	const markdownStyle = {
		italic: '*' + input + '*'
	}
	const output = markdownStyle.italic
	return output
}

export { style }

/*
import { send } from './send.js'

console.log('This is a message with ' + style('italic') + ' text!')
send('This is a message with ' + style('italic') + ' text!')
*/
