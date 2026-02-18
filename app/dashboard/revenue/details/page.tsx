"use client";

import React from "react";
import { ChevronLeft, RefreshCcw, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransactionDetails() {
    const router = useRouter();

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[24px] font-bold text-[#1B254B] hover:text-[#4318FF] transition-all"
                >
                    <ChevronLeft size={28} /> Back
                </button>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-[#C68A00] hover:bg-[#a67400] text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-[#C68A00]/20">
                        <RefreshCcw size={18} /> Refund
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#1B254B] hover:bg-gray-50 text-[#1B254B] rounded-xl font-bold text-sm transition-all">
                        <Download size={18} /> Download Receipt
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F4F7FE] overflow-hidden">
                {/* Header Section */}
                <div className="p-8 border-b border-[#F4F7FE] flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#11047A]">Transaction Details</h2>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E6F9F0] text-[#05CD99] rounded-full text-sm font-bold">
                        Completed <ChevronDown size={14} />
                    </span>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 mb-16 px-4">
                        <div className="flex justify-between items-center border-b border-[#F4F7FE] pb-4 md:border-b-0 md:pb-0">
                            <span className="text-base font-medium text-[#A3AED0]">Transaction Type:</span>
                            <span className="text-base font-bold text-[#1B254B]">Subscription</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#F4F7FE] pb-4 md:border-b-0 md:pb-0">
                            <span className="text-base font-medium text-[#A3AED0]">Amount:</span>
                            <span className="text-base font-bold text-[#1B254B]">$16,500.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#F4F7FE] pb-4 md:border-b-0 md:pb-0">
                            <span className="text-base font-medium text-[#A3AED0]">Country:</span>
                            <span className="text-base font-bold text-[#1B254B]">Kuwait</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-base font-medium text-[#A3AED0]">Store:</span>
                            <span className="text-base font-bold text-[#1B254B]">Luisa Via Roma</span>
                        </div>
                    </div>

                    <div className="px-4">
                        <a href="#" className="text-base font-bold text-[#EE5D50] hover:underline underline-offset-4">
                            View Store
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ChevronDown = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);
