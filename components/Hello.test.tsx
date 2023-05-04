import { setupMockServer, render } from "../tests/jest";

import { getHello } from "../server/routers/hello/mock";
import Hello from "./Hello";
import { screen } from "@testing-library/react";

setupMockServer(getHello());
test("hello component", async () => {
  render(<Hello />);
  expect(await screen.findByText("Hello world!")).toBeInTheDocument();
});
