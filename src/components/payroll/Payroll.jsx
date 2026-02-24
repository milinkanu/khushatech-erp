import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Upload, ChevronDown, Trash2, Pencil, CheckCircle } from 'lucide-react';
import styles from './Payroll.module.css';
import EmployeePayrollModal from './EmployeePayrollModal';

const Payroll = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEmployeeClick = (name) => {
        setSelectedEmployee(name);
        setIsModalOpen(true);
    };
    const records = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            role: 'Project Manager',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            leaveCount: '00',
            departments: ['Development', 'Management'],
            bankName: 'HDFC Bank',
            accountHolder: 'Kashyap Koyani',
            accountNumber: '5555 5555 5555 5555',
            ifscCode: 'HDFC0000045',
            status: 'Pay',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            role: 'Product Designer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            leaveCount: '00',
            departments: ['Designing', 'Development'],
            bankName: 'HDFC Bank',
            accountHolder: '+91-9876543210',
            accountNumber: '5555 5555 5555 5555',
            ifscCode: 'HDFC0000045',
            status: 'Pay',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            leaveCount: '00',
            departments: ['Development'],
            bankName: 'HDFC Bank',
            accountHolder: '+91-9876543210',
            accountNumber: '5555 5555 5555 5555',
            ifscCode: 'HDFC0000045',
            status: 'Paid',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            leaveCount: '00',
            departments: ['Development'],
            bankName: 'HDFC Bank',
            accountHolder: '+91-9876543210',
            accountNumber: '5555 5555 5555 5555',
            ifscCode: 'HDFC0000045',
            status: 'Pay',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    const getDepartmentStyle = (dept) => {
        switch (dept) {
            case 'Development':
                return 'bg-orange-100 text-orange-600';
            case 'Management':
                return 'bg-blue-100 text-blue-600';
            case 'Designing':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className={styles.pageContainer}>
            {/* Header Row: Title & Filters */}
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeadingWrapper}>
                    <SectionHeading className="!mb-0 text-2xl md:text-3xl font-bold text-gray-900">Payroll</SectionHeading>
                </h2>

                <div className={styles.filtersGroup}>
                    <Button variant="outline" className={styles.filterButton}>
                        Month <ChevronDown size={16} className={styles.chevronIcon} />
                    </Button>
                    <Button variant="dark" className={styles.exportButton}>
                        <Upload size={16} /> Export
                    </Button>
                </div>
            </div>

            {/* Table Section */}
            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th style={{ textAlign: 'center' }}>Leave Count</th>
                                <th>Department</th>
                                <th>Bank Name</th>
                                <th>Account Holder</th>
                                <th>Account Number</th>
                                <th>IFSC Code</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td className={styles.tableCell}>
                                        <div
                                            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded transition-colors"
                                            onClick={() => handleEmployeeClick(record.name)}
                                        >
                                            <div className="shrink-0 h-10 w-10">
                                                <img className={styles.avatar} src={record.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{record.name}</div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.role}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.phone}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.email}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.fontMedium}>{record.salary}</div>
                                    </td>
                                    <td className={styles.tableCell} style={{ textAlign: 'center' }}>
                                        <div className={styles.textCell}>{record.leaveCount}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className="flex flex-wrap gap-2">
                                            {record.departments.map((dept, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`${styles.departmentBadge} ${getDepartmentStyle(dept)}`}
                                                >
                                                    {dept}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.bankName}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.accountHolder}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.accountNumber}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{record.ifscCode}</div>
                                    </td>
                                    <td className={styles.actionCell}>
                                        <div className="flex justify-center">
                                            {record.status === 'Paid' ? (
                                                <button className={`${styles.statusBadge} ${styles.paidStatus}`}>
                                                    Paid <CheckCircle size={14} />
                                                </button>
                                            ) : (
                                                <button className={`${styles.statusBadge} ${styles.payStatus}`}>
                                                    Pay <span style={{ marginLeft: '4px' }}>&lsaquo;</span>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className={styles.actionCell}>
                                        <div className={styles.actionsWrapper}>
                                            <button className={styles.actionButton}>
                                                <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                                            </button>
                                            <button className={styles.actionButton}>
                                                <Pencil className="w-4 h-4 text-gray-400 hover:text-indigo-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <EmployeePayrollModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                employeeName={selectedEmployee}
            />
        </div>
    );
};

export default Payroll;
