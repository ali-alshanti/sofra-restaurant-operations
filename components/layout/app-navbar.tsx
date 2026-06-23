export function AppNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h2 className="font-semibold">Restaurant Operations Platform</h2>

      <div className="flex items-center gap-4">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}
