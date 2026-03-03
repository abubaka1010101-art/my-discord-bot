const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', message => {

  // Ignore bots
  if (message.author.bot) return;

  // Ignore DMs (only work in servers)
  if (!message.guild) return;

  const yourID = '1238835145415462963';

  if (message.mentions.users.has(yourID)) {
    message.channel.send("Stop pinging my owner!");
  }

});


client.login(process.env.TOKEN);
