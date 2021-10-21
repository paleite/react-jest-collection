/**
 * @jest-environment jsdom
 */

/**
 * ATTENTION (2021-10-21): This test breaks if you enable Jest's
 * resetModules-option. If you encounter errors, this may be the reason.
 *
 * @see https://github.com/toomuchdesign/next-page-tester/issues/144
 */

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import { join } from "path";

const nextPageTesterOptions = {
  nextRoot: join(__dirname, "../"),
  route: "/",
};

describe("Index page (using next-page-tester)", () => {
  it("renders index page with server-side props", async () => {
    const { render } = await getPage(nextPageTesterOptions);
    render();

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveTextContent(
      "this is a server-side prop"
    );
  });
});
