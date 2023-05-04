import { trpcMswHandlerFactory } from "../../mock";

export const getHello = () => {
  return trpcMswHandlerFactory({
    path: ["greeting", "hello"],
    type: "query",
    response: {
      greeting: "Hello world!",
    },
  });
};
