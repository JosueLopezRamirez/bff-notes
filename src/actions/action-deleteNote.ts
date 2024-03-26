"use server";

import axiosInstance from "@/utils/axios";

export const onDelete = async (prevState, formData: FormData) => {
  const id = formData.get("id");

  const data = await axiosInstance.delete(`/note/${id}`, {
    params: { id },
  });
  console.log({ data });
  return { isDeleted: data.deleted };
};
