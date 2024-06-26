import { React, useEffect } from "react";

import { Bubble } from "../../components/Bubble";
import { Label } from "../../components/Label";

import kuflowe from "../../static/images/kuflowe-mocne-puszka.png";
import warka from "../../static/images/warka-piwo-puszka.png";
import zubr from "../../static/images/zubr.png";
import zywiec from "../../static/images/zywiec.png";
import zatecky from "../../static/images/zatecky.png";

import lomzaPhoto from "../../static/images/lomza.webp";

const amountOfBubbles = 2;
const bubbles = [];

export const Home = () => {
  useEffect(() => {
    for (var i = 0; i < amountOfBubbles; i++) {
      bubbles.push(i);
      console.log(bubbles);
    }
  }, []);

  return (
    <div>
      <div id="title-wrapper" className="content-grid">
        <div className="title">
          <img src={kuflowe} className="beer" alt="" />
          <img src={zatecky} className="beer" alt="" />
          <img src={warka} className="beer" alt="" />
          <img src={zywiec} className="beer" alt="" />
          <img src={zubr} className="beer" alt="" />
        </div>
      </div>

      <div id="main-content-grid" className="content-grid">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />

        <div>
          <h1>piwko</h1>
        </div>

        <Label
          nazwa="Łomża jasna pełna 400 bączek"
          zdjecie={lomzaPhoto}
          zrodlo="Butelka"
          procenty="6.0"
          cena="3,69"
          pojemnosc="330"
          kolor={{
            ocena1: "9",
            ocena2: "8",
          }}
          butelka={{ ocena1: "6", ocena2: "7" }}
          smak={{ ocena1: "10", ocena2: "5" }}
        >
          Bardzo dobre polecam serdecznie
        </Label>
      </div>
    </div>
  );
};
