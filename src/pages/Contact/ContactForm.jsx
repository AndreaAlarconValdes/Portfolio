import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <section className="contact-container">
      <div className="message-form">
        <h3>Send a message</h3>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input required type="text" name="from_name" />
          <label>Email</label>
          <input required type="email" name="from_email" />
          <label>Message</label>
          <textarea
            required
            name="message"
            placeholder="Hi Andrea, we would like to get in touch with you..."
          />
          <button type="submit">Send Email</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Contacts</h3>
        <span>Email</span>
        <p>andreaalarconvaldes@gmail.com</p>
        <span>Phone number</span>
        <p>+34 644 403 445</p>
      </div>
    </section>
  );
}
