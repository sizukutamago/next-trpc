import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/routers/_app";
import { type inferAsyncReturnType } from "@trpc/server";

export const createContext = async () => ({});

export type Context = inferAsyncReturnType<typeof createContext>;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
