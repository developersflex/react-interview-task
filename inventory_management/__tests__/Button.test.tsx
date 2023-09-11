import { Button } from "@/components/Button";
import { expect, jest, describe, it } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  // testing three variants

  it("renders the default button correctly", () => {
    const { getByTestId } = render(<Button text="My Button" />);
    const button = getByTestId("My Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#71CF48] hover:bg-[#68C142]");
  });

  it("renders the destructive button correctly", () => {
    const { getByTestId } = render(
      <Button text="Destructive Button" variant="destructive" />
    );
    const button = getByTestId("Destructive Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#FE4C4A] hover:bg-[#EB4345]");
  });

  it("renders the destructive button correctly", () => {
    const { getByTestId } = render(
      <Button text="Destructive Button" variant="link" />
    );
    const button = getByTestId("Destructive Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#1264A3] hover:bg-[#0F5C97]");
  });

  //accepts custom classes

  it("applies custom class to the button", () => {
    const customClassName = "bg-green-950";
    const { getByTestId } = render(
      <Button text="Custom Class Button" className={customClassName} />
    );
    const button = getByTestId("Custom Class Button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(customClassName);
  });

  it("calls the onClick callback when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text="Clickable Button" onClick={onClickMock} />
    );

    const button = getByText("Clickable Button");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
