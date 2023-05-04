import { router } from "../trpc";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { helloRouter } from "./hello";

export const appRouter = router({
  greeting: helloRouter,
});

export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
