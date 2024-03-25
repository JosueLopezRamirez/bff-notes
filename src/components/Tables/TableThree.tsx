import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";
import { GoPencil, GoTrash } from "react-icons/go";

interface Props {
  data: any[];
}

const TableThree = (props: Props) => {
  const router = useRouter();

  const onDelete = (id: number) => async () => {
    const { data } = await axiosInstance.delete(`/note/${id}`, {
      params: { id },
    });
    if (data) {
      return router.push("/notes");
    }
    router.refresh();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                ID
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Note
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {(props.data || []).map((item, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item.id}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.note}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary"
                      onClick={() => router.push(`/note/${item.id}`)}
                    >
                      <GoPencil />
                    </button>
                    <button
                      className="hover:text-primary"
                      onClick={onDelete(item.id)}
                    >
                      <GoTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
