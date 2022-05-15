const { CLIENT_TOKEN , GUILD_ID, CLIENT_ID} = require('./keys.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	// new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('dropbox').setDescription('Sends a dm to let you send messages to the dropbox'),
    new SlashCommandBuilder().setName('ptah-codebase').setDescription('Provides a link to the current codebase')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(CLIENT_TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
