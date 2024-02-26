import React from 'react';
import styles from './Banner.module.scss';

interface BannerButtonProps {
  onClick: () => void;
  label: React.ReactNode;
}

const BannerButton: React.FC<BannerButtonProps> = ({ onClick, label }) => {
  return (
    <button className={styles.bannerButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default BannerButton;