// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { CLIENT_TOKEN, FEEDBACK_CHANNEL_ID } = require('./keys.json');


// Create a new client instance
const neededIntents= new Intents();
neededIntents.add(Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS)
const client = new Client({intents: neededIntents});

// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('Ptah is running!');
});

client.on('messageCreate', async message => {
    // if (message.content === '+ping') {  
    //   await message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    // }
    if (message.guild === null){
        (await client.channels.fetch(FEEDBACK_CHANNEL_ID)).send(message.content)
    }
  });
client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    // if(interaction.commandName === 'ping'){
    //     await interaction.reply(`🏓Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    // }
    if(interaction.commandName === 'dropbox'){
        await interaction.user.send('🗳️ New anonymous message thread started! 🗳️');
    }
    if(interaction.commandName === 'codebase'){
        await interaction.user.send('https://github.com/rigel-eva/ptah')
    }
});
// Login to Discord with your client's token
client.login(CLIENT_TOKEN);
