import React, { useState, useRef } from "react";
import style from "./Contact.module.css";
import { Wrapper, Title, Zizack, Arrow, PatternDots } from "../index";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import toast, { Toaster } from "react-hot-toast";

emailjs.init("HiQsQ0ubXOym0G22M");

export const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  
  const sendMessage = (event) => {
    event.preventDefault();
    setLoading(true);
    
    emailjs
      .sendForm(
        "service_gsxx22n",
        "template_jemsdvh",
        event.currentTarget,
      )
      .then(
        (result) => {
          formRef.current.reset();
          setLoading(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
          toast.success("Mensaje enviado!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={style.contact} aria-label="Contact Me" id="contact">
      <Toaster position="top-center" reverseOrder={false} />
      <Wrapper>
        <div className={style.content}>
          <div className={style.information}>
            <Arrow />
            <Zizack />
            <Title text="Contactaté" highlight="Conmigo" />
            <p className={style.description}>
              Gracias por llegar hasta aquí, si crees que puedo aportar valor a
              tu equipo, no dudes en escribirme.
            </p>
          </div>
          <div className={style.formWrapper}>
            <PatternDots />
            <form className={style.form} ref={formRef} onSubmit={sendMessage}>
              <div className={style.field}>
                <input
                  className={style.input}
                  id="mail"
                  type="text"
                  placeholder="Correo electrónico"
                  name="email"
                  pattern="\S+.*"
                  required
                />
                <label className={style.label} htmlFor="mail">
                  Correo electrónico
                </label>
              </div>
              <div className={style.field}>
                <input
                  className={style.input}
                  id="subject"
                  type="text"
                  placeholder="Asunto"
                  pattern="\S+.*"
                  name="subject"
                  required
                />
                <label className={style.label} htmlFor="subject">
                  Asunto
                </label>
              </div>
              <div className={style.field}>
                <textarea
                  className={style.input}
                  pattern="\S+.*"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  required
                ></textarea>
                <label className={style.label} htmlFor="message">
                  Mensaje
                </label>
              </div>
              {loading ? (
                <button className={style.buttonLoading} disabled>
                  Enviando...
                </button>
              ) : (
                <button className={style.button}>Enviar mensajito</button>
              )}
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
