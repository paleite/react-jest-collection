/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import path from "path";
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

describe("Index page (using next-page-tester)", () => {
  const nextPageTesterOptions = {
    nextRoot: path.join(__dirname, "../"),
    route: "/",
  };

  it("renders index page with server-side props", async () => {
    const { render: _render } = await getPage(nextPageTesterOptions);
    _render();

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveTextContent(
      "this is a server-side prop"
    );
  });
});
