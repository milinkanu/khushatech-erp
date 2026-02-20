import React from 'react';
import ProjectTable from '../employee-dashboard/ProjectTable';
import styles from './ProjectDetails.module.css';
import { ChevronDown } from 'lucide-react';

const ProjectDetails = ({ project }) => {
    // Mock task data representing tasks for the selected project
    const tasks = [
        {
            name: 'Homepage UI Design',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Completed',
        },
        {
            name: 'Payment Bug Fix',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Running',
        },
        {
            name: 'Cart API Integration',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Running',
        },
        {
            name: 'Profile Page Responsive',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            isOverdue: true,
            status: 'Running',
        },
        {
            name: 'Cart API Integration',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Running',
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>

            <div className={styles.tableContainer}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Task</h3>
                    <select className={styles.filter} defaultValue="default">
                        <option value="default" disabled>Filter By Status</option>
                        <option value="all">All Tasks</option>
                        <option value="completed">Completed</option>
                        <option value="running">Running</option>
                    </select>
                </div>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Assigned Date</th>
                                <th>Updated At</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className="font-medium text-gray-500">{task.name}</span>
                                    </td>
                                    <td>{task.assignedDate}</td>
                                    <td>{task.updatedAt}</td>
                                    <td>
                                        {task.isOverdue ? (
                                            <span className={styles.overdate}>
                                                ⚠️ {task.dueDate}
                                            </span>
                                        ) : (
                                            task.dueDate
                                        )}
                                    </td>
                                    <td>
                                        <span
                                            className={
                                                task.status === 'Completed'
                                                    ? styles.statusDropdownCompleted
                                                    : task.status === 'Running' && !task.isOverdue
                                                        ? styles.statusDropdownRunning
                                                        : styles.statusDropdownOverdue
                                            }
                                        >
                                            {task.status} <ChevronDown size={14} className="ml-1" />
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

export default ProjectDetails;
