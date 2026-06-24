import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Branch {
  id: string;
  name: string;
  city: string;
  status: string;
}

interface BranchesTableProps {
  branches: Branch[];
}

export function BranchesTable({ branches }: BranchesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Branch</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {branches.map((branch) => (
          <TableRow key={branch.id}>
            <TableCell>{branch.name}</TableCell>
            <TableCell>{branch.city}</TableCell>
            <TableCell>{branch.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
