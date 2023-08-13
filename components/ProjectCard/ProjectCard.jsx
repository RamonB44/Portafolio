import Image from "next/image";
import style from "./ProjectCard.module.css";
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
import logoArduino from "../../public/stack/arduino.svg";
import logoLaravel from "../../public/stack/laravel.svg";
// Tecnologias que use en cada proyecto
const getIcon = (value) => {
  const tech = {
    HTML: logoHTML,
    JavaScript: logoJS,
    TypeScript: logoTS,
    Docker: logoDocker,
    Python: logoPython,
    Django: logoDJango,
    Angular: logoAngular,
    Postgres: logoPostgres,
    PHP: logoPHP,
    Nginx: logoNgnix,
    Sequelize: logoSequelize,
    NodeJs: logoNodejs,
    Mysql: logoMysql,
    Linux: logoLinux,
    Arduino: logoArduino,
    Laravel: logoLaravel,
  }
  return tech[value];
};

const TagStack = ({ name }) => {
  return (
    <li className={style.tagStack}>
      <div className={style.tagStackImageWrapper}>
        <Image src={getIcon(name)} alt={name} title={name} />
      </div>
      <p className={style.tagStackName}>{name}</p>
    </li>
  );
};

export const ProjectCard = ({ project }) => {
  const { name, thumbnail, linkRepo, linkDemo, description, technologies } =
    project;
  return (
    <div className={style.projectCard} tabIndex={0}>
      <div className={style.thumbnailWrapper}>
        <Image
          className={style.thumbnail}
          src={thumbnail}
          alt={name}
          title={name}
          width="800"
          height="600"
        />
        <div className={style.actionLinks}>
          <a
            className={style.link}
            href={linkDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            className={style.link}
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <h3 className={style.name}>{name}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.stack}>
        {technologies.map((tech, idx) => (
          <TagStack key={idx} name={tech} />
        ))}
      </ul>
    </div>
  );
};
