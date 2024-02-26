import React from "react";
import styles from "./Card.module.scss";

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default CardContainer;
