
import React from 'react';
import styles from './ProjectTable.module.css';

const ProjectTable = ({ projects = [] }) => {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.header}>
                <h3 className={styles.title}>Projects</h3>
                <select className={styles.filter} defaultValue="default">
                    <option value="default" disabled>Filter By Project</option>
                    <option value="all">All Projects</option>
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
                        {projects.map((project, index) => (
                            <tr key={index}>
                                <td>
                                    <span className={styles.projectName}>{project.name}</span>
                                </td>
                                <td>{project.assignedDate}</td>
                                <td>{project.updatedAt}</td>
                                <td>
                                    {project.isOverdue ? (
                                        <span className={styles.overdate}>
                                            ⚠️ {project.dueDate}
                                        </span>
                                    ) : (
                                        project.dueDate
                                    )}
                                </td>
                                <td>
                                    <span
                                        className={
                                            project.status === 'Completed'
                                                ? styles.statusCompleted
                                                : project.status === 'Running'
                                                    ? styles.statusRunning
                                                    : styles.statusOverdue
                                        }
                                    >
                                        {project.status} {project.status === 'Completed' ? '✓' : project.status === 'Running' ? '⟳' : ''}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectTable;
