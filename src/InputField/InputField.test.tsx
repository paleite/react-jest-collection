/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders a component that is a controlled component", () => {
    render(<InputField />);
    const textElement = screen.getByRole("textbox");
    expect(textElement).toBeInTheDocument();
  });

  it("updates the component after user has typed", () => {
    render(<InputField />);
    const textElement = screen.getByRole("textbox");
    userEvent.type(textElement, "hello, world");
    expect(textElement).toHaveValue("hello, world");
  });
});
