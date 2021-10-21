/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./index";

describe("Index page (using @testing-library/react)", () => {
  it("renders a heading", () => {
    render(<HomePage title="hello, world" />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/iu,
    });

    expect(heading).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveTextContent("hello, world");
  });
});
