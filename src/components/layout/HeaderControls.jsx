import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../Button';

const HeaderControls = ({ onMonthly, onYearly, onExport }) => {
    return (
        <div className="flex items-center gap-3">
            <Button
                variant="outline"
                onClick={onMonthly}
                className="bg-white border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50 flex items-center justify-between min-w-[100px]"
            >
                <span>Monthly</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </Button>

            <Button
                variant="outline"
                onClick={onYearly}
                className="bg-white border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50 flex items-center justify-between min-w-[90px]"
            >
                <span>Yearly</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </Button>

            <Button
                variant="custom"
                onClick={onExport}
                className="bg-[#1A1A1A] hover:bg-black text-white flex items-center gap-2 shadow-md rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M3.5 10.5C3.5 12.3565 4.2375 14.137 5.55025 15.4497C6.86301 16.7625 8.64348 17.5 10.5 17.5C12.3565 17.5 14.137 16.7625 15.4497 15.4497C16.7625 14.137 17.5 12.3565 17.5 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M10.5 12.25V3.5M10.5 3.5L13.125 6.125M10.5 3.5L7.875 6.125" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Export</span>
            </Button>
        </div>
    );
};

export default HeaderControls;
