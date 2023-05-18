import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import { Wrapper, Rocket } from "../index";
import Perfil from "../../public/perfil.webp";
import Focus from "../../public/focus.svg";
import Target from "../../public/target.svg";

export const Hero = () => {
  return (
    <main className={style.hero} aria-label="Hero RamonB44">
      <Wrapper>
        <div className={style.content}>
          <div className={style.wrapperPhoto}>
            <div className={style.focus}>
              <Image src={Focus} alt="Focus decorate" title="Focus decorate" />
            </div>

            <div className={style.target}>
              <Image
                src={Target}
                alt="Target decorate"
                title="Target decorate"
              />
            </div>

            <Image
              src={Perfil}
              alt="RamonB44"
              title="RamonB44"
            />
          </div>

          <div className={style.information}>
            <Rocket />
            <p className={style.name}>Ramon Aguado</p>
            <h1 className={style.title}>
              <strong className={style.highlightBlue}>Back End</strong>{" "}
              Engineer
            </h1>
            <p className={style.description}>
              Siempre me he identificado por trabajar en equipo, brindando mi apoyo e ideas.
              Ademas mis habilidades y mi diligencia son la mejor combinacion en tu equipo.
              Estare muy contento de escuchar tu propuesta.
            </p>
            <a className={style.button} href="#contact">
              Contactate conmigo
            </a>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
