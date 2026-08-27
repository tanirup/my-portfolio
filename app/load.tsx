"use client";

import styles from "./load.module.css";

type LoadProps = {
  progress: number;
};

export default function Load({ progress }: LoadProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={styles.loading}
      style={{ opacity: safeProgress >= 100 ? 0 : 1 }}
    >
      <div className={styles.inner}>
        {/* Title */}
        <p className={styles.title}>Loading</p>

        {/* Progress Bar */}
        <div className={styles.bar}>
          <div
            className={styles.barFill}
            style={{ width: `${safeProgress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className={styles.percent}>{safeProgress}%</p>

        {/* Sub text */}
        <p className={styles.sub}>Preparing components...</p>
      </div>
    </div>
  );
}