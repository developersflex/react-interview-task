import * as Yup from "yup";

export const addJob = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  status: Yup.string().required("Please select an option."),
  categories: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one option.")
    .nullable()
    .required("Please select an option."),
});

export const addItem = Yup.object().shape({
  item: Yup.string().required("Please select an option."),
  quantity: Yup.string().required("This field is required."),
  description: Yup.string().required("This field is required."),
  notes: Yup.string().required("This field is required."),
});
