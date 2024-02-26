"use client";
import styles from "./page.module.scss";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardHeader from "./components/Card/CardHeader";
import CardBody from "./components/Card/CardBody";
import Button from "./components/Button/Button";
import BannerHeader from "./components/Banner/BannerHeader";
import BannerBody from "./components/Banner/BannerBody";

export default function Home() {
  const handleClick = () => {
    alert("You clicked the button");
  };
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
        <Button label="Contact Us" onClick={handleClick} />
      </Banner>
      <Card>
        <CardImage
          src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg"
          alt="Image"
        />
        <CardHeader>Card Heading</CardHeader>
        <CardBody>
          This is the body of the card. You can put any content here.
        </CardBody>
        <Button label="Click me" onClick={handleClick} />
      </Card>
    </main>
  );
}
