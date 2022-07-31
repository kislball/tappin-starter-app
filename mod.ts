import { createFactory } from "tappin/core/mod.ts";
import { appModule } from "./app-module.ts";
import { handlers, setup } from "std/log/mod.ts";

await setup({
  handlers: {
    console: new handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    tappin: {
      handlers: ["console"],
      level: "DEBUG"
    }
  },
});

const factory = createFactory(appModule)

await factory.start();