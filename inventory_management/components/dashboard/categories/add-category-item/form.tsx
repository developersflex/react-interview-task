"use client";

import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Input from "@/components/Input";
import { Formik } from "formik";
import { addItem } from "@/utils/validations";
import useCategories from "@/store/useCategories";
import { Categories } from "@/types";
import Textarea from "@/components/Textarea";

export default function AddJob({
  isOpen,
  handleClose,
  categoryName,
}: {
  isOpen: boolean;
  handleClose: () => void;
  categoryName: Categories;
}) {
  const { add } = useCategories();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        handleClose();
      }}
      title="Create Category Item"
    >
      <Formik
        initialValues={{
          item: "",
          quantity: "",
          description: "",
          notes: "",
        }}
        validationSchema={addItem}
        onSubmit={(values) => {
          const data = {
            ...values,
            category: categoryName,
          };
          add(data);
          handleClose();
        }}
      >
        {({ handleSubmit }) => (
          <>
            <form
              onSubmit={handleSubmit}
              className="h-full flex-col flex justify-between"
            >
              <div className="flex gap-4">
                <Select
                  options={[
                    { label: "G42295", value: "G42295" },
                    { label: "M721", value: "M721" },
                    { label: "M94796", value: "M94796" },
                    { label: "S25907", value: "S25907" },
                    { label: "A68446", value: "A68446" },
                    { label: "F3786", value: "F3786" },
                    { label: "R69895", value: "R69895" },
                    { label: "A29259", value: "A29259" },
                    { label: "A41878", value: "A41878" },
                    { label: "A37244", value: "A37244" },
                    { label: "M89319", value: "M89319" },
                  ]}
                  label="Item"
                  placeholder="Select"
                  name="item"
                />
                <Input
                  label="Quantity"
                  placeholder="Set Quantity"
                  name="quantity"
                />
              </div>
              <div>
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Type the description..."
                />
                <Textarea
                  name="notes"
                  label="Notes"
                  placeholder="Type a note..."
                />
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