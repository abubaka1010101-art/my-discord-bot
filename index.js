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

  // Ignore replies
  if (message.reference) return;

  const ownerID = '1238835145415462963'; // your ID
  const targetUser = '1337700492641439766'; // person to ping for "I miss u"

  // ---------- THUG SHAKE GIF ----------
  if (message.content.toLowerCase().includes("thug shake")) {
    message.channel.send("https://tenor.com/view/brandon-brandon-curington-curington-gif-16362657958830388259");
  }

  // ---------- IF YOU SAY "I miss u" ----------
  if (message.author.id === ownerID && message.content.toLowerCase().includes("i miss u")) {
message.channel.send(`<@${1337700492641439766}> he misses you 😔`);  }

  // ---------- IF YOU PING THE BOT ----------
  if (message.mentions.users.has(client.user.id)) {

    if (message.author.id === ownerID) {
      message.channel.send("Yess daddy I'm here what do u want? UwU.");
    }

    return; // stop others from triggering
  }

  // ---------- IF SOMEONE PINGS YOU ----------
  if (message.mentions.users.has(ownerID)) {

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









