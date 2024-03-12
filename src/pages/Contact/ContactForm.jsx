import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { EmphasisIcon } from "../../components/Figures";
const SERVICE_ID = "service_yl1j0mk";
const TEMPLATE_ID = "template_hf4xdy6";
const PUBLIC_KEY = "nRMi57H_MZMVKKJ40";

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <h1>
        Fill the form
        <br />
        to <span>get in touch</span>
      </h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input required type="text" name="from_name" />
        <label>E-mail</label>
        <input required type="email" name="from_email" />
        <label>Message</label>
        <textarea
          required
          name="message"
          placeholder="Hi Andrea, we would like to get in touch with you..."
        />
        <div>
          <button type="submit">Send message</button>
          <EmphasisIcon />
        </div>
      </form>
    </section>
  );
}
