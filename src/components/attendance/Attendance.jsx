import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Upload, ChevronDown, Eye } from 'lucide-react';
import styles from './Attendance.module.css';

const Attendance = () => {
    const records = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            clockIn: '10:00 am',
            breakFrom: '01:30 pm',
            breakTo: '02:30 pm',
            clockOut: '07:00 pm',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            clockIn: '10:00 am',
            breakFrom: '01:30 pm',
            breakTo: '02:30 pm',
            clockOut: '07:00 pm',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            clockIn: '10:00 am',
            breakFrom: '01:30 pm',
            breakTo: '02:30 pm',
            clockOut: '07:00 pm',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            clockIn: '10:00 am',
            breakFrom: '01:30 pm',
            breakTo: '02:30 pm',
            clockOut: '07:00 pm',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    return (
        <div className={styles.pageContainer}>
            {/* Header Row: Title & Filters (Right) */}
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeadingWrapper}>
                    <SectionHeading className="!mb-0 text-2xl md:text-3xl font-bold text-gray-900">Employees Attendance</SectionHeading>
                </h2>

                <div className={styles.filtersGroup}>
                    <Button variant="outline" className={styles.filterButton}>
                        Rahul Mishra <ChevronDown size={16} className={styles.chevronIcon} />
                    </Button>
                    <Button variant="outline" className={styles.filterButton}>
                        Date <ChevronDown size={16} className={styles.chevronIcon} />
                    </Button>
                    <Button variant="dark" className={styles.exportButton}>
                        <Upload size={16} /> Export
                    </Button>
                </div>
            </div>

            {/* Mobile Only 'Leaves' Heading */}
            <div className="mb-4 md:hidden">
                <h3 className="text-xl font-medium text-gray-500">Leaves</h3>
            </div>

            {/* Table Section */}
            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Name</th>
                                <th>Clock In</th>
                                <th>Break From</th>
                                <th>Break To</th>
                                <th>Clock Out</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className={styles.avatar} src={record.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{record.name}</div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.clockIn}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.breakFrom}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.breakTo}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.clockOut}</div>
                                    </td>
                                    <td className={styles.actionCell}>
                                        <div className={styles.actionsWrapper}>
                                            <button className={styles.actionButton}>
                                                <Eye className="w-5 h-5 text-gray-500" />
                                            </button>
                                        </div>
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

export default Attendance;
