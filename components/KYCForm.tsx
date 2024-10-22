'use client'

import { useState } from 'react';
import PhoneVerification from './PhoneVerification';
import DocumentUpload from './DocumentUpload';
import SelfieUpload from './SelfieUpload';
import ReviewSubmit from './ReviewSubmit';
import ProgressIndicator from './ProgressIndicator';
import styles from './KYCForm.module.css';

const steps = ['Phone Verification', 'Document Upload', 'Selfie Upload', 'Review & Submit'];

export default function KYCForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    documentType: '',
    documentFile: null,
    selfieFile: null,
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PhoneVerification formData={formData} updateFormData={updateFormData} onNext={handleNext} />;
      case 1:
        return <DocumentUpload formData={formData} updateFormData={updateFormData} onNext={handleNext} onPrevious={handlePrevious} />;
      case 2:
        return <SelfieUpload formData={formData} updateFormData={updateFormData} onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <ReviewSubmit formData={formData} onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.kycForm}>
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      {renderStep()}
      <div className={styles.privacyInfo}>
        <p>By submitting this form, you agree to our <a href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</a>.</p>
        <p>Your data will be securely stored and used only for verification purposes.</p>
      </div>
    </div>
  );
}