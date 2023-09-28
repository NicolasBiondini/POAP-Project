import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getPoaps } from "@/lib/getPoaps";
import { useState } from "react";
import Searcher from "@/components/Searcher/Searcher";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [poaps, setPoaps] = useState<poap[]>([]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <ToastContainer />
          <Searcher setPoaps={setPoaps} />
          {poaps.length > 0 && (
            <div>
              {poaps.map((poap) => {
                return <p key={poap.tokenId}>{poap.tokenId}</p>;
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
