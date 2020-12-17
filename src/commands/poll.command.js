const Discord = require("discord.js");

module.exports = {
    name: "poll",
    discription: "Creating a new poll",

    run(msg) {
        const { guild, channel } = msg
        //embed
        const embed = new Discord.MessageEmbed()
            .setTitle("Aplikacja do 5Kings Academy.")
            .setThumbnail("https://cdn.discordapp.com/attachments/761836839195246632/788323549785882654/5kings_logo.png")
            .setDescription("Informujemy że jutro(18.12.2020) o godzinie 19:00 odbędzie się rekrutacja do pierwszego składu 5Kings Academy. Czekamy!")
            .setColor("FFBF00")
        msg.channel.send(embed)
    }
}