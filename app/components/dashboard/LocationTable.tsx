"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, MoreVertical, ChevronDown, Edit3, ArrowUpRight, Trash2, Check, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LocationData {
    id: string;
    countryCode: string;
    country: string;
    phoneCode: string;
    syncDate: string;
    isActive: boolean;
}

const initialLocations: LocationData[] = [
    { id: "1", countryCode: "NIG", country: "Nigeria", phoneCode: "+234", syncDate: "8 Sep, 2020", isActive: true },
    { id: "2", countryCode: "IND", country: "India", phoneCode: "+91", syncDate: "17 Oct, 2020", isActive: false },
    { id: "3", countryCode: "UK", country: "United Kingdom", phoneCode: "+44", syncDate: "21 Sep, 2020", isActive: false },
    { id: "4", countryCode: "RU", country: "Russia", phoneCode: "+7", syncDate: "22 Oct, 2020", isActive: true },
    { id: "5", countryCode: "CHN", country: "China", phoneCode: "+86", syncDate: "17 Oct, 2020", isActive: true },
    { id: "6", countryCode: "FR", country: "France", phoneCode: "+33", syncDate: "1 Feb, 2020", isActive: true },
    { id: "7", countryCode: "USA", country: "USA", phoneCode: "+1", syncDate: "1 Feb, 2020", isActive: false },
    { id: "8", countryCode: "KR", country: "Korea", phoneCode: "+82", syncDate: "24 May, 2020", isActive: true },
];

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

const DeleteModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative bg-white rounded-[25px] p-10 shadow-2xl max-w-[400px] w-full text-center animate-in zoom-in duration-300">
                <h3 className="text-[20px] font-bold text-[#1B254B] mb-10 leading-relaxed">
                    Are you sure you want to<br />delete this location?
                </h3>
                <div className="flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-4 bg-[#BDBDBD] hover:bg-[#a6a6a6] text-white rounded-lg font-bold transition-all"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-4 bg-[#CE1D35] hover:bg-[#b0182d] text-white rounded-lg font-bold transition-all"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

const EditLocationModal = ({ isOpen, onClose, location }: { isOpen: boolean, onClose: () => void, location: LocationData | null }) => {
    if (!isOpen || !location) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative bg-white rounded-[25px] p-8 lg:p-10 shadow-2xl max-w-[550px] w-full animate-in zoom-in duration-300">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[24px] font-bold text-[#1B254B]">{location.country}</h2>
                    <button onClick={onClose} className="text-[#1B254B] hover:bg-gray-50 p-1 rounded-md transition-all">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Country Code</label>
                        <input
                            type="text"
                            defaultValue={location.countryCode}
                            placeholder="Enter country code"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Country Name</label>
                        <input
                            type="text"
                            defaultValue={location.country}
                            placeholder="Enter country name"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Phone Code</label>
                        <input
                            type="text"
                            defaultValue={location.phoneCode}
                            placeholder="Enter phone code"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1B254B]">Status</label>
                        <div className="relative">
                            <select
                                defaultValue={location.isActive ? "active" : "inactive"}
                                className="w-full appearance-none px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm text-[#1B254B] focus:border-[#4318FF] outline-none transition-all cursor-pointer"
                            >
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
                    <button onClick={onClose} className="w-full py-5 bg-[#0D062D] hover:bg-[#1a0c5a] text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#0D062D]/20">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

const ActionDropdown = ({ onEdit, onState, onDelete }: { onEdit: () => void, onState: () => void, onDelete: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative flex justify-center" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1B254B] hover:text-[#4318FF] transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
                <MoreVertical size={20} />
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-[#F4F7FE] rounded-[15px] shadow-2xl z-50 py-3 px-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <button
                        onClick={() => { onEdit(); setIsOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#11047A] hover:bg-gray-50 rounded-lg transition-all"
                    >
                        <Edit3 size={18} /> Edit
                    </button>
                    <button
                        onClick={() => { onState(); setIsOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#11047A] hover:bg-gray-50 rounded-lg transition-all"
                    >
                        <ArrowUpRight size={18} /> States
                    </button>
                    <div className="h-px bg-[#F4F7FE] my-1 mx-2" />
                    <button
                        onClick={() => { onDelete(); setIsOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#EE5D50] hover:bg-gray-50 rounded-lg transition-all"
                    >
                        <Trash2 size={18} /> Delete
                    </button>
                </div>
            )}
        </div>
    );
};

const LocationTable = () => {
    const router = useRouter();
    const [locations, setLocations] = useState<LocationData[]>(initialLocations);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

    const handleToggle = (id: string) => {
        setLocations(prev =>
            prev.map(loc => (loc.id === id ? { ...loc, isActive: !loc.isActive } : loc))
        );
    };

    return (
        <div className="w-full bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE] mt-6">
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => setIsDeleteModalOpen(false)}
            />
            <EditLocationModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                location={selectedLocation}
            />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-xl font-bold text-[#1B254B]">Countries</h3>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[#707EAE]">Show</span>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B]">
                        8 <ChevronDown size={16} className="text-[#A3AED0]" />
                    </button>
                    <span className="text-sm font-medium text-[#707EAE]">Entries</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#A3AED0]">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search country..."
                        className="w-full pl-12 pr-4 py-4 bg-[#F4F7FE]/30 border border-transparent rounded-xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                    />
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B]">
                        All Status <ChevronDown size={16} className="text-[#A3AED0]" />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#F4F7FE]">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-[#F4F7FE]/50">
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden md:table-cell">Country Code</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Country</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden lg:table-cell">Phone Code</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden md:table-cell">Sync Date</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Status</th>
                            <th className="p-4 text-sm font-bold text-[#1B254B] text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F4F7FE]">
                        {locations.map((loc) => (
                            <tr key={loc.id} className="hover:bg-[#F4F7FE]/30 transition-colors">
                                <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden md:table-cell">{loc.countryCode}</td>
                                <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center">{loc.country}</td>
                                <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden lg:table-cell">{loc.phoneCode}</td>
                                <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden md:table-cell">{loc.syncDate}</td>
                                <td className="p-6 border-r border-[#F4F7FE] text-center">
                                    <ToggleSwitch isActive={loc.isActive} onToggle={() => handleToggle(loc.id)} />
                                </td>
                                <td className="p-6">
                                    <ActionDropdown
                                        onEdit={() => {
                                            setSelectedLocation(loc);
                                            setIsEditModalOpen(true);
                                        }}
                                        onState={() => router.push("/dashboard/locations/states")}
                                        onDelete={() => setIsDeleteModalOpen(true)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-sm font-medium text-[#707EAE]">Showing 1 to 8 of 32 entries</span>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center px-4 py-2 rounded-xl border border-[#F4F7FE] text-[#707EAE] hover:bg-[#F4F7FE] transition-colors text-sm font-bold">
                        Previous
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#EE5D50] text-white font-bold shadow-sm">
                        1
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-xl text-[#1B254B] font-bold hover:bg-[#F4F7FE] transition-colors">
                        2
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 rounded-xl border border-[#F4F7FE] text-[#707EAE] hover:bg-[#F4F7FE] transition-colors text-sm font-bold">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationTable;
