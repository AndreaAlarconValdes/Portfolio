import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmphasisIcon } from "../../components/icons";
import { Modal } from "../../components/modal/modal";

const SERVICE_ID = "service_yl1j0mk";
const TEMPLATE_ID = "template_hf4xdy6";
const PUBLIC_KEY = "nRMi57H_MZMVKKJ40";

export function ContactForm() {
  const form = useRef();
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const openSuccessModal = () => {
    setSuccessModal(true);
  };

  const openErrorModal = () => {
    setErrorModal(true);
  };
  const closeModal = () => {
    setSuccessModal(false);
    setErrorModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          return openSuccessModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
          return openErrorModal();
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
        <div className="row">
          <div className="column">
            <label>Name</label>
            <input required type="text" name="from_name" />
          </div>
          <div className="column">
            <label>E-mail</label>
            <input required type="email" name="from_email" />
          </div>
        </div>
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
      <Modal isOpen={successModal} onClose={closeModal}>
        <h2>
          Message sent{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 60%, #9dff58 40%)",
            }}
          >
            successfully
          </span>
        </h2>
        <p style={{ textAlign: "justify" }}>
          Your message has been successfully sent. Thank you for contacting me,
          I will check your mail as soon as possible.
        </p>
      </Modal>
      <Modal isOpen={errorModal} onClose={closeModal}>
        <h2>
          <span
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 60%, #ff7f7f 40%)",
            }}
          >
            Error
          </span>{" "}
          sending message
        </h2>
        <p style={{ textAlign: "justify" }}>
          Sorry, there was a problem sending your message. Please try again
          later or contact me through another channel.
        </p>
      </Modal>
    </section>
  );
}
