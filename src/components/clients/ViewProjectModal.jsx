import React from 'react';
import { X } from 'lucide-react';
import styles from './ViewProjectModal.module.css';

const ViewProjectModal = ({ isOpen, onClose, project, showClientSelect }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.sidebarOverlay} onClick={onClose}>
            <div className={styles.sidebarContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>View Project</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.modalBody}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project ID</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={project?.id || "#rahul-ecom"}
                                readOnly
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Name</label>
                            <select className={styles.select} disabled>
                                <option>{project?.name || "UI/UX Designer, Frontend Dev.."}</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Priority</label>
                            <select className={styles.select} disabled>
                                <option>{project?.priority || "Medium"}</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Type</label>
                            <select className={styles.select} disabled>
                                <option>{project?.type || "Website Development"}</option>
                            </select>
                        </div>
                    </div>

                    {showClientSelect && (
                        <div>
                            <h3 className={styles.sectionHeading}>Select Client</h3>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Clients</label>
                                <select className={styles.select} disabled>
                                    <option>{project?.clientName || "Rahul Mishra"}</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <div>
                        <h3 className={styles.sectionHeading}>Timeline</h3>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Start Date</label>
                                <select className={styles.select} disabled>
                                    <option>{project?.startDate || "UI/UX Designer, Frontend Dev.."}</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Deadline</label>
                                <select className={styles.select} disabled>
                                    <option>{project?.deadline || "UI/UX Designer, Frontend Dev.."}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sectionHeading}>Financial</h3>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Total Cost</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={project?.totalCost || "₹ 2,50,000"}
                                    readOnly
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Advanced Received</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={project?.advancedReceived || "₹ 1,25,000"}
                                    readOnly
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Pending Amount</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value="₹ 2,50,000"
                                    readOnly
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Advanced Payment Status</label>
                                <select className={styles.select} disabled>
                                    <option>Paid</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sectionHeading}>Team</h3>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Assigned Developers & Designers</label>
                            <select className={styles.select} disabled>
                                <option>Mohammad Faraz, Owais, Kashyap</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sectionHeading}>Details & Progress</h3>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Description</label>
                            <input
                                type="text"
                                className={styles.input}
                                value="₹ 2,50,000"
                                readOnly
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Progress</label>
                            <input
                                type="text"
                                className={styles.input}
                                value=""
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProjectModal;
