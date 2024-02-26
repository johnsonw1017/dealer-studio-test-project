import React from 'react';
import styles from './Card.module.scss';

interface CardButtonProps {
  onClick: () => void;
  label: React.ReactNode;
}

const CardButton: React.FC<CardButtonProps> = ({ onClick, label }) => {
  return (
    <button className={styles.cardButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default CardButton;