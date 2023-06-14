#!/usr/bin/env -S deno run --allow-env --allow-read --allow-net=discord.com

import { CLIENT_ID, TOKEN } from '../src/config/config.js'

console.log('CLIENT_ID = ' + CLIENT_ID)
console.log('TOKEN = ' + TOKEN)
