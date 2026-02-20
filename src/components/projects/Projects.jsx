import React from 'react';
import ProjectTable from '../employee-dashboard/ProjectTable';

const Projects = ({ onProjectClick }) => {
    const projects = [
        {
            name: 'E-Commerce Project',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Completed',
        },
        {
            name: 'CRM Mobile App',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Running',
        },
        {
            name: 'Admin Panel',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            status: 'Running',
        },
        {
            name: 'Food Application Project',
            assignedDate: '11/02/2025',
            updatedAt: '11/02/2025',
            dueDate: '11/02/2025',
            isOverdue: true,
            status: 'Running',
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-900">All Projects</h1>
            <ProjectTable projects={projects} onProjectClick={onProjectClick} />
        </div>
    );
};

export default Projects;
