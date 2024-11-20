// import "./layout.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryFilters from "./components/CategoryFilters";

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-col max-h-[100dvh]  min-h-[100dvh] overflow-auto">
        <Header />
        <CategoryFilters openSidebar={() => setSidebarOpen(true)} />
        {children}
      </div>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
export default Layout;