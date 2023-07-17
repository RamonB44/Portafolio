import React from "react";
import Image from "next/image";
import style from "./Technologies.module.css";
import logoHTML from "../../public/stack/html.svg";
import logoJS from "../../public/stack/javascript.svg";
import logoTS from "../../public/stack/typescript.svg";
import logoDocker from "../../public/stack/docker.svg";
import logoPython from "../../public/stack/python.svg";
import logoDJango from "../../public/stack/django.svg";
import logoAngular from "../../public/stack/angular.svg";
import logoPostgres from "../../public/stack/postgresql.svg";
import logoPHP from "../../public/stack/php.svg";
import logoNgnix from "../../public/stack/nginx.svg";
import logoSequelize from "../../public/stack/sequelize.svg";
import logoNodejs from "../../public/stack/node-js.svg";
import logoMysql from "../../public/stack/mysql.svg";
import logoLinux from "../../public/stack/linux.svg";

export const Technologies = () => {
  const technologies = [
    { id: "1", name: "HTML", image: logoHTML },
    { id: "2", name: "JavaScript", image: logoJS },
    { id: "3", name: "Docker", image: logoDocker },
    { id: "4", name: "TypeScript", image: logoTS },
    { id: "5", name: "Python", image: logoPython },
    { id: "6", name: "Django", image: logoDJango },
    { id: "7", name: "Angular", image: logoAngular },
    { id: "8", name: "Postgresql", image: logoPostgres },
    { id: "9", name: "PHP", image: logoPHP },
    { id: "10", name: "Nginx", image: logoNgnix },
    { id: "11", name: "Sequalize", image: logoSequelize },
    { id: "12", name: "NodeJs", image: logoNodejs },
    { id: "13", name: "MySQL", image: logoMysql },
    { id: "14", name: "Linux", image: logoLinux },
  ];

  const hiddenTech = (name) => {
    // return false;
    return ["Python", "Django", "Angular"].includes(name);
  };

  return (
    <div className={style.technologies}>
      {technologies.map((technology) => (
        <figure
          key={technology.id}
          className={`${style.logo} ${
            hiddenTech(technology.name) ? ` ${style.opacity}` : ""
          }`}
        >
          <Image
            src={technology.image}
            alt={technology.name}
            title={technology.name}
          />
          <figcaption className={style.logoName}>{technology.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};
