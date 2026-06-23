import { AppSidebar } from "@/components/layout/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />

      <div className="flex-1">
        <header className="border-b p-4">Navbar</header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
