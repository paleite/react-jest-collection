/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { Children } from "./Children";
import { render, screen } from "@testing-library/react";

test("renders children when provided", () => {
  render(<Children>mock string</Children>);
  expect(screen.getByText(/mock string/i)).toBeInTheDocument();
});

test("renders with multiple children", () => {
  render(
    <Children>
      <h1>mock heading</h1>
      <p>mock paragraph</p>
    </Children>
  );

  expect(screen.getByText(/mock heading/i)).toBeInTheDocument();
  expect(screen.getByText(/mock paragraph/i)).toBeInTheDocument();
});

test("renders without children when omitted", () => {
  const { container } = render(<Children />);

  expect(container).toBeEmptyDOMElement();
});
