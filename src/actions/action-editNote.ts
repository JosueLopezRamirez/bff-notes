"use server";

import axiosInstance from "@/utils/axios";

export const onEdit = async (prevState: any, formData: FormData) => {
  const note = formData.get("note");
  const id = formData.get("id");

  try {
    await axiosInstance.put("/notes", { note, id });
    return { success: true };
  } catch (err) {
    return { error: true };
  }
};
