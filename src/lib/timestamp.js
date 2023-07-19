/** Timestamp */
class Timestamp {
	constructor() {
		const time = Date.now()
		this.raw = time
		this.timeShort = '<t:' + time + ':t>'
		this.timeLong = '<t:' + time + ':T>'
		this.dateShort = '<t:' + time + ':d>'
		this.dateLong = '<t:' + time + ':D>'
		this.datetimeShort = '<t:' + time + ':f>'
		this.datetimeLong = '<t:' + time + ':F>'
	}
}
const timestamp = new Timestamp()

export { timestamp }
