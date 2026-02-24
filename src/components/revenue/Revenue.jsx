import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { Upload, ChevronDown, CheckCircle2, Ban } from 'lucide-react';
import styles from './Revenue.module.css';
import RevenueDetailsModal from './RevenueDetailsModal';

const Revenue = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const revenueData = [
        {
            id: 1,
            name: 'Rahul Mishra',
            email: 'employeename@gmail.com',
            totalAmount: '₹ 3,40,000',
            paid: '₹ 3,00,000',
            pending: '₹ 00',
            status: 'Paid',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Ajay Deewan',
            email: 'employeename@gmail.com',
            totalAmount: '₹ 3,40,000',
            paid: '₹ 3,00,000',
            pending: '₹ 40,000',
            status: 'Partial',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Aakash Wadode',
            email: 'employeename@gmail.com',
            totalAmount: '₹ 3,40,000',
            paid: '₹ 3,00,000',
            pending: '₹ 40,000',
            status: 'Partial',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Vijay Kumar',
            email: 'employeename@gmail.com',
            totalAmount: '₹ 3,40,000',
            paid: '₹ 3,00,000',
            pending: '₹ 40,000',
            status: 'Partial',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    const getStatusStyle = (status) => {
        return status === 'Paid' ? styles.statusPaid : styles.statusPartial;
    };

    const getStatusIcon = (status) => {
        return status === 'Paid' ? <CheckCircle2 size={16} /> : <Ban size={16} />;
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeadingWrapper}>
                    <SectionHeading className="mb-0! text-3xl font-bold text-gray-900">Revenue</SectionHeading>
                </h2>

                <div className={styles.filtersGroup} style={{ width: 'auto' }}>
                    <button className={styles.filterButton}>
                        Date <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <button className={styles.exportButton}>
                        <Upload size={16} /> Export
                    </button>
                </div>
            </div>

            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table className="w-full">
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Total Amount</th>
                                <th>Paid</th>
                                <th>Pending</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {revenueData.map((row) => (
                                <tr key={row.id} onClick={() => setSelectedEmployee(row)}>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className={styles.avatar} src={row.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700 underline">{row.name}</div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{row.email}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{row.totalAmount}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{row.paid}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{row.pending}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <span className={`${styles.statusPill} ${getStatusStyle(row.status)}`}>
                                            {row.status} {getStatusIcon(row.status)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <RevenueDetailsModal
                isOpen={!!selectedEmployee}
                onClose={() => setSelectedEmployee(null)}
                employee={selectedEmployee}
            />
        </div>
    );
};

export default Revenue;
