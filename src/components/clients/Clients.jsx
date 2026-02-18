import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Plus, Upload, ChevronDown, Pencil, Trash2 } from 'lucide-react';
import styles from './Clients.module.css';
import AddClientModal from './AddClientModal';

const Clients = ({ onClientClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const clients = [
        {
            id: 1,
            name: 'Rahul Mishra',
            projects: ['E-Com Website', 'E-Com App'],
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Ajay Deewan',
            projects: [],
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Aakash Wadode',
            projects: ['E-Com Website', 'E-Com App'],
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Vijay Kumar',
            projects: [],
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    return (
        <div className={styles.pageContainer}>
            {/* Header Row: Title & Add Button */}
            {/* Header: Title */}
            <div className={styles.headerRow}>
                <div>
                    <h2 className={styles.sectionHeading}>Clients</h2>
                    <p className={styles.subHeading}>Click on client's name to see the projects list of that client.</p>
                </div>

                <Button
                    variant="primary"
                    className={styles.addClientButtonMobile}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Client
                </Button>
            </div>

            {/* Controls Row: Add Button (Left) & Filters (Right) */}
            <div className={styles.controlsRow}>
                <Button
                    variant="primary"
                    className={styles.addClientButtonDesktop}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Client
                </Button>

                <div className={styles.filtersGroup}>
                    <Button variant="outline" className={styles.filterButton}>
                        Monthly <ChevronDown size={16} className={styles.chevronIcon} />
                    </Button>
                    <Button variant="outline" className={styles.filterButton}>
                        Yearly <ChevronDown size={16} className={styles.chevronIcon} />
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
                                <th scope="col" className={styles.colName}>
                                    Name
                                </th>
                                <th scope="col" className={styles.colProjects}>
                                    Projects
                                </th>
                                <th scope="col" className={styles.colPhone}>
                                    Phone
                                </th>
                                <th scope="col" className={styles.colEmail}>
                                    Email
                                </th>
                                <th scope="col" className={styles.colAction}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td className={styles.tableCell}>
                                        <div className={styles.clientInfo}>
                                            <div className={styles.avatarContainer}>
                                                <img className={styles.avatar} src={client.avatar} alt="" />
                                            </div>
                                            <div
                                                className={styles.clientName}
                                                onClick={() => onClientClick && onClientClick(client)}
                                            >
                                                {client.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.projectsWrapper}>
                                            {client.projects.length > 0 &&
                                                client.projects.map((project, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={styles.projectBadge}
                                                    >
                                                        {project}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{client.phone}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{client.email}</div>
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

            {/* Add Client Modal */}
            <AddClientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
};

export default Clients;
