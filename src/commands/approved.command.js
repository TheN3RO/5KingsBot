const Discord = require("discord.js")

module.exports = {
    name: "aplications",
    discription: "send message embed to approved channel on 5-kings discord",

    run(msg, args) {
        const { member, channel } = msg
        if (member.permissionsIn(channel).has(["ADMINISTRATOR"])) {}else {return msg.reply("Nie masz permisji do tej koemndy!!")}
        const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 })
        msg.channel.send("Odrzucone/Przyjęte|masz 10s na odp")
        collector.on("collect", msg => {
            let title = msg.content || args[0]
            collector.on("end", collected => {
                msg.channel.send("Nick gracza: |masz 15s na odp")
                const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 15000 })
                collector.on("collect", msg => {
                    let nick = msg.content || args[1]
                    collector.on("end", collected => {
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
                        }
                    })
                })
            })    
        })
    }
}