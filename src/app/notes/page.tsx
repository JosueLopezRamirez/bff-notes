"use client";
import { useEffect, useState } from "react";
import TableThree from "@/components/Tables/TableThree";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axiosInstance from "@/utils/axios";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NoteI {
  id: number;
  note: string;
}

interface Props {
  notes: NoteI[];
}

const TablesPage = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get("/notes");
      setNotes(data);
    };
    getUser();
    fetchData();
  }, []);

  const getUser = async () => {
    const data = await axiosInstance.get("/user");
    if (!data) {
      router.push("/auth/signin");
    }
    return data;
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <TableThree data={notes} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
