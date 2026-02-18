"use client";

import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

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

export default function AddPlan() {
    const [enableDiscount, setEnableDiscount] = useState(true);

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Add New Plan</h1>
                <Breadcrumbs />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form Details */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-[#F4F7FE]">
                        <div className="flex flex-col gap-6">
                            {/* Title */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1B254B]">Title</label>
                                <input
                                    type="text"
                                    placeholder="Input title"
                                    className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none placeholder:text-[#A3AED0]"
                                />
                            </div>

                            {/* Price */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1B254B]">Price</label>
                                <input
                                    type="text"
                                    placeholder="Input price"
                                    className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none placeholder:text-[#A3AED0]"
                                />
                            </div>

                            {/* Status */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1B254B]">Status</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none appearance-none text-[#A3AED0]">
                                        <option>Select status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#A3AED0]">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1B254B]">Description</label>
                                <textarea
                                    placeholder="Description..."
                                    rows={8}
                                    className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none placeholder:text-[#A3AED0] resize-none"
                                />
                            </div>

                            {/* Create Plan Button */}
                            <button className="w-full py-4 bg-[#11047A] text-white rounded-xl font-bold text-base transition-all hover:bg-[#0d035e] shadow-lg shadow-[#11047A]/20">
                                Create Plan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar Stats/Settings */}
                <div className="flex flex-col gap-8">
                    {/* Status Card */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                        <h3 className="text-lg font-bold text-[#1B254B] mb-6">Status</h3>
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <select className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none appearance-none text-[#A3AED0]">
                                    <option>Inactive</option>
                                    <option>Active</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#A3AED0]">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                            <button className="w-full py-3 bg-[#11047A] text-white rounded-xl font-bold text-sm transition-all hover:bg-[#0d035e]">
                                Publish
                            </button>
                        </div>
                    </div>

                    {/* Discount Card */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-[#1B254B]">Discount</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Enable Discount */}
                            <div className="flex justify-between items-center py-4 border-b border-[#F4F7FE]">
                                <span className="text-sm font-bold text-[#A3AED0]">Enable Discount</span>
                                <ToggleSwitch
                                    isActive={enableDiscount}
                                    onToggle={() => setEnableDiscount(!enableDiscount)}
                                />
                            </div>

                            {/* Apply Discount to */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm font-bold text-[#1B254B]">Apply Discount to:</p>
                                <div className="flex flex-col gap-3">
                                    {["Monthly", "Yearly", "Quarterly"].map((period) => (
                                        <label key={period} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="h-5 w-5 rounded-md border border-gray-200 flex items-center justify-center bg-white group-hover:border-[#4318FF] transition-colors">
                                                <input type="checkbox" className="hidden" />
                                                <div className="h-2.5 w-2.5 bg-transparent rounded-sm" />
                                            </div>
                                            <span className="text-sm font-bold text-[#A3AED0]">{period}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Discount Amount */}
                            <div className="flex flex-col gap-2 pt-4 border-t border-[#F4F7FE]">
                                <label className="text-sm font-bold text-[#1B254B]">Discount Amount</label>
                                <div className="flex border border-[#F4F7FE] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#4318FF]">
                                    <input
                                        type="text"
                                        placeholder="Enter amount"
                                        className="flex-1 px-4 py-3 text-sm outline-none placeholder:text-[#A3AED0]"
                                    />
                                    <div className="relative border-l border-[#F4F7FE] bg-[#F4F7FE]/30">
                                        <select className="px-4 py-3 text-sm font-bold text-[#1B254B] bg-transparent outline-none appearance-none pr-10">
                                            <option>Percentage</option>
                                            <option>Fixed Amount</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#A3AED0]">
                                            <ChevronDown size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
