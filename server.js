const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);;

client.on('ready', () => {
console.log("Conectado como " + client.user.tag )

client.user.setActivity("Mi Prefix Es / Pero estoy siendo configurado :) ", {type: "playing"})})
