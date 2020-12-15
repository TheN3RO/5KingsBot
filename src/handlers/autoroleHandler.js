const Discord = require("discord.js")
const Canvas = require("canvas")

module.exports = (client) => {
    client.on("guildMemberAdd", async (member) => {
        const canvas = Canvas.createCanvas(800, 250)
        const ctx = canvas.getContext("2d")

        //body
        //images
            //background
            const background = await Canvas.loadImage(
                __dirname + "/../assets/img/background.png",
            )
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
            //image 
            const global = await Canvas.loadImage(
                __dirname + "/../assets/img/global.png",
            )
            ctx.drawImage(global, 662, 182, 128, 58)
            //canvas text
            ctx.font = "26px sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`Welcome ${member.user.tag}`, 245, 65)

            ctx.font = "bold 34px sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`To official 5-Kings Discord`, 240, 140)

            ctx.strokeStyle = "#74037b"
            ctx.strokeRect(0, 0, canvas.width, canvas.height)

            //avatar
            const avatar = await Canvas.loadImage(
                member.user.displayAvatarURL({ format: "png" }),
            )
            ctx.beginPath()
            ctx.arc(130, 130, 110, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(avatar, 25, 25, 200, 200)

        //display canvas
        const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
            "background.png",
        )
        member.guild.channels.cache.find(i => i.name === '⌊♿⌉𝘗𝘳𝘻𝘺𝘸𝘪𝘵𝘢𝘯𝘪𝘢').send(attachment)
        //określanie guest role
        let myGuild = client.guilds.cache.get("787957709482754059")
        let guest = myGuild.roles.cache.find(role => role.name === "Gość")
        //dodawanie rangi guest do użytkownika
        member.roles.add(guest.id)
    })
  }