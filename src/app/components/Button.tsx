'use client';
import React from 'react';
import styles from './styles/Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  label: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
