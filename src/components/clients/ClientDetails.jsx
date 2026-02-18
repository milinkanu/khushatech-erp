
import React, { useState } from 'react';
import { Plus, Upload, ChevronDown } from 'lucide-react';
import Button from '../Button';
import AddProjectModal from './AddProjectModal';
import styles from './ClientDetails.module.css';

const ClientDetails = ({ client }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock employees data as per screenshot
    const employees = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            role: 'Project Manager',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            role: 'Product Designer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    // Fallback if client prop isn't provided or name is missing, though typical flow ensures it
    const clientName = client?.name || "Rahul Mishra";

    return (
        <div className={styles.pageContainer}>
            {/* Header Row: Title & Add Button */}
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeading}>{clientName}'s Projects</h2>

                <Button
                    variant="primary"
                    className={styles.addProjectButtonMobile}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Project
                </Button>
            </div>

            {/* Controls Row: Add Button (Left) & Filters (Right) */}
            <div className={styles.controlsRow}>
                <Button
                    variant="primary"
                    className={styles.addProjectButtonDesktop}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Project
                </Button>

                <div className={styles.filtersGroup}>
                    <button className={styles.filterButton}>
                        Monthly <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <button className={styles.filterButton}>
                        Yearly <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <button className={styles.exportButton}>
                        <Upload size={16} /> Export
                    </button>
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
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className={styles.avatar} src={employee.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{employee.name}</div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{employee.role}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{employee.phone}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{employee.email}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className="text-sm font-medium text-gray-700">{employee.salary}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Project Modal */}
            <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
};

export default ClientDetails;
