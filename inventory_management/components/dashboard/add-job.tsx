"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Modal from "../Modal";
import Button from "../Button";
import { Input } from "../ui/input";
import { Dropdown } from "../ui/select";

const FormSchema = z.object({
  name: z.string({}),
  categories: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
  status: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

export default function AddJob({
  isOpen,
  handleClose,
  onAddJob,
}: {
  isOpen: boolean;
  handleClose: () => void;
  onAddJob: () => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
    onAddJob();
    handleClose();
    form.reset();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        handleClose();
        form.clearErrors();
      }}
      title="Create Jobsite"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Type the jobsite name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem className="w-3/4">
                  <FormLabel className="ml-4">Status</FormLabel>
                  <FormControl>
                    <Dropdown
                      {...field}
                      options={[
                        { label: "Sidewalk Shed", value: "sidewalkShed" },
                        { label: "Scaffold", value: "scaffold" },
                        { label: "Shoring", value: "shoring" },
                      ]}
                      createAble={true}
                      isMulti={true}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select one"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <FormLabel className="ml-4">Status</FormLabel>
                  <FormControl>
                    <Dropdown
                      {...field}
                      options={[
                        { label: "Completed", value: "completed" },
                        { label: "In Progress", value: "inProgress" },
                        { label: "On Road", value: "onRoad" },
                        { label: "On Hold", value: "onHold" },
                      ]}
                      placeholder="Select one"
                      createAble={true}
                      isMulti={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full justify-end flex">
            <Button text="Save Changes" variant="save-changes" />
          </div>
        </form>
      </Form>
    </Modal>
  );
}
