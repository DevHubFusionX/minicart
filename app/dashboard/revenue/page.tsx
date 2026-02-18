"use client";

import React from "react";
import StatCard from "@/app/components/dashboard/StatCard";
import TransactionTable from "@/app/components/dashboard/TransactionTable";
import { CalendarRange, DollarSign, HandCoins } from "lucide-react";

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
                    <span className="text-sm font-medium text-[#EE5D50]">Revenue</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function Revenue() {
    return (
        <div className="p-4 md:p-6 lg:p-10 bg-[#F7F9FF] min-h-screen">
            <div className="mb-6">
                <h1 className="text-[34px] font-bold text-[#1B254B]">All Revenue</h1>
                <Breadcrumbs />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <StatCard
                    title="Total Subscriptions"
                    value="5,424,326"
                    icon={<CalendarRange size={24} />}
                    growth="+5%"
                    growthText="Increased from last month"
                    isPositive={true}
                    iconBgColor="bg-[#E9EDFE]"
                    iconColor="text-[#4318FF]"
                />
                <StatCard
                    title="Subscription Revenue"
                    value="5,424,326"
                    icon={<DollarSign size={24} />}
                    growth="+5%"
                    growthText="Increased from last month"
                    isPositive={true}
                    iconBgColor="bg-[#FFF4E5]"
                    iconColor="text-[#FFA800]"
                />
                <StatCard
                    title="Referral Payout"
                    value="5,424,326"
                    icon={<HandCoins size={24} />}
                    growth="+5%"
                    growthText="Decreased from last month"
                    isPositive={false}
                    iconBgColor="bg-[#F4E9F9]"
                    iconColor="text-[#B233A5]"
                />
            </div>

            <TransactionTable />
        </div>
    );
}
