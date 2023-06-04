#!/usr/bin/env node

import chalk from 'npm:chalk@5.2'
import { Style } from '../src/lib/markdownStyling.js'

let input
let style = new Style(input)

// Italic Test
input = 'italic text'
style = new Style(input)
console.log(chalk.italic(style.italic))
input = 'this is italic'
style = new Style(input)
console.log(chalk.italic(style.italic))

// Bold Test
input = 'bold text'
style = new Style(input)
console.log(chalk.bold(style.bold))
input = 'this is bold'
style = new Style(input)
console.log(chalk.bold(style.bold))

// Bold Italic Test
input = 'bold + italic text'
style = new Style(input)
console.log(chalk.italic.italic(style.boldItalic))
input = 'this is bold + italic'
style = new Style(input)
console.log(chalk.italic.italic(style.boldItalic))

// Strikethrough Test
input = 'strikethrough text'
style = new Style(input)
console.log(chalk.strikethrough(style.strikethrough))
input = 'this is strikethrough'
style = new Style(input)
console.log(chalk.strikethrough(style.strikethrough))
