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
                    <span className="text-sm font-medium text-[#EE5D50]">Payment Gateway</span>
                </div>
            </li>
        </ol>
    </nav>
);

const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <div
        onClick={onChange}
        className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${enabled ? 'bg-[#05CD99]' : 'bg-[#E0E5F2]'}`}
    >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${enabled ? 'left-7' : 'left-1'}`} />
    </div>
);

const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-[#1B254B]">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B] outline-none focus:border-[#4318FF] transition-all placeholder:text-[#A3AED0]"
        />
    </div>
);

export default function PaymentGateway() {
    const [paystackEnabled, setPaystackEnabled] = useState(true);
    const [flutterwaveEnabled, setFlutterwaveEnabled] = useState(true);

    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Payment Gateway</h1>
                <Breadcrumbs />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Paystack Settings */}
                <div className="bg-white rounded-[20px] p-8 border border-[#F4F7FE] shadow-sm">
                    <h2 className="text-lg font-bold text-[#1B254B] mb-8">Paystack Settings</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 border border-[#F4F7FE] rounded-xl mb-6">
                            <span className="text-sm font-medium text-[#A3AED0]">Enable</span>
                            <Toggle enabled={paystackEnabled} onChange={() => setPaystackEnabled(!paystackEnabled)} />
                        </div>

                        <InputField label="Test Public Key" placeholder="Enter" />
                        <InputField label="Test Secret Key" placeholder="Enter" />
                        <InputField label="Live Public Key" placeholder="Enter" />
                        <InputField label="Live Secret Key" placeholder="Enter" />
                        <InputField label="Merchant Email" placeholder="Enter" />

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#1B254B]">Paystack Mode</label>
                            <div className="relative">
                                <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                    <option>Select</option>
                                    <option>Test</option>
                                    <option>Live</option>
                                </select>
                                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-md shadow-[#CE1D35]/20">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Flutterwave Settings */}
                <div className="bg-white rounded-[20px] p-8 border border-[#F4F7FE] shadow-sm">
                    <h2 className="text-lg font-bold text-[#1B254B] mb-8">Flutterwave Settings</h2>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 border border-[#F4F7FE] rounded-xl mb-6">
                            <span className="text-sm font-medium text-[#A3AED0]">Enable</span>
                            <Toggle enabled={flutterwaveEnabled} onChange={() => setFlutterwaveEnabled(!flutterwaveEnabled)} />
                        </div>

                        <InputField label="Test Public Key" placeholder="Enter" />
                        <InputField label="Test Secret Key" placeholder="Enter" />
                        <InputField label="Test Encryption Key" placeholder="Enter" />
                        <InputField label="Live Public Key" placeholder="Enter" />
                        <InputField label="Live Secret Key" placeholder="Enter" />
                        <InputField label="Live Encryption Key" placeholder="Enter" />
                        <InputField label="Merchant Email" placeholder="Enter" />

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#1B254B]">Flutterwave Mode</label>
                            <div className="relative">
                                <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-medium text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                    <option>Select</option>
                                    <option>Test</option>
                                    <option>Live</option>
                                </select>
                                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-md shadow-[#CE1D35]/20">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
