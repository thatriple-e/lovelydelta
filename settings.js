require("./all/module.js")
const version = require("@whiskeysockets/baileys/package.json").version
const { color } = require('./all/function')
global.owner = "6285381775839"
global.namaowner = "DeltaCrash"
global.namabot = "delta v5.2" 
global.botname = "delta"
global.packname = "by"
global.author = "yt: delta tech"
global.antibug = true
global.msg = {
"error": "\`error\`","done": "\`selesai\`","wait": "\`wait a minute\`","group": "\`group only\`", 
"private": "\`private only\`",
"pukimakkau": "\`you are not premium user\`",
"admin": "\`admin only\`","adminbot": "\`bot bukan admin\`",
"owner": "\`owner only\`","developer": "\`developer only\`"
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})