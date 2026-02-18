"use client";

import React from "react";
import { ChevronDown, User, Briefcase, Mail, Phone, Calendar, Users, Shield, Eye, EyeOff } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Profile Settings</span>
                </div>
            </li>
        </ol>
    </nav>
);

const DetailItem = ({ icon: Icon, label, value, subValue }: { icon: any; label: string; value: string; subValue?: string }) => (
    <div className="flex items-center gap-4 p-4 border border-[#F4F7FE] rounded-xl mb-3 last:mb-0">
        <div className="h-10 w-10 flex items-center justify-center border border-[#F4F7FE] rounded-lg text-[#11047A]">
            <Icon size={20} />
        </div>
        <div className="flex-1">
            <p className="text-xs font-medium text-[#A3AED0]">{label}</p>
            <p className="text-sm font-bold text-[#1B254B]">{value}</p>
            {subValue && <p className="text-[10px] text-[#A3AED0]">{subValue}</p>}
        </div>
    </div>
);

const Toggle = ({ enabled }: { enabled: boolean }) => (
    <div className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${enabled ? 'bg-[#4318FF]' : 'bg-[#E0E5F2]'}`}>
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${enabled ? 'left-6' : 'left-1'}`} />
    </div>
);

export default function ProfileSettings() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Profile Settings</h1>
                <Breadcrumbs />
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-[#F4F7FE]">
                <h2 className="text-2xl font-bold text-[#1B254B] mb-10 pb-4 border-b border-[#F4F7FE]">
                    My Profile | <span className="text-[#11047A]">Jane Austin</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Sidebar */}
                    <div className="lg:w-[350px] flex flex-col gap-6">
                        {/* Profile Picture */}
                        <div className="bg-[#F4F7FE]/30 p-8 rounded-2xl flex flex-col items-center gap-4 border border-[#F4F7FE]">
                            <div className="h-24 w-24 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-[#1B254B] mb-1">Profile Picture</p>
                                <p className="text-[10px] text-[#A3AED0] mb-4">JPG, GIF or PNG. Max size 1MB</p>
                                <button className="bg-[#CE192F] hover:bg-[#b01526] text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all">
                                    <span className="text-lg">+</span> Upload Picture
                                </button>
                            </div>
                        </div>

                        {/* Details List */}
                        <div>
                            <h3 className="text-sm font-bold text-[#11047A] mb-4">Account Details</h3>
                            <div className="space-y-4">
                                <DetailItem icon={User} label="User ID" value="#32994" />
                                <DetailItem icon={Briefcase} label="Position" value="Admin" />
                                <DetailItem icon={Mail} label="Email Address" value="trungkien.spktnd@gmail.com" />
                                <DetailItem icon={Phone} label="Phone Number" value="07023859914" />
                                <DetailItem icon={Calendar} label="Age" value="Oct 03, 1976" />
                                <DetailItem icon={Users} label="Gender" value="Female" />
                            </div>
                        </div>

                        {/* Status Controls */}
                        <div className="space-y-6 pt-6 border-t border-[#F4F7FE]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-[#11047A]">Account Status</p>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#05CD99]/10 text-[#05CD99] rounded-lg text-[10px] font-bold mt-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#05CD99]" /> Active
                                    </span>
                                </div>
                                <button className="bg-[#CE192F] text-white px-4 py-2 rounded-xl text-xs font-bold">Change</button>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-[#11047A]">Admin Status</p>
                                <Toggle enabled={true} />
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-[#11047A]">Email Verification</p>
                                <Toggle enabled={true} />
                            </div>
                        </div>
                    </div>

                    {/* Right Forms */}
                    <div className="flex-1 flex flex-col gap-10">
                        {/* Account Details Form */}
                        <div className="bg-white rounded-[20px] p-8 border border-[#F4F7FE]">
                            <h3 className="text-sm font-bold text-[#11047A] mb-8">Account Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">First Name</label>
                                    <input type="text" defaultValue="Jane" className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] outline-none focus:border-[#4318FF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Last Name</label>
                                    <input type="text" defaultValue="Austin" className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] outline-none focus:border-[#4318FF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Email Address</label>
                                    <input type="email" defaultValue="trungkien.spktnd@gmail.com" className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] outline-none focus:border-[#4318FF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Phone Number</label>
                                    <input type="text" defaultValue="07023859914" className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] outline-none focus:border-[#4318FF] transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                    <label className="text-xs font-medium text-[#A3AED0]">Address</label>
                                    <input type="text" defaultValue="775 Rolling Green Rd." className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] outline-none focus:border-[#4318FF] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Country</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                            <option>Nigeria</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Select State</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                            <option>Rivers</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Select City</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                            <option>Port-Harcourt</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Select Gender</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] lg:pl-10 appearance-none outline-none focus:border-[#4318FF] transition-all">
                                            <option>Female</option>
                                        </select>
                                        <Shield className="absolute left-5 top-1/2 -translate-y-1/2 text-[#11047A] hidden lg:block" size={18} />
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Birthday</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 border border-[#F4F7FE] rounded-xl text-sm font-bold text-[#1B254B] appearance-none outline-none focus:border-[#4318FF] transition-all">
                                            <option>Oct 03, 1976</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="px-6 py-3 border border-[#CE192F] text-[#CE192F] rounded-xl text-sm font-bold hover:bg-[#CE192F]/5 transition-all">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Password Form */}
                        <div className="bg-white rounded-[20px] p-8 border border-[#F4F7FE]">
                            <h3 className="text-sm font-bold text-[#11047A] mb-8">Password Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Current Password</label>
                                    <div className="relative">
                                        <input type="password" defaultValue="1234567890" className="w-full px-5 py-4 bg-[#F4F7FE]/30 border border-transparent focus:border-[#4318FF] rounded-xl text-sm font-bold text-[#1B254B] outline-none transition-all" />
                                        <EyeOff className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-[#A3AED0]">Change Password</label>
                                    <div className="relative">
                                        <input type="password" defaultValue="1234567890" className="w-full px-5 py-4 bg-[#F4F7FE]/30 border border-transparent focus:border-[#4318FF] rounded-xl text-sm font-bold text-[#1B254B] outline-none transition-all" />
                                        <EyeOff className="absolute right-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="px-6 py-3 border border-[#CE192F] text-[#CE192F] rounded-xl text-sm font-bold hover:bg-[#CE192F]/5 transition-all">
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Save Button */}
                <div className="mt-12 flex justify-center">
                    <button className="w-full max-w-[600px] py-4 bg-[#CE192F] hover:bg-[#b01526] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#CE192F]/20">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
