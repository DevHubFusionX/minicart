import { ReactNode } from "react";

interface StatCardProps {
    title: string;
    value: string;
    icon: ReactNode;
    growth: string;
    growthText: string;
    isPositive: boolean;
    iconBgColor?: string;
    iconColor?: string;
}

const StatCard = ({
    title,
    value,
    icon,
    growth,
    growthText,
    isPositive,
    iconBgColor = "bg-[#F4F7FE]",
    iconColor = "text-[#4318FF]"
}: StatCardProps) => {
    return (
        <div className="relative flex flex-col p-6 rounded-[20px] bg-white shadow-sm border border-[#F4F7FE] h-full">
            {/* Header: Title and Icon */}
            <div className="flex justify-between items-start mb-6">
                <p className="text-sm font-medium text-[#707EAE]">
                    {title}
                </p>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
                    <span className={iconColor}>
                        {icon}
                    </span>
                </div>
            </div>

            {/* Value */}
            <div className="flex-1 flex flex-col items-start justify-center mb-6">
                <h4 className="text-[36px] font-bold text-[#1B254B] leading-tight tracking-tight">
                    {value}
                </h4>
            </div>

            {/* Separator */}
            <div className="h-px w-full bg-[#F4F7FE] -mx-6 w-[calc(100%+48px)] mb-4" />

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[13px] font-bold ${isPositive ? 'bg-[#E6F9F0] text-[#05CD99]' : 'bg-[#FFE9E9] text-[#EE5D50]'}`}>
                    {isPositive ? <span className="text-[10px]">↑</span> : <span className="text-[10px]">↓</span>}
                    {growth}
                </div>
                <span className="text-[13px] font-medium text-[#707EAE]">
                    {growthText}
                </span>
            </div>
        </div>
    );
};

export default StatCard;
