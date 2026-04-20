import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardContent } from "@/components/DashboardContent";
import DashboardPlaceholder from "@/pages/DashboardPlaceholder";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border bg-card/80 backdrop-blur-md md:hidden">
            <SidebarTrigger className="ml-2" />
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route index element={<DashboardContent />} />
              <Route path="rastreamentos" element={<DashboardPlaceholder />} />
              <Route path="pacotes" element={<DashboardPlaceholder />} />
              <Route path="relatorios" element={<DashboardPlaceholder />} />
              <Route path="configuracoes" element={<DashboardPlaceholder />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
