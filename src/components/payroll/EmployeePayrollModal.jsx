import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import styles from './EmployeePayrollModal.module.css';

const EmployeePayrollModal = ({ isOpen, onClose, employeeName }) => {
    if (!isOpen) return null;

    const dummyRecords = [
        { id: 1, month: '01 Jan 2026', status: 'Paid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { id: 2, month: '01 Feb 2026', status: 'Paid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { id: 3, month: '01 March 2026', status: 'Paid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { id: 4, month: '01 April 2026', status: 'Paid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
    ];

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className="text-xl font-bold text-gray-900">{employeeName} Payroll</h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <X size={24} strokeWidth={2.5} />
                    </button>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Name</th>
                                <th>Month</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyRecords.map((record) => (
                                <tr key={record.id} className={styles.tableRow}>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3">
                                            <img className={styles.avatar} src={record.avatar} alt={employeeName} />
                                            <span className="text-sm font-medium text-gray-600">{employeeName}</span>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <span className="text-sm text-gray-500">{record.month}</span>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <span className={styles.paidBadge}>
                                            {record.status} <CheckCircle size={14} className="ml-2" />
                                        </span>
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

export default EmployeePayrollModal;
