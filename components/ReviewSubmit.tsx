'use client'

import { Button } from '@/components/ui/button';
import { CheckCircleIcon, FileIcon, PhoneIcon, UserIcon } from 'lucide-react';
import styles from './ReviewSubmit.module.css';

export default function ReviewSubmit({ formData, onPrevious }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting KYC data:', formData);
    // Show a success message or redirect the user
    alert('KYC submission successful!');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Review Your Information</h2>
      <div className={styles.reviewItem}>
        <PhoneIcon className={styles.icon} />
        <div>
          <h3 className={styles.itemTitle}>Phone Number</h3>
          <p>{formData.phoneNumber}</p>
        </div>
      </div>
      <div className={styles.reviewItem}>
        <FileIcon className={styles.icon} />
        <div>
          <h3 className={styles.itemTitle}>Document</h3>
          <p>Type: {formData.documentType}</p>
          <p>File: {formData.documentFile?.name}</p>
        </div>
      </div>
      <div className={styles.reviewItem}>
        <UserIcon className={styles.icon} />
        <div>
          <h3 className={styles.itemTitle}>Selfie</h3>
          <p>File: {formData.selfieFile?.name}</p>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button type="submit" className={styles.submitButton}>
          <CheckCircleIcon className={styles.submitIcon} />
          Submit KYC
        </Button>
      </div>
    </form>
  );
}