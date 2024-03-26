"use server";

import axiosInstance from "@/utils/axios";

export const getUser = async () => {
    const data = await axiosInstance.get("/user");
    return data;
}