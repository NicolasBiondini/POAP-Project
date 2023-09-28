import Image from "next/image";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="https://app.poap.xyz/static/media/POAP.435d79bb81473ff8f5eccb4bbe2f43bc.svg"
        width={103}
        height={128}
        alt="poap-logo"
      />
      <p className={styles.text}>Scan</p>
    </div>
  );
}

export default Header;
