module.exports = (bot) => {
    bot.on("message", async(ctx, next) => {
        if(ctx.chat.id != 4845978280 && ctx.chat.type != 'private'){
            await ctx.api.leaveChat({ chat_id: ctx.chat.id});
            return next();
        }
        return next();
    });
};