import "@testing-library/jest-dom";
import React, { ReactNode } from "react";
import "whatwg-fetch";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));
// https://github.com/scottrippey/next-router-mock/issues/58
jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});
