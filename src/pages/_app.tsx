import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { ToastContainer } from "react-toastify";

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
