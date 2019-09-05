const { ConsoleBot, FileSessionStore } = require("bottender");

const bot = new ConsoleBot({
  sessionStore: new FileSessionStore()
});

bot.onEvent(async context => {
  if (context.event.isText) {
    await context.sendText(context.event.text);
  }
});

bot.createRuntime();
