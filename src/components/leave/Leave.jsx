import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Upload, ChevronDown, Pencil, Trash2 } from 'lucide-react';
import styles from './Leave.module.css';

const Leave = () => {
    const leaves = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            from: '01/02/2026',
            to: '03/02/2026',
            phone: '+91-9876543210',
            totalCount: '03',
            status: 'pending',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            from: '01/02/2026',
            to: '03/02/2026',
            phone: '+91-9876543210',
            totalCount: '02',
            status: 'approved',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            from: '01/02/2026',
            to: '03/02/2026',
            phone: '+91-9876543210',
            totalCount: '01',
            status: 'cancelled',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            from: '01/02/2026',
            to: '03/02/2026',
            phone: '+91-9876543210',
            totalCount: '00',
            status: 'none',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    const renderLeaveRequest = (status) => {
        if (status === 'pending') {
            return (
                <div className="flex gap-2 justify-center">
                    <button className="px-5 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors">Accept</button>
                    <button className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">Deny</button>
                </div>
            )
        }
        if (status === 'approved') {
            return <div className="px-5 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 inline-block text-center w-full max-w-48">Approved</div>
        }
        if (status === 'cancelled') {
            return <div className="px-5 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-600 inline-block text-center w-full max-w-48">Cancelled</div>
        }
        return <div className="text-sm font-medium text-gray-400 text-center">No Request Yet!</div>
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeadingWrapper}>
                    <SectionHeading className="mb-0! text-[1.6rem] md:text-3xl font-bold text-gray-900">Employees Leaves</SectionHeading>
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

            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Phone</th>
                                <th style={{ textAlign: 'center' }}>Total Count</th>
                                <th style={{ textAlign: 'center' }}>Leave Request</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {leaves.map((leave) => (
                                <tr key={leave.id}>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className={styles.avatar} src={leave.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{leave.name}</div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{leave.from}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{leave.to}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{leave.phone}</div>
                                    </td>
                                    <td className={styles.tableCell} style={{ textAlign: 'center' }}>
                                        <div className="text-sm font-medium text-gray-700">{leave.totalCount}</div>
                                    </td>
                                    <td className={styles.tableCell} style={{ textAlign: 'center' }}>
                                        {renderLeaveRequest(leave.status)}
                                    </td>
                                    <td className={styles.actionCell}>
                                        <div className={styles.actionsWrapper}>
                                            <button className={styles.actionButton}>
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                            <button className={styles.actionButton}>
                                                <Pencil className="w-5 h-5" />
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

export default Leave;
