import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Formik, Form } from "formik";
import Textarea from "@/components/Textarea";
import * as Yup from "yup";

describe("Textarea Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <Formik initialValues={{ testName: "" }} onSubmit={() => {}}>
        <Textarea
          placeholder="Test Placeholder"
          label="Test Label"
          name="testName"
        />
      </Formik>
    );
    expect(container).toMatchSnapshot();
  });

  it("displays the label and placeholder correctly", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Formik initialValues={{ testName: "" }} onSubmit={() => {}}>
        <Textarea
          placeholder="Test Placeholder"
          label="Test Label"
          name="testName"
        />
      </Formik>
    );

    expect(getByLabelText("Test Label")).toBeInTheDocument();
    expect(getByPlaceholderText("Test Placeholder")).toBeInTheDocument();
  });

  it("updates field value on user input", async () => {
    const { getByPlaceholderText } = render(
      <Formik initialValues={{ testName: "" }} onSubmit={() => {}}>
        <Textarea
          placeholder="Test Placeholder"
          label="Test Label"
          name="testName"
        />
      </Formik>
    );

    const textarea = getByPlaceholderText("Test Placeholder");
    fireEvent.change(textarea, { target: { value: "Updated Value" } });

    await waitFor(async () => {
      expect(textarea).toHaveValue("Updated Value");
    });
  });

  it("displays error message when there are validation errors", async () => {
    const validationSchema = Yup.object().shape({
      testName: Yup.string().required("This field is required."),
    });

    const { getByText } = render(
      <Formik
        initialValues={{ testName: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <Form>
          <Textarea
            placeholder="Test Placeholder"
            label="Test Label"
            name="testName"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(async () => {
      const expectedErrorMessage = "This field is required.";
      expect(getByText(expectedErrorMessage)).toBeInTheDocument();
    });
  });
});
