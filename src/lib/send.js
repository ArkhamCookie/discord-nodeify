import { HOOK } from '../config/config.js'

function send(message) {
	HOOK.send(message)
}

export { send }
