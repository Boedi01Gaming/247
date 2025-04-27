require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
    console.log(`Bot berhasil login sebagai ${client.user.username}`);

    try {
        await client.user.setPresence({
            status: 'dnd', // 'online', 'idle', 'dnd', 'invisible'
            activities: [
                {
                    name: 'Manchester United - Old Trafford', // Ganti dengan aktivitas lo
                    type: 'WATCHING', // 'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING'
                },
            ],
        });
        console.log("Presence berhasil diupdate!");
    } catch (error) {
        console.error("Error setting presence:", error);
    }
});

client.login(process.env.TOKEN);
