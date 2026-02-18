"use client";

import { usePathname } from "next/navigation";
import {
    MdSearch,
    MdNotificationsNone,
    MdKeyboardArrowDown,
    MdMenu
} from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Image from "next/image";

interface TopBarProps {
    onToggleSidebar: () => void;
}

const TopBar = ({ onToggleSidebar }: TopBarProps) => {
    const pathname = usePathname();
    const title = pathname.split("/").pop() || "Dashboard";
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    return (
        <nav className="flex flex-row items-center justify-between px-2 md:px-4 py-4 mb-4 gap-4">
            {/* Hamburger for mobile */}
            <button
                onClick={onToggleSidebar}
                className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg flex-shrink-0"
            >
                <MdMenu className="h-6 w-6" />
            </button>
            {/* Search Bar */}
            <div className="flex-1 max-w-[500px]">
                <div className="relative flex items-center h-[50px] w-full rounded-xl bg-white border border-gray-100 px-4">
                    <MdSearch className="h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search or type command"
                        className="ml-2 block w-full bg-transparent text-sm font-medium text-black outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Right Icons & Profile */}
            <div className="flex items-center gap-6">
                <button className="text-gray-600">
                    <IoMdMoon className="h-5 w-5" />
                </button>

                <div className="relative">
                    <button className="text-gray-600 pt-1">
                        <MdNotificationsNone className="h-6 w-6" />
                    </button>
                    <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-orange-500 border-2 border-white"></span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                        {/* Using a div as placeholder if image fails */}
                        <div className="flex items-center justify-center h-full w-full text-black font-bold">JA</div>
                    </div>
                    <span className="hidden md:block text-sm font-bold text-black">
                        Jane Austin
                    </span>
                    <MdKeyboardArrowDown className="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
