'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PhoneIcon } from 'lucide-react';
import styles from './PhoneVerification.module.css';

export default function PhoneVerification({ formData, updateFormData, onNext }) {
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber);
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    updateFormData({ phoneNumber });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <Label htmlFor="phoneNumber" className={styles.label}>
          Phone Number
        </Label>
        <div className={styles.inputWrapper}>
          <PhoneIcon className={styles.inputIcon} />
          <Input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className={styles.input}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <Button type="submit" className={styles.button}>
        Next
      </Button>
    </form>
  );
}