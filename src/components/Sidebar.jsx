import React from 'react';
import { LayoutGrid, FileText } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: LayoutGrid, active: true },
        { name: 'Projects', icon: FileText, active: false },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-80px)] py-6 px-4 hidden md:block">
            <nav className="space-y-1">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className={`
                            flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors
                            ${item.active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                    >
                        <item.icon
                            className={`w-5 h-5 ${item.active ? 'text-gray-900' : 'text-gray-500'}`}
                            strokeWidth={2}
                        />
                        <span className="font-poppins">{item.name}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
