import { initTRPC } from "@trpc/server";
import { Context } from "../pages/api/trpc/[trpc]";
import SuperJSON from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
