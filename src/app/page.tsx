import Image from "next/image";
import styles from "./page.module.scss";
import ImageContainer from "./components/ImageContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageContainer imageUrl="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg"/>
    </main>
  );
}
