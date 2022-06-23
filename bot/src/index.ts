import path from "path";
import dotenv from "dotenv";
import invariant from "tiny-invariant";
import { start } from "./start";

dotenv.config({ path: path.join(__dirname, "../../.env") });

invariant(process.env.DISCORD_BOT_TOKEN, "DISCORD_BOT_TOKEN is required");
invariant(process.env.REMIX_GUILD_ID, "REMIX_GUILD_ID is required");
invariant(process.env.DISCORD_APP_ID, "DISCORD_APP_ID is required");

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_BOT_TOKEN: string;
      REMIX_GUILD_ID: string;
      DISCORD_APP_ID: string;
    }
  }
}

export const ref: { cleanup: Function | undefined } = {
  cleanup: undefined,
};
start().then((c) => (ref.cleanup = c));