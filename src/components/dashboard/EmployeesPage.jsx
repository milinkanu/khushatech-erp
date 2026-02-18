import React from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { Plus, Upload, ChevronDown } from 'lucide-react';

const EmployeesPage = () => {
    const employees = [
        {
            id: 1,
            name: 'Kashyap Koyani',
            role: 'Project Manager',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Mohammad Faraz',
            role: 'Product Designer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Mohammad Aaves',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Sangmesh',
            role: 'Backend Developer',
            phone: '+91-9876543210',
            email: 'employeename@gmail.com',
            salary: '₹ 25,000',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    return (
        <div className="w-full">
            <SectionHeading>Employees</SectionHeading>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 mt-4 gap-4">
                <Button variant="primary" className="gap-2 px-6 py-2.5 rounded-xl shadow-none hover:shadow-lg transition-shadow">
                    <Plus size={20} />
                    Add Employee
                </Button>

                <div className="flex gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                    <Button variant="outline" className="gap-2 font-normal rounded-xl">
                        Monthly <ChevronDown size={16} className="text-gray-400" />
                    </Button>
                    <Button variant="outline" className="gap-2 font-normal rounded-xl">
                        Yearly <ChevronDown size={16} className="text-gray-400" />
                    </Button>
                    <Button variant="dark" className="gap-2 rounded-xl px-6">
                        <Upload size={16} /> Export
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="min-w-full divide-y divide-gray-100 text-left">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Salary
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full object-cover" src={employee.avatar} alt="" />
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{employee.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{employee.role}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{employee.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{employee.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-700">{employee.salary}</div>
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

export default EmployeesPage;
