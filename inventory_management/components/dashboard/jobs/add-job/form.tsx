"use client";

import Modal from "@/components/Modal";
import useJobsites from "@/store/useJobsites";
import Select from "@/components/Select";
import Input from "@/components/Input";
import { Formik } from "formik";
import { addJob } from "@/utils/validations";
import { Button } from "@/components/Button";

export default function AddJob({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  const { add } = useJobsites();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        handleClose();
      }}
      title="Create Jobsite"
    >
      <Formik
        initialValues={{ name: "", status: "", categories: [] }}
        validationSchema={addJob}
        onSubmit={(values) => {
          add(values);
          handleClose();
        }}
      >
        {({ handleSubmit }) => (
          <>
            <form
              onSubmit={handleSubmit}
              className="h-full flex-col flex justify-between "
            >
              <div className="flex flex-col gap-4 md:mb-24 mb-10">
                <Input label="Name" placeholder="Name" name="name" />
                <div className="flex flex-col gap-5 md:flex-row">
                  <Select
                    options={[
                      { label: "Sidewalk Shed", value: "Sidewalk Shed" },
                      { label: "Scaffold", value: "Scaffold" },
                      { label: "Shoring", value: "Shoring" },
                    ]}
                    label="Category Included"
                    placeholder="Select"
                    name="categories"
                    isMulti
                    className="w-[70%]"
                  />
                  <Select
                    options={[
                      { label: "Completed", value: "Completed" },
                      { label: "In Progress", value: "In Progress" },
                      { label: "On Road", value: "On Road" },
                      { label: "On Hold", value: "On Hold" },
                    ]}
                    label="Status"
                    placeholder="Select"
                    name="status"
                    className="w-[30%]"
                  />
                </div>
              </div>
              <div className="w-full flex-col justify-end flex gap-2 md:flex-row">
                <Button
                  text="Cancel Changes"
                  variant="destructive"
                  onClick={() => handleClose()}
                />
                <Button text="Save Changes" />
              </div>
            </form>
          </>
        )}
      </Formik>
    </Modal>
  );
}
