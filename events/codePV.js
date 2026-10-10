module.exports = (bot) => {
    bot.on("message:text", async(ctx, next) => {
        if(ctx.chat.type === 'private'){
            if(ctx.from.id === 1286570914 && ctx.message.text === "دستور"){
                await ctx.reply(
                    "Code 01 : PIN 📌\n" +
                    "Code 02 : WEEKLY SCHEDULE 📅",
                    {reply_parameters : {message_id: ctx.message.message_id}}
                );
                return next();
            }else {
                await ctx.reply("you're not my DAD, GET LOST 😒", {reply_parameters : {message_id: ctx.message.message_id}});
                return next();
            }
        }
        return next();
    });
}; 