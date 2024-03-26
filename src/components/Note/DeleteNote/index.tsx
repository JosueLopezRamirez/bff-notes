"use client";
import { onDelete } from "@/actions/action-deleteNote";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { GoTrash } from "react-icons/go";

const DeleteNote = ({ id }: { id: string }) => {
    const router = useRouter();

    const [state, formAction] = useFormState(onDelete, {
        isDeleted: false
    });

    if(state.isDeleted) router.refresh();

  return (
    <form action={formAction}>
        <input type="hidden" name="id" value={id} />
      <button className="hover:text-primary" type="submit">
        <GoTrash />
      </button>
    </form>
  );
};

export default DeleteNote;
