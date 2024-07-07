import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button, buttonVariants } from "./Button";

describe("Button component", () => {
  test("renders button with default variant and size", () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "default", size: "default" })
    );
    expect(buttonElement).toHaveTextContent("Hello");
  });

  test("renders button with custom variant and size", () => {
    render(
      <Button variant="outline" size="small">
        Click me
      </Button>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "outline", size: "small" })
    );
    expect(buttonElement).toHaveTextContent("Click me");
  });

  test("properly handles click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
