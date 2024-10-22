'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileIcon, UploadIcon } from 'lucide-react';
import styles from './DocumentUpload.module.css';

const documentTypes = [
  { value: 'passport', label: 'Passport' },
  { value: 'driverLicense', label: 'Driver\'s License' },
  { value: 'nationalId', label: 'National ID' },
];

export default function DocumentUpload({ formData, updateFormData, onNext, onPrevious }) {
  const [documentType, setDocumentType] = useState(formData.documentType);
  const [documentFile, setDocumentFile] = useState(formData.documentFile);
  const [error, setError] = useState('');

  const handleDocumentTypeChange = (value) => {
    setDocumentType(value);
    setError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setDocumentFile(file);
      setError('');
    } else {
      setError('Please upload a valid image file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documentType) {
      setError('Please select a document type');
      return;
    }
    if (!documentFile) {
      setError('Please upload a document');
      return;
    }
    updateFormData({ documentType, documentFile });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <Label htmlFor="documentType" className={styles.label}>
          Document Type
        </Label>
        <Select value={documentType} onValueChange={handleDocumentTypeChange}>
          <SelectTrigger id="documentType">
            <SelectValue placeholder="Select a document type" />
          </SelectTrigger>
          <SelectContent>
            {documentTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className={styles.inputGroup}>
        <Label htmlFor="documentFile" className={styles.label}>
          Upload Document
        </Label>
        <div className={styles.fileUpload}>
          <Input
            id="documentFile"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          <div className={styles.fileUploadLabel}>
            <UploadIcon className={styles.uploadIcon} />
            <span>{documentFile ? documentFile.name : 'Choose a file'}</span>
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      {documentFile && (
        <div className={styles.preview}>
          <FileIcon className={styles.previewIcon} />
          <p className={styles.previewText}>{documentFile.name}</p>
        </div>
      )}
      <div className={styles.buttonGroup}>
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}