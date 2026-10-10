module.exports = (bot) => {
    bot.on("message:text", async(ctx, next) => {
        if(ctx.chat.type != 'channel' && ctx.chat.type != 'private'){
            if(ctx.message.text === "Code 01" && ctx.from.id === 1286570914){
                if(!ctx.message.reply_to_message){
                    await ctx.reply("err in reply to message! Did you forgot reply to message ? 😑", {reply_parameters : {message_id: ctx.message.message_id}});
                    return next();
                }

                const replyMsgId = ctx.message.reply_to_message.message_id;

                try {
                    await ctx.api.raw.pinChatMessage({
                        chat_id: ctx.chat.id,
                        message_id: replyMsgId,
                        disable_notification: false
                    });
                    await ctx.reply("The message was pinned successfully 🫡", {reply_parameters : {message_id: ctx.message.message_id}});
                    return next();
                } catch (error) {
                    console.log(error);
                    await ctx.reply("err in pin command! First check and make sure everything is OKAY... 😒", {reply_parameters : {message_id: ctx.message.message_id}});
                    return next();
                }
            }
            return next();
        }
        return next();
    });
};