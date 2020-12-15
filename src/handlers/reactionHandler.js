const Discord = require("discord.js")
const chalk = require("chalk")

module.exports = (client) => {
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.partial) await reaction.fetch()
        const { message } = reaction
        if (message.id === "788327307872960533") {
            const member = message.channel.guild.members.cache.get(user.id)
            if (reaction.emoji.name === "👍") {
                console.log(chalk.yellowBright.bold(`Reakcja została dodana do wiadomości przez ${user.tag}`))
                member.roles.add("788329778435457034")
            }
        }
    })
}