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

  const specialUser = '1238835145415462963';

  if (message.author.id === specialUser) {
    message.channel.send("Yess daddy I'm here what do u want? UwU.");
    return;
  }

  const replies = [
    "Wtf do u want?",
    "My owner is busy rn",
    "Stop pinging my daddy",
    "BOMBOCLATTTT."
  ];

  const randomReply = replies[Math.floor(Math.random() * replies.length)];

  message.channel.send(randomReply);
}

});


client.login(process.env.TOKEN);




