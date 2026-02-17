import React, { useState } from 'react';
import HeaderControls from './HeaderControls';
import UserProfile from './UserProfile';
import { Menu } from 'lucide-react';

const Header = ({
    logoText = "Khushatech",
    welcomeMessage = "Welcome Khushboo Bharati!",
    currentDate = "Today is Friday, 13th Feb 2026",
    user = {
        name: "Khushboo Bharati",
        role: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    onMonthly = () => console.log('Monthly clicked'),
    onYearly = () => console.log('Yearly clicked'),
    onExport = () => console.log('Export clicked'),
    onProfileClick
}) => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 flex h-[95px] w-full shrink-0">
            {/* Logo Section - Full width on mobile with menu icon, fixed width on desktop */}
            <div className="w-full md:w-[230px] flex items-center justify-between px-6 md:pl-6 md:pr-0 md:border-r border-gray-200 shrink-0 bg-white">
                <h1 className="text-[#C7953F] font-semibold text-2xl leading-none">
                    {logoText}
                </h1>
                <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Main Header Content - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 items-center justify-between px-8 bg-white min-w-0">
                {/* Welcome Message */}
                <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 leading-tight truncate">
                        {welcomeMessage}
                    </h2>
                    <p className="text-sm text-gray-900 mt-0.5 truncate">
                        {currentDate}
                    </p>
                </div>

                {/* Right Section: Controls & User Profile */}
                <div className="flex items-center h-full">
                    <div className="pr-8">
                        <HeaderControls
                            onMonthly={onMonthly}
                            onYearly={onYearly}
                            onExport={onExport}
                        />
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-full w-px bg-gray-300 mx-0"></div>

                    <div
                        className="hidden md:block pl-8 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={onProfileClick}
                    >
                        <UserProfile
                            name={user.name}
                            role={user.role}
                            avatar={user.avatar}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
