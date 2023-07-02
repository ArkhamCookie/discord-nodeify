#!/usr/bin/env -S deno run --allow-env

import { send } from '../src/lib/send.js'
import { Style } from '../src/lib/markdownStyling.js'

function styleTest(input, log) {
	const output = new Style(input)

	switch (log) {
	case true:
		console.log(output)
	}

	send(output)
}

styleTest('italic text', true)
