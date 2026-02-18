"use client";

import React from "react";
import { ChevronDown, Plus, Search, MoreVertical } from "lucide-react";

const Breadcrumbs = () => (
    <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <a href="#" className="text-sm font-medium text-[#707EAE] hover:text-[#4318FF]">
                    Home
                </a>
            </li>
            <li>
                <div className="flex items-center">
                    <span className="mx-2 text-[#707EAE] font-bold">{">"}</span>
                    <span className="text-sm font-medium text-[#EE5D50]">User</span>
                </div>
            </li>
        </ol>
    </nav>
);

const StatusChip = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Active: "bg-[#05CD99]/10 text-[#05CD99]",
        Inactive: "bg-[#A3AED0]/10 text-[#A3AED0]",
        Suspended: "bg-[#FFB547]/10 text-[#FFB547]",
        Banned: "bg-[#EE5D50]/10 text-[#EE5D50]",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[status] || styles.Inactive}`}>
            {status}
        </span>
    );
};

const usersData = [
    {
        id: "95214362",
        name: "Ralph Edwards",
        email: "debbie.baker@example.com",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=40&h=40&auto=format&fit=crop",
        type: "Admin",
        createdAt: "21 Sep, 2025",
        status: "Active"
    },
    {
        id: "51746385",
        name: "Arlene McCoy",
        email: "debra.holt@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&h=40&auto=format&fit=crop",
        type: "User",
        createdAt: "21 Sep, 2025",
        status: "Inactive"
    },
    {
        id: "673971743",
        name: "Darlene Robertson",
        email: "kenzi.lawson@example.com",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=40&h=40&auto=format&fit=crop",
        type: "Admin",
        createdAt: "21 Sep, 2025",
        status: "Suspended"
    },
    {
        id: "71667167",
        name: "Annette Black",
        email: "tim.jennings@example.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=40&h=40&auto=format&fit=crop",
        type: "Admin",
        createdAt: "21 Sep, 2025",
        status: "Banned"
    },
    {
        id: "96459761",
        name: "Cody Fisher",
        email: "deanna.curtis@example.com",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=40&h=40&auto=format&fit=crop",
        type: "Admin",
        createdAt: "21 Sep, 2025",
        status: "Active"
    },
    {
        id: "96459761",
        name: "Jane Cooper",
        email: "tanya.hill@example.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=40&h=40&auto=format&fit=crop",
        type: "User",
        createdAt: "21 Sep, 2025",
        status: "Active"
    },
    {
        id: "96459761",
        name: "Leslie Alexander",
        email: "michael.mitc@example.com",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=40&h=40&auto=format&fit=crop",
        type: "User",
        createdAt: "21 Sep, 2025",
        status: "Active"
    },
    {
        id: "673971743",
        name: "Marvin McKinney",
        email: "bill.sanders@example.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=40&h=40&auto=format&fit=crop",
        type: "Admin",
        createdAt: "21 Sep, 2025",
        status: "Active"
    },
];

export default function AllUsers() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-[34px] font-bold text-[#1B254B]">All User</h1>
                    <Breadcrumbs />
                </div>
                <button className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#CE1D35]/20">
                    <Plus size={20} />
                    Add User
                </button>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2 className="text-xl font-bold text-[#1B254B]">Resent Stores</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-[#A3AED0]">Show</span>
                        <div className="relative">
                            <select className="pl-4 pr-10 py-2 border border-[#F4F7FE] rounded-lg text-sm font-bold text-[#1B254B] bg-white appearance-none outline-none">
                                <option>8</option>
                                <option>16</option>
                                <option>32</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={16} />
                        </div>
                        <span className="text-sm text-[#A3AED0]">Entries</span>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                        <input
                            type="text"
                            placeholder="Search user..."
                            className="w-full pl-12 pr-4 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm outline-none focus:border-[#4318FF] transition-all"
                        />
                    </div>
                    <div className="relative min-w-[160px]">
                        <select className="w-full pl-4 pr-10 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm text-[#A3AED0] appearance-none outline-none focus:border-[#4318FF] transition-all">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Suspended</option>
                            <option>Banned</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                    </div>
                    <div className="relative min-w-[160px]">
                        <select className="w-full pl-4 pr-10 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm text-[#A3AED0] appearance-none outline-none focus:border-[#4318FF] transition-all">
                            <option>All Types</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F4F7FE]">
                                <th className="p-4 text-left w-12">
                                    <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer">
                                        <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                    </div>
                                </th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden md:table-cell">User ID</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left">Name</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden lg:table-cell">Type</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden sm:table-cell">Created At</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Status</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user, idx) => (
                                <tr key={idx} className="border-b border-[#F4F7FE] last:border-0 hover:bg-[#F4F7FE]/20 transition-all">
                                    <td className="p-4">
                                        <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer group hover:border-[#4318FF]">
                                            <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-center hidden md:table-cell">{user.id}</td>
                                    {/* Name Column */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
                                            <div className="flex flex-col items-start translate-y-[-2px]">
                                                <span className="text-sm font-bold text-[#1B254B] leading-tight">{user.name}</span>
                                                <span className="text-[10px] font-medium text-[#A3AED0] leading-tight hidden xs:block">{user.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-center hidden lg:table-cell">{user.type}</td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-center hidden sm:table-cell">{user.createdAt}</td>
                                    <td className="p-4 text-center">
                                        <StatusChip status={user.status} />
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-[#A3AED0] hover:text-[#1B254B] transition-colors p-2">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
                    <p className="text-sm font-medium text-[#A3AED0]">
                        Showing 1 to 8 of 32 entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm font-bold text-[#A3AED0] border border-[#E0E5F2] rounded-lg hover:bg-gray-50 transition-all">
                            Previous
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center bg-[#CE1D35] text-white rounded-lg font-bold text-sm shadow-md shadow-[#CE1D35]/20">
                            1
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center text-[#1B254B] hover:bg-gray-50 rounded-lg font-bold text-sm">
                            2
                        </button>
                        <button className="px-4 py-2 text-sm font-bold text-[#1B254B] border border-[#E0E5F2] rounded-lg hover:bg-gray-50 transition-all">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
