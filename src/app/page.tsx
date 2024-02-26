"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardHeader from "./components/Card/CardHeader";
import CardBody from "./components/Card/CardBody";
import BannerHeader from "./components/Banner/BannerHeader";
import BannerBody from "./components/Banner/BannerBody";
import CardContainer from "./components/Card/CardContainer";
import BannerButton from "./components/Banner/BannerButton";
import CardButton from "./components/Card/CardButton";

export default function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1); // Initially set to middle card (Card 2)

  const handleContactUsClick = () => {
    alert("Contact Us via 0412 345 678");
  };

  const handleCardClick = (index : number) => {
    setSelectedCardIndex(index);
  };

  const cardsData = [
    {
      header: "Heading 1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      buttonLabel: "Button 1",
    },
    {
      header: "Heading 2",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      buttonLabel: "Button 2",
    },
    {
      header: "Heading 3",
      body: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <br />
          <p>
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris
          </p>
        </>
      ),
      buttonLabel: "Button 3",
    },
  ];

  return (
    <main className={styles.main}>
      <Banner imageUrl="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg">
        <BannerHeader>Welcome to G Automotive</BannerHeader>
        <BannerBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BannerBody>
        <BannerButton label="Contact Us" onClick={handleContactUsClick} />
      </Banner>
      <CardContainer>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            bordered={index === selectedCardIndex}
          >
            <CardImage
              src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg"
              alt="Brisbane"
            />
            <CardHeader>{card.header}</CardHeader>
            <CardBody>{card.body}</CardBody>
            <CardButton
              label={card.buttonLabel}
              onClick={() => handleCardClick(index)}
            />
          </Card>
        ))}
      </CardContainer>
    </main>
  );
}

