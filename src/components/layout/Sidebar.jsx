import React from 'react';
import {
    LayoutGrid,
    Users,
    CircleUser,
    FileText,
    LogOut,
    CalendarCheck,
    IndianRupee,
    Coins
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: LayoutGrid, active: true },
        { name: 'Employees', icon: Users, active: false },
        { name: 'Clients', icon: CircleUser, active: false },
        { name: 'Projects', icon: FileText, active: false },
        { name: 'Leave', icon: LogOut, active: false },
        { name: 'Attendance', icon: CalendarCheck, active: false },
        { name: 'Payroll', icon: IndianRupee, active: false },
        { name: 'Revenue', icon: Coins, active: false },
    ];

    return (
        <>
            {/* Mobile Navigation */}
            <nav className="sticky top-[95px] z-40 bg-white border-b border-gray-200 overflow-x-auto py-3 px-4 flex gap-3 md:hidden w-full whitespace-nowrap">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className={`
                            flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-colors shrink-0
                            ${item.active
                                ? 'bg-white border border-gray-200 shadow-sm text-gray-900'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                        `}
                    >
                        <item.icon className={`w-4 h-4 ${item.active ? 'text-gray-900' : 'text-gray-500'}`} />
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>

            {/* Desktop Sidebar */}
            <aside className="w-[230px] bg-white border-r border-gray-200 h-[calc(100vh-95px)] sticky top-[95px] overflow-y-auto py-6 px-4 hidden md:block">
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className={`
                                flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors
                                ${item.active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'hover:bg-gray-50 hover:text-gray-900'}
                            `}
                        >
                            <item.icon
                                className={`w-5 h-5`}
                                strokeWidth={2}
                            />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
