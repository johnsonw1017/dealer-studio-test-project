import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({ children, bordered = false }) => {
  return (
    <div className={`${styles.card} ${bordered ? styles.bordered : ''}`}>
      {children}
    </div>
  );
};

export default Card;
