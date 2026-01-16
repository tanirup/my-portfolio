"use client";

import styles from "./load.module.css";

type LoadProps = {
  progress: number;
};

export default function Load({ progress }: LoadProps) {
  return (
    <div
     className={styles.loading}
     style={{ opacity: progress >= 100 ? 0 : 1 }}
    >

      <div className={styles.inner}>
        {/* Title */}
        <p className={styles.title}>Loading</p>

        {/* Progress Bar */}
        <div className={styles.bar}>
          <div
            className={styles.barFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className={styles.percent}>{progress}%</p>

        {/* Sub text */}
        <p className={styles.sub}>
        Preparing components...
        </p>
      </div>
    </div>
  );
}
