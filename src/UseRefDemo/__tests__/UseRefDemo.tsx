import { fireEvent, render, screen } from "@testing-library/react";
import UseRefDemo2 from "../UseRefDemo2";

test("button click focuses input element", () => {
  render(<UseRefDemo2 />);

  const inputOut = screen.getByRole("textbox");
  expect(inputOut).not.toHaveFocus();
  const button = screen.getByRole("button", {
    name: "Focus",
  });
  fireEvent.click(button);
  const input = screen.getByRole("textbox");
  expect(input).toHaveFocus();
});
