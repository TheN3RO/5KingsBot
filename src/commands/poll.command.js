const Discord = require("discord.js");

module.exports = {
    name: "poll",
    discription: "Creating a new poll",

    run(msg) {
        if (!member.permissionsIn(channel).has(["ADMINISTRATOR"])){return msg.reply("Nie masz permisji do tej koemndy!!")}
        const { guild, channel } = msg
        //embed
        const embed = new Discord.MessageEmbed()
            .setTitle("Aplikacja do 5Kings Academy.")
            .setThumbnail("https://cdn.discordapp.com/attachments/761836839195246632/788323549785882654/5kings_logo.png")
            .setDescription("Od teraz oba teamy mają oddzielne kanały.")
            .setColor("FFBF00")
        msg.channel.send(embed)
    }
}