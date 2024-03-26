import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getNoteById } from "@/actions/action-getNoteById";
import EditForm from "@/components/Note/EditForm";

const NoteDetail = async ({ params }: { params: { id: string } }) => {
  
  const { note } = await getNoteById(params.id);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <EditForm id={params.id} note={note} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NoteDetail;
