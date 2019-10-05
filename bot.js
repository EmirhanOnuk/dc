const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(` ${client.user.tag}! Aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (!msg.content.startsWith(prefix)) {

  }
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    msg.reply("https://www.youtube.com/channel/UCtX1MZL0kattAxeIAcf2Ncw");
  }
  if (msg.content.toLowerCase() === prefix + 'instagram') {
    msg.reply("@kenanpadak");
  }
});

client.login(process.env.BOT_TOKEN);
