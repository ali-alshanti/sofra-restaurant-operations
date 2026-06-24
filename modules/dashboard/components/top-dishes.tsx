import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { topDishes } from "../constants/top-dishes-data";

export function TopDishes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Dishes</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {topDishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-center justify-between border-b pb-3 last:border-b-0"
            >
              <div>
                <p className="font-medium">{dish.name}</p>

                <p className="text-sm text-muted-foreground">
                  {dish.orders} orders
                </p>
              </div>

              <span className="text-sm font-medium">{dish.growth}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
