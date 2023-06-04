#!/usr/bin/env -S deno run --allow-all

import { CLIENT_ID, HOOK, TOKEN } from '../src/config/config.js'

console.log('CLIENT_ID = ' + CLIENT_ID)
console.log('HOOK = ' + HOOK)
console.log('TOKEN = ' + TOKEN)
