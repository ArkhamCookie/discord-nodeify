/* eslint-disable no-unused-vars */
import { BOT_TOKEN, CLIENT_ID, CONFIG_FILE, HOOK, SERVER_ID } from './../src/config/config.js'

const options = []
// options.push(HOOK.hookURL, CLIENT_ID, BOT_TOKEN, SERVER_ID)
options[1] = HOOK.hookURL

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
class VarVerify {
	constructor(options) {
		this.count = options.length
	}

	set(option) {
		if (options[option]) {
			return true
		}
		return false
	}

	list() {
		const count = options.length
		for (let i = 0; i < count; i++) {
			console.log(
				`${i}: ${options[i]}`
			)
		}
	}
}

/** Config Verify Testing */
console.log() // new line
const varVerify = new VarVerify(options)

// console.log(varVerify.count)
//
console.log(varVerify.set(2))
//
console.log(varVerify.list())
//
