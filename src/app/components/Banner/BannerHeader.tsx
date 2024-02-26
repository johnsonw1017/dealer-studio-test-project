import React, { ReactNode } from 'react';
import styles from './Banner.module.scss';

interface BannerHeaderProps {
  children: ReactNode;
}

const BannerHeader: React.FC<BannerHeaderProps> = ({ children }) => {
  return <div className={styles.bannerHeader}>{children}</div>;
};

export default BannerHeader;
