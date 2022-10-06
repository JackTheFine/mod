const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
  .setName('cs')
  .setDescription('customer service training')
    .setDMPermission(true)
  .addStringOption(option => option.setName('secret_code').setDescription('The secret training code (case sensitive)').setRequired(true))
  .addStringOption(option =>
		option.setName('dms_open')
			.setDescription('are your dms open?')
			.setRequired(true)
			.addChoices(
				{ name: 'Yes', value: 'Yes' },
				{ name: 'No', value: 'No'}
			)),
  async execute(interaction, client){
    const ymm = interaction.options.getString('secret_code')
    const ym = interaction.options.getString('dms_open')
    if(ym == "Yes") {
    if(ymm == "CS82H") {
      client.users.fetch(interaction.member.user.id)
    .then(user => user.send("CUSTOMER SERVICE SECTION"))
      client.users.fetch(interaction.member.user.id)
    .then(user => user.send("To claim a ticket here is the required steps, first you must find an open ticket with no messages (no other cs agent has typed in it)."))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("Then you have to run /claim in the chat, what that command does is makes the ticket “yours” and you can be punished by writing in someone else’s ticket unless they allow you too."))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("After that the ticket is yours and you can help the user with their issue/inquiry."))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("This section is mainly to show you examples and how to deal with them.") )
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("A “passenger” opens a ticket that they got unranked from trainee even though they passed. "))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("You would first ask for proof that they passed, after getting that proof you would look into their roles,"))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("if you are unable to edit the persons roles, ping a Senior Executive+, they have edit roles permissions."))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("Someone opens a ticket that they want to know what time the flights are (Let’s say trello is down etc."))
      client.users.fetch(interaction.member.user.id)
.then(user => user.send("You would tell them to wait for flights to popup in #flight-calendar, also tell them that it will be posted 20 minutes before the Slock time so they should be quick."))
  client.users.fetch(interaction.member.user.id)
      .then(user => user.send('Now please complete the quiz.'))
      interaction.reply('Check dms (takes a min to load due to discord rate limit.)')
return
    }
    else {
      interaction.reply('Access is denied.')
      return
    }
    }
    else {
      interaction.reply('Dms need to be on to receive the message!')
      return
    }
      }
}