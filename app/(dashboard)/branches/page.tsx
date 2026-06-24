import { BranchesTable } from "@/modules/branches/components/branches-table";
import { CreateBranchDialog } from "@/modules/branches/components/create-branch-dialog";
import { getBranches } from "@/modules/branches/services/branches-service";

export default async function BranchesPage() {
  const branches = await getBranches();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Branches</h1>
      <CreateBranchDialog />

      <BranchesTable branches={branches} />
    </div>
  );
}
