"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Pages</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function AddPage() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Add New Page</h1>
                <Breadcrumbs />
            </div>

            <div className="max-w-[800px] mx-auto">
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

                        {/* Status */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#1B254B]">Status</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm focus:ring-2 focus:ring-[#4318FF] outline-none appearance-none text-[#A3AED0]">
                                    <option>Select status</option>
                                    <option>Published</option>
                                    <option>Draft</option>
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

                        {/* Publish Button */}
                        <button className="w-full py-4 mt-4 bg-[#CE1D35] text-white rounded-xl font-bold text-base transition-all hover:bg-[#b0182d] shadow-lg shadow-[#CE1D35]/20">
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
