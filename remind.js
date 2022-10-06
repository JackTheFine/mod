const ms = require('ms')
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('remind')
		.setDescription('reminds u')
.addStringOption(option =>
		option.setName('time')
			.setDescription('time')
			.setRequired(true))
.addStringOption(option =>
		option.setName('reminder')
			.setDescription('reminder')
			.setRequired(true)),
	async execute(interaction) {
  
  const reminder = interaction.options.getString('reminder')
  const time = interaction.options.getString('time')
  

            const exampleEmbed1 = new MessageEmbed()
                .setColor('#E0082F')
                .setTitle('Reminder set.')
                .setURL('')
                .setAuthor({ name: 'Flight Deck Bot', iconURL: '', url: '' })
                .setDescription(``)
                .setThumbnail('')
                .addFields(
                    { name: 'Reminder:', value: `${reminder}` },
                    { name: 'In how long?', value: `${time}` },
                   // { name: 'Inline field title', value: 'Some value here', inline: true },
                   // { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                //.addField('Inline field title', 'Some value here', true)
                .setImage('')
                .setTimestamp()
                .setFooter({ text: 'Flight Deck Bot', iconURL: '' });
                
                interaction.reply({ embeds: [exampleEmbed1] });

            setTimeout(function() {
            
 interaction.channel.send(`<@${interaction.user.id}>`)
                const exampleEmbed = new MessageEmbed()
                .setColor('#088BE0')
                .setTitle('Reminder!')
                .setURL('')
                .setAuthor({ name: 'Flight Deck Bot', iconURL: '', url: '' })
                .setDescription('Reminder for ' + `<@${interaction.user.id}>`)
                .setThumbnail('')
                .addFields(
                    { name: 'Here is your reminder!', value: `${reminder}` },
                   // { name: '\u200B', value: '\u200B' },
                   // { name: 'Inline field title', value: 'Some value here', inline: true },
                   // { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                //.addField('Inline field title', 'Some value here', true)
                .setImage('')
                .setTimestamp()
                .setFooter({ text: 'Flight Deck Bot', iconURL: '' });
                
            
            interaction.channel.send({ embeds: [exampleEmbed] });
            
            }, ms(time));
    return
        }
  }
  
