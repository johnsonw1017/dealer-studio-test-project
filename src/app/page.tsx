'use client';
import styles from "./page.module.scss";
import ImageContainer from "./components/ImageContainer";
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import Button from "./components/Button";

export default function Home() {
  const handleClick = () => {
    alert('You clicked the button');
  };
  return (
    <main className={styles.main}>
      <ImageContainer imageUrl="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg" />
      <Card>
        <CardImage src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg" alt="Image" />
        <CardHeader>Card Heading</CardHeader>
        <CardBody>
          This is the body of the card. You can put any content here.
        </CardBody>
        <Button label="Click me" onClick={handleClick}/>
      </Card>
    </main>
  );
}
