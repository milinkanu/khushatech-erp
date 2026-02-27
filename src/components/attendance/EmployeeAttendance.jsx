import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Upload, ChevronDown, Clock, Pause, Power, Check } from 'lucide-react';

const EmployeeAttendance = () => {
    // Current state, you might want to manage this via props or context in a real app
    const [clockState, setClockState] = useState('clockedOut'); // 'clockedOut', 'clockedIn', 'onBreak'

    const handleClockIn = () => setClockState('clockedIn');
    const handleBreak = () => setClockState('onBreak');
    const handleClockOut = () => setClockState('clockedOut');

    const records = [
        {
            date: '01/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '02/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '03/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '04/01/2026',
            clockIn: '',
            breakTime: '',
            clockOut: '',
            type: 'leave'
        },
        {
            date: '05/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '06/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '07/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '08/01/2026',
            clockIn: '',
            breakTime: '',
            clockOut: '',
            type: 'sunday'
        },
        {
            date: '09/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
        {
            date: '10/01/2026',
            clockIn: '',
            breakTime: '',
            clockOut: '',
            type: 'holiday'
        },
        {
            date: '09/01/2026',
            clockIn: '10:00 am',
            breakTime: '1.5 Hrs',
            clockOut: '07:00 pm',
            type: 'regular'
        },
    ];

    // Card Component
    const InfoCard = ({ title, value }) => (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex-1 min-w-[200px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
        </div>
    );

    const getRowStyle = (type) => {
        switch (type) {
            case 'leave': return 'bg-gray-100/80';
            case 'sunday': return 'bg-[#4ade80] text-white';
            case 'holiday': return 'bg-[#3b82f6] text-white';
            default: return 'bg-white';
        }
    }

    const getTextColor = (type) => {
        switch (type) {
            case 'sunday':
            case 'holiday':
                return 'text-white';
            default:
                return 'text-gray-500';
        }
    }

    return (
        <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto w-full">
            {/* Header Row: Title & Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 m-0 leading-tight">
                    Employees Attendance
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" className="bg-white border-gray-200 text-gray-700 font-medium px-4 py-2 h-10 rounded-xl hover:bg-gray-50 shadow-sm">
                        Date <ChevronDown size={16} className="text-gray-400 ml-1" />
                    </Button>
                    <Button variant="dark" className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-2 h-10 rounded-xl shadow-sm flex items-center gap-2">
                        <Upload size={16} /> Export
                    </Button>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <button
                    onClick={handleClockIn}
                    className={`flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all min-w-[120px] md:min-w-[160px]
                    ${clockState === 'clockedIn'
                            ? 'bg-blue-50 border border-blue-200 text-blue-600'
                            : 'bg-[#4b8fff] text-white shadow-sm hover:bg-blue-600'}`}
                >
                    Clock In <Clock size={18} className="md:ml-1" />
                </button>

                <button
                    onClick={handleBreak}
                    className={`flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all min-w-[120px] md:min-w-[160px]
                    ${clockState === 'onBreak'
                            ? 'bg-amber-50 border border-amber-200 text-amber-600'
                            : 'bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50'}`}
                >
                    Break <Pause size={18} className="md:ml-1" />
                </button>

                <button
                    onClick={handleClockOut}
                    className={`flex flex-col md:flex-row items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all min-w-[120px] md:min-w-[160px]
                    ${clockState === 'clockedOut'
                            ? 'bg-green-50 border border-green-200 text-green-600'
                            : 'bg-[#4ade80] text-white shadow-sm hover:bg-green-500'}`}
                >
                    Clock Out <Power size={18} className="md:ml-1" />
                </button>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col md:flex-row gap-4 mb-2">
                <InfoCard title="Clock In" value="10:00 am" />
                <InfoCard title="Break / Hrs" value="1.5 Hours" />
                <InfoCard title="Clock In" value="07:00 pm" />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 px-2 mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm text-gray-600 font-medium">Leave</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                    <span className="text-sm text-gray-600 font-medium">Sunday</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-sm text-gray-600 font-medium">Holiday</span>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="py-4 px-6 text-sm font-semibold text-gray-900 rounded-tl-2xl">Date/Day</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-900">Clock In</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-900">Break</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-900 rounded-tr-2xl">Clock Out</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {records.map((record, index) => (
                                <tr key={index} className={`transition-colors hover:bg-gray-50/50 ${getRowStyle(record.type)}`}>
                                    <td className="py-4 px-6">
                                        <div className={`text-sm font-medium ${getTextColor(record.type) === 'text-white' ? 'text-white' : 'text-gray-500'}`}>
                                            {record.date}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className={`text-sm ${getTextColor(record.type)}`}>{record.clockIn}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className={`text-sm ${getTextColor(record.type)}`}>{record.breakTime}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className={`text-sm ${getTextColor(record.type)}`}>{record.clockOut}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendance;
