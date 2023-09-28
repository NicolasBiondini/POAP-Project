import Image from "next/image";
import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <Image
        src={
          "https://app.poap.xyz/static/media/POAP.435d79bb81473ff8f5eccb4bbe2f43bc.svg"
        }
        width={100}
        height={125}
        alt="poap-logo"
      />
      <a
        href={`https://twitter.com/BiondiniNicolas`}
        target="_blank"
        className={styles.link}
      >
        nbiondini.eth
      </a>
    </div>
  );
}

export default Footer;
