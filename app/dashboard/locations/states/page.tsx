"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, Search, ChevronDown, MoreVertical, Edit3, ArrowUpRight, Trash2, Check, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface StateData {
    id: string;
    name: string;
    syncDate: string;
    isActive: boolean;
}

const initialStates: StateData[] = [
    { id: "1", name: "Rivers", syncDate: "8 Sep, 2020", isActive: true },
    { id: "2", name: "Bayelsa", syncDate: "17 Oct, 2020", isActive: false },
    { id: "3", name: "Enugu", syncDate: "21 Sep, 2020", isActive: false },
    { id: "4", name: "Abia", syncDate: "22 Oct, 2020", isActive: true },
    { id: "5", name: "Yobe", syncDate: "17 Oct, 2020", isActive: true },
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
                    Are you sure you want to<br />delete this state?
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

const EditStateModal = ({ isOpen, onClose, state }: { isOpen: boolean, onClose: () => void, state: StateData | null }) => {
    if (!isOpen || !state) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative bg-white rounded-[25px] p-10 shadow-2xl max-w-[500px] w-full animate-in zoom-in duration-300">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[24px] font-bold text-[#1B254B]">Nigeria</h2>
                    <button onClick={onClose} className="text-[#1B254B] hover:bg-gray-50 p-1 rounded-md transition-all">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-[#1B254B]">State Name</label>
                        <input
                            type="text"
                            defaultValue={state.name}
                            placeholder="Enter state name"
                            className="w-full px-5 py-4 bg-white border border-[#E0E5F2] rounded-2xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-[#1B254B]">Status</label>
                        <div className="relative">
                            <select
                                defaultValue={state.isActive ? "active" : "inactive"}
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

const ActionDropdown = ({ onEdit, onCity, onDelete }: { onEdit: () => void, onCity: () => void, onDelete: () => void }) => {
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
                        onClick={() => { onCity(); setIsOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#11047A] hover:bg-gray-50 rounded-lg transition-all"
                    >
                        <ArrowUpRight size={18} /> Cities
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

export default function States() {
    const router = useRouter();
    const [states, setStates] = useState(initialStates);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedState, setSelectedState] = useState<StateData | null>(null);

    const handleToggle = (id: string) => {
        setStates(prev =>
            prev.map(s => (s.id === id ? { ...s, isActive: !s.isActive } : s))
        );
    };

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => setIsDeleteModalOpen(false)}
            />
            <EditStateModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                state={selectedState}
            />

            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[24px] font-bold text-[#1B254B] hover:text-[#4318FF] transition-all mb-8"
            >
                <ChevronLeft size={28} /> Back
            </button>

            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-[#F4F7FE]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h2 className="text-xl font-bold text-[#1B254B]">Nigeria</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-[#707EAE]">Show</span>
                        <div className="relative">
                            <select className="appearance-none pl-4 pr-10 py-2 border border-[#E0E5F2] rounded-xl text-sm font-medium text-[#1B254B] cursor-pointer focus:outline-none focus:border-[#4318FF]">
                                <option>8</option>
                                <option>16</option>
                                <option>32</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <ChevronDown size={14} className="text-[#A3AED0]" />
                            </div>
                        </div>
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
                            placeholder="Search state..."
                            className="w-full pl-12 pr-4 py-4 bg-[#F4F7FE]/30 border border-transparent rounded-xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                        />
                    </div>
                    <div className="relative min-w-[180px]">
                        <select className="w-full appearance-none pl-6 pr-12 py-4 bg-white border border-[#E0E5F2] rounded-xl text-sm font-medium text-[#1B254B] cursor-pointer focus:outline-none focus:border-[#4318FF]">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                            <ChevronDown size={18} className="text-[#A3AED0]" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#F4F7FE]">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-[#F4F7FE]/50">
                                <th className="p-6 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">States</th>
                                <th className="p-6 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Sync Date</th>
                                <th className="p-6 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Status</th>
                                <th className="p-6 text-sm font-bold text-[#1B254B] text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F4F7FE]">
                            {states.map((state) => (
                                <tr key={state.id} className="hover:bg-[#F4F7FE]/30 transition-colors">
                                    <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center">{state.name}</td>
                                    <td className="p-6 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center">{state.syncDate}</td>
                                    <td className="p-6 border-r border-[#F4F7FE] text-center">
                                        <ToggleSwitch isActive={state.isActive} onToggle={() => handleToggle(state.id)} />
                                    </td>
                                    <td className="p-6 text-center">
                                        <ActionDropdown
                                            onEdit={() => {
                                                setSelectedState(state);
                                                setIsEditModalOpen(true);
                                            }}
                                            onCity={() => router.push("/dashboard/locations/cities")}
                                            onDelete={() => setIsDeleteModalOpen(true)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-sm font-medium text-[#707EAE]">Showing 1 to 5 of 5 entries</span>
                    <div className="flex gap-2 text-white">
                        <button className="px-5 py-2 rounded-xl bg-[#EE5D50] font-bold shadow-md shadow-[#EE5D50]/20">
                            Restart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
