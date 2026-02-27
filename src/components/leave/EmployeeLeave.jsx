import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { ChevronDown } from 'lucide-react';

const EmployeeLeave = () => {
    const leaves = [
        {
            id: 1,
            from: '01/02/2026',
            to: '03/02/2026',
            reason: 'Reason will be here...',
            totalCount: '03',
        },
        {
            id: 2,
            from: '01/02/2026',
            to: '03/02/2026',
            reason: 'Reason will be here...',
            totalCount: '02',
        },
        {
            id: 3,
            from: '01/02/2026',
            to: '03/02/2026',
            reason: 'Reason will be here...',
            totalCount: '01',
        },
        {
            id: 4,
            from: '01/02/2026',
            to: '03/02/2026',
            reason: 'Reason will be here...',
            totalCount: '00',
        }
    ];

    return (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div>
                <h2 className="text-[28px] font-bold text-gray-900 m-0">Apply Leave</h2>
            </div>

            {/* Application Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-900">From</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="09/02/2026"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-900">To</label>
                    <div className="relative">
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all pr-10"
                            defaultValue="11/02/2026"
                        >
                            <option value="11/02/2026">11/02/2026</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Reason</label>
                <textarea
                    placeholder="Type here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-700 min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                ></textarea>
            </div>

            <div>
                <button className="bg-[#fe8b4c] hover:bg-[#f97a36] text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm w-full md:w-auto">
                    Submit
                </button>
            </div>

            {/* My Leaves Table */}
            <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-500 mb-6">My Leaves</h3>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="py-4 px-6 text-sm font-semibold text-gray-900">From</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-gray-900">To</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-gray-900 hidden md:table-cell">Reason</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-gray-900 text-center hidden md:table-cell">Total Count</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {leaves.map((leave) => (
                                    <tr key={leave.id} className="transition-colors hover:bg-gray-50/50">
                                        <td className="py-4 px-6">
                                            <div className="text-sm text-gray-500">{leave.from}</div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-sm text-gray-500">{leave.to}</div>
                                        </td>
                                        <td className="py-4 px-6 hidden md:table-cell">
                                            <div className="text-sm text-gray-500">{leave.reason}</div>
                                        </td>
                                        <td className="py-4 px-6 text-center hidden md:table-cell">
                                            <div className="text-sm text-gray-500">{leave.totalCount}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeLeave;
