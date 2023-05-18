import React from "react";
import style from "./About.module.css";
import { Wrapper, Technologies, Title, DownArrow } from "../index";

export const About = () => {
  return (
    <section className={style.about} aria-label="About Me" id="about">
      <Wrapper>
        <div className={style.content}>
          <div className={style.resume}>
            <DownArrow />
            <Title text="Sobre" highlight="Mí" />
            <p className={style.text}>
              Mi nombre es Ramon B. Aguado Apaza, soy un apasionado por el Back End y mi inspiracion es el Front End.
              <br />
              <br />
              Me encanta el mundo del desarrollo de aplicaciones y por sobretodo resolver problemas.
              Encuentro muy satisfactorio el proceso logico que desarrollo para encontrar la solucion y su resultado. 
              Ademas soy impulsador de la presentacion de varias ideas antes de plantear soluciones y casi siempre busco la opinion
              de terceros ya que nadie es dueño de la verdad.
            </p>
          </div>
          <div className={style.stack}>
            <Title text="Mi" highlight="stack" />
            <Technologies />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
