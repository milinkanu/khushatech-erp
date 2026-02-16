import React from 'react';

const SectionHeading = ({ children, className = '' }) => {
    return (
        <h2 className={`text-lg font-semibold text-gray-500 mb-4 ${className}`}>
            {children}
        </h2>
    );
};

export default SectionHeading;
