import DashboardHeader from "@/features/dashboard/layout/DashboardHeader";
import DashboardSidebar from "@/features/dashboard/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar />
      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
