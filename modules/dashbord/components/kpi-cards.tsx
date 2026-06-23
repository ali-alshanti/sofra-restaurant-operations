import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { dashboardStats } from "../constants/dashboard-data";

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              {stat.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>

            <p className="mt-1 text-sm text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
