import React from 'react';
import styles from './Card.module.scss';

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.cardImage} />;
};

export default CardImage;
