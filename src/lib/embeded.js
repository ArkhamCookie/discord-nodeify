import { MessageBuilder } from 'discord-webhook'
import { HOOK } from './send.js'

const embed = new MessageBuilder()
	.setTitle('My title here')
	.setAuthor(
		'Author here',
		'https://cdn.discordapp.com/embed/avatars/0.png',
		'https://github.com/ArkhamCookie'
	)
	.setURL('https://arkhamcookie.omg.lol')
	.addField('First field', 'this is inline', true)
	.addField('Second field', 'this is not inline')
	.setColor('#00b0f4')
	.setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
	.setDescription('Oh look a description :)')
	.setImage('https://cdn.discordapp.com/embed/avatars/0.png')
	.setFooter(
		'Hey its a footer',
		'https://cdn.discordapp.com/embed/avatars/0.png'
	)
	.setTimestamp()
// .setAuthor('foo')

function sendEmbeded(message, embed) {
	HOOK.send(embed)
		.setTitle(message)
		.setAuthor('foo')
}

export { embed, sendEmbeded }
