"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";

interface Note {
  id: string;
  note: string;
  user_id: string;
}

const NoteDetail = ({ params }: { params: { id: string } }) => {
  const [isCreateMode] = useState(params.id === "create");
  const [note, setNote] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isCreateMode) return;
    const fetchData = async () => {
      const { data } = await axiosInstance.get<Note>(`/note/${params.id}`, {
        params: { id: params.id },
      });
      setNote(data.note);
    };

    fetchData();
  }, []);

  const onSave = async () => {
    try {
      if (isCreateMode) {
        await axiosInstance.post("/notes", { note });
        return router.push("/notes");
      } else {
        await axiosInstance.put("/notes", { note, id: parseInt(params.id) });
        return router.push("/notes");
      }
    } catch (error) {
      console.log({ error });
      router.refresh();
    }
  };

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Note
                    </label>
                    <textarea
                      rows={6}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Type your note"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onSave}
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NoteDetail;
