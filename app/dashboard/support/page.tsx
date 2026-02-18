"use client";

import React from "react";
import { ChevronDown, Search, MoreVertical, Info, Clock, CheckCircle2 } from "lucide-react";
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
                    <span className="text-sm font-medium text-[#EE5D50]">Support List</span>
                </div>
            </li>
        </ol>
    </nav>
);

const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE] flex items-center justify-between flex-1">
        <div>
            <p className="text-sm font-medium text-[#A3AED0] mb-1">{title}</p>
            <p className="text-2xl font-bold text-[#1B254B]">{value}</p>
        </div>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center bg-gray-50`}>
            <Icon size={24} className={color} />
        </div>
    </div>
);

const StatusChip = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        Solved: "bg-[#05CD99]/10 text-[#05CD99]",
        Pending: "bg-[#A3AED0]/20 text-[#707EAE]",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${styles[status] || styles.Pending}`}>
            {status}
        </span>
    );
};

const supportData = [
    { id: "982958195", date: "17 Oct, 2025", user: "Albert Flores", email: "chronos@aol.com", initials: "AF", avatarColor: "bg-[#E2D6FF] text-[#11047A]", subject: "General Inquiry", status: "Solved" },
    { id: "081595952", date: "22 Oct, 2025", user: "Brooklyn Simmons", email: "wkebs@verizon.net", initials: "BS", avatarColor: "bg-[#FFD9FC] text-[#11047A]", subject: "Issue With Dashboard Login", status: "Pending" },
    { id: "982958195", date: "8 Sep, 2025", user: "Jerome Bell", email: "bckelboy@att.net", initials: "JB", avatarColor: "bg-[#E2F9F2] text-[#05CD99]", subject: "Unable to Reset my Password", status: "Solved" },
    { id: "081595952", date: "21 Sep, 2025", user: "Marvin McKinney", email: "ateniese@mac.com", initials: "MM", avatarColor: "bg-[#FFF4E5] text-[#FFB547]", subject: "Request Technical Support", status: "Solved" },
    { id: "523943855", date: "24 May, 2025", user: "Leslie Alexander", email: "dowdy@yahoo.com", initials: "LA", avatarColor: "bg-[#E2D6FF] text-[#11047A]", subject: "Feedback on Product/Service", status: "Solved" },
    { id: "102138520", date: "1 Feb, 2025", user: "Savannah Nguyen", email: "mobileip@mac.com", initials: "SN", avatarColor: "bg-[#FFD9FC] text-[#11047A]", subject: "Partnership Proposal", status: "Pending" },
    { id: "292206548", date: "14 Jun, 2025", user: "Robert Fox", email: "doormat@att.net", initials: "RF", avatarColor: "bg-[#E2F9F2] text-[#05CD99]", subject: "Report a Bug", status: "Pending" },
    { id: "292206548", date: "31 Apr, 2025", user: "Ralph Edwards", email: "doormat@att.net", initials: "RE", avatarColor: "bg-[#E2D6FF] text-[#11047A]", subject: "Account Locked", status: "Solved" },
];

export default function SupportList() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Support List</h1>
                <Breadcrumbs />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Request" value="5,432" icon={Info} color="text-blue-500" />
                <StatCard title="Pending Request" value="320" icon={Clock} color="text-amber-500" />
                <StatCard title="Solved Request" value="5,110" icon={CheckCircle2} color="text-emerald-500" />
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2 className="text-xl font-bold text-[#1B254B]">All Requests</h2>
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
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                        <input
                            type="text"
                            placeholder="Search request..."
                            className="w-full pl-12 pr-4 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm outline-none focus:border-[#4318FF] transition-all"
                        />
                    </div>
                    <div className="relative min-w-[200px]">
                        <select className="w-full pl-4 pr-10 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm text-[#A3AED0] appearance-none outline-none focus:border-[#4318FF] transition-all">
                            <option>All Status</option>
                            <option>Solved</option>
                            <option>Pending</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                    </div>
                </div>

                {/* Table with visible grid lines */}
                <div className="overflow-x-auto border border-[#F4F7FE] rounded-xl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#F4F7FE]/30">
                                <th className="p-4 border border-[#F4F7FE] text-left w-12">
                                    <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer">
                                        <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                    </div>
                                </th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-center hidden sm:table-cell">Request ID</th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-center hidden lg:table-cell">Created At</th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-left">User</th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-left hidden md:table-cell">Subject</th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-center">Status</th>
                                <th className="p-4 border border-[#F4F7FE] text-xs font-bold text-[#1B254B] uppercase text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supportData.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-all">
                                    <td className="p-4 border border-[#F4F7FE]">
                                        <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer group hover:border-[#4318FF]">
                                            <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                        </div>
                                    </td>
                                    <td className="p-4 border border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden sm:table-cell">{item.id}</td>
                                    <td className="p-4 border border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden lg:table-cell">{item.date}</td>
                                    <td className="p-4 border border-[#F4F7FE]">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-full ${item.avatarColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                                {item.initials}
                                            </div>
                                            <div className="flex flex-col items-start translate-y-[-2px]">
                                                <span className="text-sm font-bold text-[#1B254B] leading-none">{item.user}</span>
                                                <span className="text-[10px] font-medium text-[#A3AED0] leading-none hidden xs:block">{item.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-left hidden md:table-cell">{item.subject}</td>
                                    <td className="p-4 border border-[#F4F7FE] text-center">
                                        <StatusChip status={item.status} />
                                    </td>
                                    <td className="p-4 border border-[#F4F7FE] text-center">
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
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
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
