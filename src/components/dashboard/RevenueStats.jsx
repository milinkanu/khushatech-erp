import React from 'react';
import SectionHeading from '../SectionHeading';
import { IndianRupee } from 'lucide-react';

const RevenueStats = () => {
    const stats = [
        {
            title: 'Total Revenue',
            amount: '7,50,000',
            icon: <IndianRupee className="w-6 h-6 text-green-600" />,
            bgColor: 'bg-[#ECFDF5]', // lighter green
            iconBg: 'bg-[#D1FAE5]',
            borderColor: 'border-[#6EE7B7]' // darker border
        },
        {
            title: 'Advance Received',
            amount: '1,50,000',
            icon: <IndianRupee className="w-6 h-6 text-cyan-600" />,
            bgColor: 'bg-[#ECFEFF]', // lighter cyan
            iconBg: 'bg-[#CFFAFE]',
            borderColor: 'border-[#67E8F9]'
        },
        {
            title: 'Pending',
            amount: '50,000',
            icon: <IndianRupee className="w-6 h-6 text-red-600" />,
            bgColor: 'bg-[#FEF2F2]', // lighter red
            iconBg: 'bg-[#FEE2E2]',
            borderColor: 'border-[#FCA5A5]'
        }
    ];

    return (
        <div className="w-full">
            <SectionHeading>Revenue</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`${stat.bgColor} border ${stat.borderColor} rounded-2xl p-6 flex items-center space-x-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]`}
                    >
                        <div className={`p-4 rounded-full ${stat.iconBg} shrink-0`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">₹ {stat.amount}</h3>
                            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueStats;
