import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Waiting for server/i);
  expect(linkElement).toBeInTheDocument();
});
