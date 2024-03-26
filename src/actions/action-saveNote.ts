"use server";

import axiosInstance from "@/utils/axios";

export const onSave = async (prevState: any, formData: FormData) => {
  const note = formData.get("note");

  try {
    await axiosInstance.post("/notes", { note });
    return { success: true };
  } catch (err) {
    return { error: true };
  }
};
