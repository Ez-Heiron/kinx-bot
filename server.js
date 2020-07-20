const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log("Conectado como " + client.user.tag )

client.on('message', msg => {
  if (msg.author == client.user){return}
  if (msg.author.id == "159985870458322944"){return}
  let message = msg.content.toLowerCase()
  if(message.includes("/info")) {
    msg.reply('He sido creado por Heiron y estoy encantado de estar en todos los servidores para divertirme :D')
  }});

client.login(process.env.BOT_TOKEN);
