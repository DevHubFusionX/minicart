"use client";

import React from "react";
import { ChevronDown, Search, Edit2 } from "lucide-react";
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
                    <span className="text-sm font-medium text-[#EE5D50]">Email Template</span>
                </div>
            </li>
        </ol>
    </nav>
);

const templateData = [
    { id: 1, type: "Registration Email", subject: "Registration Process Success" },
    { id: 2, type: "Password Reset", subject: "Reset Password Link" },
    { id: 3, type: "Order Confirmation", subject: "Your Order has been Placed" },
    { id: 4, type: "Welcome Email", subject: "Welcome to Minicart" },
    { id: 5, type: "Subscription Alert", subject: "Your Subscription is about to Expire" },
    { id: 6, type: "New Store Alert", subject: "Your Store is now Live" },
    { id: 7, type: "Support Ticket", subject: "Support Ticket Created" },
];

export default function EmailTemplates() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Email Template</h1>
                <Breadcrumbs />
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
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

                    <div className="relative flex-1 md:max-w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                        <input
                            type="text"
                            placeholder="Search subject..."
                            className="w-full pl-12 pr-4 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm outline-none focus:border-[#4318FF] transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#F4F7FE]">
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left w-20 hidden md:table-cell">SL</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left">Email Type</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-left hidden sm:table-cell">Subject</th>
                                <th className="p-4 text-sm font-bold text-[#A3AED0] uppercase text-center w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {templateData.map((template, idx) => (
                                <tr key={template.id} className="border-b border-[#F4F7FE] last:border-0 hover:bg-[#F4F7FE]/20 transition-all text-center md:text-left">
                                    <td className="p-4 text-sm font-bold text-[#1B254B] hidden md:table-cell">{idx + 1}</td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B]">{template.type}</td>
                                    <td className="p-4 text-sm font-bold text-[#1B254B] hidden sm:table-cell">{template.subject}</td>
                                    <td className="p-4 text-center">
                                        <Link
                                            href={`/dashboard/email-templates/edit`}
                                            className="h-10 w-10 flex items-center justify-center bg-[#CE1D35] text-white rounded-lg hover:bg-[#b0182d] transition-all shadow-md shadow-[#CE1D35]/20 mx-auto"
                                        >
                                            <Edit2 size={16} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
                    <p className="text-sm font-medium text-[#A3AED0]">
                        Showing 1 to 7 of 7 entries
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
