import React from "react";
import styles from "./ImageContainer.module.scss";

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.overlay}>
        <div className={styles.textcontainer}>
          <h1>Welcome to G Automotive</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;

