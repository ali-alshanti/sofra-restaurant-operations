import { ReactNode } from "react";

import { AppNavbar } from "./app-navbar";
import { AppSidebar } from "./app-sidebar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <AppNavbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
