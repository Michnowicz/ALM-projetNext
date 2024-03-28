import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar.js";
import { Providers } from "./GlobalRedux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          <main className="bgGrey">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
