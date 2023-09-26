const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6519061219:AAFv52vIofzoApNzT2gFfID2x-I8zAcy6UQ")
bot.start((ctx) => ctx.reply('Welcome mf',{reply_markup:{keyboard:[[{text:"web app",web_app:{url:"https://investiiify.vercel.app/"}}]]}}))
bot.launch()