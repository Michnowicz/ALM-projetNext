
import "./home.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import PopularAlbum from "./_components/PopularAlbum/PopularAlbum";
import Carousel from "./_components/Carousel/Carousel";


export default function Home() {
  return (
    <section className="Home mainContainer">
      <Carousel/>
      <PopularAlbum/>
    </section>
  );
}
