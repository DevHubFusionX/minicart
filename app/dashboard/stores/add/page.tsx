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
                    <span className="text-sm font-medium text-[#EE5D50]">Stores</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function AddStore() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Add New Store</h1>
                <Breadcrumbs />
            </div>

            <div className="max-w-[800px] mx-auto">
                <div className="bg-white rounded-[20px] p-8 shadow-sm border border-[#F4F7FE]">
                    <div className="flex flex-col gap-6">
                        {/* Domain */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#1B254B]">Domain</label>
                            <div className="flex border border-[#F4F7FE] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#4318FF]">
                                <input
                                    type="text"
                                    placeholder="Input domain name"
                                    className="flex-1 px-4 py-3 text-sm outline-none placeholder:text-[#A3AED0]"
                                />
                                <div className="bg-[#F4F7FE] px-6 py-3 flex items-center justify-center border-l border-[#F4F7FE]">
                                    <span className="text-sm font-medium text-[#11047A]">.Localhost</span>
                                </div>
                            </div>
                        </div>

                        {/* Plan */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#1B254B]">Plan</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none appearance-none text-[#A3AED0]">
                                    <option>Select plan</option>
                                    <option>Starter Plan</option>
                                    <option>Standard Plan</option>
                                    <option>Premium Plan</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#A3AED0]">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
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

                        {/* User Search */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#1B254B]">User</label>
                            <div className="flex gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Type to search"
                                        className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none placeholder:text-[#A3AED0]"
                                    />
                                </div>
                                <button className="px-6 py-3 border border-[#EE5D50] text-[#EE5D50] rounded-xl font-bold text-sm bg-white hover:bg-[#EE5D50]/5 transition-all flex items-center gap-2 whitespace-nowrap">
                                    <Plus size={18} />
                                    Add User
                                </button>
                            </div>
                        </div>

                        {/* Create Store Button */}
                        <button className="w-full py-4 mt-4 bg-[#CE1D35] text-white rounded-xl font-bold text-base transition-all hover:bg-[#b0182d] shadow-lg shadow-[#CE1D35]/20">
                            Create Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
