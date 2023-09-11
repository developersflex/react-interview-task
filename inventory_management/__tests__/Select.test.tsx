import Select from "@/components/Select";
import { describe, it } from "@jest/globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

describe("Select Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <Formik initialValues={{ testName: "" }} onSubmit={() => {}}>
        <Select
          options={[]}
          label="Test Label"
          placeholder="Test Placeholder"
          name="testName"
        />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });

  it("toggles the dropdown menu on button click", () => {
    render(
      <Formik initialValues={{ selectName: "" }} onSubmit={() => {}}>
        <Select
          options={[]}
          label="Test Label"
          placeholder="Select One"
          name="selectName"
        />
      </Formik>
    );

    const button = screen.getByRole("button", { name: /Select one/i });

    fireEvent.click(button);

    const dropdownMenu = screen.getByRole("listbox");

    expect(dropdownMenu).toBeInTheDocument();
    fireEvent.click(button);

    expect(dropdownMenu).not.toBeInTheDocument();
  });

  it("selects an option and closes the dropdown", async () => {
    const { getByRole, getByText, queryByRole } = render(
      <Formik initialValues={{ testName: "" }} onSubmit={() => {}}>
        <Select
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

    const optionToSelect = getByText("Option 1");
    fireEvent.click(optionToSelect);

    await waitFor(() => {
      expect(button).toHaveTextContent("option1");

      expect(queryByRole("listbox")).not.toBeInTheDocument();
    });
  });

  it("displays error message when there are validation errors", async () => {
    const validationSchema = Yup.object().shape({
      testName: Yup.string().required("Please select an option."),
    });

    const { getByText } = render(
      <Formik
        initialValues={{ testName: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <Form>
          <Select
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
