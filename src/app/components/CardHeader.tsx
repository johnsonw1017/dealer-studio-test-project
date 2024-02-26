import React, { ReactNode } from 'react';
import styles from './styles/CardHeader.module.scss';

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export default CardHeader;
