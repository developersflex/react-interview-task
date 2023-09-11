import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "@/components/layout/Table";

describe("Table Component", () => {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
  ];

  it("renders the table with provided data and columns", () => {
    render(
      <Table
        data={data}
        columns={columns}
        placeholder="Search"
        customFilter={(item: { id: number; name: string }, filter: string) =>
          item.name.includes(filter)
        }
      />
    );

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("filters data based on user input", () => {
    render(<Table data={data} columns={columns} placeholder="Search" />);

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "Item 2" } });

    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.queryByText("Item 1")).toBeNull();
    expect(screen.queryByText("Item 3")).toBeNull();
  });

  it("displays 'No data' message when data is empty", () => {
    render(<Table data={[]} columns={columns} placeholder="Search" />);

    // Check if the "No data" message is displayed
    expect(screen.getByText("No data.")).toBeInTheDocument();
  });

  it("displays 'No results found' message when no match is found", () => {
    render(<Table data={data} columns={columns} placeholder="Search" />);

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "Non-Existent Item" } });

    // Check if the "No results found" message is displayed
    expect(
      screen.getByText('No results found for "Non-Existent Item".', {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
