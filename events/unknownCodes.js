module.exports = (bot) => {
    bot.on("message:text", async (ctx, next) => {
        if (ctx.chat.type != 'channel' && ctx.chat.type != 'private') {
            if (ctx.message.text.startsWith("Code ")) {
                const codeNum = ctx.message.text.slice(5).trim();
                const activeCodes = ["01", "02"];
                if (activeCodes.includes(codeNum)) {
                    return next(); // کد معتبر است، برو به هندلر بعدی
                } else {
                    // ✅ اصلاح: reply_parameters
                    await ctx.reply("🤨 ?", {
                        reply_parameters: { message_id: ctx.message.message_id }
                    });
                    return next();
                }
            }
            return next();
        }
        return next();
    });
};