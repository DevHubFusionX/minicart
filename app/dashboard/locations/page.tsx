"use client";

import React, { useState } from "react";
import LocationTable from "@/app/components/dashboard/LocationTable";
import { Plus, X, ChevronDown } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Locations</span>
                </div>
            </li>
        </ol>
    </nav>
);

const AddLocationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative bg-white rounded-[25px] p-8 lg:p-10 shadow-2xl max-w-[550px] w-full animate-in zoom-in duration-300">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[24px] font-bold text-[#1B254B]">Add New Location</h2>
                    <button onClick={onClose} className="text-[#1B254B] hover:bg-gray-50 p-1 rounded-md transition-all">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Country Code</label>
                        <input
                            type="text"
                            placeholder="Enter country code"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Country Name</label>
                        <input
                            type="text"
                            placeholder="Enter country name"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Phone Code</label>
                        <input
                            type="text"
                            placeholder="Enter phone code"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Status</label>
                        <div className="relative">
                            <select defaultValue="" className="w-full appearance-none px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm text-[#A3AED0] focus:text-[#1B254B] focus:border-[#4318FF] outline-none transition-all cursor-pointer">
                                <option value="" disabled>Select status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                <ChevronDown size={20} className="text-[#1B254B]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <button className="w-full py-5 bg-[#0D062D] hover:bg-[#1a0c5a] text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#0D062D]/20">
                        Create New Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function Locations() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <AddLocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-[34px] font-bold text-[#1B254B]">All Locations</h1>
                    <Breadcrumbs />
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-8 py-3.5 bg-[#D6293E] hover:bg-[#b02232] text-white rounded-xl font-bold transition-all shadow-md shadow-[#D6293E]/20"
                >
                    <Plus size={20} />
                    Add Location
                </button>
            </div>

            <LocationTable />
        </div>
    );
}
