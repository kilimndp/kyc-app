import { CheckIcon } from 'lucide-react';
import styles from './ProgressIndicator.module.css';

export default function ProgressIndicator({ steps, currentStep }) {
  return (
    <div className={styles.progressIndicator}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={`${styles.step} ${
            index <= currentStep ? styles.active : ''
          } ${index < currentStep ? styles.completed : ''}`}
        >
          <div className={styles.stepIcon}>
            {index < currentStep ? (
              <CheckIcon className={styles.checkIcon} />
            ) : (
              index + 1
            )}
          </div>
          <span className={styles.stepLabel}>{step}</span>
        </div>
      ))}
    </div>
  );
}