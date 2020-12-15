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
            .setDescription("Chcesz dołączyć do 5-Kings? Uważasz że jesteś wystarczająco dobry? Dodaj reakcje pod tym, a trafisz do kelejki na przesłuchania.", "Życzymy powodzenia!")
            .setColor("FFBF00")
        msg.channel.send(embed).then((msg) => msg.react('👍'))
    }
}