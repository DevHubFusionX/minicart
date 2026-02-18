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
                    <span className="text-sm font-medium text-[#EE5D50]">Plans</span>
                </div>
            </li>
        </ol>
    </nav>
);

const ToggleSwitch = ({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) => (
    <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isActive ? "bg-[#05CD99]" : "bg-[#E0E5F2]"
            }`}
    >
        <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isActive ? "translate-x-6" : "translate-x-1"
                }`}
        />
    </button>
);

const plansData = [
    { id: 1, name: "Starter Plan", price: "$351.02", discount: "Monthly", status: true },
    { id: 2, name: "Standard", price: "$630.44", discount: "Yearly", status: false },
    { id: 3, name: "Premium", price: "$767.50", discount: "Quarterly", status: true },
    { id: 4, name: "Platinum", price: "$943.65", discount: "Yearly", status: true },
    { id: 5, name: "Gold", price: "$779.58", discount: "Monthly", status: true },
    { id: 6, name: "Pro", price: "$601.13", discount: "Monthly", status: false },
    { id: 7, name: "Starter Premium", price: "$293.01", discount: "Yearly", status: true },
    { id: 8, name: "Starter Platinum", price: "$490.51", discount: "Monthly", status: false },
];

export default function ManagePlans() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-[34px] font-bold text-[#1B254B]">Manage Plans</h1>
                    <Breadcrumbs />
                </div>
                <Link href="/dashboard/plans/add" className="bg-[#EE5D50] hover:bg-[#d04d42] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#EE5D50]/20">
                    <Plus size={20} />
                    Add Plan
                </Link>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2 className="text-xl font-bold text-[#1B254B]">Recent plans</h2>
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
                            placeholder="Search plans..."
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
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center text-left">Name</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Price</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center hidden md:table-cell">Discount</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Status</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plansData.map((plan) => (
                                <tr key={plan.id} className="border-b border-[#F4F7FE] last:border-0 hover:bg-[#F4F7FE]/20 transition-all">
                                    <td className="p-4">
                                        <div className="h-5 w-5 rounded border border-[#E0E5F2] flex items-center justify-center bg-white cursor-pointer group hover:border-[#4318FF]">
                                            <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-left">{plan.name}</td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] text-center">{plan.price}</td>
                                    <td className="p-4 text-sm font-bold text-[#A3AED0] text-center hidden md:table-cell">{plan.discount}</td>
                                    <td className="p-4 text-center">
                                        <ToggleSwitch isActive={plan.status} onToggle={() => { }} />
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
                        <button className="h-10 w-10 flex items-center justify-center bg-[#EE5D50] text-white rounded-lg font-bold text-sm shadow-md shadow-[#EE5D50]/20">
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
