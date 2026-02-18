import React from 'react';
import SectionHeading from '../SectionHeading';
import { Briefcase, Smartphone, Globe, LayoutGrid } from 'lucide-react';
import StatCard from './StatCard';

const ProjectStats = () => {
    const stats = [
        {
            label: 'Total Projects',
            count: '10+',
            icon: <Briefcase className="w-5 h-5 text-rose-600" />,
            iconBg: 'bg-rose-100',
        },
        {
            label: 'Total Projects', // Note: Duplicate label as per screenshot if intended, or maybe "Ongoing"
            count: '50+',
            icon: <LayoutGrid className="w-5 h-5 text-emerald-600" />,
            iconBg: 'bg-emerald-100',
        },
        {
            label: 'Total App Projects',
            count: '12+',
            icon: <LayoutGrid className="w-5 h-5 text-indigo-600" />,
            iconBg: 'bg-indigo-100',
        },
        {
            label: 'Total Web Projects',
            count: '38+',
            icon: <Globe className="w-5 h-5 text-amber-600" />,
            iconBg: 'bg-amber-100',
        }
    ];

    return (
        <div className="w-full">
            <SectionHeading>Projects</SectionHeading>
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

export default ProjectStats;
