import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export default CardHeader;
