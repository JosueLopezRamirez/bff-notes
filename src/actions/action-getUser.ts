"use server";

import axiosInstance from "@/utils/axios";
import { redirect } from "next/navigation";

export async function getUser() {
    const data = await axiosInstance.get("/user");
    return data;
}