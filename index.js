const { error } = require("node:console");
const bot = require("./bot/createBot");

require("./middleware/checkGroup")(bot);

require("./events/codePV")(bot);

require("./events/pin")(bot);
require("./events/weeklySchedule")(bot);
require("./events/unknownCodes")(bot);

bot.catch(error => {
    console.log(error);
});
bot.start();
console.log("✅");