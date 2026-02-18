"use client";

import React from "react";
import { X } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Logo Management</span>
                </div>
            </li>
        </ol>
    </nav>
);

const LogoCard = ({ title }: { title: string }) => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE] flex flex-col h-full">
        <h3 className="text-lg font-bold text-[#1B254B] mb-6">{title}</h3>

        {/* Custom File Input */}
        <div className="flex items-center border border-[#F4F7FE] rounded-xl overflow-hidden mb-8">
            <button className="bg-[#F4F7FE] px-5 py-4 text-sm font-bold text-[#11047A] border-r border-[#F4F7FE] hover:bg-gray-100 transition-all whitespace-nowrap">
                Select File
            </button>
            <span className="px-5 py-4 text-sm text-[#A3AED0] truncate">No Chosen File</span>
        </div>

        {/* Preview Area */}
        <div className="relative flex-1 bg-white border border-[#F4F7FE] rounded-2xl flex items-center justify-center p-8 mb-8 group">
            <button className="absolute top-3 right-3 text-[#11047A] hover:bg-gray-50 p-1 rounded-md transition-all">
                <X size={18} />
            </button>
            <div className="max-w-full">
                <img
                    src="/logo.svg"
                    alt="Logo Preview"
                    className="max-h-[60px] w-auto grayscale-0"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/150x50?text=Logo+Preview";
                    }}
                />
            </div>
        </div>

        {/* Save Button */}
        <button className="w-full py-4 bg-[#C28A00] hover:bg-[#a67600] text-white rounded-xl font-bold text-base transition-all shadow-md shadow-[#C28A00]/20">
            Save
        </button>
    </div>
);

export default function LogoManagement() {
    const logoTypes = [
        "Favicon",
        "Main Logo White",
        "Main Logo Dark",
        "Admin Logo White",
        "Admin Logo Dark"
    ];

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Logo Management</h1>
                <Breadcrumbs />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {logoTypes.map((type, index) => (
                    <LogoCard key={index} title={type} />
                ))}
            </div>
        </div>
    );
}
