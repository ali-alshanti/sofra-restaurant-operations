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
            <div key={activity.id} className="border-b pb-4 last:border-b-0">
              <h4 className="font-medium">{activity.title}</h4>

              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>

              <span className="text-xs text-muted-foreground">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
