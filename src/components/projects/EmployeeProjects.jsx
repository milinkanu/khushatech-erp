import React, { useState } from 'react';
import { Plus, Upload, ChevronDown } from 'lucide-react';
import Button from '../Button';
import AddProjectModal from '../clients/AddProjectModal';
import ViewProjectModal from '../clients/ViewProjectModal';
import styles from './Projects.module.css'; // Reuse exactly the same CSS

const EmployeeProjects = ({ onProjectClick }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('all'); // 'all' or 'assigned'

    // Mock projects data as per screenshot
    const allProjects = [
        {
            id: '#01Project',
            clientName: 'Rahul Mishra',
            name: 'E Commerce Platform',
            hasNotification: true,
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            assignedTo: ['Owais', 'Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '00%'
        },
        {
            id: '#02Project',
            clientName: 'Rahul Mishra',
            name: 'Food Delivery App',
            hasNotification: false,
            priority: 'Medium',
            type: 'Mobile App',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            assignedTo: ['Faraz', 'Kashyap'],
            description: 'Description here...',
            progress: '25%'
        },
        {
            id: '#03Project',
            clientName: 'Rahul Mishra',
            name: 'Dashboard Analytics',
            hasNotification: false,
            priority: 'High',
            type: 'Website',
            startDate: '01/02/2026',
            deadline: '01/02/2026',
            assignedTo: ['Owais', 'Kashyap'],
            description: 'Description here...',
            progress: '50%'
        }
    ];

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

            {/* Tabs Row */}
            <div className="flex gap-4 mb-4">
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${activeTab === 'all' ? 'border-orange-500 text-orange-500 bg-orange-50' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    onClick={() => setActiveTab('all')}
                >
                    All Projects
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${activeTab === 'assigned' ? 'border-orange-500 text-orange-500 bg-orange-50' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    onClick={() => setActiveTab('assigned')}
                >
                    Assigned Projects
                </button>
            </div>

            {/* Table Section */}
            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table style={{ minWidth: activeTab === 'all' ? '1100px' : '900px' }}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                {activeTab === 'all' ? (
                                    <>
                                        <th>Project ID</th>
                                        <th>Client's Name</th>
                                        <th>Project Name</th>
                                        <th>Priority</th>
                                        <th>Project Type</th>
                                        <th>Start Date</th>
                                        <th>Deadline</th>
                                        <th>Assigned Dev & Designers</th>
                                    </>
                                ) : (
                                    <>
                                        <th>Project Type</th>
                                        <th>Start Date</th>
                                        <th>Deadline</th>
                                        <th>Assigned Dev & Designers</th>
                                        <th>Description</th>
                                        <th>Progress</th>
                                        <th>Action</th>
                                    </>
                                )}
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
                                    {activeTab === 'all' ? (
                                        <>
                                            <td className={styles.tableCell}>
                                                <div className={styles.textCell}>{project.id}</div>
                                            </td>
                                            <td className={styles.tableCell}>
                                                <div className={styles.textCell}>{project.clientName}</div>
                                            </td>
                                            <td className={styles.tableCell}>
                                                <div className={`${styles.textCell} flex items-center gap-2`}>
                                                    {project.name}
                                                    {project.hasNotification && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 inline-block"></span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className={styles.tableCell}>
                                                <span className={styles.badgeHigh}>
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
                                                <div className="flex gap-1.5">
                                                    {project.assignedTo?.map(dev => (
                                                        <span key={dev} className={`px-2 py-0.5 rounded-full text-xs font-medium ${getAssignedBadgeStyle(dev)}`}>
                                                            {dev}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <>
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
                                                    <span className="hover:text-indigo-600 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </span>
                                                    <span className="hover:text-red-500 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </span>
                                                    <span className="hover:text-indigo-600 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </td>
                                        </>
                                    )}
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

export default EmployeeProjects;
