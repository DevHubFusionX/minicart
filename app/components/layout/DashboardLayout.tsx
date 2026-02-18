"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-full bg-[#FAFBFF] overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-y-auto">
                <div className="p-4 md:p-8 pt-6">
                    <TopBar onToggleSidebar={() => setIsSidebarOpen(true)} />
                    <main className="mt-2 text-black">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
