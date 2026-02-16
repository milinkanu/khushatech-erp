import React from 'react';
import RevenueStats from './RevenueStats';
import EmployeeStats from './EmployeeStats';
import ProjectStats from './ProjectStats';
import EmployeeTable from './EmployeeTable';

const SuperAdminDashboard = () => {
    return (
        <div className="space-y-8">

            {/* Revenue Section */}
            <section>
                <RevenueStats />
            </section>

            {/* Stats Grid Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8">
                <div className="lg:border-r lg:border-gray-200 lg:pr-8">
                    <EmployeeStats />
                </div>
                <div className="lg:pl-8">
                    <ProjectStats />
                </div>
            </section>

            {/* Employee Table Section */}
            <section>
                <EmployeeTable />
            </section>
        </div>
    );
};

export default SuperAdminDashboard;
