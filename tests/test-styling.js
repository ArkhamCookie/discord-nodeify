#!/usr/bin/env -S deno run --allow-env

import { send } from '../src/lib/send.js'
// import { discordStyle } from '../src/lib/styling.js'
import { style } from '../src/lib/markdownStyling.js'

function styleTest(input, log) {
	const output = style(input)

	switch (log) {
	case true:
		console.log(output)
	}

	send(output)
}

styleTest('italic text', true)
