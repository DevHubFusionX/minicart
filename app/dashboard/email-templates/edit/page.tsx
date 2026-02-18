"use client";

import React from "react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Email Templates</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function EmailTemplateEdit() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-8 max-w-[900px] mx-auto">
                <h1 className="text-[34px] font-bold text-[#1B254B]">Email Templates</h1>
                <Breadcrumbs />
            </div>

            <div className="max-w-[900px] mx-auto bg-white rounded-[15px] p-10 shadow-sm border border-[#E3E8FF]">
                <div className="max-w-[750px] mx-auto py-4">
                    <h2 className="text-[22px] font-bold text-[#1B254B] mb-10">1. Welcome Email Template</h2>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-base font-bold text-[#1B254B]">Title</label>
                            <input
                                type="text"
                                defaultValue="Welcome"
                                className="w-full px-5 py-5 border border-[#E3E8FF] rounded-[12px] text-base font-medium text-[#707EAE] outline-none focus:border-[#4318FF] transition-all placeholder:text-[#A3AED0]"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-base font-bold text-[#1B254B]">Message</label>
                            <textarea
                                rows={10}
                                className="w-full p-6 border border-[#E3E8FF] rounded-[12px] text-base font-medium text-[#707EAE] outline-none focus:border-[#4318FF] transition-all resize-none leading-relaxed"
                                defaultValue={`Dear (First name),\n\nLorem ipsum dolor sit amet consectetur. Nunc auctor cras purus quis ullamcorper auctor dapibus pellentesque eu. Euismod in quam metus volutpat eget proin nisl volutpat eget. Mattis dui massa faucibus aliquet. Scelerisque suspendisse sed diam ac nulla. Etiam libero est sed pulvinar ullamcorper sit.`}
                            />
                        </div>

                        <div className="flex justify-start pt-4">
                            <button className="bg-[#CE1D35] hover:bg-[#b0182d] text-white px-8 py-3.5 rounded-[12px] font-bold text-base transition-all shadow-lg shadow-[#CE1D35]/20">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
