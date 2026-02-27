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

const Sidebar = ({ activeView, onNavigate, userRole }) => {
    const allMenuItems = [
        { name: 'Dashboard', icon: LayoutGrid },
        { name: 'Employees', icon: Users },
        { name: 'Clients', icon: CircleUser },
        { name: 'Projects', icon: FileText },
        { name: 'Leave', icon: LogOut },
        { name: 'Attendance', icon: CalendarCheck },
        { name: 'Payroll', icon: IndianRupee },
        { name: 'Revenue', icon: Coins },
    ];

    const employeeMenuItems = [
        { name: 'Dashboard', icon: LayoutGrid },
        { name: 'Projects', icon: FileText },
        { name: 'Leave', icon: LogOut },
        { name: 'Attendance', icon: CalendarCheck },
    ];

    const menuItems = userRole === 'CEO & Founder' ? allMenuItems : employeeMenuItems;

    return (
        <>
            {/* Mobile Navigation */}
            <nav className="sticky top-[95px] z-40 bg-white border-b border-gray-200 overflow-x-auto py-3 px-4 flex gap-3 md:hidden w-full whitespace-nowrap">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => onNavigate && onNavigate(item.name.toLowerCase())}
                        className={`
                            flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-colors shrink-0
                            ${activeView === item.name.toLowerCase()
                                ? 'bg-white border border-gray-200 shadow-sm text-gray-900'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                        `}
                    >
                        <item.icon className={`w-4 h-4 ${activeView === item.name.toLowerCase() ? 'text-gray-900' : 'text-gray-500'}`} />
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            {/* Desktop Sidebar */}
            <aside className="w-[230px] bg-white border-r border-gray-200 h-[calc(100vh-95px)] sticky top-[95px] overflow-y-auto py-6 px-4 hidden md:block">
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => onNavigate && onNavigate(item.name.toLowerCase())}
                            className={`
                                w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors
                                ${activeView === item.name.toLowerCase()
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'hover:bg-gray-50 hover:text-gray-900 text-gray-500'}
                            `}
                        >
                            <item.icon
                                className={`w-5 h-5`}
                                strokeWidth={2}
                            />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
