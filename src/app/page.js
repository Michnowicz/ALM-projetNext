"use client"
import "./home.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import PopularAlbum from "./_components/PopularAlbum/PopularAlbum";
import Carousel from "./_components/Carousel/Carousel";
import { useSelector } from "react-redux";

export default function Home() {
  const darkMode = useSelector((state) => state.login.darkMode)

  return (
    <section className={darkMode ? "Home bgDark" :"Home"}>
      <Carousel/>
      <PopularAlbum/>
    </section>
  ); 
}
