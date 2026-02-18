import React from 'react';
import { X, Plus, ChevronDown } from 'lucide-react';
import Button from '../Button';
import styles from './Employees.module.css';

const AddEmployeeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <div className="bg-white w-full max-w-[800px] rounded-[2rem] shadow-xl max-h-[90vh] overflow-y-auto custom-scrollbar relative animate-in fade-in zoom-in duration-200 p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Add Employee</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">First Name</label>
                            <input
                                type="text"
                                placeholder="Mohammad Faraz"
                                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">Last Name</label>
                            <input
                                type="text"
                                placeholder="Uddin"
                                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">Phone</label>
                            <input
                                type="text"
                                placeholder="+91-9876543210"
                                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">Email</label>
                            <input
                                type="email"
                                placeholder="employeename@gmail.com"
                                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Role & Department */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">Role</label>
                            <div className="relative">
                                <select className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all appearance-none text-gray-500">
                                    <option>UI/UX Designer, Frontend Dev..</option>
                                    <option>Project Manager</option>
                                    <option>Backend Developer</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-900">Department</label>
                            <div className="relative">
                                <select className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all appearance-none text-gray-500">
                                    <option>Designing, Development</option>
                                    <option>Management</option>
                                    <option>Marketing</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-900">Salary</label>
                        <input
                            type="text"
                            placeholder="20,000"
                            className="w-full h-[50px] px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#FF9F6C] focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-end pt-8">
                        <Button
                            variant="primary"
                            className="px-8 py-3 rounded-xl gap-2 font-medium"
                        >
                            <Plus className="w-5 h-5" />
                            Add Employee
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
