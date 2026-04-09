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
  if (content.includes("TRACY")) {
    message.channel.send("CORNBALL NO RIZZ NOTHING HAHAHAHAHAHAH");
  }

 // ---------- WHO IS IBTI ----------
if (content.includes("who is ibti")) {

  message.channel.send(
    "Alright so to start with IBTI she is really tuff like HER AURA MAKES IT IMPOSSIBLE TO BEAT I gave up and she is majestic like one of the best."
  );

  message.channel.send(
    "She's soo majestic that no one can even come around her and like IBTI is really kind she always helped me and she cares about everyone."
  );

  message.channel.send(
    "She is a really great friend and daughter, she is really hardworking and she takes good care of her friends and family."
  );

  message.channel.send(
    "And she ALWAYS STANDS WITH WHAT IS RIGHT THAT IS JS SOOO GOATED she knows what is right and wrong."
  );

  message.channel.send(
    "She is really smart, she knows what is good for her and what is not, her beliefs are really great, she is religious."
  );

  message.channel.send(
    "SHE PRAYS she does everything that makes her GOATED."
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
    message.channel.send("DADDY WHY ARE U EVEN ASKING THIS QUES ISN'T THAT OBVIOUS ITS ONLY YOU ;)");
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







