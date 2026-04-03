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

  // ---------- THUG SHAKE ----------
  if (content.includes("thug shake")) {
    message.channel.send("https://tenor.com/view/brandon-brandon-curington-curington-gif-16362657958830388259");
  }

  // ---------- JOE SHAKE ----------
  if (content.includes("joe shake")) {
    message.channel.send("https://tenor.com/view/thug-shake-thug-shaker-black-ass-shake-gif-25873456");
  }

  // ---------- IBTI GIF ----------
  if (content.includes("ibti")) {
    message.channel.send("https://tenor.com/view/cat-cat-blush-silly-cat-juice-cute-gif-6133838172443289075");
  }

  // ---------- OHIO GOON ----------
  if (content.includes("ohio goon")) {
    message.channel.send("https://tenor.com/view/ishowspeed-ohio-ishowspeed-ohio-ohio-goon-gif-6107280315227509350");
  }

  // ---------- SALSA DANCE ----------
  if (content.includes("throw dat lil salsa dance")) {
    message.channel.send("https://tenor.com/view/dj-khaled-salsa-dance-gif-9031583");
  }

  // ---------- TRACY ----------
  if (content.includes("nilla")) {
    message.channel.send("fking vanilla");
  }

  // ---------- WHO IS IBTI ----------
  if (content.includes("who is ibti?")) {

    message.channel.send(
      "Ibti has this presence that feels effortlessly special, like she doesn’t even try to stand out but somehow always does. There’s a soft, almost calming energy about her, mixed with a quiet strength that makes her seem both gentle and powerful at the same time."
    );

    message.channel.send(
      "The way she carries herself feels natural and unforced, like everything about her just flows — her words, her expressions, even her silence. She has that kind of personality that can make someone feel comfortable without doing much, yet also leave a lasting impression."
    );

    message.channel.send(
      "There’s something genuine about her, something real that makes her different from everyone else. She isn’t loud, but she doesn’t need to be — her presence speaks for itself, and that’s what makes it rare."
    );

    message.channel.send(
      "Ibti is the kind of person who brings a quiet charm and a subtle spark into any space she’s in. That mix of calmness, mystery, and authenticity is what makes her truly unforgettable."
    );
  }

  // ---------- IF YOU SAY "I miss u" ----------
  if (message.author.id === ownerID && content.includes("miss u")) {
    message.channel.send(`<@${targetUser}> he misses you 😔`);
  }

  // ---------- SIGMA COMMAND ----------
  if (
    message.author.id === ownerID &&
    content.includes("sigma sigma on the wall who's the toughest of them all")
  ) {
    message.channel.send("Abu Bakar");
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







