import React from 'react';
import { X, Upload, ChevronDown } from 'lucide-react';
import Button from '../Button';
import styles from './EmployeeAttendanceModal.module.css';

const EmployeeAttendanceModal = ({ isOpen, onClose, employeeName = "Mohammad Aaves" }) => {
    if (!isOpen) return null;

    const records = [
        { date: '01/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '02/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '03/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '04/01/2026', clockIn: '', breakTime: '', clockOut: '', type: 'leave' },
        { date: '05/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '06/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '07/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '08/01/2026', clockIn: '', breakTime: '', clockOut: '', type: 'sunday' },
        { date: '09/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
        { date: '10/01/2026', clockIn: '', breakTime: '', clockOut: '', type: 'holiday' },
        { date: '09/01/2026', clockIn: '10:00 am', breakTime: '1.5 Hrs', clockOut: '07:00 pm', type: 'regular' },
    ];

    const getRowStyle = (type) => {
        switch (type) {
            case 'leave': return 'bg-gray-200/60 border-t border-gray-300';
            case 'sunday': return 'bg-[#4ade80] text-white border-t border-[#3bca6d]';
            case 'holiday': return 'bg-[#3b82f6] text-white border-t border-[#2f6bd9]';
            default: return 'bg-white border-t border-gray-100';
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
        <div className={styles.sidebarOverlay} onClick={onClose}>
            <div className={styles.sidebarContent} onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{employeeName} Attendance</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className={styles.modalBody}>
                    <div className="flex flex-col gap-6">

                        {/* Controls Row */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="outline" className="bg-white border-gray-200 text-gray-700 font-medium px-4 py-2 h-10 rounded-xl hover:bg-gray-50 flex items-center shadow-sm">
                                Date <ChevronDown size={16} className="text-gray-400 ml-1" />
                            </Button>
                            <Button variant="dark" className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-2 h-10 rounded-xl flex items-center shadow-sm gap-2">
                                <Upload size={16} /> Export
                            </Button>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                <span className="text-[15px] text-gray-700 font-medium">Leave</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#4ade80]"></div>
                                <span className="text-[15px] text-gray-700 font-medium">Sunday</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
                                <span className="text-[15px] text-gray-700 font-medium">Holiday</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-[20px] border border-gray-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto custom-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead>
                                        <tr className="bg-gray-50/50">
                                            <th className="py-4 px-6 text-[15px] font-semibold text-gray-900">Date/Day</th>
                                            <th className="py-4 px-6 text-[15px] font-semibold text-gray-900 border-l border-gray-100">Clock In</th>
                                            <th className="py-4 px-6 text-[15px] font-semibold text-gray-900 border-l border-gray-100">Break</th>
                                            <th className="py-4 px-6 text-[15px] font-semibold text-gray-900 border-l border-gray-100">Clock Out</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.map((record, index) => (
                                            <tr key={index} className={getRowStyle(record.type)}>
                                                <td className="py-4 px-6 border-r border-gray-100">
                                                    <div className={`text-[15px] ${getTextColor(record.type)}`}>
                                                        {record.date}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 border-r border-gray-100">
                                                    <div className={`text-[15px] ${getTextColor(record.type)}`}>{record.clockIn}</div>
                                                </td>
                                                <td className="py-4 px-6 border-r border-gray-100">
                                                    <div className={`text-[15px] ${getTextColor(record.type)}`}>{record.breakTime}</div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className={`text-[15px] ${getTextColor(record.type)}`}>{record.clockOut}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendanceModal;
