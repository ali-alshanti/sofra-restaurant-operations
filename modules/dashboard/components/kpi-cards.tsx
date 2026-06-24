import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { dashboardStats } from "../constants/dashboard-data";

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <CardTitle className="text-sm">{stat.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>

            <p className="text-sm text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
