
import React from 'react';
import { X, Plus } from 'lucide-react';
import styles from './AddProjectModal.module.css';

const AddProjectModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Add Project</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.modalBody}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project ID</label>
                            <input type="text" className={styles.input} placeholder="#rahul-ecom" defaultValue="#rahul-ecom" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Name</label>
                            <select className={styles.select}>
                                <option>UI/UX Designer, Frontend Dev..</option>
                                <option>E-Commerce Platform</option>
                                <option>Mobile App</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Priority</label>
                            <select className={styles.select}>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Type</label>
                            <select className={styles.select}>
                                <option>Website Development</option>
                                <option>App Development</option>
                                <option>UI/UX Design</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sectionHeading}>Timeline</h3>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Start Date</label>
                                <select className={styles.select}>
                                    <option>UI/UX Designer, Frontend Dev..</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Deadline</label>
                                <select className={styles.select}>
                                    <option>UI/UX Designer, Frontend Dev..</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sectionHeading}>Financial</h3>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Total Cost</label>
                                <input type="text" className={styles.input} placeholder="₹ 2,50,000" defaultValue="₹ 2,50,000" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Advanced Received</label>
                                <input type="text" className={styles.input} placeholder="₹ 1,25,000" defaultValue="₹ 1,25,000" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.modalFooter}>
                    <button className={styles.submitButton}>
                        <Plus size={18} />
                        Add Employee
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProjectModal;
