
import React from 'react';
import StatCard from './StatCard';
import ProjectTable from './ProjectTable';
import EmployeeAttendanceModal from '../attendance/EmployeeAttendanceModal';
import styles from './EmployeeDashboard.module.css';
import { CheckCircle, Clock, Calendar, AlertTriangle } from 'lucide-react';

const EmployeeDashboard = ({ onProjectClick }) => {
    const [isAttendanceModalOpen, setIsAttendanceModalOpen] = React.useState(false);

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
        <div className={styles.dashboardContainer}>
            <div className={styles.statSection}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.cardGrid}>
                    <StatCard
                        icon={<CheckCircle size={24} />}
                        value="04"
                        label="Completed"
                        type="success"
                        colored={true}
                    />
                    <StatCard
                        icon={<Clock size={24} />}
                        value="02"
                        label="Running"
                        type="warning"
                        colored={true}
                    />
                </div>
            </div>

            <div className={styles.statSection}>
                <h2 className={styles.sectionTitle}>Tasks</h2>
                <div className={styles.cardGrid}>
                    <StatCard
                        icon={<CheckCircle size={24} />}
                        value="01"
                        label="Completed"
                        type="success"
                    />
                    <StatCard
                        icon={<Clock size={24} />}
                        value="03"
                        label="Running"
                        type="warning"
                    />
                    <StatCard
                        icon={<AlertTriangle size={24} />}
                        value="01"
                        label="Overdue"
                        type="danger"
                    />
                </div>
            </div>

            <div className={styles.statSection}>
                <h2 className={styles.sectionTitle}>Leave</h2>
                <div className={styles.cardGrid}>
                    <StatCard
                        icon={<Calendar size={24} />}
                        value="06"
                        label="2 Casual • 4 Sick"
                        type="danger"
                    />
                    <StatCard
                        icon={<Calendar size={24} />}
                        value="02"
                        label="2 Casual"
                        type="danger"
                    />
                    <StatCard
                        icon={<Calendar size={24} />}
                        value="04"
                        label="4 Sick"
                        type="danger"
                    />
                </div>
            </div>

            <div className={styles.statSection}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <ProjectTable projects={projects} onProjectClick={onProjectClick} />
            </div>

            <EmployeeAttendanceModal
                isOpen={isAttendanceModalOpen}
                onClose={() => setIsAttendanceModalOpen(false)}
            />

            {/* Temporary trigger for the user to test the modal by clicking the Tasks title */}
            <div
                className="mt-6 text-center text-sm text-gray-500 cursor-pointer hover:text-orange-500 underline"
                onClick={() => setIsAttendanceModalOpen(true)}
            >
                Test: Click here to open Mohammad Aaves Attendance Modal
            </div>
        </div>
    );
};

export default EmployeeDashboard;
