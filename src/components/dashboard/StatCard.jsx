import React from 'react';

const StatCard = ({ label, count, icon, iconBg }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-[2.5rem] p-6 flex flex-row items-center gap-4 hover:border-gray-300 transition-colors duration-300 h-full">
            <div className={`p-4 rounded-full ${iconBg} shrink-0`}>
                {// Extract the color class from the icon's props and apply simpler sizing
                    React.cloneElement(icon, {
                        className: `w-6 h-6 ${icon.props.className ? icon.props.className.split(' ').pop() : ''}`
                    })
                }
            </div>
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{count}</h3>
                <p className="text-sm text-gray-500 font-medium leading-tight">{label}</p>
            </div>
        </div>
    );
};

export default StatCard;
