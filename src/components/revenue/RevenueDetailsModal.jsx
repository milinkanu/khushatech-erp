import React from 'react';
import { X, CheckCircle2, Ban } from 'lucide-react';
import styles from './RevenueDetailsModal.module.css';

const RevenueDetailsModal = ({ isOpen, onClose, employee }) => {
    if (!isOpen) return null;

    const data = employee ? [
        employee, // Add main employee record
        { ...employee, id: employee.id + 'a', status: 'Partial', pending: '₹ 40,000' }, // Dummy row 2 to match mockup
        { ...employee, id: employee.id + 'b', status: 'Partial', pending: '₹ 40,000' }, // Dummy row 3
        { ...employee, id: employee.id + 'c', status: 'Partial', pending: '₹ 40,000' }  // Dummy row 4
    ] : [];

    const getStatusStyle = (status) => {
        return status === 'Paid' ? styles.statusPaid : styles.statusPartial;
    };

    const getStatusIcon = (status) => {
        return status === 'Paid' ? <CheckCircle2 size={16} /> : <Ban size={16} />;
    };

    return (
        <div className={styles.sidebarOverlay} onClick={onClose}>
            <div className={styles.sidebarContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Revenue Frm {employee?.name}'s</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.modalBody}>
                    <div className={styles.tableContainer}>
                        <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                            <table className="w-full">
                                <thead className={styles.tableHeader}>
                                    <tr>
                                        <th>Total Amount</th>
                                        <th>Paid</th>
                                        <th>Pending</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tableBodyContainer}>
                                    {data.map((row, idx) => (
                                        <tr key={idx}>
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
                </div>
            </div>
        </div>
    );
};

export default RevenueDetailsModal;
