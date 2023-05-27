#!/usr/bin/env node

// import { program } from 'commander'
import chalk from 'chalk'
import { send } from '../lib/send.js'

send('Hello **cmd**')
console.log(chalk.green('Hello ') + chalk.green.bold('cmd'))
