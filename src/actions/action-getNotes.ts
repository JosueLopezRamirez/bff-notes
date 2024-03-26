"use server";

import axiosInstance from "@/utils/axios";

export const getNotes = async () => {
    const { data } = await axiosInstance.get("/notes");
    return { notes: data };
}