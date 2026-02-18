import React from 'react';
import { X, Plus, ChevronDown } from 'lucide-react';
import Button from '../Button';
import styles from './AddClientModal.module.css';

const AddClientModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Add Client</h2>
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                    >
                        <X size={24} color="#6b7280" />
                    </button>
                </div>

                {/* Form */}
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

                    {/* Client Name */}
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Client Name</label>
                        <input
                            type="text"
                            placeholder="Mohammad Faraz"
                            className={styles.input}
                        />
                    </div>

                    {/* Phone & Projects */}
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
                            <label className={styles.label}>Projects</label>
                            <div className={styles.selectContainer}>
                                <select className={styles.select}>
                                    <option>UI/UX Designer, Frontend Dev..</option>
                                    <option>E-Com Website</option>
                                    <option>E-Com App</option>
                                </select>
                                <ChevronDown className={styles.chevron} />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            placeholder="clientname@gmail.com"
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
                            Add Client
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClientModal;
