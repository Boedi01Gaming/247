const { Client } = require("discord.js-selfbot-v13");
const express = require("express");
const app = express();
const client = new Client();

const status = {
  name: "Manchester United - Old Trafford",
  type: 3,
  url: null,
};

client.on("ready", () => {
  console.log(`${client.user.username} sudah online sebagai selfbot!`);
  client.user.setPresence({
    activities: [{
      name: status.name,
      type: status.type,
      url: status.url || null,
    }],
    status: "dnd",
  });
});

client.login(process.env.DISCORD_TOKEN);

app.get("/", (req, res) => res.send("Selfbot is running!"));
app.listen(3000, () => console.log("Keep-alive server running"));
