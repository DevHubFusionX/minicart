"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Search, MoreVertical } from "lucide-react";
import Link from "next/link";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Stores</span>
                </div>
            </li>
        </ol>
    </nav>
);

const StatusChip = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Active: "bg-[#05CD99]/10 text-[#05CD99]",
        Pending: "bg-[#A3AED0]/10 text-[#A3AED0]",
        Expired: "bg-[#FFB547]/10 text-[#FFB547]",
        Suspended: "bg-[#EE5D50]/10 text-[#EE5D50]",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[status] || styles.Pending}`}>
            {status}
        </span>
    );
};

const storesData = [
    {
        id: 1,
        storeName: "Luisa Via Roma",
        storeLogo: "bg-[#FFB547]",
        userName: "Ralph Edwards",
        userEmail: "debbie.baker@example.com",
        userInitials: "RE",
        userAvatarColor: "bg-[#E2D6FF] text-[#11047A]",
        plan: "Starter Plan",
        domain: "Example.Localhost",
        status: "Active"
    },
    {
        id: 2,
        storeName: "Revolve",
        storeLogo: "bg-[#F4F7FE]",
        userName: "Arlene McCoy",
        userEmail: "debra.holt@example.com",
        userInitials: "AM",
        userAvatarColor: "bg-[#FFD9FC] text-[#11047A]",
        plan: "Standard",
        domain: "Example.Localhost",
        status: "Pending"
    },
    {
        id: 3,
        storeName: "Marks and Spencer",
        storeLogo: "bg-[#05CD99]",
        userName: "Darlene Robertson",
        userEmail: "kenzi.lawson@example.com",
        userInitials: "DR",
        userAvatarColor: "bg-[#E2F9F2] text-[#05CD99]",
        plan: "Premium",
        domain: "Example.Localhost",
        status: "Expired"
    },
    {
        id: 4,
        storeName: "MyTheresa",
        storeLogo: "bg-[#322A72]",
        userName: "Annette Black",
        userEmail: "tim.jennings@example.com",
        userInitials: "AB",
        userAvatarColor: "bg-[#FFF4E5] text-[#FFB547]",
        plan: "Platinum",
        domain: "Example.Localhost",
        status: "Suspended"
    },
    {
        id: 5,
        storeName: "Coggles",
        storeLogo: "bg-[#11047A]",
        userName: "Cody Fisher",
        userEmail: "dieanna.curtis@example.com",
        userInitials: "CF",
        userAvatarColor: "bg-[#FFF4E5] text-[#FFB547]",
        plan: "Gold",
        domain: "Example.Localhost",
        status: "Active"
    },
    {
        id: 6,
        storeName: "Amazon Fashion",
        storeLogo: "bg-[#4318FF]",
        userName: "Jane Cooper",
        userEmail: "tanya.hill@example.com",
        userInitials: "JC",
        userAvatarColor: "bg-[#FFD9FC] text-[#11047A]",
        plan: "Pro",
        domain: "Example.Localhost",
        status: "Active"
    },
    {
        id: 7,
        storeName: "Boohoo",
        storeLogo: "bg-[#FFB547]",
        userName: "Leslie Alexander",
        userEmail: "michael.mitc@example.com",
        userInitials: "LA",
        userAvatarColor: "bg-[#E2D6FF] text-[#11047A]",
        plan: "Starter Premium",
        domain: "Example.Localhost",
        status: "Active"
    },
    {
        id: 8,
        storeName: "Rag and Bone",
        storeLogo: "bg-[#EE5D50]",
        userName: "Marvin McKinney",
        userEmail: "bill.sanders@example.com",
        userInitials: "MM",
        userAvatarColor: "bg-[#FFD9FC] text-[#11047A]",
        plan: "Starter Platinum",
        domain: "Example.Localhost",
        status: "Active"
    },
];

export default function ManageStores() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-[34px] font-bold text-[#1B254B]">Manage Store</h1>
                    <Breadcrumbs />
                </div>
                <Link href="/dashboard/stores/add" className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#CE1D35]/20">
                    <Plus size={20} />
                    Add Store
                </Link>
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

                {/* Sub-header with search and status */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                        <input
                            type="text"
                            placeholder="Search stores..."
                            className="w-full pl-12 pr-4 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm outline-none focus:border-[#4318FF] transition-all"
                        />
                    </div>
                    <div className="relative min-w-[200px]">
                        <select className="w-full pl-4 pr-10 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm text-[#A3AED0] appearance-none outline-none focus:border-[#4318FF] transition-all">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F4F7FE]">
                                <th className="p-4 text-left">
                                    <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer">
                                        <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                    </div>
                                </th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left">Store</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left hidden md:table-cell">User</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden lg:table-cell">Plan</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden sm:table-cell">Domain</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Status</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storesData.map((store) => (
                                <tr key={store.id} className="border-b border-[#F4F7FE] last:border-0 hover:bg-[#F4F7FE]/20 transition-all">
                                    <td className="p-4">
                                        <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer group hover:border-[#4318FF]">
                                            <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                        </div>
                                    </td>
                                    {/* Store Column */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-full ${store.storeLogo} flex-shrink-0`} />
                                            <span className="text-sm font-bold text-[#1B254B]">{store.storeName}</span>
                                        </div>
                                    </td>
                                    {/* User Column */}
                                    <td className="p-4 hidden md:table-cell">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-full ${store.userAvatarColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                                {store.userInitials}
                                            </div>
                                            <div className="flex flex-col items-start translate-y-[-2px]">
                                                <span className="text-sm font-bold text-[#1B254B] leading-tight">{store.userName}</span>
                                                <span className="text-[10px] font-medium text-[#A3AED0] leading-tight hidden xs:block">{store.userEmail}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-center hidden lg:table-cell">{store.plan}</td>
                                    <td className="p-4 text-sm font-bold text-[#A3AED0] text-center hidden sm:table-cell">{store.domain}</td>
                                    <td className="p-4 text-center">
                                        <StatusChip status={store.status} />
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
