import React from "react";
import { render } from "@testing-library/react";
import { getStatusClassName } from "@/utils/functions";
import Chip from "@/components/Chip";
import { Status } from "@/types";

describe("Chip Component", () => {
  it("renders the chip with the correct status class for Completed text", () => {
    const specificText: Status = "Completed";
    const expectedClassName = getStatusClassName(specificText);

    const { getByText } = render(<Chip text={specificText} />);
    const chipElement = getByText(specificText);

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass(`bg-${expectedClassName}`);
  });

  it("renders the chip with the correct status class for In Progress text", () => {
    const specificText: Status = "In Progress";
    const expectedClassName = getStatusClassName(specificText);

    const { getByText } = render(<Chip text={specificText} />);
    const chipElement = getByText(specificText);

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass(`bg-${expectedClassName}`);
  });

  it("renders the chip with the correct status class for On Road text", () => {
    const specificText: Status = "On Road";
    const expectedClassName = getStatusClassName(specificText);

    const { getByText } = render(<Chip text={specificText} />);
    const chipElement = getByText(specificText);

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass(`bg-${expectedClassName}`);
  });

  it("renders the chip with the correct status class for On Road text", () => {
    const specificText: Status = "On Hold";
    const expectedClassName = getStatusClassName(specificText);

    const { getByText } = render(<Chip text={specificText} />);
    const chipElement = getByText(specificText);

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass(`bg-${expectedClassName}`);
  });

  it("renders the chip with a default class for unknown text", () => {
    const unknownText = "Unknown Status Text";

    const { getByText } = render(<Chip text={unknownText} />);
    const chipElement = getByText(unknownText);

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass("bg-brand-green-500");
  });
});
