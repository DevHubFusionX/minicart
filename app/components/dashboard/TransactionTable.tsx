"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, MoreVertical, ChevronDown, Check, Eye, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Transaction {
    id: string;
    type: string;
    store: string;
    country: string;
    value: string;
    status: "Completed" | "Pending" | "Refunded" | "Canceled";
}

const transactions: Transaction[] = [
    { id: "1", type: "Subscription", store: "Luisa Via Roma", country: "Kuwait", value: "$16,500.00", status: "Completed" },
    { id: "2", type: "Referral", store: "Revolve", country: "Kazakhstan", value: "$1,878.50", status: "Pending" },
    { id: "3", type: "Subscription", store: "Marks and Spencer", country: "Korea, South", value: "$102.00", status: "Refunded" },
    { id: "4", type: "Subscription", store: "MyTheresa", country: "Indonesia", value: "$15,000,000.00", status: "Canceled" },
    { id: "5", type: "Referral", store: "Coggles", country: "Italy", value: "$96.00", status: "Completed" },
    { id: "6", type: "Referral", store: "Amazon Fashion", country: "Japan", value: "$349.00", status: "Completed" },
    { id: "7", type: "Subscription", store: "Boohoo", country: "Honduras", value: "$680.00", status: "Completed" },
    { id: "8", type: "Subscription", store: "Rag and Bone", country: "Haiti", value: "$120,000.00", status: "Completed" },
];

const getStatusStyles = (status: Transaction["status"]) => {
    switch (status) {
        case "Completed":
            return "bg-[#E6F9F0] text-[#05CD99]";
        case "Pending":
            return "bg-[#F4F7FE] text-[#A3AED0]";
        case "Refunded":
            return "bg-[#FFF4E5] text-[#FFA800]";
        case "Canceled":
            return "bg-[#FFE9E9] text-[#EE5D50]";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

const DeleteModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={onClose} />
            <div className="relative bg-white rounded-[25px] p-10 shadow-2xl max-w-[400px] w-full text-center animate-in zoom-in duration-300">
                <h3 className="text-[20px] font-bold text-[#1B254B] mb-10 leading-relaxed">
                    Are you sure you want to<br />delete this user?
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

const CustomDropdown = ({ label, options, selected, onSelect }: { label: string, options: string[], selected: string, onSelect: (val: string) => void }) => {
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
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B] min-w-[160px] justify-between"
            >
                {selected} <ChevronDown size={16} className={`text-[#A3AED0] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#F4F7FE] rounded-xl shadow-xl z-50 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            onClick={() => { onSelect(opt); setIsOpen(false); }}
                            className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-all ${selected === opt ? 'bg-[#FFF4F5] text-[#1B254B]' : 'text-[#1B254B] hover:bg-gray-50'}`}
                        >
                            <span className="font-medium">{opt}</span>
                            {selected === opt && <Check size={16} className="text-[#1B254B]" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ActionDropdown = ({ onView, onDelete }: { onView: () => void, onDelete: () => void }) => {
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
                className="text-[#1B254B] hover:text-[#4318FF] transition-colors p-2"
            >
                <MoreVertical size={20} />
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-[#F4F7FE] rounded-[15px] shadow-xl z-50 py-3 px-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <button
                        onClick={() => { onView(); setIsOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-[#11047A] hover:bg-gray-50 rounded-lg transition-all"
                    >
                        <Eye size={18} /> View More
                    </button>
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

const TransactionTable = () => {
    const router = useRouter();
    const [selectedStatus, setSelectedStatus] = useState("All Status");
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleSelectAll = () => {
        if (selectedIds.length === transactions.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(transactions.map(t => t.id));
        }
    };

    const toggleSelectOne = (id: string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    return (
        <div className="w-full bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE] mt-6">
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => setIsDeleteModalOpen(false)}
            />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-xl font-bold text-[#1B254B]">Resent Transactions</h3>
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
                        placeholder="Search transaction..."
                        className="w-full pl-12 pr-4 py-4 bg-[#F4F7FE]/30 border border-transparent rounded-xl text-sm focus:border-[#4318FF] outline-none transition-all placeholder:text-[#A3AED0]"
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    <CustomDropdown
                        label="Status"
                        options={["All Status", "Completed", "Pending", "Refunded", "Canceled"]}
                        selected={selectedStatus}
                        onSelect={setSelectedStatus}
                    />
                    <CustomDropdown
                        label="Type"
                        options={["All Types", "Subscriptions", "Referrals"]}
                        selected={selectedType}
                        onSelect={setSelectedType}
                    />
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#F4F7FE]">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-[#F4F7FE]/50">
                            <th className="p-4 border-r border-[#F4F7FE] w-14">
                                <div
                                    onClick={toggleSelectAll}
                                    className={`h-5 w-5 rounded-md border flex items-center justify-center cursor-pointer transition-all ${selectedIds.length === transactions.length ? 'bg-[#4318FF] border-[#4318FF]' : 'bg-white border-gray-300 hover:border-[#4318FF]'}`}
                                >
                                    {selectedIds.length === transactions.length && <Check size={12} className="text-white" />}
                                </div>
                            </th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden md:table-cell">Type</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden lg:table-cell">Store</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center hidden md:table-cell">Country</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Value</th>
                            <th className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">Status</th>
                            <th className="p-4 text-sm font-bold text-[#1B254B] text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F4F7FE]">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className={`hover:bg-[#F4F7FE]/30 transition-colors ${selectedIds.includes(tx.id) ? 'bg-[#4318FF]/5' : ''}`}>
                                <td className="p-4 border-r border-[#F4F7FE]">
                                    <div
                                        onClick={() => toggleSelectOne(tx.id)}
                                        className={`h-5 w-5 rounded-md border flex items-center justify-center cursor-pointer transition-all ${selectedIds.includes(tx.id) ? 'bg-[#4318FF] border-[#4318FF]' : 'bg-white border-gray-300 hover:border-[#4318FF]'}`}
                                    >
                                        {selectedIds.includes(tx.id) && <Check size={12} className="text-white" />}
                                    </div>
                                </td>
                                <td className="p-4 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden md:table-cell">{tx.type}</td>
                                <td className="p-4 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden lg:table-cell">{tx.store}</td>
                                <td className="p-4 border-r border-[#F4F7FE] text-sm font-medium text-[#1B254B] text-center hidden md:table-cell">{tx.country}</td>
                                <td className="p-4 border-r border-[#F4F7FE] text-sm font-bold text-[#1B254B] text-center">{tx.value}</td>
                                <td className="p-4 border-r border-[#F4F7FE] text-center">
                                    <span className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-[12px] font-bold ${getStatusStyles(tx.status)}`}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <ActionDropdown
                                        onView={() => router.push("/dashboard/revenue/details")}
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

export default TransactionTable;
