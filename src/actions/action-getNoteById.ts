import axiosInstance from "@/utils/axios";

interface Note {
  id: string;
  note: string;
  user_id: string;
}

export const getNoteById = async (id: string) => {
  const { data } = await axiosInstance.get<Note>(`/note/${id}`, {
    params: { id },
  });
  return { note: data.note };
};
