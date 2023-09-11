import Modal from "@/components/Modal";
import { render, fireEvent } from "@testing-library/react";

describe("Input Component", () => {
  it("renders with modal open", () => {
    const onCloseMock = jest.fn();
    const { getByText, getByTestId } = render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    // Verify that the modal is open by checking for the title and content
    expect(getByText("Test Modal")).toBeInTheDocument();
    expect(getByText("Modal content")).toBeInTheDocument();

    // Close the modal
    fireEvent.click(getByTestId("close-button"));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("does not render with modal closed", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    // Verify that the modal is not in the document when it's closed
    expect(container.querySelector(".modal")).toBeNull(); // Replace ".modal" with the appropriate modal selector
  });
});
