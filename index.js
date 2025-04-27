require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13'); // Pastikan lo install discord.js-selfbot-v13
const client = new Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    try {
        // Set Presence (bisa diganti sesuai keinginan)
        await client.user.setPresence({
            status: 'dnd', // bisa 'online', 'idle', 'dnd', 'invisible'
            activities: [
                {
                    name: 'Manchester United - Old Trafford', // Ganti dengan aktivitas yang lo mau
                    type: 'WATCHING', // bisa 'PLAYING', 'LISTENING', 'WATCHING', 'STREAMING'
                },
            ],
        });

        console.log("Presence berhasil diupdate!");
    } catch (error) {
        console.error("Error setting presence:", error);
    }
});

// Login ke akun Discord lo dengan token pribadi
client.login(process.env.TOKEN);
