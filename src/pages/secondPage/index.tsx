import Head from "next/head";
import {
  Inter,
  Poppins,
  Playfair_Display,
  Playfair_Display_SC,
} from "next/font/google";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/HeroSection/Hero";

import Footer from "@/Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display_SC({
  variable: "--font-playfair-display-sc",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
      <Head>
        <title>CoffeeRoaster inner page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.variable} ${playfairDisplay.variable}`}>
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
