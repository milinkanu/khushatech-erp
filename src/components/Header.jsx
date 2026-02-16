import React, { useState } from 'react';
import HeaderControls from './HeaderControls';
import UserProfile from './UserProfile';

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
    onExport = () => console.log('Export clicked')
}) => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 flex h-20 w-full shrink-0">
            {/* Logo Section - Matches Sidebar Width */}
            <div className="w-64 flex items-center pl-6 border-r border-gray-200 shrink-0 bg-white">
                <h1 className="text-[#C7953F]" style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                }}>
                    {logoText}
                </h1>
            </div>

            {/* Main Header Content */}
            <div className="flex-1 flex items-center justify-between px-8 bg-white min-w-0">
                {/* Welcome Message */}
                <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 leading-tight truncate">
                        {welcomeMessage}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5 font-medium truncate">
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
                    <div className="h-10 w-px bg-gray-200 mx-0"></div>

                    <div className="hidden md:block pl-8">
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
