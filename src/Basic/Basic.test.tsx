/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { Basic } from "./Basic";
import { render, screen } from "@testing-library/react";

it("renders a component with static content", () => {
  render(<Basic />);
  const textElement = screen.getByText(/hello, world/iu);
  expect(textElement).toBeInTheDocument();
});
