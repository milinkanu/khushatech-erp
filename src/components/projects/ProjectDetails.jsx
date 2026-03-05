import React, { useState } from 'react';
import ProjectTable from '../employee-dashboard/ProjectTable';
import styles from './ProjectDetails.module.css';
import { ChevronDown, Eye, Trash2, Edit2, Upload, Plus } from 'lucide-react';
import Button from '../Button';

const ProjectDetails = ({ project }) => {
    // Mock task data representing tasks for the selected project
    const tasks = [
        {
            name: 'Backend Setup',
            priority: 'High',
            assignedDate: '01/02/2026',
            assignedTo: 'Owais',
            progress: '00%',
            status: 'Not Started',
        },
        {
            name: 'Homepage UI',
            priority: 'High',
            assignedDate: '01/02/2026',
            assignedTo: 'Faraz',
            progress: '00%',
            status: 'In Progress',
        },
        {
            name: 'About us Page UI',
            priority: 'High',
            assignedDate: '01/02/2026',
            assignedTo: 'Kashyap',
            progress: '00%',
            status: 'Done',
        },
    ];

    const getAssignedBadgeStyle = (name) => {
        if (name === 'Owais') return 'bg-orange-100 text-orange-600';
        if (name === 'Faraz') return 'bg-green-100 text-green-600';
        if (name === 'Kashyap') return 'bg-blue-100 text-blue-600';
        return 'bg-gray-100 text-gray-600';
    };

    const getStatusStyle = (status) => {
        if (status === 'Done') return styles.statusDropdownCompleted;
        if (status === 'In Progress') return styles.statusDropdownRunning;
        return styles.statusDropdownOverdue; // Reusing for 'Not Started'
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerRow}>
                <h1 className="text-2xl font-bold text-gray-900">
                    <span className="text-gray-500 font-normal">All Projects {'>'} </span>
                    {project?.name || 'E Commerce Platform'}
                </h1>
            </div>

            <div className={styles.controlsRow}>
                <div className="flex items-center gap-4">
                    <button className={styles.tabButtonActive}>All Task</button>
                    <button className={styles.filterButton}>
                        Assigned to <ChevronDown size={16} className={styles.chevronIcon} />
                    </button>
                    <Button variant="primary" className={styles.assignButton}>
                        <Plus size={18} /> Assign Task
                    </Button>
                </div>

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

            <div className={styles.tableContainer}>
                <div className={`${styles.tableWrapper} ${styles.customScrollbar}`}>
                    <table className={styles.table} style={{ minWidth: '1000px' }}>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Priority</th>
                                <th>Assigned Date</th>
                                <th>Assigned to</th>
                                <th>Progress</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className="font-medium text-gray-700">{task.name}</span>
                                    </td>
                                    <td>
                                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td>{task.assignedDate}</td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAssignedBadgeStyle(task.assignedTo)}`}>
                                            {task.assignedTo}
                                        </span>
                                    </td>
                                    <td>{task.progress}</td>
                                    <td>
                                        <span className={getStatusStyle(task.status)}>
                                            <span className={`w-1.5 h-1.5 rounded-full inline-block mr-1.5 align-middle ${task.status === 'Done' ? 'bg-green-500' : task.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-500'}`}></span>
                                            {task.status} <ChevronDown size={14} className="ml-1" />
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3 text-gray-400">
                                            <span className="hover:text-indigo-600 cursor-pointer transition-colors">
                                                <Eye size={18} />
                                            </span>
                                            <span className="hover:text-red-500 cursor-pointer transition-colors">
                                                <Trash2 size={18} />
                                            </span>
                                            <span className="hover:text-indigo-600 cursor-pointer transition-colors">
                                                <Edit2 size={18} />
                                            </span>
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

export default ProjectDetails;
