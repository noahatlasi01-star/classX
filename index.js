const http = require("node:http");
const bot = require("./bot/createBot");

require("./middleware/checkGroup")(bot);

require("./events/codePV")(bot);

require("./events/pin")(bot);
require("./events/weeklySchedule")(bot);
require("./events/unknownCodes")(bot);

bot.catch(error => {
    console.log(error);
});

// ---------- وب‌سرور ساده برای Health Check در Pxxl ----------
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("🤖 Bot is running!\n");
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ HTTP server listening on port ${PORT}`);
});

// ---------- شروع ربات ----------
bot.start();
console.log("✅ Bot started");
