import React from 'react';
import spinner from '../assets/CPcodeLogo.png';
import styles from './Loader.css';

export default function Loading() {
  return <img className={styles.Loader} src={spinner} />;
}
