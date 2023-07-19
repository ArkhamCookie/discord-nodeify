// import { send } from '../src/lib/send.js'
import { timestamp } from '../src/lib/timestamp.js'

console.log(timestamp)

console.log(
	timestamp.raw + '\n' +
	timestamp.timeShort + '\n' +
	timestamp.timeLong + '\n' +
	timestamp.dateShort + '\n' +
	timestamp.dateLong + '\n' +
	timestamp.datetimeShort + '\n' +
	timestamp.datetimeLong
)
