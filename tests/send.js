#!/usr/bin/env -S deno run --allow-env --allow-read --allow-net=discord.com

import { send } from '../src/lib/send.js'

send('basic test')
