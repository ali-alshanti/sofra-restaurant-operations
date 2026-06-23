import Link from "next/link";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Orders",
    href: "/orders",
  },
  {
    title: "Tables",
    href: "/tables",
  },
  {
    title: "Reservations",
    href: "/reservations",
  },
  {
    title: "Menu",
    href: "/menu",
  },
  {
    title: "Inventory",
    href: "/inventory",
  },
  {
    title: "Employees",
    href: "/employees",
  },
  {
    title: "Branches",
    href: "/branches",
  },
  {
    title: "Reports",
    href: "/reports",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="border-b p-4">
        <h2 className="text-xl font-bold">Sofra</h2>
      </div>

      <nav className="flex flex-col gap-1 p-2">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
