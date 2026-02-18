"use client";

import Link from "next/link";
import { ArrowRight, LayoutDashboard, Rocket, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#1B254B] selection:bg-[#4318FF]/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-[#E0E5F2] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-[#4318FF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#4318FF]/20">
              <Rocket size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">MiniCart</span>
          </div>
          <Link
            href="/dashboard"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-[#4318FF] hover:opacity-80 transition-all"
          >
            Launch Dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#4318FF] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#05CD99] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E0E5F2] text-xs font-bold text-[#4318FF] mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#05CD99] animate-pulse" />
            New Version 2.0 is Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1B254B] mb-6 leading-[1.1]">
            Manage Your Business <br />
            <span className="text-[#4318FF]">With Absolute Precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A3AED0] max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate digital control center for modern commerce. Unified insights, smart management, and premium performance for your entire digital ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-5 bg-[#4318FF] hover:bg-[#3311CC] text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-[#4318FF]/20 flex items-center justify-center gap-2"
            >
              <LayoutDashboard size={20} />
              Open Dashboard
            </Link>
            <Link
              href="https://github.com/DevHubFusionX/minicart"
              target="_blank"
              className="w-full sm:w-auto px-8 py-5 bg-white border border-[#E0E5F2] text-[#1B254B] hover:bg-gray-50 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-[#4318FF]" />,
              title: "Lightning Fast",
              desc: "Optimized for speed. Every interaction feels instantaneous and smooth."
            },
            {
              icon: <ShieldCheck className="text-[#05CD99]" />,
              title: "Secure by Design",
              desc: "Your data is encrypted and protected with industry-leading standards."
            },
            {
              icon: <LayoutDashboard className="text-[#FFB547]" />,
              title: "Smart Insights",
              desc: "Get automated reports and actionable insights to grow your business."
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[30px] border border-[#F4F7FE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-[#F7F9FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B254B] mb-3">{feature.title}</h3>
              <p className="text-[#A3AED0] leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E0E5F2] py-12 px-6 text-center">
        <p className="text-[#A3AED0] text-sm font-medium">
          © 2026 MiniCart Pro. Made by <span className="text-[#1B254B] font-bold">DevhubFusionX</span>
        </p>
      </footer>
    </div>
  );
}
