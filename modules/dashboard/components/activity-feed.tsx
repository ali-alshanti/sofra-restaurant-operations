import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { activities } from "../constants/activity-data";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="border-b pb-3 last:border-b-0">
              <p className="font-medium">{activity.message}</p>

              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
