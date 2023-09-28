import { useState } from "react";
import Head from "next/head";
import Searcher from "@/components/Searcher";
import Poap from "@/components/Poap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [poaps, setPoaps] = useState<poap[]>([]);

  return (
    <>
      <Head>
        <title>POAP - Scan</title>
        <meta name="description" content="POAP project to scan your POAPs! " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.conatiner}>
          <Searcher setPoaps={setPoaps} amount={poaps.length} />
          {poaps.length > 0 && (
            <section className={styles.poapsContainer}>
              {poaps.map((poap) => {
                return (
                  <Poap
                    key={poap.tokenId}
                    name={poap.event.name}
                    image_url={poap.event.image_url + "?size=small"}
                    id_token={poap.tokenId}
                    id={poap.event.id}
                  />
                );
              })}
            </section>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
