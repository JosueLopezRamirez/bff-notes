import TableThree from "@/components/Tables/TableThree";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect } from "next/navigation";
import { getNotes } from "@/actions/action-getNotes";
import { getUser } from "@/actions/action-getUser";

const TablesPage = async () => {
  const user = await getUser();

  if (!user) {
    return redirect("/auth/signin");
  }

  const { notes } = await getNotes();

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <TableThree data={notes} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
