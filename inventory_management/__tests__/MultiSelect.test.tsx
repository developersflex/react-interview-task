import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Form, Formik } from "formik";
import MultiSelect from "@/components/Select/MultiSelect";
import * as Yup from "yup";

describe("MultiSelect Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <Formik initialValues={{ testName: [] }} onSubmit={() => {}}>
        <MultiSelect
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ]}
          label="Test Label"
          placeholder="Select one"
          name="testName"
        />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles the dropdown on button click", () => {
    const { getByRole } = render(
      <Formik initialValues={{ testName: [] }} onSubmit={() => {}}>
        <MultiSelect
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ]}
          label="Test Label"
          placeholder="Select one"
          name="testName"
        />
      </Formik>
    );

    const button = getByRole("button", { name: /Select one/i });
    fireEvent.click(button);

    // Assert that the dropdown menu is open
    expect(getByRole("listbox")).toBeInTheDocument();
  });

  it("closes the dropdown after all options are selected", async () => {
    const { getByRole, getByText, queryByRole } = render(
      <Formik initialValues={{ testName: [] }} onSubmit={() => {}}>
        <MultiSelect
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ]}
          label="Test Label"
          placeholder="Select one"
          name="testName"
        />
      </Formik>
    );

    const button = getByRole("button", { name: /Select one/i });
    fireEvent.click(button);

    const option1 = getByText("Option 1");
    const option2 = getByText("Option 2");
    fireEvent.click(option1);
    fireEvent.click(option2);

    // Wait for the state to update (e.g., using waitFor)
    await waitFor(async () => {
      // Assert that the button text reflects all options being selected
      expect(button).toHaveTextContent("All of them selected");

      // Assert that the dropdown is closed
      expect(queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("displays error message when there are validation errors", async () => {
    const validationSchema = Yup.object().shape({
      testName: Yup.array().required("Please select an option."),
    });

    const { getByText } = render(
      <Formik
        initialValues={{ testName: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <Form>
          <MultiSelect
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            label="Test Label"
            placeholder="Select one"
            name="testName"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(async () => {
      const expectedErrorMessage = "Please select an option.";
      expect(getByText(expectedErrorMessage)).toBeInTheDocument();
    });
  });
});
