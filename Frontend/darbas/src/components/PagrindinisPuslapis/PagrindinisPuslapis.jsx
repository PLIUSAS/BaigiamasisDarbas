import React from "react";
import style from "./PagrindinisPuslapis.module.css";
import Logo from "../Images/Logo.png";

export default function PagrindinisPuslapis() {
  return (
    <main>
      <div className={style.about}>
        <h1>Apie Mus</h1>

        <p>
          Grožio salonas – vieta, glaudžiai siejama su estetikos pojūčiu. Čia
          apsilankęs klientas, prieš įvertindamas specialisto darbą, dažniausiai
          atkreipia dėmesį į aplinką – sienų spalvas, baldų išdėstymą bei kitas
          interjero detales. Norėdami, kad klientas salone jaustųsi jaukiai, jų
          savininkai skiria vis daugiau dėmesio vidaus apdailai ir renkasi
          unikalius dekoro elementus.
        </p>
      </div>
      <div className={style.image}></div>
      <div className={style.galery}>
        <h1>Galerija</h1>
        <img
          src="https://classiclinedecor.com/wp-content/uploads/2021/11/Balmain-plauku-grozio-salonas-Paryziuje4-e1624259524912.jpeg"
          alt=""
        />
        <img
          src="https://classiclinedecor.com/wp-content/uploads/2021/11/Biologic-Research-salonas-Paryziuje.jpeg"
          alt=""
        />
        <img
          src="https://classiclinedecor.com/wp-content/uploads/2021/11/Balmain-plauku-grozio-salonas-Paryziuje2.jpeg"
          alt=""
        />
        <img
          src="https://classiclinedecor.com/wp-content/uploads/2021/11/Balmain-plauku-grozio-salonas-Paryziuje3-e1624259448672.jpeg"
          alt=""
        />
      </div>
    </main>
  );
}
