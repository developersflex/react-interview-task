import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import { ChangeEvent, FormEvent, useState } from "react";
import useCategories from "@/store/useCategories";
import { Categories, CategoryItem } from "@/types";

const initialFormData: CategoryItem = {
  id: 0,
  item: "",
  quantity: "",
  description: "",
  notes: "",
};

export default function AddItem({
  isOpen,
  handleClose,
  categoryName,
}: {
  isOpen: boolean;
  handleClose: () => void;
  categoryName: Categories;
}) {
  const [formData, setFormData] = useState(initialFormData);
  const { add } = useCategories();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    field: keyof typeof initialFormData
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(categoryName, formData);
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        handleClose();
        setFormData(initialFormData);
      }}
      title="Create Jobsite"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-2.5 w-full ">
          <Select
            options={[
              { label: "G42295", value: "G42295" },
              { label: "M721", value: "M721" },
              { label: "M94796", value: "M94796" },
              { label: "S25907", value: "S25907" },
              { label: "A68446", value: "A68446" },
              { label: "R69895", value: "R69895" },
              { label: "A29259", value: "A29259" },
              { label: "A41878", value: "A41878" },
              { label: "A37244", value: "A37244" },
              { label: "M89319", value: "M89319" },
            ]}
            placeholder="Search & Select item"
            label="Item"
            onChange={(e) => handleChange(e, "item")}
          />
          <Input
            label="Quantity"
            placeholder="Set Quantity"
            onChange={(e) => handleChange(e, "quantity")}
          />
        </div>
        <Textarea
          label="Description"
          placeholder="Type the description..."
          onChange={(e) => handleChange(e, "description")}
        />
        <Textarea
          label="Notes"
          placeholder="Type a note..."
          onChange={(e) => handleChange(e, "notes")}
        />
        <div className="w-full justify-end flex ">
          <Button text="Save" variant="save-changes" />
        </div>
      </form>
    </Modal>
  );
}
