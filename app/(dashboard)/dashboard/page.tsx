import { KpiCards } from "@/modules/dashboard/components/kpi-cards";
import { RevenueChart } from "@/modules/dashboard/components/revenue-chart";
import { ActivityFeed } from "@/modules/dashboard/components/activity-feed";
import { TopDishes } from "@/modules/dashboard/components/top-dishes";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <KpiCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <ActivityFeed />
        <TopDishes />
      </div>
    </div>
  );
}
