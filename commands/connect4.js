const { MessageEmbed } = require('discord.js');
const Discord = module.require("discord.js");
const { Connect4 } = require('discord-gamecord')

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect4')
		.setDescription('Plays connect4')
		.addUserOption(option => option.setName('target').setDescription('The person you want to play with')),
	async execute(interaction) {
  
        new Connect4({
        message: interaction,
        slash_command: true,
        opponent: interaction.options.getUser('target'),
        embed: {
          title: 'Connect 4',
          color: '#5865F2',
        },
        emojis: {
          player1: '🔵',
          player2: '🟡'
        },
        turnMessage: '{emoji} | Its now **{player}** turn!',
        winMessage: '{emoji} | **{winner}** won the game!',
        gameEndMessage: 'The game went unfinished :(',
        drawMessage: 'It was a draw!',
        askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
        cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
        timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
      }).startGame()
              
  },
};