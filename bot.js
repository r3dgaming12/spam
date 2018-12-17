const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524093203197067285")
setInterval(function() {
channel.send(`R3D Spam bot ya m3lm`);
}, 30)
})

client.login(process.env.BOT_TOKEN);