import React, { ReactNode } from 'react';
import styles from './styles/CardBody.module.scss';

interface CardBodyProps {
  children: ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className={styles.cardBody}>{children}</div>;
};

export default CardBody;
