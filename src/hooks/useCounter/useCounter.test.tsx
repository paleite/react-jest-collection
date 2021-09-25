/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import * as React from "react";
import { useCounter } from "./useCounter";

describe("useCounter (component)", () => {
  const UseCounter: React.FunctionComponent = () => {
    const { count, increment } = useCounter();

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  test("should update the counter on the button's click event", () => {
    render(<UseCounter />);
    const button = screen.getByRole("button");
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("Count: 0");
    fireEvent.click(button);
    expect(heading).toHaveTextContent("Count: 1");
  });
});

describe("useCounter (hook)", () => {
  test("should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
