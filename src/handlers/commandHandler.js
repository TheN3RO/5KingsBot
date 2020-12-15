const { readdirSync } = require("fs")
const { PREFIX } = require(__dirname + "/../config/config.js")
const { Collection } = require("discord.js")
const ascii = require("ascii-table")
const table = new ascii().setHeading("Command", "Load status")
const { Array } = require("discord.js")
const { dir } = require("console")

module.exports = (client) => {
  // Collections
  client.commands = new Collection()
  
  const commandFiles = readdirSync(__dirname + "/../commands").filter((file) =>
    file.endsWith(".command.js"),
  )

  for (const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`)
    if (command.name) {
      client.commands.set(command.name, command)
      table.addRow(file, "✅")
    } else {
      table.addRow(file, "❌  -> missing 'name'!")
      continue
    }
  }

  console.log(table.toString())

  client.on("message", (msg) => {
    const { author, guild } = msg

    // Check if user is a bot
    if (author.bot || !guild) {
      return
    }

    // Ignore messages without prefix
    if (!msg.content.startsWith(PREFIX)) return

    const args = msg.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/g)

    const cmd = args.shift().toLowerCase()

    // Check if commands exist
    if (!client.commands.has(cmd)) return

    try {
      client.commands.get(cmd).run(msg, args)
    } catch (error) {
      console.error(error)
      msg.reply("there was an error trying to execute that command!")
    }
})
}