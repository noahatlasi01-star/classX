require("dotenv").config();
const { Bot } = require("grammy");



const bot = new Bot(process.env.BOT_TOKEN, {
    client: {
        apiRoot: "https://tapi.bale.ai",
    },
});


module.exports = bot;