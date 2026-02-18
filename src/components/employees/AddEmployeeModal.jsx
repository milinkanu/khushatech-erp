import React from 'react';
import { X, Plus, ChevronDown } from 'lucide-react';
import Button from '../Button';
import styles from './AddEmployeeModal.module.css';

const AddEmployeeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Add Employee</h2>
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                    >
                        <X size={24} color="#6b7280" />
                    </button>
                </div>

                {/* Form */}
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

                    {/* First Name & Last Name */}
                    <div className={styles.row}>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>First Name</label>
                            <input
                                type="text"
                                placeholder="Mohammad Faraz"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Last Name</label>
                            <input
                                type="text"
                                placeholder="Uddin"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    {/* Phone & Email */}
                    <div className={styles.row}>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Phone</label>
                            <input
                                type="text"
                                placeholder="+91-9876543210"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                placeholder="employeename@gmail.com"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    {/* Role & Department */}
                    <div className={styles.row}>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Role</label>
                            <div className={styles.selectContainer}>
                                <select className={styles.select}>
                                    <option>UI/UX Designer, Frontend Dev..</option>
                                    <option>Project Manager</option>
                                    <option>Backend Developer</option>
                                </select>
                                <ChevronDown className={styles.chevron} />
                            </div>
                        </div>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Department</label>
                            <div className={styles.selectContainer}>
                                <select className={styles.select}>
                                    <option>Designing, Development</option>
                                    <option>Management</option>
                                    <option>Marketing</option>
                                </select>
                                <ChevronDown className={styles.chevron} />
                            </div>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Salary</label>
                        <input
                            type="text"
                            placeholder="20,000"
                            className={styles.input}
                        />
                    </div>

                    {/* Footer Actions */}
                    <div className={styles.footer}>
                        <Button
                            variant="primary"
                            className={styles.submitButton}
                        >
                            <Plus size={20} />
                            Add Employee
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
