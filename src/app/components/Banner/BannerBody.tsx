import React, { ReactNode } from 'react';
import styles from './Banner.module.scss';

interface BannerBodyProps {
  children: ReactNode;
}

const BannerBody: React.FC<BannerBodyProps> = ({ children }) => {
  return <div className={styles.bannerBody}>{children}</div>;
};

export default BannerBody;
