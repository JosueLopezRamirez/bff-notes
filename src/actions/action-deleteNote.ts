"use server";

import axiosInstance from "@/utils/axios";

export const onDelete = async (prevState: any, formData: FormData) => {
  const id = formData.get("id");

  const { data } = await axiosInstance.delete<any>(`/note/${id}`, {
    params: { id },
  });
  return { isDeleted: data };
};
