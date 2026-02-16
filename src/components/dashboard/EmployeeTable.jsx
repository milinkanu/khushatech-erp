import React from 'react';
import SectionHeading from '../SectionHeading';
import { Pencil, Trash2 } from 'lucide-react';

const EmployeeTable = () => {
    const employees = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            role: 'Project Manager',
            email: 'employeename@gmail.com',
            departments: ['Development', 'Management'],
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            role: 'Product Designer',
            email: 'employeename@gmail.com',
            departments: ['Designing', 'Development'],
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            role: 'Backend Developer',
            email: 'employeename@gmail.com',
            departments: ['Development'],
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            role: 'Backend Developer',
            email: 'employeename@gmail.com',
            departments: ['Development'],
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    const getDepartmentStyle = (dept) => {
        switch (dept) {
            case 'Development':
                return 'bg-orange-100 text-orange-600';
            case 'Management':
                return 'bg-blue-100 text-blue-600';
            case 'Designing':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <>
            <SectionHeading>Employees</SectionHeading>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                <div className="px-6 border-b border-gray-200">
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border-collapse">
                        <thead className="bg-gray-50">
                            <tr className="divide-x divide-gray-200">
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider w-1/4">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {employees.map((employee) => (
                                <tr key={employee.id} className="divide-x divide-gray-200 hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full object-cover" src={employee.avatar} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-500">{employee.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{employee.role}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{employee.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-wrap gap-2">
                                            {employee.departments.map((dept, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDepartmentStyle(dept)}`}
                                                >
                                                    {dept}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                        <div className="flex justify-center space-x-4"> {/* Center aligned per screenshot */}
                                            <button className="text-gray-900 hover:text-gray-600 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                            <button className="text-gray-900 hover:text-gray-600 transition-colors">
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
        </>
    );
};

export default EmployeeTable;
