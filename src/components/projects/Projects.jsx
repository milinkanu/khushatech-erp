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
        }
    ];

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
                    <table style={{ minWidth: '1100px' }}>
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
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {allProjects.map((project, index) => (
                                <tr
                                    key={index}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setIsViewModalOpen(true);
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
                                        <span className={styles.badgeHigh}>{project.priority}</span>
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
