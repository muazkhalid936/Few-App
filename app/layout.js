import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Created By Majo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pngegg.ico" />
      </head>
      <body className={inter.className}>
        <Navbar  />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
