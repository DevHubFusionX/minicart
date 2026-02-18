import StatCard from "../components/dashboard/StatCard";
import ConversionChart from "../components/dashboard/ConversionChart";
import {
    MdAttachMoney,
    MdOutlineShoppingCart,
    MdAssignment,
    MdPerson
} from "react-icons/md";

export default function Dashboard() {
    return (
        <div className="p-4 pt-0">
            {/* Page Header: Title and Breadcrumbs */}
            <div className="mb-8">
                <h1 className="text-[34px] font-bold text-black">
                    Dashboard
                </h1>
                <div className="flex items-center gap-1 text-sm font-medium mt-1">
                    <span className="text-black">Home</span>
                    <span className="text-gray-400"> &gt; </span>
                    <span className="text-[#EE5D50]">Dashboard</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 w-full">
                <StatCard
                    title="Total Revenue"
                    value="5,424,326"
                    icon={<MdAttachMoney className="h-6 w-6" />}
                    growth="+5%"
                    growthText="Increased from last month"
                    isPositive={true}
                    iconBgColor="bg-[#E9EDF7]"
                    iconColor="text-[#4318FF]"
                />
                <StatCard
                    title="Total Stores"
                    value="5,424,326"
                    icon={<MdOutlineShoppingCart className="h-6 w-6" />}
                    growth="+5%"
                    growthText="Increased from last month"
                    isPositive={true}
                    iconBgColor="bg-[#FFF4E5]"
                    iconColor="text-[#FFB547]"
                />
                <StatCard
                    title="Total Referrals"
                    value="5,424,326"
                    icon={<MdAssignment className="h-6 w-6" />}
                    growth="+5%"
                    growthText="Increased from last month"
                    isPositive={true}
                    iconBgColor="bg-[#F4E9FF]"
                    iconColor="text-[#B37AF3]"
                />
                <StatCard
                    title="Total Users"
                    value="5,424,326"
                    icon={<MdPerson className="h-6 w-6" />}
                    growth="+5%"
                    growthText="Decreased from last month"
                    isPositive={false}
                    iconBgColor="bg-[#E9F3FF]"
                    iconColor="text-[#4318FF]"
                />
            </div>

            {/* Chart Section */}
            <div className="mt-8">
                <ConversionChart />
            </div>
        </div>
    );
}
