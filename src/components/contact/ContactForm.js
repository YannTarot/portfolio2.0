import React from "react";
import { useState } from "react";
import Signature from "../Signature";
import Social from "../Social";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_hgidlr8";

      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("service_ygs837m", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Je vous recontacterai dès que possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  // const handleScroll = () => {

  //   const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
  //   const socialContact = document.getElementsByClassName('contact-social')
  //   if (bottom) {
  //     console.log('canard')
  //   }
  // };
  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, {
  //     passive: true
  //   });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <form className="contact-form">
      <div className="form-wrapper">
        <div className="contact-message">
          <h6 className="contact-title">Contact</h6>
          <h2 className="contact-call">Ne partez pas tout de suite ! <br /> Laissez moi un message !</h2>
          <h6 className="contact-adress">Addresse</h6>
          <p className="adresse-yann">Yann Tarot <br />Nantes 44000 <br />France, EU</p>
          <div className="contact-social">
            <Social/>
          </div>
        </div>
        <div className="form-content">
          <h2>Contactez-moi ! Je suis disponible immédiatement ! </h2>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom ? "
            value={name}
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Votre société ? (facultatif)"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Votre téléphone ? (facultatif)"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email ? "
              value={email}
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message "
            value={message}
            required
          />
          <input
            className="button hover"
            type="submit"
            value="  &#9993; envoyer"
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div className="form-message"></div>
      <Signature/>
    </form>
  );
};

export default ContactForm;
