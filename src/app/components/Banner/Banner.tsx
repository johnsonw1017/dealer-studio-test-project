import React, {ReactNode} from "react";
import styles from "./Banner.module.scss";

interface BannerProps {
  imageUrl: string;
  children: ReactNode;
}

const Banner: React.FC<BannerProps> = ({ imageUrl , children}) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.bannerContainer} style={containerStyle}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;

