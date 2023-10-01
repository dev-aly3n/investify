const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6519061219:AAFuQ-I96SAAx5ySErpN7OL0pRZ1TY4yH9o")
bot.start((ctx) => ctx.reply('Welcome',{reply_markup:{keyboard:[[{text:"web app",web_app:{url:"https://investiiify.vercel.app/"}}]]}}))
bot.launch()