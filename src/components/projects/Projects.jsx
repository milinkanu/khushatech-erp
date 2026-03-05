import React, { useState } from 'react';
import { Plus, Upload, ChevronDown } from 'lucide-react';
import Button from '../Button';
import AddProjectModal from '../clients/AddProjectModal';
import ViewProjectModal from '../clients/ViewProjectModal';
import styles from './Projects.module.css';

const Projects = ({ onProjectClick }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Mock projects data as per screenshot
    const allProjects = [
        {
            id: '#01Project',
            clientName: 'Rahul Mishra',
            name: 'E Commerce Platform',
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            totalCost: '₹ 2,50,000',
            advancedReceived: '₹ 1,25,000',
            pendingAmount: '₹ 1,25,000',
            paymentStatus: 'Paid',
            assignedTo: ['Owais', 'Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '00%'
        },
        {
            id: '#02Project',
            clientName: 'Rahul Mishra',
            name: 'E Commerce Platform',
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            totalCost: '₹ 2,50,000',
            advancedReceived: '₹ 1,25,000',
            pendingAmount: '₹ 1,25,000',
            paymentStatus: 'Paid',
            assignedTo: ['Owais', 'Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '00%'
        },
        {
            id: '#03Project',
            clientName: 'Rahul Mishra',
            name: 'E Commerce Platform',
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            totalCost: '₹ 2,50,000',
            advancedReceived: '₹ 1,25,000',
            pendingAmount: '₹ 1,25,000',
            paymentStatus: 'Paid',
            assignedTo: ['Owais', 'Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '00%'
        },
        {
            id: '#04Project',
            clientName: 'Rahul Mishra',
            name: 'E Commerce Platform',
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            totalCost: '₹ 2,50,000',
            advancedReceived: '₹ 1,25,000',
            pendingAmount: '₹ 1,25,000',
            paymentStatus: 'Paid',
            assignedTo: ['Owais', 'Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '00%'
        }
    ];

    const getPaymentBadgeStyle = (status) => {
        if (status === 'Paid') return 'bg-green-100 text-green-600';
        return 'bg-gray-100 text-gray-600';
    };

    const getAssignedBadgeStyle = (name) => {
        if (name === 'Owais') return 'bg-orange-100 text-orange-600';
        if (name === 'Faraz') return 'bg-green-100 text-green-600';
        if (name === 'Kashyap') return 'bg-blue-100 text-blue-600';
        return 'bg-gray-100 text-gray-600';
    };

    return (
        <div className={styles.pageContainer}>
            {/* Header Row: Title & Add Button */}
            <div className={styles.headerRow}>
                <h2 className={styles.sectionHeading}>All Projects</h2>

                <Button
                    variant="primary"
                    className={styles.addProjectButtonMobile}
                    onClick={() => setIsAddModalOpen(true)}
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
                    onClick={() => setIsAddModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Project
                </Button>

                <div className={styles.filtersGroup}>
                    <button className={styles.filterButton}>
                        Rahul Mishra <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <button className={styles.filterButton}>
                        Date <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <button className={styles.exportButton}>
                        <Upload size={16} /> Export
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table style={{ minWidth: '1800px' }}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>Project ID</th>
                                <th>Client's Name</th>
                                <th>Project Name</th>
                                <th>Priority</th>
                                <th>Project Type</th>
                                <th>Start Date</th>
                                <th>Deadline</th>
                                <th>Total Cost</th>
                                <th>Advanced Received</th>
                                <th>Pending Amount</th>
                                <th>Payment Status</th>
                                <th>Assigned Dev & Designers</th>
                                <th>Description</th>
                                <th>Progress</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {allProjects.map((project, index) => (
                                <tr
                                    key={index}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        onProjectClick(project);
                                    }}
                                >
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.id}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.clientName}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.name}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <span className={styles.badgeHigh}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-1.5 align-middle"></span>
                                            {project.priority}
                                        </span>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.type}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.startDate}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.deadline}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.totalCost}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.advancedReceived}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.pendingAmount}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <span className={`px-2 py-1.5 rounded-full text-xs font-medium ${getPaymentBadgeStyle(project.paymentStatus)}`}>
                                            {project.paymentStatus}
                                        </span>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className="flex gap-1.5">
                                            {project.assignedTo?.map(dev => (
                                                <span key={dev} className={`px-2 py-0.5 rounded-full text-xs font-medium ${getAssignedBadgeStyle(dev)}`}>
                                                    {dev}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.description}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className={styles.textCell}>{project.progress}</div>
                                    </td>
                                    <td className={styles.tableCell}>
                                        <div className="flex items-center gap-3 text-gray-400">
                                            <span
                                                className="hover:text-indigo-600 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                    setIsViewModalOpen(true);
                                                }}
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </span>
                                            <span
                                                className="hover:text-red-500 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Handle delete action
                                                }}
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </span>
                                            <span
                                                className="hover:text-indigo-600 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Handle edit action
                                                }}
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            <AddProjectModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                showClientSelect={true}
            />

            <ViewProjectModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                project={selectedProject}
                showClientSelect={true}
            />
        </div>
    );
};

export default Projects;
