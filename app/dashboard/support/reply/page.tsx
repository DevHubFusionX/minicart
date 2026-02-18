"use client";

import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Support Reply</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function SupportReply() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Support Reply</h1>
                <Breadcrumbs />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Panel: Message Thread */}
                <div className="flex-1">
                    <div className="bg-white rounded-[20px] shadow-sm border border-[#F4F7FE] overflow-hidden">
                        {/* Header */}
                        <div className="p-6 border-b border-[#F4F7FE] flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-[#1B254B]">Request #982958195 - General Inquiry</h2>
                                <p className="text-xs text-[#A3AED0] mt-1">Mon, 3:20 PM (3 days ago)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-[#A3AED0]">4 of 120</span>
                                <div className="flex items-center gap-2">
                                    <button className="h-8 w-8 flex items-center justify-center border border-[#F4F7FE] rounded-lg text-[#A3AED0] hover:bg-gray-50">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button className="h-8 w-8 flex items-center justify-center border border-[#F4F7FE] rounded-lg text-[#A3AED0] hover:bg-gray-50">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex gap-4 mb-8">
                                <div className="h-12 w-12 rounded-full bg-[#F4F7FE] flex-shrink-0" />
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-sm font-bold text-[#1B254B]">Leslie Alexander</h3>
                                        <span className="text-xs text-[#A3AED0]">Mon, 3:20 PM (3 days ago)</span>
                                    </div>
                                    <p className="text-xs text-[#A3AED0] mb-6">jackson.graham@example.com</p>

                                    <div className="text-sm text-[#707EAE] space-y-4">
                                        <p>Hi Jane Austin</p>
                                        <p>I hope you're doing well.</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Reply Area */}
                            <div className="mt-10 pt-10 border-t border-[#F4F7FE]">
                                <textarea
                                    placeholder="Type Your reply here....."
                                    rows={8}
                                    className="w-full p-6 bg-white border border-[#F4F7FE] rounded-2xl text-sm outline-none focus:ring-1 focus:ring-[#4318FF] transition-all placeholder:text-[#A3AED0] resize-none"
                                />
                                <div className="mt-6 flex justify-end">
                                    <button className="px-12 py-4 bg-[#CE1D35] text-white rounded-xl font-bold text-base transition-all hover:bg-[#b0182d] shadow-lg shadow-[#CE1D35]/20">
                                        Publish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Request Details */}
                <div className="lg:w-[350px]">
                    <div className="bg-white rounded-[20px] shadow-sm border border-[#F4F7FE] overflow-hidden">
                        <div className="p-6 border-b border-[#F4F7FE]">
                            <h2 className="text-lg font-bold text-[#1B254B]">Request Details</h2>
                        </div>
                        <div className="divide-y divide-[#F4F7FE]">
                            <div className="p-6 flex items-center justify-between">
                                <span className="text-sm font-medium text-[#A3AED0]">User</span>
                                <span className="text-sm font-bold text-[#1B254B]">Albert Flores</span>
                            </div>
                            <div className="p-6 flex flex-col gap-2">
                                <span className="text-sm font-medium text-[#A3AED0]">Email</span>
                                <span className="text-sm font-bold text-[#11047A] truncate">jackson.graham@example.com</span>
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <span className="text-sm font-medium text-[#A3AED0]">Request ID</span>
                                <span className="text-sm font-bold text-[#11047A]">#982958195</span>
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <span className="text-sm font-medium text-[#A3AED0]">Created At</span>
                                <span className="text-sm font-bold text-[#1B254B]">17 Oct, 2025</span>
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <span className="text-sm font-medium text-[#A3AED0]">Status</span>
                                <span className="px-3 py-1 bg-[#05CD99]/10 text-[#05CD99] rounded-lg text-[10px] font-bold">In Progress</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
