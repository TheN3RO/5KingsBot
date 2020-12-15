module.exports = (client) => {
    client.on("ready", () => {
        setInterval(function() {
            //getting online users and bots 
            let myGuild = client.guilds.cache.get("787957709482754059")
            let memberCount = myGuild.memberCount
            const botOnline = myGuild.members.cache.filter(member => member.user.bot).size
            let memberOnline = myGuild.members.cache.filter(member => member.presence.status !== "offline").size - botOnline
            let statuses = ["Miłej zabawy!", `👪Członkowie: ${memberCount}`, `💪🏻Online: ${memberOnline}`]
            //set display bot status
            let status = statuses[Math.floor(Math.random()*statuses.length)]
            client.user.setPresence({activity: {name: status}, status: "online"})
        }, 10000)
})
}
