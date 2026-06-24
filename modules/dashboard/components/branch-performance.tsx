import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { branchPerformance } from "../constants/branch-performance-data";

export function BranchPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Performance</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {branchPerformance.map((branch) => (
            <div
              key={branch.branch}
              className="flex items-center justify-between border-b pb-3 last:border-b-0"
            >
              <div>
                <p className="font-medium">{branch.branch}</p>

                <p className="text-sm text-muted-foreground">
                  Revenue: {branch.revenue}
                </p>
              </div>

              <span className="text-sm font-medium">{branch.growth}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
