import Button from "@/app/components/Button";
import { expect, jest, describe, it } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Button variant="create" text="Create" />);
    expect(container).toMatchSnapshot();
  });
  it("calls onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button variant="create" text="Create" onClick={mockOnClick} />
    );
    const button = getByText("Create");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
