class Style {
	constructor(input) {
		this.italic = '*' + input + '*'
		this.bold = '**' + input + '**'
		this.boldItalic = '***' + input + '***'
		this.strikethrough = '~~' + input + '~~'
	}
}

export { Style }
