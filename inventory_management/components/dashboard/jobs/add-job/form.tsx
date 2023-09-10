"use client";

import Modal from "@/components/Modal";
import Button from "@/components/Button";
import useJobsites from "@/store/useJobsites";
import Select from "@/components/Select";
import Input from "@/components/Input";
import { Formik } from "formik";
import { addJob } from "@/utils/validations";

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
              className="h-full flex-col flex justify-between"
            >
              <div className="flex flex-col gap-4">
                <Input label="Name" placeholder="Name" name="name" />
                <div className="flex gap-5">
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
              <div className=" w-full justify-end flex gap-5">
                <Button
                  text="Cancel Changes"
                  variant="cancel-changes"
                  onClick={() => handleClose()}
                />
                <Button text="Save" variant="save-changes" />
              </div>
            </form>
          </>
        )}
      </Formik>
    </Modal>
  );
}
