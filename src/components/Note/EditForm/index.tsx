"use client";
import { onEdit } from "@/actions/action-editNote";
import { redirect } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

const EditForm = ({ id, note }: { id: string; note: string }) => {
  const initialState = {
    success: false,
    error: undefined,
  };

  const [state, formAction] = useFormState(onEdit, initialState);

  if (state.success) {
    redirect("/notes");
  }

  return (
    <form action={formAction}>
      <div className="p-6.5">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full">
            <input type="hidden" name="id" value={id} />
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Note
            </label>
            <textarea
              rows={6}
              defaultValue={note}
              name="note"
              placeholder="Type your note"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
