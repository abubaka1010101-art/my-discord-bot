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

  if (message.author.bot) return;
  if (!message.guild) return;

  const yourID = '1238835145415462963';

  // Ignore replies
  if (message.reference) return;

  if (message.mentions.users.has(yourID)) {
    message.channel.send("Hey 👀 Please don't ping him!");
  }

});


client.login(process.env.TOKEN);

