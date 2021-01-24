import React from 'react';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.}>
          <p className={styles.}>{title}</p>
          {children}
    </section>
  );
}
