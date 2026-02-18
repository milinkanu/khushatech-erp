import React from 'react';
import SectionHeading from '../SectionHeading';
import { Users, Palette, MonitorSmartphone, Server } from 'lucide-react';
import StatCard from './StatCard';

const EmployeeStats = () => {
    const stats = [
        {
            label: 'Total Employee',
            count: '10+',
            icon: <Users className="w-5 h-5 text-rose-600" />,
            iconBg: 'bg-rose-100',
        },
        {
            label: 'Designers',
            count: '01',
            icon: <Palette className="w-5 h-5 text-cyan-600" />,
            iconBg: 'bg-cyan-100',
        },
        {
            label: 'Frontend Developers',
            count: '02',
            icon: <MonitorSmartphone className="w-5 h-5 text-violet-600" />,
            iconBg: 'bg-violet-100',
        },
        {
            label: 'Backend Developers',
            count: '03',
            icon: <Server className="w-5 h-5 text-amber-600" />,
            iconBg: 'bg-amber-100',
        }
    ];

    return (
        <div className="w-full">
            <SectionHeading>Employees</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        label={stat.label}
                        count={stat.count}
                        icon={stat.icon}
                        iconBg={stat.iconBg}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmployeeStats;
