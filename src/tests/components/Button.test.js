import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../stories/components/Button/Button";

describe("Button Component", () => {
  it("Label check", () => {
    render(
      <Button
        {...{
          text: "button",
          size: "md",
          variant: "primary",
        }}
      />
    );
    const buttonComp = screen.getByRole("button");
    expect(buttonComp.innerHTML).toBe("button");
  });
  it("Button Click event", () => {
    render(
      <Button
        {...{
          text: "button",
          size: "md",
          variant: "primary",
          onClick: () => true,
        }}
      />
    );
    const buttonComp = screen.getByRole("button");
    expect(fireEvent.click(buttonComp)).toBe(true);
  });
});
