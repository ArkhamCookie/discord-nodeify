/* eslint-disable no-unused-vars */
import { BOT_TOKEN, CLIENT_ID, CONFIG_FILE, HOOK, SERVER_ID } from './../src/config/config.js'

const options = []
options.push(HOOK.hookURL, CLIENT_ID, BOT_TOKEN, SERVER_ID)

function emptyCheck(option) {
	if (!option) {
		// console.warn(option + ' isn\'t set')
		return false
	}
	// console.log(option + ' is set')
	return true
}

/** Config File Check */
if (CONFIG_FILE) {
	if (CONFIG_FILE.includes(Deno.cwd())) {
		console.log(
			'Config File: ' +
			'.' +
			CONFIG_FILE.slice(Deno.cwd().length)
		)
	} else {
		console.log('Config file: ' + CONFIG_FILE)
	}
} else {
	console.log('No config file')
}

/** Config Verify */
/*
for (let i = 0; i < options.length; i++) {
	emptyCheck(options[i])
}
*/

/** Config Verify 2 */
class VarVerify {
	constructor(options) {
		this.count = options.length
		// this.raw = '\'' + options + '\''
		// this.raw = options.flat()
	}

	list() {
		const count = options.length
		for (let i = 0; i < count; i++) {
			console.log((i + 1) + ': raw')
		}
	}
}

console.log() // new line
const varVerify = new VarVerify(options)

// console.log(varVerify.count)
// console.log(varVerify.raw)

console.log(varVerify.list())
