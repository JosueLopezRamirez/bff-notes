"use client";
import { useEffect, useState } from "react";
import TableThree from "@/components/Tables/TableThree";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axiosInstance from "@/utils/axios";

interface NoteI {
  id: number;
  note: string;
}

interface Props {
  notes: NoteI[];
}

const TablesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get("/notes");
      setNotes(data);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <TableThree data={notes} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
