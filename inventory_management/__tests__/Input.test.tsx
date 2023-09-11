import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Form, Formik } from "formik";
import Input from "@/components/Input";
import { act } from "react-dom/test-utils";
import * as Yup from "yup";

describe("Input Component", () => {
  it("renders the input with the correct placeholder and label", () => {
    const placeholder = "Placeholder text";
    const label = "Label Text";
    const name = "Input Name";

    const { container, getByLabelText, getByPlaceholderText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Input placeholder={placeholder} label={label} name={name} />
      </Formik>
    );

    const inputElement = getByPlaceholderText(placeholder);
    const labelElement = getByLabelText(label);

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("allows user interaction", async () => {
    await act(async () => {
      render(
        <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
          <Input label="Name" name="name" placeholder="Enter your name" />
        </Formik>
      );
    });

    const input = screen.getByPlaceholderText(
      "Enter your name"
    ) as HTMLInputElement;

    await act(async () => {
      fireEvent.change(input, { target: { value: "Durim" } });
    });

    expect(input.value).toBe("Durim");
  });

  it("displays error message when there are validation errors", async () => {
    const validationSchema = Yup.object().shape({
      testName: Yup.array().required("This field is required"),
    });

    const { getByText } = render(
      <Formik
        initialValues={{ testName: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <Form>
          <Input label="Name" name="testName" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(async () => {
      const expectedErrorMessage = "This field is required";
      expect(getByText(expectedErrorMessage)).toBeInTheDocument();
    });
  });
});
