const Discord = require("discord.js")

module.exports = {
    name: "aplications",
    discription: "send message embed to approved channel on 5-kings discord",

    run(msg, args) {
        const { member, channel } = msg
        if (member.permissionsIn(channel).has(["ADMINISTRATOR"])) {}else {return msg.reply("Nie masz permisji do tej koemndy!!")}
        const niepoprawne1 = new Discord.MessageEmbed()
            .setTitle("Error")
            .setColor("ff0000")
            .setDescription("Niepoprawny nick gracza! Sprubój: !aplications Przyjęte/Odrzucone _nick-gracza_")
        const niepoprawne2 = new Discord.MessageEmbed()
            .setTitle("Error")
            .setColor("ff0000")
            .setDescription("Niepoprawny tytuł! Sprubój: !aplications Przyjęte/Odrzucone _nick-gracza_")
        let title = args[0]
        let nick = args[1]
        if (!nick) {
            msg.channel.send(niepoprawne1)
        }
        if (title.toUpperCase() === "PRZYJĘTE") {
            console.log("przyjęte")
            const channelprzyjete = msg.guild.channels.cache.find(i => i.name === "⌊✅⌉𝘈𝘱𝘱𝘳𝘰𝘷𝘦𝘥")
            const przyjete = new Discord.MessageEmbed()
                .setTitle(`Podanie zostało ${title.toUpperCase()}`)
                .setThumbnail("https://i.imgur.com/NV5yoAw.png")
                .setColor("30fc03")
                .setDescription(`
                Użytkowniku: @${nick}!
                Twoja aplikacja na: **5-Kings Academy** została rozpatrzona **pozytywnie**!
                `)
                .addField("――――――――――――――――――――――――――", "――――――――――――――――――――――――――")
                .setTimestamp()
                .setFooter(`Aplikacje sprawdził administrator: ${member.user.tag}`, member.user.displayAvatarURL({ format: "png" }))
                channelprzyjete.send(przyjete)
        }else if (title.toUpperCase() === "ODRZUCONE") {
            console.log("odrzucone")
            const channelodrzucone = msg.guild.channels.cache.find(i => i.name === "⌊❌⌉𝘙𝘦𝘫𝘦𝘤𝘵")
            const odrzucone = new Discord.MessageEmbed()
                .setTitle(`Podanie zostało ${title.toUpperCase()}`)
                .setThumbnail("https://i.imgur.com/S6CSLLF.png")
                .setColor("FF0000")
                .setDescription(`
                Użytkowniku: @${nick}!
                Twoja aplikacja na: **5-Kings Academy** została rozpatrzona **negatywnie**!
                `)
                .addField("――――――――――――――――――――――――――", "――――――――――――――――――――――――――")
                .setTimestamp()
                .setFooter(`Aplikacje sprawdził administrator: ${member.user.tag}`, member.user.displayAvatarURL({ format: "png" }))
                channelodrzucone.send(odrzucone)
        } else {
            msg.channel.send(niepoprawne2)
        } 
    }
}