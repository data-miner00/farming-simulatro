const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(TOKEN);
