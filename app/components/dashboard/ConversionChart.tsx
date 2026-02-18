"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", Revenue: 220 },
    { name: "Feb", Revenue: 390 },
    { name: "Mar", Revenue: 270 },
    { name: "Apr", Revenue: 340 },
    { name: "May", Revenue: 90 },
    { name: "Jun", Revenue: 180 },
    { name: "Jul", Revenue: 300 },
    { name: "Aug", Revenue: 220 },
    { name: "Sep", Revenue: 370 },
    { name: "Oct", Revenue: 280 },
    { name: "Nov", Revenue: 220 },
    { name: "Dec", Revenue: 330 },
];

const ConversionChart = () => {
    return (
        <div className="w-full rounded-[20px] bg-white p-8 shadow-sm border border-gray-50 mt-6">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between">
                <h4 className="text-[24px] font-bold text-black">
                    Conversion Funnel
                </h4>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#E31A1A]"></span>
                        <span className="text-sm font-medium text-[#A3AED0]">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                        <span className="h-3 w-3 rounded-full bg-[#FCE6E6]"></span>
                        <span className="text-sm font-medium text-[#A3AED0]">Stores</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                        <span className="h-3 w-3 rounded-full bg-[#FCE6E6]"></span>
                        <span className="text-sm font-medium text-[#A3AED0]">Referrals</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                        <span className="h-3 w-3 rounded-full bg-[#FCE6E6]"></span>
                        <span className="text-sm font-medium text-[#A3AED0]">Users</span>
                    </div>
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: -20,
                            bottom: 0,
                        }}
                        barSize={12}
                    >
                        <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#E0E5F2" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#A3AED0", fontSize: "14px", fontWeight: "500" }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#A3AED0", fontSize: "14px", fontWeight: "500" }}
                            ticks={[0, 100, 200, 300, 400]}
                        />
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)" }}
                        />
                        <Bar dataKey="Revenue" fill="#E31A1A" radius={[10, 10, 10, 10]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ConversionChart;
