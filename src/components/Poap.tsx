import Image from "next/image";
import styles from "@/styles/Poap.module.css";

type Props = {
  name: string;
  image_url: string;
  id_token: string;
  id: number;
};

function Poap({ name, image_url, id_token, id }: Props) {
  return (
    <a
      className={styles.container}
      href={`https://poap.gallery/r/event/${id}`}
      target="_blank"
    >
      <span className={styles.imageContainer}>
        <Image fill src={image_url} alt={name} sizes={"4rem 4rem"} />
      </span>
      <p className={styles.text}>{name}</p>
      <p className={styles.id}>N° {id_token}</p>
    </a>
  );
}

export default Poap;
