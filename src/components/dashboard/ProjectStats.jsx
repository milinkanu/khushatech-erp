import React from 'react';
import SectionHeading from '../SectionHeading';
import { Briefcase, Smartphone, Globe, LayoutGrid } from 'lucide-react';

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
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-[2.5rem] p-6 flex flex-row items-center gap-4 hover:border-gray-300 transition-colors duration-300 h-full"
                    >
                        <div className={`p-4 rounded-full ${stat.iconBg} shrink-0`}>
                            {React.cloneElement(stat.icon, { className: "w-6 h-6 " + stat.icon.props.className.split(' ').pop() })}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</h3>
                            <p className="text-sm text-gray-500 font-medium leading-tight">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectStats;
