const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
  .setName('jmod')
  .setDescription('junior mod training')
    .setDMPermission(true)
  .addStringOption(option => option.setName('secret_code').setDescription('The secret training code (case sensitive)').setRequired(true)),
  async execute(interaction, client){
    const ymm = interaction.options.getString('secret_code')
    if(ymm == "M1JD8") {
      client.users.fetch(interaction.member.user.id)
    .then(user => user.send("JMOD SECTION"))
      client.users.fetch(interaction.member.user.id)
    .then(user => user.send("As a Junior Moderator at South Pacafic Airways you have access to 2 basic commands. These include the Warn and the Mute commands."))
 client.users.fetch(interaction.member.user.id)
      .then(user => user.send("You should use these commands when the server rules are being abused by passengers. You should also try your best to engage as much with passengers as you can when there is even no rising conflict with the server."))
      client.users.fetch(interaction.member.user.id)  
  .then(user => user.send("WARNINGS:"))
    client.users.fetch(interaction.member.user.id)
  .then(user => user.send("The warn command is one of the most used commands by any moderation. It should be used to let a passenger know that their actions should be stopped or further action will be taken. "))
    client.users.fetch(interaction.member.user.id)
  .then(user => user.send("If the passenger should further continue their actions that you deemed warning worthy you should try getting assistance from a Senior Moderator by simply pinging the role for them to assist you."))
    client.users.fetch(interaction.member.user.id)
  .then(user => user.send("Format:"))
    client.users.fetch(interaction.member.user.id)
.then(user => user.send("?warn (user ID) | SPA | You have been warned for (Reasoning) | Appeal your warn here: https://forms.gle/MjajfUwXGqBEk4VX7"))
  client.users.fetch(interaction.member.user.id)
.then(user => user.send("MUTES:"))
  client.users.fetch(interaction.member.user.id)
.then(user => user.send("The Mute command is another of the commonly used commands while performing moderation duties. This should be used to prevent passengers from further breaking chatting rules within the server."))
  client.users.fetch(interaction.member.user.id)
.then(user => user.send("If they continue after their mute you should then follow the same steps as the warning."))
  client.users.fetch(interaction.member.user.id)
.then(user => user.send("Format:"))
  client.users.fetch(interaction.member.user.id)
.then(user => user.send("?mute (user ID) | SPA | You have been muted for (Reasoning) "))
      client.users.fetch(interaction.member.user.id)
      .then(user => user.send('Now please complete the quiz.'))
      interaction.reply('Please check your dms (it may take a minute for it to load in fully due to discord rate limit.)')
return
    }
    else {
      interaction.reply('Access is denied.')
      return
    }
      }
}