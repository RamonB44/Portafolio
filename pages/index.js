import useSWR from 'swr';
import Head from "next/head";
import { Header, Hero, About, Projects, Contact, Footer } from "../components";

export default function Home({ projects }) {

  return (
    <>
      <Head>
        <title>Ramon B. Aguado Apaza</title>
        <meta
          name="description"
          content="Portafolio y web personal de RamonB44"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* open graph */}
        <meta
          property="og:title"
          content="Portafolio y Web Personal de RamonB44"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portafolio.ramonb44.dev/"
        />
        {/* <meta
          property="og:image"
          content="https://raw.githubusercontent.com/DavidMarioLC/Portafolio/main/opengraph.webp"
        /> */}
        <meta
          property="og:description"
          content="Back End Developer, Autodidacta y Amante de la tecnologia."
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: [
        {
          id: "1",
          name: "Destajo",
          thumbnail: "/projects/destajo-main.webp",
          linkRepo: "https://github.com/RamonB44",
          linkDemo: "https://destajo-app.ramonb44.dev",
          description:
            "Destajo es una aplicación que esta destinada a la contabilizacion de cajas mediante scaneo de codigos QR.",
          technologies: ["PHP", "Mysql", "Docker", "Laravel"],
        },
        {
          id: "2",
          name: "Asistencia",
          thumbnail: "/projects/asistencia-main.webp",
          linkRepo:
            "https://github.com/RamonB44",
          linkDemo: "https://asistencia-app.ramonb44.dev",
          description: "Asistencia es una aplicación que esta destinada recolectar el horario de ingreso y salida del personal. Ademas, generar reportes e informes gerenciales.",
          technologies: ["PHP", "Mysql", "Docker", "Laravel"],
        },
        {
          id: "3",
          name: "Sensores con Arduino",
          thumbnail: "/projects/arduino.webp",
          linkRepo: "https://github.com/RamonB44/sensors-ph-preasure-flow-tds",
          // linkDemo: "#",
          description:
            "Obten informacion de tus sensores con Arduino.",
          technologies: ["Arduino"],
        },
        {
          id: "4",
          name: "Yolov5 + Fast Camera",
          thumbnail: "/projects/yolov5mvsdk.webp",
          linkRepo: "https://github.com/RamonB44/yolov5-realsense/tree/mvsdk-fastcamera",
          // linkDemo: "#",
          description:
            "Conectate a un camara de alta velocidad y con ayuda de la IA captura objetos para su analisis.",
          technologies: ["Python"],
        },
        // {
        //   id: "6",
        //   name: "Block Master",
        //   thumbnail: "/projects/blockmaster.webp",
        //   linkRepo:
        //     "https://github.com/DavidMarioLC/WebApplication-BlockMaster",
        //   linkDemo: "https://web-application-block-master.vercel.app/",
        //   description:
        //     "Plataforma de peliculas que nos permite buscar peliculas y filtrarlas segun sus valoraciones.",
        //   technologies: ["React", "Redux"],
        // },
        // {
        //   id: "5",
        //   name: "Landing Page Calel",
        //   thumbnail: "/projects/calel.webp",
        //   linkRepo: "https://github.com/DavidMarioLC/LandingPage-Calel",
        //   linkDemo: "https://davidmariolc.github.io/LandingPage-Calel/",
        //   description:
        //     "Landing page sobre una aplicación que nos permite  programar reuniones efectivas.",
        //   technologies: ["React", "Sass"],
        // },
        // {
        //   id: "4",
        //   name: "Instagram Clone",
        //   thumbnail: "/projects/instagram.webp",
        //   linkRepo:
        //     "https://github.com/DavidMarioLC/WebApplication-Instantanea",
        //   linkDemo:
        //     "https://davidmariolc.github.io/WebApplication-Instantanea/",
        //   description: "Maquetación de la aplicación web de instagram.",
        //   technologies: ["HTML", "CSS", "JavaScript"],
        // },
        // {
        //   id: "3",
        //   name: "Formulario de Pago",
        //   thumbnail: "/projects/pago.webp",
        //   linkRepo: "https://github.com/DavidMarioLC/Component-pago",
        //   linkDemo: "https://davidmariolc.github.io/Component-pago/",
        //   description:
        //     "Componente que simula una compra usando una tarjeta de credito.",
        //   technologies: ["React", "TypeScript", "Jest", "Testing"],
        // },
        // {
        //   id: "2",
        //   name: "Landing Page Edwyn",
        //   thumbnail: "/projects/landingpageEdwyn.webp",
        //   linkRepo: "https://github.com/DavidMarioLC/LandingPage-Edwyn",
        //   linkDemo: "https://davidmariolc.github.io/LandingPage-Edwyn/",
        //   description: "Portofolio creada para un desarrollador Front End.",
        //   technologies: ["HTML", "CSS", "JavaScript"],
        // },
        // {
        //   id: "1",
        //   name: "Pomodoro Tracker",
        //   thumbnail: "/projects/pomodoro.webp",
        //   linkRepo: "https://github.com/DavidMarioLC/WebApplication-Pomodoro",
        //   linkDemo: "https://davidmariolc.github.io/WebApplication-Pomodoro/",
        //   description:
        //     "Aplicación web que nos permite administrar mejor nuestro tiempo.",
        //   technologies: ["React", "Sass"],
        // },
      ],
    },
  };
}
