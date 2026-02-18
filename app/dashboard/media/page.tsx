"use client";

import React from "react";
import { ChevronDown, Plus, Search, RotateCcw, MoreVertical } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Media</span>
                </div>
            </li>
        </ol>
    </nav>
);

const mediaItems = [
    { id: 1, name: "Image.pdf", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 2, name: "image.pdf", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 3, name: "image.pdf", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 4, name: "image.pdf", url: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 5, name: "image.pdf", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 6, name: "image.pdf", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 7, name: "image.pdf", url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 8, name: "image.pdf", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 9, name: "image.pdf", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 10, name: "image.pdf", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 11, name: "image.pdf", url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
    { id: 12, name: "image.pdf", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=140&auto=format&fit=crop", size: "6.82 KB", time: "1m" },
];

export default function MediaLibrary() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-[34px] font-bold text-[#1B254B]">Media Library</h1>
                    <Breadcrumbs />
                </div>
                <button className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#CE1D35]/20">
                    <Plus size={20} />
                    Upload
                </button>
            </div>

            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#F4F7FE]">
                {/* Search and Entry bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-[#A3AED0]">Show</span>
                        <div className="relative">
                            <select className="pl-4 pr-10 py-2 border border-[#F4F7FE] rounded-lg text-sm font-bold text-[#1B254B] bg-white appearance-none outline-none">
                                <option>12</option>
                                <option>24</option>
                                <option>48</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={16} />
                        </div>
                        <span className="text-sm text-[#A3AED0]">Entries</span>
                    </div>

                    <div className="flex items-center gap-3 flex-1 md:max-w-[400px]">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                            <input
                                type="text"
                                placeholder="Search Library..."
                                className="w-full pl-12 pr-4 py-3 bg-[#F4F7FE]/50 border border-transparent rounded-xl text-sm outline-none focus:border-[#4318FF] transition-all"
                            />
                        </div>
                        <button className="h-[48px] w-[48px] flex items-center justify-center border border-[#F4F7FE] rounded-xl text-[#A3AED0] hover:bg-gray-50 transition-all">
                            <RotateCcw size={20} />
                        </button>
                    </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mediaItems.map((item) => (
                        <div key={item.id} className="bg-[#F4F7FE]/30 rounded-2xl overflow-hidden border border-[#F4F7FE] group hover:shadow-md transition-all">
                            <div className="relative aspect-[16/11]">
                                <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                                <button className="absolute top-2 right-2 h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1B254B] opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                                    <MoreVertical size={16} />
                                </button>
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-bold text-[#1B254B] truncate mb-1">Name of {item.name}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-[#A3AED0]">Uploaded: {item.time}</span>
                                    <span className="text-[10px] text-[#A3AED0]">{item.size}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
                    <p className="text-sm font-medium text-[#A3AED0]">
                        Showing 1 to 12 of 32 entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm font-bold text-[#A3AED0] border border-[#E0E5F2] rounded-lg hover:bg-gray-50 transition-all">
                            Previous
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center bg-[#CE1D35] text-white rounded-lg font-bold text-sm shadow-md shadow-[#CE1D35]/20">
                            1
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center text-[#1B254B] hover:bg-gray-50 rounded-lg font-bold text-sm">
                            2
                        </button>
                        <button className="px-4 py-2 text-sm font-bold text-[#1B254B] border border-[#E0E5F2] rounded-lg hover:bg-gray-50 transition-all">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
