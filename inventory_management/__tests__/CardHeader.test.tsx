import { HeaderCard } from "@/components/HeaderCard";
import { getStatusClassName } from "@/utils/functions";
import { render } from "@testing-library/react";

describe("Header Card Component", () => {
  it("renders without errors", () => {
    const { getByText } = render(<HeaderCard name="Test Name" value={42} />);

    // Verify that the component renders the name and value separately using regex
    expect(getByText(/Test Name/)).toBeInTheDocument();
    expect(getByText(/42/)).toBeInTheDocument();
  });

  it("sets the background color based on the name prop", () => {
    const { container } = render(
      <HeaderCard name="Default bg when no matching name" value={42} />
    );
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("bg-brand-green-500");
  });

  it("sets the background color based on the name prop", () => {
    const { container } = render(<HeaderCard name="On Road" value={42} />);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("bg-brand-yellow-1000");
  });

  it("sets the background color based on the name prop", () => {
    const { container } = render(<HeaderCard name="Completed" value={42} />);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("bg-brand-green-1000");
  });
  it("sets the background color based on the name prop", () => {
    const { container } = render(<HeaderCard name="On Hold" value={42} />);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass(" bg-brand-red-1000");
  });
});
