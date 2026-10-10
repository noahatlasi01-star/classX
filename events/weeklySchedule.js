module.exports = (bot) => {
    bot.on("message:text", async (ctx, next) => {
        if(ctx.chat.type != 'channel' && ctx.chat.type != 'private'){
            if(ctx.message.text === "برنامه هفتگی" || ctx.message.text === "Code 02"){
                await ctx.reply(
                    "📅 برنامه هفتگی\n\n" +
                    "1️⃣ شنبه\n" +
                    " ‌ ‌ ‌ ‌⌊ 🧮 ریاضی - 🧪 آزمایشگاه - ⚗️ شیمی (چرخشی)\n\n" +
                    "2️⃣ یکشنبه\n" +
                    " ‌ ‌ ‌ ‌⌊ ✍️ نگارش (چرخشی) 🛐 دینی - 🧠 تفکر - ⛓️‍💥 فیزیک - 🗣️ زبان انگلیسی (چرخشی) ✍️ نگارش\n\n" +
                    "3️⃣ دوشنبه\n" +
                    " ‌ ‌ ‌ ‌⌊ 🧮 ریاضی - 🕌 عربی - 🏟️ ورزش - 🌍 جغرافی\n\n" +
                    "4️⃣ سه شنبه\n" +
                    " ‌ ‌ ‌ ‌⌊ 🗣️ زبان انگلیسی - ⚗️ شیمی - 🛐 دینی (چرخشی) 🪖 دفاعی - 🪖 دفاعی\n\n" +
                    "5️⃣ چهارشنبه\n" +
                    " ‌ ‌ ‌ ‌⌊ ⛓️‍💥 فیزیک - 📐 هندسه - 📖 فارسی\n\n" +
                    "⚠️ آخرین ویرایش: 1405/07/11",
                    {reply_parameters : {message_id: ctx.message.message_id}}
                );
                return next();
            }
            return next();
        }
        return next();
    });
};