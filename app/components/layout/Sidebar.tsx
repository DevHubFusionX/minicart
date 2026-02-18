"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    MdDashboard,
    MdBarChart,
    MdPerson,
    MdOutlineShoppingCart,
    MdMap,
    MdDescription,
    MdImage,
    MdSupportAgent,
    MdSettings,
    MdCreditCard,
    MdEmail,
    MdBrandingWatermark,
    MdLogout,
    MdExpandMore,
    MdExpandLess,
    MdAttachMoney,
} from "react-icons/md";
import { useState } from "react";
import { MdClose } from "react-icons/md";

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const pathname = usePathname();
    const menuItems = [
        { title: "Dashboard", icon: <MdDashboard className="h-6 w-6" />, path: "/dashboard" },
        { title: "Revenue", icon: <MdAttachMoney className="h-6 w-6" />, path: "/dashboard/revenue" },
        { title: "Locations", icon: <MdMap className="h-6 w-6" />, path: "/dashboard/locations" },
        {
            title: "Plans",
            icon: <MdDescription className="h-6 w-6" />,
            path: "/dashboard/plans",
            subItems: [
                { title: "Add Plan", path: "/dashboard/plans/add" },
                { title: "Manage Plan", path: "/dashboard/plans" },
            ]
        },
        {
            title: "Stores",
            icon: <MdOutlineShoppingCart className="h-6 w-6" />,
            path: "/dashboard/stores",
            subItems: [
                { title: "Add Store", path: "/dashboard/stores/add" },
                { title: "Manage Store", path: "/dashboard/stores" },
            ]
        },
        {
            title: "Pages",
            icon: <MdDescription className="h-6 w-6" />,
            path: "/dashboard/pages",
            subItems: [
                { title: "Add Page", path: "/dashboard/pages/add" },
                { title: "Manage Page", path: "/dashboard/pages" },
            ]
        },
        { title: "Media", icon: <MdImage className="h-6 w-6" />, path: "/dashboard/media" },
        { title: "Users", icon: <MdPerson className="h-6 w-6" />, path: "/dashboard/users" },
        {
            title: "Support",
            icon: <MdSupportAgent className="h-6 w-6" />,
            path: "/dashboard/support",
            subItems: [
                { title: "Support List", path: "/dashboard/support" },
                { title: "Support Reply", path: "/dashboard/support/reply" },
            ]
        },
    ];

    const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        menuItems.forEach(item => {
            if (item.subItems?.some(sub => pathname === sub.path)) {
                initial[item.title] = true;
            }
        });
        return initial;
    });

    const toggleMenu = (title: string) => {
        setExpandedMenus(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const isActive = (path: string) => {
        if (path === "/dashboard") return pathname === path;
        return pathname.startsWith(path);
    };

    const systemItems = [
        { title: "Profile Settings", icon: <MdSettings className="h-6 w-6" />, path: "/dashboard/settings" },
        { title: "Payment Gateway", icon: <MdCreditCard className="h-6 w-6" />, path: "/dashboard/payment" },
        { title: "Email Templates", icon: <MdEmail className="h-6 w-6" />, path: "/dashboard/email-templates" },
        { title: "Logo Management", icon: <MdBrandingWatermark className="h-6 w-6" />, path: "/dashboard/logo" },
        { title: "Log Out", icon: <MdLogout className="h-6 w-6" />, path: "/auth/logout" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 flex h-full min-h-screen w-[290px] flex-col bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                {/* Logo & Close Button */}
                <div className="mt-8 flex items-center justify-between px-8 mb-10">
                    <div className="flex items-center gap-2">
                        <MdOutlineShoppingCart className="h-8 w-8 text-[#4318FF]" />
                        <h1 className="text-2xl font-bold text-black uppercase tracking-tight">
                            minicart
                        </h1>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg">
                        <MdClose className="h-6 w-6" />
                    </button>
                </div>

                {/* Menu Section */}
                <div className="mb-4 px-4 overflow-y-auto flex-1">
                    <p className="mb-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Menu
                    </p>
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <div className="flex flex-col">
                                    <div
                                        className={`relative flex items-center justify-between gap-2 px-4 py-3 rounded-[15px] transition-all duration-200
                    ${isActive(item.path)
                                                ? "bg-[#11047A] text-white shadow-lg shadow-[#11047A]/20"
                                                : "text-black hover:bg-gray-50"
                                            }`}
                                    >
                                        <Link href={item.path} className="flex items-center gap-3 flex-1">
                                            <span className={`${isActive(item.path) ? "text-white" : "text-[#A3AED0]"}`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-base font-bold">{item.title}</span>
                                        </Link>
                                        {item.subItems && (
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                toggleMenu(item.title);
                                            }} className="focus:outline-none">
                                                {expandedMenus[item.title] ? (
                                                    <MdExpandLess className="h-5 w-5" />
                                                ) : (
                                                    <MdExpandMore className="h-5 w-5" />
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    {/* Submenu */}
                                    {item.subItems && expandedMenus[item.title] && (
                                        <ul className="px-4 mt-2 flex flex-col gap-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={subItem.path}
                                                        className={`flex items-center justify-center py-2.5 px-4 rounded-[12px] text-sm font-bold transition-all duration-200
                                                    ${isActive(subItem.path)
                                                                ? "bg-white text-black border border-gray-200 shadow-sm"
                                                                : "text-black hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* System Section */}
                    <div className="mt-10">
                        <p className="mb-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            System
                        </p>
                        <ul className="flex flex-col gap-2">
                            {systemItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        className={`relative flex items-center gap-3 px-4 py-3 rounded-[15px] transition-all
                        ${isActive(item.path)
                                                ? "bg-[#11047A] text-white shadow-lg shadow-[#11047A]/20"
                                                : "text-black hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className={`${isActive(item.path) ? "text-white" : "text-[#A3AED0]"}`}>
                                            {item.icon}
                                        </span>
                                        <span className="text-base font-bold">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
