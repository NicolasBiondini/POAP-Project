import type { AppProps } from "next/app";
import { Archivo } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={archivo.className}>
      <ToastContainer />
      <Component {...pageProps} />
    </main>
  );
}
