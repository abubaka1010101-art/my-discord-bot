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

  const ownerID = '1238835145415462963'; 
  const targetUser = '1337700492641439766';

  const content = message.content.toLowerCase();

  // ---------- THUG SHAKE GIF ----------
  if (content.includes("thug shake")) {
    message.channel.send("https://tenor.com/view/brandon-brandon-curington-curington-gif-16362657958830388259");
  }

  // ---------- TRACY MESSAGE ----------
  if (content.includes("tracy")) {
    message.channel.send("she likes KFC 🍗");
  }

  // ---------- IF YOU SAY "I miss u" ----------
  if (message.author.id === ownerID && content.includes("miss u")) {
    message.channel.send(`<@${targetUser}> he misses you 😔`);
  }

  // ---------- IF YOU PING THE BOT ----------
  if (message.mentions.users.has(client.user.id)) {

    if (message.author.id === ownerID) {
      message.channel.send("Yess daddy I'm here what do u want? UwU.");
    }

    return;
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




